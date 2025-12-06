"use client"

export default function Loader() {
    return (
        <div id="loader" className="fixed inset-0 z-100 bg-navy flex flex-col items-center justify-center transition-transform duration-1000">
            <div className="flex items-center gap-4 animate-pulse">
                <div className="text-6xl text-gold font-serif font-bold">Z</div>
                <div className="text-white text-3xl font-serif tracking-widest">ZAHIDJEE</div>
            </div>
            <div className="mt-4 h-1 w-48 bg-gray-800 overflow-hidden rounded-full">
                <div className="h-full bg-gold w-0" id="progress-bar"></div>
            </div>
        </div>
    )
}

//  const bar = document.getElementById('progress-bar');
//         const loader = document.getElementById('loader');
        
//         let width = 0;
//         const interval = setInterval(() => {
//             width += 2;
//             bar.style.width = width + '%';
//             if(width >= 100) {
//                 clearInterval(interval);
//                 setTimeout(() => {
//                     loader.style.transform = 'translateY(-100%)';
//                     initAnimations();
//                 }, 500);
//             }
//         }, 20);

// function initAnimations() {
//             // Hero
//             gsap.to(".gsap-hero", {
//                 y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out"
//             });

//             // Reveal Text
//             gsap.from(".reveal-text", {
//                 scrollTrigger: { trigger: ".reveal-text", start: "top 80%" },
//                 y: 50, opacity: 0, duration: 1, ease: "power3.out"
//             });

//             // Reveal Image
//             gsap.from(".reveal-image", {
//                 scrollTrigger: { trigger: ".reveal-image", start: "top 80%" },
//                 x: 50, opacity: 0, duration: 1.2, ease: "power3.out"
//             });

//             // Counters
//             const counters = document.querySelectorAll('.counter');
//             counters.forEach(counter => {
//                 const target = +counter.getAttribute('data-target');
//                 gsap.to(counter, {
//                     innerText: target,
//                     duration: 2,
//                     snap: { innerText: 1 },
//                     scrollTrigger: { trigger: counter, start: "top 85%" }
//                 });
//             });
//         }