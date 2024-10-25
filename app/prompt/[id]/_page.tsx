import Header from "@/components/Layout/Header";
import { User } from "@clerk/nextjs/server";
import React from "react";

type Props = {
  user: User | undefined;
  isSellerExist: boolean | undefined;
};

const _page = ({ user, isSellerExist }: Props) => {
  return (
    <div>
      <Header user={user} isSellerExist={isSellerExist} activeItem={2} />
    </div>
  );
};

export default _page;
