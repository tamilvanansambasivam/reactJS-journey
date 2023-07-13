import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => JS Object => HTMLElement(render)


//  

//JSX - HTML or XML like syntax (JSX is not html inside the js)
//JSX - (transpiled before it reaches the JS engine) - PARCEL - babel

// JSX => React.createElement => JS Object => HTMLElement(render)


const jsxHeading = (

<h1 className="heading">
    Hello react using JSX 🚀
</h1>
  

    )

//components 
// there are two types of components 
// i) functional and ii) class 


const Title = () =>  {
   return (
    <h1>Hello React functional components (Title)</h1>
    )
}

const Title2 = () =>  
  (
     <h1>Hello React functional components (Title2) </h1>
)
 


const HeadingComponents = ()=> (  

    <div>
    {title}
    {Title()}
    

    <Title />
    <Title2 />
    <h1>Hello React functional components (HeadingComponents) </h1>

    </div>)

const title = (
<>
<h1>Its title element</h1>

</>
)

  


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(  <HeadingComponents />) 
