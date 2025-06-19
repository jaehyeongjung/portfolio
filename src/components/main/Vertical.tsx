// 세로 스크롤 섹션 컴포넌트
interface VerticalSectionProps {
    title: string;
    bgColor: string;
    textColor?: string;
    children?: React.ReactNode;
}

export const Vertical: React.FC<VerticalSectionProps> = ({
    title,
    bgColor,
    textColor = "text-white",
    children,
}) => {
    return (
        <section
            className={`w-full h-screen flex flex-col items-center justify-center ${bgColor} ${textColor} snap-start`}
        >
            <div className="text-center mb-8">
                <h1 className="text-6xl font-bold mb-4">{title}</h1>
                <p className="text-xl">스크롤해서 이동해보세요</p>
            </div>
            {children}
        </section>
    );
};
