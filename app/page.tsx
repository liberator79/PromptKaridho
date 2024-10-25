import React from "react";
import RootPage from "./_page";
import { getUser } from "@/actions/user/getUser";
import { getAllPrompts } from "@/actions/prompts/getAllPrompts";
import { Kolker_Brush } from "next/font/google";

const page = async () => {
  const data = await getUser();
  const serializedUser = data?.user
    ? JSON.parse(JSON.stringify(data?.user))
    : undefined;
  const promptData = await getAllPrompts();
  return (
    <div>
      <RootPage
        user={serializedUser}
        isSellerExist={data?.shop ? true : false}
        promptsData={promptData}
      />
    </div>
  );
};

export default page;
