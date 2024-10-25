import React from "react";
import RootPage from "./_page";
import { getUser } from "@/actions/user/getUser";
import { getAllPrompts } from "@/actions/prompts/getAllPrompts";

const page = async () => {
  const data = await getUser();
  const serializedUser = JSON.parse(JSON.stringify(data?.user));
  const promptData = await getAllPrompts();
  return (
    <div>
      <RootPage
        user={serializedUser}
        isSellerExist={data?.shop ? true : false}
      />
    </div>
  );
};

export default page;
