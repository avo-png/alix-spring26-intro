// mobile nav
function dropNavBar() {
	var x = document.getElementById("myLinks");
	if (x.style.display === "flex") {
		x.style.display = "none";
	} else {
		x.style.display = "flex";
	}
}

//add a footer
const grabConnectSection = document.getElementById("messages");
const addFooter = document.createElement("footer");
grabConnectSection.after(addFooter);
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

// Handle Message Form Submit
const messageForm = document.querySelector('form[name="leave_message"]');
messageForm.addEventListener("submit", function (e) {
	e.preventDefault();
	const usernameInput = e.target.usersName.value;
	const emailInput = e.target.usersEmail.value;
	const messageInput = e.target.usersMessage.value;

	console.log(usernameInput);
	console.log(emailInput);
	console.log(messageInput);

	const messageSection = document.getElementById("messages");
	const messageList = document.querySelector("#messages ul");
	const newMessage = document.createElement("li");

	newMessage.innerHTML = `<a href="mailto:${emailInput}">${usernameInput}</a> <span>${messageInput}</span>`;

	const removeButton = document.createElement("button");
	removeButton.innerText = "remove";
	removeButton.setAttribute("type", "button");

	removeButton.addEventListener("click", function () {
		const entry = this.parentNode;
		entry.remove();
	});

	newMessage.appendChild(removeButton);
	messageList.append(newMessage);

	messageForm.reset();
});

// fetch repos
fetch("https://api.github.com/users/avo-png/repos")
	.then((response) => {
		if (!response.ok) {
			throw new Error("Request failed");
		}
		return response.json(); // Parse the response as JSON
	})
	.then((data) => {
		const repositories = data;
		console.log(data); // Do something with the data

		const projectSection = document.getElementById("projects");
		const projectList = document.querySelector("#projects ul");
		for (let i = 0; i < repositories.length; i++) {
			const project = document.createElement("li");
			project.innerText = repositories[i].name;
			projectList.appendChild(project);
		}
	})
	.catch((error) => {
		console.error("An error occurred:", error);
	});
