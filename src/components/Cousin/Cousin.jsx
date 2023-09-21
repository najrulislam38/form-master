import PropTypes from "prop-types";
import Special from "../Special/Special";

const Cousin = ({ name, asset }) => {
  return (
    <div className="box">
      <h3>Cousin {name}</h3>
      {asset && <Special asset={asset}></Special>}
    </div>
  );
};

Cousin.propTypes = {
  name: PropTypes.string,
};

export default Cousin;
