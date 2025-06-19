import { Vertical } from "@/components/main/Vertical";
import { Horizontal } from "@/components/main/Horizontal";

export default function Home() {
    const HorizontalScrollSection: React.FC = () => {
        return (
            <div className="w-full h-full overflow-x-scroll snap-x snap-mandatory flex">
                <Horizontal title="슬라이드 1" bgColor="bg-pink-500" />
                <Horizontal title="슬라이드 2" bgColor="bg-cyan-500" />
                <Horizontal title="슬라이드 3" bgColor="bg-orange-500" />
                <Horizontal title="슬라이드 4" bgColor="bg-teal-500" />
                <Horizontal title="슬라이드 5" bgColor="bg-indigo-500" />
            </div>
        );
    };
    return (
        <main className="relative w-screen h-screen bg-amber-300 overflow-y-scroll snap-y snap-mandatory">
            <Vertical title="일반 섹션 1" bgColor="bg-blue-500" />

            <Vertical title="가로 스크롤 섹션" bgColor="bg-gray-800">
                <HorizontalScrollSection></HorizontalScrollSection>
            </Vertical>

            <Vertical title="일반 섹션 2" bgColor="bg-green-500" />
            <Vertical title="일반 섹션 3" bgColor="bg-purple-500" />
            <Vertical title="마지막 섹션" bgColor="bg-red-500" />
        </main>
    );
}
