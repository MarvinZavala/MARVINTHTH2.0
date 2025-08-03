console.log("I'm in the javascript file!");

const funElement = document.getElementById("fun");
console.log(funElement.innerHTML);

const pElements = document.getElementsByTagName("p");
console.log(pElements);
console.log(pElements[1]);

const pTagsByClass = document.getElementsByClassName("js-p-tag");
console.log(pTagsByClass);