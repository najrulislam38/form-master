import Father from "../Father/Father";
import Aunty from "../Aunty/Aunty";
import Uncle from "../Uncle/Uncle";
import "./GrandPa.css";
import { createContext, useState } from "react";

export const MyContext = createContext("gold");
export const MoneyContext = createContext(1000);

const GrandPa = () => {
  const asset = "Diamond";
  const [money, setMoney] = useState(1000);

  return (
    <div className="box">
      <h2>GrandPa</h2>
      <p>GrandPa Money: {money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <MyContext.Provider value="gold">
          <div className="flex">
            <Father asset={asset}></Father>
            <Uncle asset={asset}></Uncle>
            <Aunty></Aunty>
          </div>
        </MyContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default GrandPa;

/**
 * 1. create a context and export it.
 * 2. Add provider for the context with a value. Value could be anything.
 * 3. Use context to asses in the context API.
 */
