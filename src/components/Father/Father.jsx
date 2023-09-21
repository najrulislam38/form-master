import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";

const Father = ({ asset }) => {
  return (
    <div className="box">
      <h2>Father</h2>
      <div className="flex">
        <MySelf asset={asset}></MySelf>
        <Brother></Brother>
        <Sister></Sister>
      </div>
    </div>
  );
};

export default Father;
