import React, { useState } from "react";
import MyComponent from "app2/MyComponent";
import Button from '@material-ui/core/Button';

const style = {
  height: 400,
  backgroundColor: "#673ab7",
  color: "white",
  padding: 12,
};

const HomePage: React.FC = () => {
  // useState is a generic function,
  // that means that it can accept a type parameter.
  // This type-parameter will tell TypeScript
  // which types are acceptable for this state.
  const [count, setCount] = useState<number>(0);

  return (
    <div style={style}>
      <h1>Home Page</h1>
      <h2>Count :{count}</h2>
      <p>
        <em>a page being provided by App 1</em>
      </p>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <MyComponent name="Toma" onButtonClick={() => { setCount(count + 1) }}></MyComponent>
    </div>
  )
}

export default HomePage;
