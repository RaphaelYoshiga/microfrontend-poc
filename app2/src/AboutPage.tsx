import React from "react";
import MyComponent from "./MyComponent";
import Button from '@material-ui/core/Button';

const style = {
  height: 400,
  backgroundColor: "#3f51b5",
  color: "white",
  padding: 12,
};

const AboutPage = () => (
  <div style={style}>
    <h1>About Page</h1>
    <p>
      <em>a page being provided by App 2</em>
    </p>
    <MyComponent name="WOOOOOW IT EVEN HAS Typescript validation"></MyComponent>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  </div>
);

export default AboutPage;
