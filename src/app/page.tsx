import { Vertical } from "@/components/main/Vertical";
import { Horizontal } from "@/components/main/Horizontal";
import Image from "next/image";
import Hero from "@/components/main/Hero";
import SocialIcons from "@/components/main/SocialIcons";
import Marquee from "@/components/main/Marquee";
import TabComponent from "@/components/main/TabComponent";
import ShootingStars from "@/components/main/ShootingStars";
import Terminal from "@/components/main/Terminal";
import TeamCards from "@/components/main/TeamCards";

// 경로로 바로가게 말고 모달 하나 띄워서 ? 확실히 이동할거야 ? {} 경로 뚫어놓고 my github? or my Velog? or email은 주소 모달 띄워주기
// 학력 파트?  자기소개 파트가 1순위 my identity ?  한눈에 보이게 ? 나란 사람이 어떤 사람인지...
// how to learn? 형식으로? 아니면 내가 뭘 할 수 있는지 명확하게 ? 아님 뭘 이해하고 있는지?
// 경험 부분은 현대홈쇼핑 인턴 -> 부트캠프 심화 -> 기초 or why? front?
// 프로젝트 파트
// 피어리뷰 및? 협업을 어떻게 하는지 how to cooperatE in dev?

//https://wsss.tistory.com/2087 프로젝트 소개 카드로 ?

// https://wsss.tistory.com/2094 -> 피어리뷰 카드

// se -> 모바일시 텍스트가 좀 큰거같은데.. 

const tabItems = [
    {
        label: "Major",
        content: (
            <div className="flex flex-col gap-5 text-sm mt-3 ml-1 sm:text-2xl sm:ml-10">
                <p>2024, 교내 캡스톤 최우수상</p>
                <p>2024, 대한전자공학회 논문 부저자</p>
                <p>2025, 한경국립대학교 컴퓨터공학 졸업</p>
            </div>
        ),
    },
    {
        label: "BootCamp",
        content: (
            <div className="flex flex-col gap-5 text-sm mt-3 ml-1 sm:text-2xl sm:ml-10">
                <p>2024.10 ~ 2025.04</p>
                <p>Codeit 프론트엔드 스프린트 12기</p>
                <p>2025.04 ~ 2025.06</p>
                <p>Codeit 프론트엔드 심화과정 9기</p>
            </div>
        ),
    },
    {
        label: "InternShip",
        content: (
            <div className="flex flex-col gap-5 text-sm mt-3 ml-1 sm:text-2xl sm:ml-10">
                <p>2025.08.18 ~ 2025.11.21</p>
                <p>현대홈쇼핑 DT 부서</p>
                <p>UI 개발 파트 인턴</p>
            </div>
        ),
    },
];

export default function Home() {
    const HorizontalScrollSection: React.FC = () => {
        return (
            <div className="w-full h-full overflow-x-scroll snap-x snap-mandatory flex">
                <Horizontal title="Project -> Scroll" bgColor="bg-pink-500" />
                <Horizontal title="fanfal" bgColor="bg-cyan-500" />
                <Horizontal title="epigram" bgColor="bg-orange-500" />
                <Horizontal title="stylefit" bgColor="bg-orange-500" />
            </div>
        );
    };
    return (
        <main className="relative w-screen h-screen overflow-y-scroll snap-y snap-mandatory">
            <Vertical>
                <Image
                    src="/test.jpg"
                    alt="정재형 프로필"
                    fill
                    style={{ objectFit: "cover" }}
                />
                <Hero></Hero>
                <SocialIcons />
            </Vertical>

            <Vertical className="relative bg-black overflow-hidden">
                <ShootingStars />
                <div className="relative z-10">
                    <h1 className="rounded p-2">experience</h1>
                </div>
                <div className="relative z-10 w-full">
                    <TabComponent items={tabItems} />
                </div>
            </Vertical>

            <Vertical className="relative flex flex-col gap-3">
                <div className="">
                    <div className="relative z-10">
                        <h1 className="rounded p-2 ">skills</h1>
                    </div>
                </div>
                <Marquee />
                <Image
                    src="/code5.jpg"
                    alt="정재형 프로필"
                    fill
                    style={{ objectFit: "cover", filter: "blur(2px)" }}
                />
                <Terminal></Terminal>
            </Vertical>

            <Vertical>
                <HorizontalScrollSection></HorizontalScrollSection>
            </Vertical>

            <Vertical className="relative h-screen flex justify-center items-center bg-black">
                <TeamCards />
            </Vertical>
        </main>
    );
}
