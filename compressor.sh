#!/bin/bash

# Function to compress JPG images
compress_jpg() {
    quality=80  # Adjust quality (1-100), lower means more compression
    for file in *.jpg *.JPG *.jpeg *.JPEG; do
        if [ -f "$file" ]; then
            output="compressed_${file%.*}.jpg"
            ffmpeg -i "$file" -q:v $quality "$output" -y
            echo "Compressed: $file -> $output"
        fi
    done
}

# Function to compress PNG images
compress_png() {
    for file in *.png *.PNG; do
        if [ -f "$file" ]; then
            output="compressed_${file%.*}.png"
            ffmpeg -i "$file" -compression_level 6 "$output" -y  # 6 is medium compression
            echo "Compressed: $file -> $output"
        fi
    done
}

# Function to compress AVIF images
compress_avif() {
    quality=50  # Adjust quality (0-100), lower means more compression
    for file in *.avif *.AVIF; do
        if [ -f "$file" ]; then
            output="compressed_${file%.*}.avif"
            ffmpeg -i "$file" -c:v libaom-av1 -crf $quality "$output" -y
            echo "Compressed: $file -> $output"
        fi
    done
}

# Main menu
echo "Select image format to compress:"
echo "1) JPG"
echo "2) PNG"
echo "3) AVIF"
echo "4) Exit"
read -p "Enter your choice (1-4): " choice

case $choice in
    1) compress_jpg ;;
    2) compress_png ;;
    3) compress_avif ;;
    4) echo "Exiting..."; exit 0 ;;
    *) echo "Invalid choice"; exit 1 ;;
esac

echo "Compression complete!"