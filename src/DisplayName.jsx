import React, { useState } from "react";

function DisplayName() {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [fullName, setfullName] = useState("");
  const handleFname = (e) => {
    setfName(e.target.value);
  };
  const handleLname = (e) => {
    setlName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const myFullName = `${fName} ${lName}`;
    setfullName(myFullName);
  };
  return (
    <div>
      <h1>Full Name Display</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">First Name:</label>
          <input type="text" value={fName} onChange={handleFname} required />
        </div>
        <div>
          <label htmlFor="">Last Name:</label>
          <input type="text" value={lName} onChange={handleLname} required />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {fullName && <p>Full Name: {fullName}</p>}
      {/* {`Full Name: ${fullName}`} */}
    </div>
  );
}

export default DisplayName;
