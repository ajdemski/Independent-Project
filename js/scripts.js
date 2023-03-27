//Business Logic

const languages = {
ruby: "Ruby is a dynamic, open-source programming language that is easy to read and write.",
javascript: "JavaScript is a high-level, interpreted programming language that is used to create interactive web pages and applications.",
python: "Python is an interpreted, high-level, general-purpose programming language that is widely used in scientific computing, data analysis, and artificial intelligence.",
};

function generateOutput(experience, purpose, languages) {
let output = "";
output += `Based on your experience level of ${experience} and your interest in ${purpose}, we suggest you try using `;
if (languages.length === 1) {
output += languages[0];
} else if (languages.length === 2) {
output += `{languages[0]} and {languages[1]}`;
} else if (languages.length === 3) {
output += `{languages[0]}, {languages[1]}, and {languages[2]}`;
}
output += ". ";
for (let i = 0; i < languages.length; i++) {
output += `{languages[i]}: {languages[languages[i]]} `;
}
return output;
}

//User Interface Logic

const experienceInput = document.getElementById("experience");
const purposeInputs = document.getElementsByName("purpose");
const languageInputs = document.getElementsByName("language");
const submitButton = document.querySelector("button[type=submit]");
const outputElement = document.getElementById("output");

document.addEventListener("DOMContentLoaded", function() {
const submitBtn = document.querySelector("button[type='submit']");
const output = document.querySelector("#output");

submitBtn.addEventListener("click", function() {
const experience = document.querySelector("#experience").value;
const purpose = document.querySelector("input[name='purpose']:checked").value;
const languages = document.querySelectorAll("input[name='language']:checked");
const languageValues = Array.from(languages).map(function(language) {
return language.value;
});

let suggestedLanguages = [];
if (experience === "none" && purpose === "web-development") {
suggestedLanguages.push("JavaScript");
} else if (purpose === "data-analysis") {
suggestedLanguages.push("Python");
} else {
suggestedLanguages.push("Ruby", "Python");
}

output.textContent = `Based on your experience level, purpose, and preferred languages, we suggest the following language(s): ${suggestedLanguages.join(", ")}.`;
});
});
