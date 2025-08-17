"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./TabComponent.module.scss";

interface TabItem {
    label: string;
    content: React.ReactNode;
}

interface TabComponentProps {
    items: TabItem[];
    className?: string;
    containerClassName?: string;
    menuClassName?: string;
    contentClassName?: string;
    menuItemClassName?: string;
    activeMenuItemClassName?: string;
}

export default function TabComponent({
    items,
    className = "",
    containerClassName = "",
    menuClassName = "",
    contentClassName = "",
    menuItemClassName = "",
    activeMenuItemClassName = "",
}: TabComponentProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const ulRef = useRef<HTMLUListElement>(null);
    const liRefs = useRef<(HTMLLIElement | null)[]>([]);

    // 배열 크기를 items에 맞게 초기화
    useEffect(() => {
        liRefs.current = liRefs.current.slice(0, items.length);
    }, [items.length]);

    useEffect(() => {
        if (ulRef.current && liRefs.current[activeIndex]) {
            const activeItem = liRefs.current[activeIndex];
            if (activeItem) {
                const height = activeItem.scrollHeight;
                ulRef.current.style.height = `${height}px`;
            }
        }
    }, [activeIndex]);

    const handleTabClick = (index: number) => {
        setActiveIndex(index);
    };

    // ref 콜백 함수 수정
    const setRef = (index: number) => (el: HTMLLIElement | null) => {
        liRefs.current[index] = el;
    };

    return (
        <div className={`${styles.container} ${containerClassName}`}>
            <div className={`${styles.naccs} ${className}`}>
                <div className={styles.grid}>
                    <div className={`${styles.gc} ${styles.gcOneThird}`}>
                        <div className={`${styles.menu} ${menuClassName}`}>
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className={`
                                        ${styles.menuItem} 
                                        ${menuItemClassName}
                                        ${
                                            activeIndex === index
                                                ? `${styles.active} ${activeMenuItemClassName}`
                                                : ""
                                        }
                                    `}
                                    onClick={() => handleTabClick(index)}
                                >
                                    <span className={styles.light}></span>
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={`${styles.gc} ${styles.gcTwoThird}`}>
                        <ul
                            className={`${styles.nacc} ${contentClassName}`}
                            ref={ulRef}
                        >
                            {items.map((item, index) => (
                                <li
                                    key={index}
                                    ref={setRef(index)}
                                    className={
                                        activeIndex === index
                                            ? styles.active
                                            : ""
                                    }
                                >
                                    <div>
                                        <div>{item.content}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
