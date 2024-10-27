"use server";
import React from "react";
import PromptDetailsPage from "./_page";
import { getUser } from "@/actions/user/getUser";
import { getPromptById } from "@/actions/prompts/getPromptById";
const page = async ({ params }: any) => {
  const data = await getUser();
  const serializedUser = data?.user
    ? JSON.parse(JSON.stringify(data?.user))
    : undefined;
  const promptData = await getPromptById(params.id);
  return (
    <div>
      <PromptDetailsPage
        user={serializedUser}
        isSellerExist={data?.shop ? true : false}
        promptData={promptData}
      />
    </div>
  );
};

export default page;
