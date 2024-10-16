import { styles } from "@/utils/styles";
import {
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { IoExitOutline } from "react-icons/io5";
import { useClerk } from "@clerk/nextjs";
import React from "react";
import { CiShop } from "react-icons/ci";
import { User } from "@clerk/nextjs/server";
import { useRouter } from "next/navigation";
type Props = {
  user: User | null;
  setOpen: (open: boolean) => void;
  handleProfile: () => void;
  isSellerExist: boolean;
};

const DropDown = ({ user, setOpen, handleProfile, isSellerExist }: Props) => {
  const { signOut } = useClerk();
  const router = useRouter();
  const handleLogOut = async () => {
    await signOut();
    router.push("/sign-in");
  };
  return (
    <Dropdown placement="bottom-start">
      <DropdownTrigger>
        <Avatar
          src={user?.imageUrl}
          alt="Profile Image"
          className="w-[30px] h-[30px] cursor-pointer"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile-Actions" variant="flat">
        <DropdownItem
          onClick={() => {
            handleProfile();
            setOpen(false);
          }}
        >
          <div className="w-full flex items-center justify-between">
            <Avatar
              src={user?.imageUrl || "/path/to/fallback-image.png"}
              alt="Profile Image"
              className="w-[30px] h-[30px] cursor-pointer"
            />
            <span className={`${styles.label} text-black text-[16px] pl-2`}>
              My Profile
            </span>
          </div>
        </DropdownItem>
        <DropdownItem className={`${!isSellerExist && "hidden"}`}>
          <div className="w-full flex items-center justify-between">
            <div>
              <CiShop className="text-xl text-black font-bold" />
            </div>
            <span className={`${styles.label} text-black text-[16px] pl-2`}>
              Shop
            </span>
          </div>
        </DropdownItem>
        <DropdownItem onClick={handleLogOut}>
          <div className="w-full flex items-center justify-between">
            <div>
              <IoExitOutline className="text-xl text-black font-bold" />
            </div>
            <span className={`${styles.label} text-black text-[16px] pl-2`}>
              Logout
            </span>
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDown;
