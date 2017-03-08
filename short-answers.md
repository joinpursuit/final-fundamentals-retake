# Short Answer Questions
For the following five questions, type out your answers in 1-2 paragraphs (no coding required):

1. How is a global variable different from a local variable in JavaScript?
Answer:

A global variable is different from a local variable in Javascript because a global variable is usually called outside of a function. It is also known to be called in other places in the function which can allow this variable to be overwritten. However, a local variable is always called within the scope of a function. A developer does not have to worry about the local variable modifying the state unlike a gloabl variable. 

2. What is closure?
Answer:
A closure is a inner function that has access to the outside of a function. An example of a closure would be creating a function inside of another function which allows us to do certain things like using a callback function to be called at a later time. 

3. What is scope? When is new scope created in JavaScript?
Answer: 
A scope has two type of variables in Javascript. We can declare a local variable that can have control over the inside scope of a function. And we can declare a global variable that has control over things that are outside of a function. A new scope can be created anytime in Javascript. You do not have to neccessarily use the keyword var to declare a new scope. 

4. What is a callback? Provide an example of when you can use one in JavaScript
Answer:
A callback is function that is within another function who gets called at a later time. An example would be a function called 'Names' which takes in a person's first and last name as a string, within this function you can create an anonymous function called getName which returns the first and last name added together. 

5. What happens when you type a URL into a browser and hit enter?
Answer:  When you type a URL into a browser and hit enter a http request is sent to your server and sends the data that is associated with that page. If the route matches a route that you have built in the backend of your computer. It fire off that request whether it is to GET,POST,PUT or DELETE somethin and uses the HTML parser to recreate the document structure which will then be later presented on your screen. 


