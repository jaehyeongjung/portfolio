"use client";
import React, { useRef, useEffect } from "react";
import Particles from "@tsparticles/react";
import Typed from "typed.js";
import styles from "./Terminal.module.scss";

export default function Terminal() {
    const promptRef = useRef<HTMLSpanElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const typedInstanceRef = useRef<Typed | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // 기존 Typed.js 제거
                        if (typedInstanceRef.current) {
                            // typedInstance → typedInstanceRef.current
                            typedInstanceRef.current.destroy();
                        }

                        // 새로운 Typed.js 실행
                        if (promptRef.current) {
                            typedInstanceRef.current = new Typed(
                                promptRef.current,
                                {
                                    // typedInstance → typedInstanceRef.current
                                    strings: [
                                        "$ TypeScript를 기반으로, 컴포넌트 단위로 구성합니다.<br/>",
                                        "$ TypeScript를 기반으로, 컴포넌트 단위로 구성합니다.<br/>$ 서버 컴포넌트와 클라이언트 컴포넌트를 구분하여 구성합니다.<br/>",
                                        "$ TypeScript를 기반으로, 컴포넌트 단위로 구성합니다.<br/>$ 서버 컴포넌트와 클라이언트 컴포넌트를 구분하여 구성합니다.<br/>$ CSS는 Tailwind CSS를 선호하며, 다양한 CSS 레퍼런스를 활용합니다.",
                                        "$ TypeScript를 기반으로, 컴포넌트 단위로 구성합니다.<br/>$ 서버 컴포넌트와 클라이언트 컴포넌트를 구분하여 구성합니다.<br/>$ CSS는 Tailwind CSS를 선호하며, 다양한 CSS 레퍼런스를 활용합니다.<br/>$ Server Action과  Router Handler의 차이를 인지하고 사용합니다.",
                                        "$ TypeScript를 기반으로, 컴포넌트 단위로 구성합니다.<br/>$ 서버 컴포넌트와 클라이언트 컴포넌트를 구분하여 구성합니다.<br/>$ CSS는 Tailwind CSS를 선호하며, 다양한 CSS 레퍼런스를 활용합니다.<br/>$ Server Action과  Router Handler의 차이를 인지하고 사용합니다.<br/>$ Tanstack Query의 StaleTime과 Cashtime을 활용하여 최적화를 시도합니다.",
                                        "$ TypeScript를 기반으로, 컴포넌트 단위로 구성합니다.<br/>$ 서버 컴포넌트와 클라이언트 컴포넌트를 구분하여 구성합니다.<br/>$ CSS는 Tailwind CSS를 선호하며, 다양한 CSS 레퍼런스를 활용합니다.<br/>$ Server Action과  Router Handler의 차이를 인지하고 사용합니다.<br/>$ Tanstack Query의 StaleTime과 Cashtime을 활용하여 최적화를 시도합니다. <br/>$ Middleware를 활용하여 서버 리소스를 아끼고, 보안을 강화합니다.",
                                        "$ TypeScript를 기반으로, 컴포넌트 단위로 구성합니다.<br/>$ 서버 컴포넌트와 클라이언트 컴포넌트를 구분하여 구성합니다.<br/>$ CSS는 Tailwind CSS를 선호하며, 다양한 CSS 레퍼런스를 활용합니다.<br/>$ Server Action과  Router Handler의 차이를 인지하고 사용합니다.<br/>$ Tanstack Query의 StaleTime과 Cashtime을 활용하여 최적화를 시도합니다. <br/>$ Middleware를 활용하여 서버 리소스를 아끼고, 보안을 강화합니다. <br/>$ useMemo같은 캐싱전략, React Hook을 이해하고 적절하게 사용합니다",
                                        "$ TypeScript를 기반으로, 컴포넌트 단위로 구성합니다.<br/>$ 서버 컴포넌트와 클라이언트 컴포넌트를 구분하여 구성합니다.<br/>$ CSS는 Tailwind CSS를 선호하며, 다양한 CSS 레퍼런스를 활용합니다.<br/>$ Server Action과  Router Handler의 차이를 인지하고 사용합니다.<br/>$ Tanstack Query의 StaleTime과 Cashtime을 활용하여 최적화를 시도합니다. <br/>$ Middleware를 활용하여 서버 리소스를 아끼고, 보안을 강화합니다. <br/>$ useMemo같은 캐싱전략, React Hook을 이해하고 적절하게 사용합니다 <br/>$ 초기 msw 구축을 하여 개발 병렬화 및 협업 효율을 높입니다.",
                                        "$ TypeScript를 기반으로, 컴포넌트 단위로 구성합니다.<br/>$ 서버 컴포넌트와 클라이언트 컴포넌트를 구분하여 구성합니다.<br/>$ CSS는 Tailwind CSS를 선호하며, 다양한 CSS 레퍼런스를 활용합니다.<br/>$ Server Action과  Router Handler의 차이를 인지하고 사용합니다.<br/>$ Tanstack Query의 StaleTime과 Cashtime을 활용하여 최적화를 시도합니다. <br/>$ Middleware를 활용하여 서버 리소스를 아끼고, 보안을 강화합니다. <br/>$ useMemo같은 캐싱전략, React Hook을 이해하고 적절하게 사용합니다 <br/>$ 초기 msw 구축을 하여 개발 병렬화 및 협업 효율을 높입니다. <br/>$ 디자이너와의 협업시 Storybook이나 figma를 통한 적극 소통을합니다.",
                                        "$ TypeScript를 기반으로, 컴포넌트 단위로 구성합니다.<br/>$ 서버 컴포넌트와 클라이언트 컴포넌트를 구분하여 구성합니다.<br/>$ CSS는 Tailwind CSS를 선호하며, 다양한 CSS 레퍼런스를 활용합니다.<br/>$ Server Action과  Router Handler의 차이를 인지하고 사용합니다.<br/>$ Tanstack Query의 StaleTime과 Cashtime을 활용하여 최적화를 시도합니다. <br/>$ Middleware를 활용하여 서버 리소스를 아끼고, 보안을 강화합니다. <br/>$ useMemo같은 캐싱전략, React Hook을 이해하고 적절하게 사용합니다 <br/>$ 초기 msw 구축을 하여 개발 병렬화 및 협업 효율을 높입니다. <br/>$ 디자이너와의 협업시 Storybook이나 figma를 통한 적극 소통을합니다. <br/>$ playwright를 활용한 크로스 브라우저 테스팅을 시도합니다",
                                    ],
                                    typeSpeed: 0,
                                    backSpeed: 0,
                                    backDelay: 100,
                                    startDelay: 300,
                                    loop: false,
                                    showCursor: false,
                                }
                            );
                        }
                    } else {
                        // 섹션이 화면에서 나가면 Typed.js 제거
                        if (typedInstanceRef.current) {
                            // typedInstance → typedInstanceRef.current
                            typedInstanceRef.current.destroy();
                            typedInstanceRef.current = null; // typedInstance → typedInstanceRef.current
                            if (promptRef.current)
                                promptRef.current.innerHTML = "";
                        }
                    }
                });
            },
            { threshold: 0.5 } // 화면에 50% 이상 들어올 때
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current);
            if (typedInstanceRef.current) {
                // typedInstance → typedInstanceRef.current
                typedInstanceRef.current.destroy();
                typedInstanceRef.current = null; // 추가
            }
        };
    }, []);

    const particlesOptions = {
        particles: {
            number: { value: 155, density: { enable: true, area: 789 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, animation: { enable: true, speed: 1 } },
            size: {
                value: 2,
                random: true,
                animation: { enable: true, speed: 2 },
            },
            links: { enable: true, distance: 150, color: "#fff", opacity: 0.4 },
            move: {
                enable: true,
                speed: 0.2,
                random: true,
                outModes: { default: "out" },
            },
        },
        interactivity: {
            events: {
                onHover: { enable: true, mode: "bubble" },
                onClick: { enable: true, mode: "push" },
            },
        },
        detectRetina: true,
    } as const;

    return (
        <div ref={containerRef}>
            <Particles id="tsparticles" options={particlesOptions} />
            <div className={styles.terminalWindow}>
                <header className={styles.header}>
                    <div className={`${styles.button} ${styles.green}`}></div>
                    <div className={`${styles.button} ${styles.yellow}`}></div>
                    <div className={`${styles.button} ${styles.red}`}></div>
                </header>
                <section className={styles.terminal}>
                    <span ref={promptRef}></span>
                    <span className={styles.typedCursor}>|</span>
                </section>
            </div>
        </div>
    );
}
