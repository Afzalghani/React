

/*
ReactElement(Object)-> Browser understand this object and convert them in HTML format. 
It is important to understand that ReactElement is not HTML, it is a JavaScript object
 that describes the structure of the UI.
*/
  const heading = React.createElement(
    "h1",
    {"id": "parent"},
    [React.createElement("div", {id: "child"}, 
        [React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tsdfdag")]),

    React.createElement("div", {id: "child2"}, 
        [React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 second child")])
] 
    //when you have multiple children, you can pass them as an array 
  );
  console.log(heading) //This will log the React element object;


  const root = ReactDOM.createRoot(document.getElementById("root"));
  //This will create a root for React to render the element
  root.render(heading);
