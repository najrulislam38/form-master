import { useContext } from "react";
import { MyContext } from "../GrandPa/GrandPa";

const Special = ({ asset }) => {
  const gift = useContext(MyContext);
  return (
    <div className="box">
      <h3>Special</h3>
      <p>Has: {asset}</p>
      <p>has: {gift}</p>
    </div>
  );
};

export default Special;
