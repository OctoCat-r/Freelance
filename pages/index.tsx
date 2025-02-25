// import { Conversation } from "./components/conversation";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Image from "next/image";
import face1 from "../public/face1.png";
import { Card } from "./components/Card";
import useGetAgentList from "@/hooks/useGetAgent";

const CardComponent = () => {
  return (
    <div className="relative min-w-sm rounded-[40px] bg-gradient-to-l from-transparent to-[#27A897] pl-[1px] shadow-xl w-full h-full">
      <div className="flex bg-gradient-to-tr from-[#0D1719] via-[#0D1719]/70 to-[#49F5DF]/10 rounded-[40px] px-3 py-2 w-full justify-center gap-3 text-white items-center h-full ">
        <div className="flex flex-col h-full gap-2 overflow-hidden px-3">
          <div className="flex gap-4 items-center w-3/4 my-3 ">
            <Image
              src={face1}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h2 className=" font-medium text-white  leading-none">
                Creative Helper
              </h2>
            </div>
          </div>

          {/* Main text */}

          <p className="text-[13px] leading-tight text-white font-extralight line-clamp-5">
            Hi! I&apos;m Ellie, Whether You&apos;re An Artist, A Writer, A
            Musician, Or Just Exploring, I&apos;m Here To Spark Your Imagination
            And Bring Your Ideas To Life......
          </p>
        </div>
      </div>
    </div>
  );
};
export default function Home() {
  const { data: agentData } = useGetAgentList();

  return (
    <main className="flex bg-gradient-to-tl from-black via-[#49F5DF]/5 to-[#49F5DF]/15  h-[100dvh] font-poppins bg-black overflow-hidden">
      <Sidebar />
      <div className="w-full md:px-10 md:space-y-6 space-y-4 px-3 relative overflow-hidden   ">
        <Header />
        <div className="w-full h-1/4 ring-[#49F5DF] rounded-[40px] ring-1 bg-gradient-to-r from-black via-[#49F5DF]/10 to-transparent  justify-between items-center px-10 hidden md:flex py-5">
          <div className="w-[45%] ">
            <p className=" text-2xl line-clamp-2 w-1/2 font-semibold ">
              What do you want to do?
            </p>
            <p className="font-extralight">Epic challenges await</p>
          </div>
          <div className="flex w-[50%] h-full gap-6 shrink-0">
            <CardComponent />
            <CardComponent />
          </div>
        </div>
        <p className="text-xl">For You</p>
        <div className="gap-5 h-[55%] md:h-auto flex flex-col">
          <div className="grid md:grid-cols-4 gap-4 grid-cols-1 overflow-scroll snap-y snap-mandatory z-20 scrollbar-hide">
            {agentData?.map((agents, index) => (
              <Card
                key={index}
                heading1={agents.name}
                heading2="By @Dawn_Appear"
                imageSrc="/face1.png"
              />
            ))}
          </div>
        </div>
        {/* <--- Absolute sparkles over the bottom ---> */}

        <div className="absolute hidden md:block h-8 w-8 rounded-full bg-[#49F5DF] bottom-[130px] left-[32.5%] shadow-2xl shadow-[#49F5DF] blur-lg" />
        <div className="absolute h-2 w-2 rounded-full bg-[#49F5DF] bottom-36 left-1/3 shadow-2xl shadow-[#49F5DF]" />
        <div className="absolute hidden md:block h-8 w-8 rounded-full bg-[#49F5DF] bottom-[98px] right-[32.5%] shadow-2xl shadow-[#49F5DF] blur-lg" />
        <div className="absolute h-2 w-2 rounded-full bg-[#49F5DF] bottom-28 right-1/3 shadow-2xl shadow-[#49F5DF]" />

        <div className="rounded-full bg-gradient-to-b from-transparent to-[#27A897] pb-[1px] shadow-xl md:w-28 w-16 md:h-10 h-8 absolute bottom-10 md:left-60">
          <div className="flex bg-[#132D34] rounded-[40px] md:p-3 w-full justify-center  text-[#49F5DF] items-center h-full text-xs md:text-sm ">
            Witty
          </div>
        </div>
        <div className="rounded-full bg-gradient-to-b from-transparent to-[#27A897] pb-[1px] shadow-xl md:w-28 w-16 md:h-10 h-8 absolute bottom-24 md:right-52 right-3">
          <div className="flex bg-[#132D34] rounded-[40px] md:p-3 w-full justify-center  text-[#49F5DF] items-center h-full text-xs md:text-sm ">
            Mentor
          </div>
        </div>

        {/* <--- Absolute sparkles over the top ---> */}
        <Image
          src="/superHero.png"
          alt="alt"
          width={200}
          height={200}
          className="absolute object-contain h-28 w-40 md:w-60 md:h-32 bottom-5 md:bottom-10  z-10 md:left-[40%] left-[29%]"
        />
        <div className="absolute h-32 w-32 rounded-full bg-[#49F5DF] -bottom-28 md:left-[46%]  blur-3xl left-1/3" />
      </div>

      {/* <Conversation /> */}
    </main>
  );
}
