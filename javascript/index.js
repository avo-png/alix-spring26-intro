//add a footer
const grabConnectSection = document.getElementById("connect");
const addFooter = document.createElement("footer");
connect.after(addFooter);
addFooter.append("Footer Placement");
addFooter.setAttribute("id", "newFooter");

// add the name and copyright
const today = new Date();
const thisYear = today.getFullYear();
console.log(thisYear);
const footer = document.querySelector("footer");
console.log("you got the footer");
const copyright = document.createElement("p");
copyright.innerHTML = `Alix ${thisYear} ©`;
footer.appendChild(copyright);

// add in the skills list
const skills = ["Javascript", "HTML", "CSS", "Github", "SQL"];
const skillsSection = document.getElementById("skills");
const skillsList = document.querySelector("#skills ul");
for (let i = 0; i < skills.length; i++) {
	const skill = document.createElement("li");
	skill.textContent = skills[i];
	skillsList.appendChild(skill);
}
