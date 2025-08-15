"use client";

import Image from "next/image";

const logos = [
    { src: "/React.svg", alt: "React" },
    { src: "/TypeScript.svg", alt: "TypeScript" },
    { src: "/Tailwind CSS.svg", alt: "Tailwind" },
    { src: "/JavaScript.svg", alt: "JavaScript" },
    { src: "/Storybook.svg", alt: "Storybook" },
    { src: "/Playwrite.svg", alt: "Playwrite" },
    { src: "/CSS.svg", alt: "CSS" },
];

export default function Marquee() {
    return (
        <article className="wrapper top-[-120px]">
            <div className="marquee">
                <div className="marquee__group flex ">
                    {logos.map((logo, idx) => (
                        <Image
                            key={idx}
                            src={logo.src}
                            alt={logo.alt}
                            width={50}
                            height={50}
                        />
                    ))}
                </div>
                <div aria-hidden="true" className="marquee__group flex ">
                    {logos.map((logo, idx) => (
                        <Image
                            key={idx}
                            src={logo.src}
                            alt={logo.alt}
                            width={50}
                            height={50}
                        />
                    ))}
                </div>
            </div>

            <div className="marquee marquee--reverse">
                <div className="marquee__group flex ">
                    {[...logos].reverse().map((logo, idx) => (
                        <Image
                            key={idx}
                            src={logo.src}
                            alt={logo.alt}
                            width={50}
                            height={50}
                        />
                    ))}
                </div>
                <div aria-hidden="true" className="marquee__group flex ">
                    {[...logos].reverse().map((logo, idx) => (
                        <Image
                            key={idx}
                            src={logo.src}
                            alt={logo.alt}
                            width={50}
                            height={50}
                        />
                    ))}
                </div>
            </div>
        </article>
    );
}
