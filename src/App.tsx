import React, { useState } from "react";

type FormElement = React.FormEvent<HTMLFormElement>;
const App = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const handelSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };
  return (
    <div className="container">
      <h1>Todo List</h1>
      <form onSubmit={handelSubmit}>
        <div className="form-group row col-12 mt-2">
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="form-group row col-12 mt-2">
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="row col-md-12 text-center">
          <button className="btn btn-success text-center justify-content-center">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
