interface HorizontalItemProps {
    title: string;
    bgColor: string;
    textColor?: string;
}

export const Horizontal: React.FC<HorizontalItemProps> = ({
    title,
    bgColor,
    textColor = "text-white",
}) => {
    return (
        <div
            className={`w-screen h-full flex-shrink-0 flex items-center justify-center ${bgColor} ${textColor} snap-start`}
        >
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">{title}</h2>
            </div>
        </div>
    );
};
