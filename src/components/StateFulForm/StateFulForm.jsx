import { useState } from "react";

const StateFulForm = () => {
  const [name, setName] = useState("Rojoni Kanto");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length === 0 || password.length < 6) {
      setError("You will provide must be 6 character or longer");
    } else if (email.length === 0) {
      setError("You have must be write an email");
    } else {
      setError(error);
      //   console.log(name, email, password);
    }
  };

  const handleEmailChange = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePassChange = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
          id=""
        />
        <br />
        <input onChange={handleEmailChange} type="email" name="email" id="" />
        <br />
        <input
          onChange={handlePassChange}
          type="password"
          name="phone"
          id=""
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      {error && <div>{error}</div>}
    </div>
  );
};

export default StateFulForm;
