import { Vertical } from "@/components/main/Vertical";
import { Horizontal } from "@/components/main/Horizontal";
import Image from "next/image";
import Hero from "@/components/main/Hero";
import SocialIcons from "@/components/main/SocialIcons";
import Marquee from "@/components/main/Marquee";

// 경로로 바로가게 말고 모달 하나 띄워서 ? 확실히 이동할거야 ? {} 경로 뚫어놓고 my github? or my Velog? or email은 주소 모달 띄워주기
// 학력 파트?  자기소개 파트가 1순위 my identity ?  한눈에 보이게 ? 나란 사람이 어떤 사람인지...
// how to learn? 형식으로? 아니면 내가 뭘 할 수 있는지 명확하게 ? 아님 뭘 이해하고 있는지?
// 경험 부분은 현대홈쇼핑 인턴 -> 부트캠프 심화 -> 기초 or why? front?
// 프로젝트 파트
// 피어리뷰 및? 협업을 어떻게 하는지 how to cooperatE in dev?

//https://wsss.tistory.com/1974  기술스택 ?

//https://wsss.tistory.com/1307 scss 화면 로딩

//https://wsss.tistory.com/436

export default function Home() {
    const HorizontalScrollSection: React.FC = () => {
        return (
            <div className="w-full h-full overflow-x-scroll snap-x snap-mandatory flex">
                <Horizontal title="플젝 ㄱㄱ 근데? 옆으로넘길수있다는것을 표현해야할듯.." bgColor="bg-pink-500" />
                <Horizontal title="React" bgColor="bg-cyan-500" />
                <Horizontal title="Next.js" bgColor="bg-orange-500" />
                <Horizontal title="CSS" bgColor="bg-orange-500" />
            </div>
        );
    };
    return (
        <main className="relative w-screen h-screen text-yellow-400 overflow-y-scroll snap-y snap-mandatory">
            <Vertical className="flex gap-5">
                <Image
                    src="/pexels-joan-sanchez-484324469-16095968.jpg"
                    alt="정재형 프로필"
                    fill
                    style={{ objectFit: "cover" }}
                />
                <Hero></Hero>
                <SocialIcons />
            </Vertical>

            <Vertical className="flex bg-amber-600 gap-30">
                <h1 className="top-[-60px]">expierience</h1>
                <p className="text-black">
                    경험 - 뭔가 git 경로보는것처럼 로드맵형식 한경국립대학교
                    컴퓨터공학 전공 codeit bootcamp 1,2 현대홈쇼핑 인턴
                    계단형식으로 아래서부터 위로 올라가는 ... 애니메이션 ?
                    상단엔 가장현재...
                </p>
            </Vertical>

            <Vertical className="flex flex-col gap-10">
                <Marquee />
                <div className="text-black">자바스크립트는 ~~~ 알고, 리액트는 ~~~알고 넥스트는 ~~</div>
                <div className="text-black">협업시 어떻게 풀어가는지? 백엔드 디자이너 이거는 카드 형식? 아님 모달?</div>
            </Vertical>
            <Vertical>
                <HorizontalScrollSection></HorizontalScrollSection>
            </Vertical>
            <Vertical>
                <p className="text-black">
                    마지막은 피어리뷰 받은 내용? 내 강점 어필 ㄱㄱ + 자기소개
                    고도화? 개선? 협업능력? 
                </p>
            </Vertical>
        </main>
    );
}
