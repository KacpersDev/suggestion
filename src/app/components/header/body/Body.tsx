import { FC } from "react";

interface ActiveButton {
  currentButton: any;
}

const Body: FC<ActiveButton> = ({ currentButton }) => {
  if (currentButton === "Suggestions") {
    return (
      <div>
        <p>Suggestions</p>
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
