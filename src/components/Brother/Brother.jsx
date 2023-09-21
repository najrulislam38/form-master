import { useContext } from "react";
import { MoneyContext } from "../GrandPa/GrandPa";

const Brother = () => {
  const money = useContext(MoneyContext);
  return (
    <div className="box">
      <h3>Brother</h3>
      <p>has: {money}</p>
    </div>
  );
};

export default Brother;
