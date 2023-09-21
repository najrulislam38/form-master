import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../GrandPa/GrandPa";

const Aunty = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div className="box">
      <h2>Aunty</h2>
      <div className="flex">
        <Cousin name={"Sohag"}></Cousin>
        <Cousin name={"Labony"}></Cousin>
      </div>
      <p>Has: {money}</p>
      <button onClick={() => setMoney(money + 1000)}>Add 1000</button>
    </div>
  );
};

export default Aunty;
