import { Avatar } from "@nextui-org/react";
import React from "react";
import Ratings from "@/utils/Ratings";
import { styles } from "@/utils/styles";
type Props = {};

const ReviewCard = (props: Props) => {
  return (
    <div className="flex my-2">
      <div>
        <Avatar
          size="lg"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
      </div>
      <div className="pl-3">
        <div className="flex flex-col justify-center items-start">
          <div className="flex items-center">
            <span className="font-Inter text-xl">Anem</span>
            <span className="md:text-sm pl-3 text-slate-400">5 days ago</span>
          </div>
          <Ratings rating={4} />
          <p className={`${styles.paragraph} whitespace-pre-line`}>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before the final copy is available.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
