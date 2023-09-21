import Cousin from "../Cousin/Cousin";

const Aunty = () => {
  return (
    <div className="box">
      <h2>Aunty</h2>
      <div className="flex">
        <Cousin name={"Sohag"}></Cousin>
        <Cousin name={"Labony"}></Cousin>
      </div>
    </div>
  );
};

export default Aunty;
