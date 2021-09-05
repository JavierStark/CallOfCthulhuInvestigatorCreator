let independentElements = null;
let dependentElements = null;

var str,
  con,
  siz,
  dex,
  app,
  int,
  pow,
  edu,
  age = 0;

function characteristicsUpdated() {
  if (independentElements === null) {
    independentElements = document.getElementsByClassName("independent");
  }
  if (dependentElements === null) {
    dependentElements = document.getElementsByClassName("dependent");
  }
  charVarsSetup();

  setHP();
  setMovement();
  setSanity();
  setMagicPoints();
  setDamageBonusAndBuild();
}

function charVarsSetup() {
  str = Number(independentElements.namedItem("strength").value);
  con = Number(independentElements.namedItem("constitution").value);
  siz = Number(independentElements.namedItem("size").value);
  dex = Number(independentElements.namedItem("dexterity").value);
  app = Number(independentElements.namedItem("appearance").value);
  int = Number(independentElements.namedItem("intelligence").value);
  pow = Number(independentElements.namedItem("power").value);
  edu = Number(independentElements.namedItem("education").value);
  age = Number(independentElements.namedItem("age").value);
}

function setHP() {
  dependentElements.namedItem("hp").value = Math.floor((con + siz) / 10);
}

function setMovement() {
  let movement = 0;
  if (dex < siz && str < siz) {
    movement = 7;
  } else if (dex >= siz || str >= siz || (str === dex) === siz) {
    movement = 8;
  } else if (dex > siz && str > siz) {
    movement = 9;
  }

  if (age >= 40 && age < 50) {
    movement -= 1;
  } else if (age >= 50 && age < 60) {
    movement -= 2;
  } else if (age >= 60 && age < 70) {
    movement -= 3;
  } else if (age >= 70 && age < 80) {
    movement -= 4;
  } else if (age >= 80) {
    movement -= 5;
  }

  dependentElements.namedItem("movement").value = movement;
}

function setSanity() {
  dependentElements.namedItem("sanity").value = pow;
}

function setMagicPoints() {
  dependentElements.namedItem("magicPoints").value = Math.floor(pow / 5);
}

function setDamageBonusAndBuild() {
  let combinedValue = str + siz;
  let dmgBonus = 0;
  let build = 0;

  if (combinedValue >= 2 && combinedValue <= 64) {
    dmgBonus = build = "-2";
  } else if (combinedValue >= 65 && combinedValue <= 84) {
    dmgBonus = build = "-1";
  } else if (combinedValue >= 85 && combinedValue <= 124) {
    dmgBonus = "None";
    build = "0";
  } else if (combinedValue >= 125 && combinedValue <= 164) {
    dmgBonus = "+1D4";
    build = "+1";
  } else if (combinedValue >= 165 && combinedValue <= 204) {
    dmgBonus = "+1D6";
    build = "+2";
  }

  dependentElements.namedItem("damageBonus").value = dmgBonus;
  dependentElements.namedItem("build").value = build;
}
