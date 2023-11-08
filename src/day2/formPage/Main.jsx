import React from "react";

const Main = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ fontStyle: "oblique" }}>Fill in your Details:</h2>
      <br></br>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <br></br>
        <form>
          <label for="f">First Name: </label>
          <input type="text" id="f" placeholder="Enter your First Name" />
          <br></br>
          <br></br>
          <label for="l">Last Name: </label>
          <input type="text" id="l" placeholder="Enter your Last Name" />
          <br></br>
          <br></br>
          <label for="e">Email Id:</label>
          <input type="email" id="e" placeholder="Enter Email ID" />
          <br></br>
          <br></br>
          <label for="p">Password:</label>
          <input type="password" id="e" placeholder="Enter your Password" />
          <br></br>
          <br></br>
          <button>SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default Main;
