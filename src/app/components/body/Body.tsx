import { FC } from "react";

interface ActiveButton {
  currentButton: String;
}

import Suggestion from "../suggestion/Suggestion";

const Body: FC<ActiveButton> = ({ currentButton }) => {
  if (currentButton === "Suggestions") {
    return (
      <div className="grid justify-center ml-[auto] mr-[auto] mt-[100px]">
        <Suggestion id={"1c13ee3d-595e-4115-805d-db479e5db915"} name={"Kacper"} profileImage={""} title={"Allow new users to log in"} upVotes={0} downVotes={0} createdAt={"5th April"}/>
      </div>
    );
  } else if (currentButton === "YourSuggestions") {
    return (
      <div>
        <p>Your Suggestions</p>
      </div>
    );
  }
};

export default Body;