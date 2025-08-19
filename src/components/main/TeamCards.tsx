"use client";
import React from "react";
import Image from "next/image";
import ShootingStars from "./ShootingStars";

type TeamMember = {
    id: number;
    name: string;
    position: string;
    image: string;
    description: string;
    cardType: "pink" | "blue";
};

const TeamCards = () => {
    const teamMembers: TeamMember[] = [
        {
            id: 1,
            name: "익명: 팀원 1",
            position: "Wine Project frontend",
            image: "https://us.123rf.com/450wm/eveleen/eveleen1712/eveleen171200013/91725292-anonymous-person-icon.jpg",
            description:
                "팀원변동이 생겼을 때 묵묵히 시간을 투자해서 작업량을 늘리신부분이 죄송하면서도 감사했습니다. 프로젝트 셋업이나 노션, 발표 등 필요한 작업이 있을 때 먼저 나서서 길을 만들어주셨던 행동력이 장점이 될 수 있을거같아요.",
            cardType: "pink",
        },
        {
            id: 2,
            name: "익명: 팀원 2",
            position: "Wine Project frontend",
            image: "https://us.123rf.com/450wm/eveleen/eveleen1712/eveleen171200013/91725292-anonymous-person-icon.jpg",
            description:
                "팀장님으로써 깔끔하셨던 것 같습니다. 저희 프로젝트를 진행하는동안 깃허브 프로젝트 생성부터 커밋명 작성규칙까지 너무 잘 써주셨고, 이러한 점들 덕분에 개발에만 몰두할 수 있었습니다. 또한, 팀 프로젝트를 진행하다보면, 혼자해도 될 것과 같이해야 할 것을 명확하게 구분하지 못하는 상황이 많아서 의미없이 시간을 쓰는 일이 많은데, 혼자해도 될 것과, 같이해야 될 것을 명확히구분하셔서 의미없이 모여서 시간쓰는 일이 없었던게 정말  만족스러웠습니다!",
            cardType: "blue",
        },
        {
            id: 3,
            name: "익명: 팀원 3",
            position: "Wine Project frontend",
            image: "https://us.123rf.com/450wm/eveleen/eveleen1712/eveleen171200013/91725292-anonymous-person-icon.jpg",
            description:
                "팀장직을 수행하시면서 어려움도 있으셧을텐데 팀원분들의 의견을 수렴하며 주도적으로 계획도 세우셔서 프로젝트 진행할때 시행착오가 없게 하셨습니다. 한명의 중도하차로 인해 작업내용을 분담해야 하지만 팀장님께서 묵묵히 작업을 진행해 주셔서 맡은 작업을 끝낼 수 있었습니다.",
            cardType: "pink",
        },
    ];

    const QuoteIcon: React.FC<{ className?: string }> = ({ className }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 475.082 475.081"
            width="25px"
            height="25px"
            className={className}
        >
            <g>
                <path d="M164.45 219.27h-63.954c-7.614 0-14.087-2.664-19.417-7.994-5.327-5.33-7.994-11.801-7.994-19.417v-9.132c0-20.177 7.139-37.401 21.416-51.678 14.276-14.272 31.503-21.411 51.678-21.411h18.271c4.948 0 9.229-1.809 12.847-5.424 3.616-3.617 5.424-7.898 5.424-12.847V54.819c0-4.948-1.809-9.233-5.424-12.85-3.617-3.612-7.898-5.424-12.847-5.424h-18.271c-19.797 0-38.684 3.858-56.673 11.563-17.987 7.71-33.545 18.132-46.68 31.267-13.134 13.129-23.553 28.688-31.262 46.677C3.855 144.039 0 162.931 0 182.726v200.991c0 15.235 5.327 28.171 15.986 38.834 10.66 10.657 23.606 15.985 38.832 15.985h109.639c15.225 0 28.167-5.328 38.828-15.985 10.657-10.663 15.987-23.599 15.987-38.834V274.088c0-15.232-5.33-28.168-15.994-38.832-10.824-10.656-23.771-15.986-38.996-15.986Z" />
                <path d="M459.103 235.256c-10.656-10.656-23.599-15.986-38.828-15.986h-63.953c-7.61 0-14.089-2.664-19.41-7.994-5.332-5.33-7.994-11.801-7.994-19.417v-9.132c0-20.177 7.139-37.401 21.409-51.678 14.271-14.272 31.497-21.411 51.682-21.411h18.267c4.949 0 9.233-1.809 12.848-5.424 3.613-3.617 5.428-7.898 5.428-12.847V54.819c0-4.948-1.814-9.233-5.428-12.85-3.614-3.612-7.898-5.424-12.848-5.424h-18.267c-19.808 0-38.691 3.858-56.685 11.563-17.984 7.71-33.537 18.132-46.672 31.267-13.135 13.129-23.559 28.688-31.265 46.677-7.707 17.987-11.567 36.879-11.567 56.674v200.991c0 15.235 5.332 28.171 15.988 38.834 10.657 10.657 23.6 15.985 38.828 15.985h109.633c15.229 0 28.171-5.328 38.827-15.985 10.664-10.663 15.985-23.599 15.985-38.834V274.088c0-15.233-5.322-28.168-15.979-38.832Z" />
            </g>
        </svg>
    );

    const WaveShape = () => (
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                className="relative block w-full h-12"
            >
                <path
                    d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                    opacity=".25"
                    className="fill-white"
                />
                <path
                    d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                    opacity=".5"
                    className="fill-white"
                />
                <path
                    d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                    className="fill-white"
                />
            </svg>
        </div>
    );

    const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => {
        const cardColorClasses =
            member.cardType === "pink"
                ? "border-b-4 border-pink-500"
                : "border-b-4 border-blue-600";
        const svgColorClasses =
            member.cardType === "pink" ? "fill-pink-500" : "fill-blue-600";
        const nameColorClasses =
            member.cardType === "pink" ? "text-pink-500" : "text-blue-600";

        return (
            <div className="w-full h-full flex flex-col">
                <div
                    className={`bg-white rounded-lg shadow-lg overflow-hidden border-0 flex flex-col h-full ${cardColorClasses}`}
                >
                    <div className="relative w-full flex-shrink-0 aspect-square">
                        <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                        />
                        <WaveShape />
                    </div>
                    <div className="px-4 flex-1">
                        <blockquote>
                            <QuoteIcon className={svgColorClasses} />
                            <p className="mt-2 mb-4 text-gray-600 text-sm peer-title">
                                {member.description}
                            </p>
                        </blockquote>
                    </div>
                    <div className="px-4 bg-gray-50">
                        <p className={`mb-0 font-bold ${nameColorClasses}`}>
                            {member.name}
                        </p>
                        <small className="text-gray-500">
                            {member.position}
                        </small>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="h-full flex flex-col justify-center items-center bg-black relative w-full">
            <div className="absolute inset-0 z-0">
                <ShootingStars />
            </div>
            {/* Google Fonts 글로벌 적용 */}
            <style jsx global>{`
                @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap");

                .peer-title {
                    font-family: "Montserrat", sans-serif;
                }
            `}</style>

            <div className="container mx-auto px-4 flex flex-col gap-3 sm:w-200">
                <div className="text-center">
                    <p className="peer-title font-bold mt-5 text-white text-3xl">
                        Peer Review
                    </p>
                </div>

                {/* 데스크탑 그리드 */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    {teamMembers.map((member) => (
                        <TeamCard key={member.id} member={member} />
                    ))}
                </div>

                {/* 모바일 가로 스크롤 */}
                <div className="flex md:hidden gap-4 overflow-x-auto pb-10">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="flex-shrink-0 w-72">
                            <TeamCard member={member} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamCards;
