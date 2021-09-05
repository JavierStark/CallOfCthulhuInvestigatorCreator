const skills = document.getElementsByClassName("pSkillSelector");
const multipliers = document.getElementsByClassName("pMultiplierInput");

function checkSelectedSkills() {
  for (let i = 0; i < skills.length; i++) {
    if (skills[i].value === "none") {
      multipliers[i].setAttribute("disabled", "true");
    } else {
      multipliers[i].removeAttribute("disabled");
    }
  }
}

function calcSkillPoints() {
  let totalCalc = 0;
  for (let i = 0; i < skills.length; i++) {
    if (skills[i].value !== "none") {
      let skillValue = document.getElementById(skills[i].value).value;
      let calc = skillValue * multipliers[i].value;
      totalCalc += calc;
    }
  }

  document.getElementById("result").value = totalCalc;
}
