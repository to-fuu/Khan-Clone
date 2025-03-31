'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

export default function FaqSections({ sections }: { sections: { id: string, label: string }[] }) {
    const [activeSection, setActiveSection] = useState('general');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-20% 0px -80% 0px'
            }
        );

        // Observe all section elements
        document.querySelectorAll('.section-content').forEach((section) => {
            observer.observe(section);
        });

        // Cleanup
        return () => observer.disconnect();
    }, []);

    const handleSectionClick = (sectionId: string) => {
        setActiveSection(sectionId);
    };


    return <>
        {sections.map(({ id, label }) => (
            <Link
                key={id}
                href={`#${id}`}
                onClick={() => handleSectionClick(id)}
                className={`section-link block py-2 pl-3 transition-colors duration-200 rounded-xl ${activeSection === id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 border-transparent hover:bg-blue-50'
                    }`}
            >
                {label}
            </Link>
        ))}
    </>

}