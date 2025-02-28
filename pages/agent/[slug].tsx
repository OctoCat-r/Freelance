import { useConversation } from "@11labs/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";

import { AGENTDETAILS } from "@/hooks/useGetAgentList";
import { Mic } from "lucide-react";
import { easeOut, motion } from "framer-motion";

const AgentDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [agentDetails, setAgentDetails] = useState<AGENTDETAILS>();

  useEffect(() => {
    if (slug) {
      setAgentDetails(JSON.parse(String(slug)));
    }
  }, [slug]);

  console.log(agentDetails);

  //   const { data } = useGetAgents(String(slug));

  //   console.log(data);
  const conversation = useConversation({
    onConnect: () => console.log("Connected"),
    onDisconnect: () => console.log("Disconnected"),
    onMessage: (message: string) => console.log("Message:", message),
    onError: (error: string) => console.error("Error:", error),
  });

  const startConversation = useCallback(async () => {
    try {
      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true });

      // Start the conversation with your agent
      await conversation.startSession({
        agentId: agentDetails?.agent_id, // Replace with your agent ID
      });
    } catch (error) {
      console.error("Failed to start conversation:", error);
    }
  }, [conversation, agentDetails?.agent_id]);

  const stopConversation = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  return (
    <main className="relative flex bg-gradient-to-tl from-black via-primary/5 to-primary/15  h-[100dvh] font-poppins bg-black overflow-hidden justify-center">
      <div className="flex gap-2 flex-col  flex-1 items-center md:py-10 py-16 space-y-4 px-6 justify-between debug-border overflow-hidden relative">
        <div className="flex flex-col  items-center space-y-4">
          <div className="h-44 w-44 ring-[1px] ring-primary rounded-full flex justify-center items-center shadow-custom">
            <Image
              src="/face1.png"
              alt="alt"
              width={120}
              height={120}
              className="object-contain rounded-full"
            />
          </div>
          <p className="font-poppins pb-6">{agentDetails?.name}</p>

          <div className="bg-[#0F2126] text-sm md:w-1/2 p-4 rounded-b-xl border-l-[1px] border-primary border-t-0">
            <p>
              Willkommen, bienvenue, welcome - I&apos;m HyperGlot, and I&apos;m
              fluent in many languages, and will help you practice the one(s)
              you&apos;re learning. I can also translate anything you don’t
              understand.
            </p>
          </div>
        </div>
        {conversation.status !== "connected" && (
          <button
            //   animate={{
            //     height: conversation.status === "connected" ? "6rem" : "auto",
            //     width: conversation.status === "connected" ? "100%" : "auto",
            //     // opacity: conversation.status === "connected" ? 0 : 1,
            //     backgroundColor:
            //       conversation.status !== "connected"
            //         ? "rgba(36, 219, 86, 1)"
            //         : "rgba(73, 245, 223, 1)",
            //   }}
            //   transition={{ duration: 0.4, ease: easeOut }}
            onClick={startConversation}
            className="px-10 py-2 bg-[#24DB56] text-white rounded-full disabled:bg-gray-300 font-poppins shadow-allsides shadow-[#24DB56]/40"
          >
            Start Call
          </button>
        )}
        {conversation.status === "connected" && (
          <>
            <div className="flex gap-7 py-10 md:py-28 z-10">
              <button className="bg-white rounded-full  flex justify-center items-center h-12 w-12 shadow-sm shadow-white">
                <Mic color="#004A40" size={16} />
              </button>

              <button
                className="bg-white rounded-full flex justify-center items-center h-12 w-12 shadow-sm shadow-white"
                onClick={stopConversation}
              >
                <Image src="/Vector.png" alt="alt" width={20} height={20} />
              </button>
            </div>
            <div className="absolute rounded-full ring-1 ring-primary -bottom-48 h-80 w-80 blur-[8px] " />
            <div className="absolute rounded-full ring-1 ring-primary -bottom-44 h-60 w-60 blur-[4px] " />

            <div className="absolute h-96 w-[440px] rounded-full bg-primary/80 -bottom-28 blur-[100px] shadow-allsides" />
          </>
        )}
      </div>
    </main>
  );
};

export default AgentDetail;
{
  /* <div className="flex flex-col items-center">
  <p>
    Status of {slug}: {conversation.status}
  </p>
  <p>Agent is {conversation.isSpeaking ? "speaking" : "listening"}</p>
</div>; */
}

{
  /* <button
  onClick={stopConversation}
  disabled={conversation.status !== "connected"}
  className="px-4 py-2 bg-red-500 text-white rounded disabled:bg-gray-300"
>
  Stop Conversation
</button>; */
}

// <motion.button
//   layout
//   animate={{
//     height: conversation.status === "connected" ? "6rem" : "auto",
//     width: conversation.status === "connected" ? "100%" : "auto",
//     // opacity: conversation.status === "connected" ? 0 : 1,
//     backgroundColor:
//       conversation.status !== "connected"
//         ? "rgba(36, 219, 86, 1)"
//         : "rgba(73, 245, 223, 1)",
//   }}
//   transition={{ duration: 0.4, ease: easeOut }}
//   onClick={startConversation}
//   className="px-10 py-2 bg-[#24DB56] text-white rounded-full disabled:bg-gray-300 font-poppins shadow-allsides shadow-[#24DB56]/40"
// >
//   Start Call
// </motion.button>;
