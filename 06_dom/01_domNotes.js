/* 

Notes on DOM (Document Object Model) in JavaScript:

    The Document Object Model (DOM) is a programming interface for web documents. 
    It represents the structure of a document as a tree of objects, allowing scripts 
    (such as JavaScript) to dynamically interact with and manipulate the content, structure, 
    and styling of a webpage.

1. What is the DOM?

    DOM is a representation of the HTML document.
    It represents the document as a tree structure, 
    where each node is an object representing a part of the document.
    JavaScript can interact with the DOM to manipulate content, 
    structure, and style.
    The DOM is not part of JavaScript; it's an API provided by browsers 
    to work with HTML and XML documents.

2. DOM Tree Structure

    The DOM represents the HTML document as a hierarchical tree structure.

    Document Node: Represents the entire document (document object).
    Element Nodes: Represent HTML elements like <div>, <p>, etc.
    Attribute Nodes: Represent HTML attributes like class, id, etc.
    Text Nodes: Represent the text inside HTML elements.

Example tree for a simple HTML:

html
Copy code
<html>
  <body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>

3. Accessing DOM Elements
    You can access DOM elements using various methods provided by the document object:

    ~getElementById(id): 
    Returns the element with the specified id.
    let element = document.getElementById("myId");

    ~getElementsByClassName(className):
    Returns a collection of elements with the specified class name
    let elements = document.getElementsByClassName("myClass");

    ~getElementsByTagName(tagName): 
    Returns a collection of elements with the specified tag name.
    let elements = document.getElementsByTagName("p");

    ~querySelector(selector): 
    Returns the first element that matches the specified CSS selector.
    let element = document.querySelector(".myClass");

    querySelectorAll(selector): 
    Returns all elements that match the specified CSS selector.
    let elements = document.querySelectorAll("div > p");

4. Manipulating DOM Elements
    You can modify the content, structure, and attributes of 
    DOM elements dynamically using JavaScript.

    ~Changing Content:

    let element = document.getElementById("myId");
    element.innerHTML = "New Content";
    
    ~Changing Attributes:
    element.setAttribute("src", "image.jpg");
    element.id = "newId";

    ~Changing Style:
    element.style.color = "blue";
    element.style.fontSize = "20px";

    Adding and Removing Classes:

    element.classList.add("newClass");
    element.classList.remove("oldClass");


5. Creating and Inserting New Elements
    You can create new DOM elements and add them to the document dynamically.

    ~Creating Elements:
    let newElement = document.createElement("div");

    ~Appending Elements:
    document.body.appendChild(newElement);

    ~Inserting Elements Before/After Another Element:
    let referenceElement = document.getElementById("myId");
    referenceElement.parentNode.insertBefore(newElement, referenceElement);

    Removing Elements:
    referenceElement.parentNode.removeChild(referenceElement);


6. Event Handling in the DOM
    Events allow JavaScript to react to user actions like clicks, 
    key presses, or form submissions.

    ~Adding Event Listeners:
    let button = document.getElementById("myButton");
    button.addEventListener("click", function() {
    alert("Button clicked!");
    });

    ~Removing Event Listeners:
    button.removeEventListener("click", eventHandlerFunction);

    ~Common DOM Events:

    click: Fires when an element is clicked.
    keydown: Fires when a key is pressed down.
    keyup: Fires when a key is released.
    submit: Fires when a form is submitted.

7. Traversing the DOM
    You can move around the DOM tree to access parent, 
    child, and sibling elements.

    ~Parent Node:
    let parent = element.parentNode;

    ~Child Nodes:
    let children = element.childNodes;  // Includes text nodes
    let firstChild = element.firstChild;
    let lastChild = element.lastChild;

    ~Sibling Nodes:
    let nextSibling = element.nextSibling;
    let previousSibling = element.previousSibling;

8. DOMContentLoaded vs Window Load

    ~DOMContentLoaded: Fires when the HTML document is completely loaded and parsed, 
    without waiting for stylesheets, images, and subframes to finish loading.

    document.addEventListener("DOMContentLoaded", function() {
    // DOM is ready
    });

    ~Window Load: Fires when the whole page (HTML, CSS, images, etc.) is fully loaded.
    window.addEventListener("load", function() {
    // Everything is loaded
    });


Conclusion:

    The DOM is the key interface that connects web documents with JavaScript, enabling dynamic content, interactivity, 
    and real-time updates. Understanding how to manipulate the DOM effectively allows developers to create engaging web applications.


    
*/
