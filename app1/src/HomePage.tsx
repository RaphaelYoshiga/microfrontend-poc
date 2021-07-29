import React from "react";
// import MyComponent from "app2/MyComponent";

const style = {
  height: 400,
  backgroundColor: "#673ab7",
  color: "white",
  padding: 12,
};

const HomePage = () => (
  <div style={style}>
    <h1>Home Page</h1>
    <h2>Welcome to the future!</h2>
    <p>
      <em>a page being provided by App 1</em>
    </p>
     {/* <MyComponent name="Toma"></MyComponent>  */}
  </div>
);

export default HomePage;
