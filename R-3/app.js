import React from "react";
import ReactDOM from "react-dom/client";

//reactt Element
const head = React.createElement(
  "h1",
  { id: "heading" },
  "hello from new react ",
);

//JSX - is not HTML in JS .... it is html like syntax
//jsx (transpiled before it reaches te JS) -PARCEL -Babel does that thing

const jsxHeading = (
  <h1 id="heading" className="head1">
    Namaste React using JSX
  </h1>
);

// -----------React Component------------
//class bases Component -- OLD

//function based Component

const Title = () => (
  <h1 id="he" className="he1">
    Namaste React using JSX
  </h1>
);

const HeadingComponent = () => {
  return <h1 className="heading">Namaste react using Funtional Component</h1>;
};

const HeadingComponent2 = () => (
  <h1 className="heading">Namaste react using Funtional Component 2</h1>
);

const HeadingComponent3 = () => (
  <div id="container">
    <Title />
    {head}
    {HeadingComponent2()}
    <h1 className="heading">Namaste react using Funtional Component3</h1>
  </div>
);

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<HeadingComponent3 />);
