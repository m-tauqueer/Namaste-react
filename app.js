
const wa = React.createElement(
    "h1",
    { id: "heading" },
    "Hello world from React"
);
const root = ReactDOM.createRoot(document.querySelector("#root"));

// root.render(wa);




const parent = React.createElement("div", {id: "parent"},[
    React.createElement("div", {id: "child"},[
        React.createElement("h1", {}, "hello i am h1"),
        React.createElement("h2", {}, "hello i am h2")
    ]),
    React.createElement("div", {id: "child2"},[
        React.createElement("h1", {}, "hello i am h1"),
        React.createElement("h2", {}, "hello i am h2")
    ])     
 ])


console.log(parent);


root.render(parent);