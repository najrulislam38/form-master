import PropTypes from "prop-types";
import Special from "../Special/Special";
import Friend from "../Friend/Friend";

const Cousin = ({ name, asset }) => {
  return (
    <div className="box">
      <h3>Cousin {name}</h3>
      {asset && <Special asset={asset}></Special>}
      {name === "Labony" && <Friend></Friend>}
    </div>
  );
};

Cousin.propTypes = {
  name: PropTypes.string,
};

export default Cousin;
