# Short Answer Questions
For the following five questions, type out your answers in 1-2 paragraphs (no coding required):



1. How is a global variable different from a local variable in JavaScript?
Answer: First a global variable is different because it is declared in 2 ways:
1: It is a global variable when it is declared without a var keyword whether it is inside of a function or not.
2: It is declared with the var keyword but not inside of a function.
A local variable is created when it is inside of a function, thus creating a local scope, it can be only accessed inside of the function where the variable was declared.



2. What is closure?
Answer: A closure is an inner function that has access to an outer function's scope.
It has access to its own scope, the outer function's variables and the global variables.




3. What is scope? When is new scope created in JavaScript?
Answer: A scope is the area of a variable that is controlled by the location of where the variable was declared and also defines a part of a program where the variable is accessible.
A scope is created when a variable is declared inside of a function, outside of the function and when a variable is declared with out using the var keyword. There only Local scope and global scope.



4. What is a callback? Provide an example of when you can use one in JavaScript
Answer: A callback is a function that is passed to another function as a param. The function that was passed is executed in the function that it was passed to.
The array methods like map or forEach are examples where the params are callbacks.



5. What happens when you type a URL into a browser and hit enter?
Answer: The browser you are using takes the DNS from the url, then queries it to find the ip address for the URL, then a request is sent then if it is successful, it will return the contents of the page (from the url).
