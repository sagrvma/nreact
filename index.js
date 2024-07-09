/*
<div id=parent>
div id=child1
div id=child2
</div>


*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", { id: "header1" }, "Inner Child 1 H1 Tag")
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h2", { id: "header2" }, "Inner Child 2 H2 Tag")
  ),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
