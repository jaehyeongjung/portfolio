interface VerticalSectionProps {
    textColor?: string;
    children?: React.ReactNode;
    className?: string;
}

export const Vertical: React.FC<VerticalSectionProps> = ({
    textColor = "text-white",
    children,
    className = "",
}) => {
    return (
        <section
            className={`w-full h-screen flex flex-col items-center justify-center ${textColor} snap-start ${className}`}
        >
            <div className="text-center mb-8"></div>
            {children}
        </section>
    );
};
