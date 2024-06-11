let contain = document.querySelector(".container");

const skills = ["an assignment.   ", "for research purpose.   "];
let skills_index = 0;
let char_index = 0;

setInterval(update_text, 300);

function update_text() {
  char_index++;
  contain.innerHTML = `<h1 style="font-size: 24px; font-weight: 200;">This page is ${skills[skills_index].slice(0, char_index)}</h1>`;
  
  if (skills[skills_index].length === char_index) {
    char_index = 0;
    skills_index++;
  }
  
  if (skills_index === skills.length) {
    skills_index = 0;
  }
}

