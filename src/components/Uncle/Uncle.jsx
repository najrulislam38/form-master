import Cousin from "../Cousin/Cousin";

const Uncle = ({ asset }) => {
  return (
    <div className="box">
      <h2>Uncle</h2>
      <div className="flex">
        <Cousin name={"Masrafi"}></Cousin>
        <Cousin name={"Sraboni"} asset={asset}></Cousin>
      </div>
    </div>
  );
};

export default Uncle;
