import "./App.css";
import GrandPa from "./components/GrandPa/GrandPa";
// import ReuseableForm from "./components/ReuseableForm/ReuseableForm";
// import HookForm from "./components/HookForm/HookForm";
// import RefForm from "./components/RefForm/RefForm";
// import StateFulForm from "./components/StateFulForm/StateFulForm";
// import SimpleForm from "./components/SimpleForms.jsx/SimpleForm";

function App() {
  // const handleSignUpSubmit = (data) => {
  //   console.log("Sign Up:", data);
  //   // console.log(e.target.name.value);
  // };

  // const handleUpdateProfile = (data) => {
  //   console.log("Profile Update:", data);
  //   // console.log(e.target.value);
  // };

  return (
    <>
      <h1>Form Master</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseableForm
        formTitle={"Sign Up"}
        submitButtonText={"Submit"}
        handleSubmit={handleSignUpSubmit}
      >
        <div>
          <h2>Sign Up</h2>
          <p>Please Sign up right now.</p>
        </div>
      </ReuseableForm>
      <ReuseableForm
        formTitle={"Update Profile"}
        submitButtonText={"Update"}
        handleSubmit={handleUpdateProfile}
      >
        <div>
          <h2>Profile Update</h2>
          <p>Alway keep your profile updated.</p>
        </div>
      </ReuseableForm> */}
      <GrandPa></GrandPa>
    </>
  );
}

export default App;
