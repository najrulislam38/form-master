import Special from "../Special/Special";

const MySelf = ({ asset }) => {
  return (
    <div className="box">
      <h3>My Self</h3>
      <Special asset={asset}></Special>
    </div>
  );
};

export default MySelf;
