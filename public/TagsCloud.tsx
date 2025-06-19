"use client";

import { useEffect } from "react";
import styles from "@/styles/tagsCloud.module.css";

export default function TagsCloud() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/tagsCloud.js";
    script.async = true;
    document.body.appendChild(script);

    // 클린업 함수에서 스크립트 제거
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div id="cursor" className={styles.cursor}></div>
      <ul id="tagsCloud" className={styles.tagCloud}>
        {[
          "HTML",
          "Pug",
          "CSS",
          "LESS",
          "PostCSS",
          "RSCSS",
          "SVG",
          "Javascript",
          "Gulp",
          "Webpack",
          "Canvas",
          "WebGL",
          "Three.js",
          "Anime.js",
          "Barba.js",
          "Git",
          "Linux",
          "Math",
        ].map((tag) => (
          <li key={tag} className={styles.tag}>
            <span className={styles.wrap}>{tag}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
