import Father from "../Father/Father";
import Aunty from "../Aunty/Aunty";
import Uncle from "../Uncle/Uncle";
import "./GrandPa.css";

const GrandPa = () => {
  const asset = "Diamond";
  return (
    <div className="box">
      <h2>GrandPa</h2>
      <div className="flex">
        <Father asset={asset}></Father>
        <Uncle asset={asset}></Uncle>
        <Aunty></Aunty>
      </div>
    </div>
  );
};

export default GrandPa;
