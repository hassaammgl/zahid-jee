import React from "react";

interface SplitTextProps {
    text: string;
    className?: string;
    as?: React.ElementType;
    splitType?: "words" | "chars";
}

const SplitText: React.FC<SplitTextProps> = ({
    text,
    className = "",
    as: Component = "div",
    splitType = "words",
}) => {
    if (splitType === "words") {
        const words = text.split(" ");
        return (
            <Component className={className}>
                {words.map((word, index) => (
                    <span
                        key={index}
                        style={{ display: "inline-block", overflow: "hidden" }}
                    >
                        <span
                            style={{ display: "inline-block" }}
                            className="split-word" // Class for GSAP targeting
                        >
                            {word}
                        </span>
                        {index < words.length - 1 && <span>&nbsp;</span>}
                    </span>
                ))}
            </Component>
        );
    }

    if (splitType === "chars") {
        const chars = text.split("");
        return (
            <Component className={className}>
                {chars.map((char, index) => (
                    <span
                        key={index}
                        style={{ display: "inline-block", overflow: "hidden" }}
                    >
                        <span
                            style={{ display: "inline-block" }}
                            className="split-char" // Class for GSAP targeting
                        >
                            {char === " " ? "\u00A0" : char}
                        </span>
                    </span>
                ))}
            </Component>
        );
    }

    return <Component className={className}>{text}</Component>;
};

export default SplitText;
