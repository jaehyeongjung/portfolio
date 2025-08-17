import React from "react";
import Image from "next/image";

const socialLinks = [
  { name: "GitHub", src: "/githubLogo.svg", href: "https://github.com/jaehyeongjung" },
  { name: "Velog", src: "/velog.svg", href: "https://velog.io/@whird625/posts" },
  { name: "Email", src: "/email.svg", href: "mailto:whird398@naver.com" },
];


export default function SocialIcons() {
  return (
    <div className="absolute top-6/7 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-10 drop-shadow-lg  ">
  {socialLinks.map((item) => (
    <a
      key={item.name}
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group relative w-10 h-10 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-145  hover:bg-white bg-gray-200 rounded-full"
    >
      <Image
        src={item.src}
        alt={item.name}
        width={40}
        height={40}
        className="rounded-full"
      />
      <span className="absolute bottom-12 left-1/2 -translate-x-1/2 px-2 py-1 text-sm text-gray-800 bg-white rounded opacity-0 transition-all duration-500 group-hover:opacity-100">
        {item.name}
      </span>
    </a>
  ))}
</div>

  );
}
