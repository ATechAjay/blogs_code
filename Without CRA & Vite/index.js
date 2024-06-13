// Step 1: Create React Element
// Step 2: Create Root Element
// Step 3: Render React Element

const reactElement = React.createElement("h1", {}, "Hello world!");

const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(reactElement);
