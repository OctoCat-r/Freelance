// import { Conversation } from "./components/conversation";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Image from "next/image";
import face1 from "../public/face1.png";
const CardComponent = () => {
  return (
    <div className="relative min-w-sm rounded-[40px] bg-gradient-to-l from-transparent to-[#27A897] pl-[1px] shadow-xl w-full h-full">
      <div className="flex bg-gradient-to-tr from-[#0D1719] via-[#0D1719]/70 to-[#49F5DF]/10 rounded-[40px] p-3 w-full justify-center gap-3 text-white items-center h-full ">
        <div className="flex flex-col h-full gap-4 overflow-hidden px-3 py-3">
          <div className="flex gap-4 items-center w-3/4 my-3">
            <Image
              src={face1}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h2 className="text-xl font-medium text-white mb-1 leading-none">
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
  return (
    <main className="flex bg-gradient-to-tl from-black to-[#49F5DF]/15  h-screen">
      <Sidebar />
      <div className="w-full px-10 space-y-10">
        <Header />
        <div className="w-full h-68  ring-[#49F5DF] rounded-[40px] ring-1 bg-gradient-to-r from-black via-[#49F5DF]/10 to-transparent  justify-between items-center px-10 hidden md:flex py-5">
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
      </div>

      {/* <Conversation /> */}
    </main>
  );
}
