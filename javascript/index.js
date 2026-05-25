const grabConnectSection = document.getElementById("connect");
const addFooter = document.createElement("footer");
connect.after(addFooter);
addFooter.append("Footer Placement");
addFooter.setAttribute("id", "newFooter");

//  Create a variable named today and assign it a new date object
const today = new Date();
// hint: new Date() constructor
//  Create a variable named thisYear and assign it the current year from your date object. Use a method to do this, don't hardcode "2024" because next year your website will have the wrong year!
const thisYear = today.getFullYear();
console.log(thisYear);
// hint: getFullYear method
//  Create a variable named footer and assign it the footer element by using "DOM Selection" to select the <footer> element from the DOM
const footer = document.querySelector("footer");
console.log("you got the footer");
// hint: querySelector method or similar
//  Create a variable named copyright and use it to create a new paragraph (p) element
const copyright = document.createElement("p");
// hint: createElement method
//  Set the inner HTML of your copyright element to display your name and the current year
// hint: use the copyright variable and the thisYear variable from earlier
copyright.innerHTML = `Alix ${thisYear} ©`;
//  Append the copyright element to the footer using "DOM Manipulation"
// hint: appendChild method or similar
footer.appendChild(copyright);
//  STRETCH GOAL: Use unicode to also include the copyright symbol ( © ) in your footer content
//  Save and refresh your browser
// You should see the text "Your Name 2024" at the bottom of the page
