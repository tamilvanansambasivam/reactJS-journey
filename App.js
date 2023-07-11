import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" },
    [
        React.createElement("div", { id: "child" },
        [
            React.createElement("h1", {}, "I'm calm"),
            React.createElement("h1", {}, "I'm the best"),
            React.createElement("h2", {}, "I'm lucky")
        ]), 
        
        React.createElement("div", { id: "child2" },
            [
                React.createElement("h1", {}, "I'm happy"),
                React.createElement("h2", {}, "Relax...")
            ])]

)

console.log(parent)



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);



