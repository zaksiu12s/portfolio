import { useEffect, useState } from "react";

export default function ProgressBar() {
    const [currentSection, setCurrentSection] = useState(1);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setCurrentSection(Number(entry.target.id[entry.target.id.length - 1]));
                }
            });
        }, { threshold: 0.5 });

        const sections = document.querySelectorAll('section');
        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);


    return <>
        <div className="fixed left-3 top-1/2 -translate-y-1/2">
            <div className={" my-2 h-2 rounded-full bg-gray-300 transition-all " + ((currentSection == 1) ? " bg-white w-6 " : " w-2 ")}></div>
            <div className={" my-2 h-2 rounded-full bg-gray-300 transition-all " + ((currentSection == 2) ? " bg-white w-6 " : " w-2 ")}></div>
            <div className={" my-2 h-2 rounded-full bg-gray-300 transition-all " + ((currentSection == 3) ? " bg-white w-6 " : " w-2 ")}></div>
            <div className={" my-2 h-2 rounded-full bg-gray-300 transition-all " + ((currentSection == 4) ? " bg-white w-6 " : " w-2 ")}></div>
            <div className={" my-2 h-2 rounded-full bg-gray-300 transition-all " + ((currentSection == 5) ? " bg-white w-6 " : " w-2 ")}></div>
        </div>
    </>
}