import { useContext } from "react";
import { MyContext } from "../GrandPa/GrandPa";

const Friend = () => {
  const gift = useContext(MyContext);
  return (
    <div className="box">
      <h3>Friend</h3>
      <p>Gift: {gift}</p>
    </div>
  );
};

export default Friend;
