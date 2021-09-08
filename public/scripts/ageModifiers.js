let modifiersList = [];

function displayCharsToModify(sheetParam) {
  sheet = sheetParam;
  age = sheet.basicInfo.age;
  reduceDiv = document.getElementById("reduceDiv");
  strDiv = document.getElementById("strMod");
  conDiv = document.getElementById("conMod");
  sizDiv = document.getElementById("sizMod");
  dexDiv = document.getElementById("dexMod");
  appDiv = document.getElementById("appMod");
  eduDiv = document.getElementById("eduMod");
  luckDiv = document.getElementById("luckReroll");

  if (age >= 15 && age <= 19) {
    reduceDiv.classList.remove("d-none");
    strDiv.classList.remove("d-none");
    sizDiv.classList.remove("d-none");
    luckDiv.classList.remove("d-none");
    eduDiv.classList.remove("d-none");
    eduDiv.getElementsByTagName("button")[0].classList.add("d-none");
    eduDiv.getElementsByTagName("input")[1].setAttribute("readonly", true);

    eduDiv.getElementsByTagName("input")[1].value =
      sheet.characteristics.education - 5;

    setPointsToReduce();
    pointsToReduce;
  } else if (age >= 20 && age <= 39) {
    eduDiv.classList.remove("d-none");
  } else if (age >= 40) {
    reduceDiv.classList.remove("d-none");
    eduDiv.classList.remove("d-none");
    strDiv.classList.remove("d-none");
    conDiv.classList.remove("d-none");
    dexDiv.classList.remove("d-none");
    appDiv.classList.remove("d-none");

    appDecrement();
    setPointsToReduce();
  }
}

function eduImprovementCheck() {
  let totalEduChecks = 0;
  if (age >= 20 && age <= 39) {
    totalEduChecks = 1;
  } else if (age >= 40 && age <= 49) {
    totalEduChecks = 2;
  } else if (age >= 50 && age <= 59) {
    totalEduChecks = 3;
  } else if (age >= 60) {
    totalEduChecks = 4;
  }

  let totalEdu = Number(sheet.characteristics.education);

  for (let i = 0; i < totalEduChecks; i++) {
    if (throwDice(1, 100) > sheet.characteristics.education) {
      totalEdu += throwDice(1, 10);
    }
  }

  eduDiv.getElementsByTagName("input")[1].value = totalEdu;
}

function appDecrement() {
  let pointsToReduce = (Math.floor(age / 10) - 3) * 5;

  appDiv.getElementsByTagName("input")[1].value =
    sheet.characteristics.appearance - pointsToReduce;
}

function setPointsToReduce() {
  maxPoints = 0;
  if ((age >= 15 && age <= 19) || (age >= 40 && age <= 49)) {
    maxPoints = 5;
  } else if (age >= 50 && age <= 59) {
    maxPoints = 10;
  } else if (age >= 60 && age <= 69) {
    maxPoints = 20;
  } else if (age >= 70 && age <= 79) {
    maxPoints = 40;
  } else if (age >= 80 && age <= 80) {
    maxPoints = 80;
  }

  let modElements = document.getElementsByClassName("mod");
  for (let i = 0; i < modElements.length; i++) {
    const e = modElements[i];
    if (!e.parentElement.parentElement.classList.contains("d-none")) {
      modifiersList.push(e);
    }
  }
  console.log(modifiersList);

  pointReduceField = document.getElementById("pointsToReduce");
  pointReduceField.value = maxPoints;

  modifiersList.forEach((e) => {
    e.setAttribute("max", pointReduceField.value);
  });
}

function modValueChanged(caller) {
  let tempUsedPoints = 0;
  let usedPoints = 0;

  modifiersList.forEach((e) => {
    tempUsedPoints += Number(e.value);
  });

  if (tempUsedPoints > maxPoints) {
    caller.value = caller.getAttribute("prevValue");
  }

  modifiersList.forEach((e) => {
    usedPoints += Number(e.value);
  });

  pointReduceField.value = maxPoints - usedPoints;

  modifiersList.forEach((e) => {
    e.setAttribute("prevValue", e.value);
    let div = e.parentElement.parentElement;
    let inputs = div.getElementsByTagName("input");

    inputs[2].value = Number(inputs[0].value) - Number(inputs[1].value);
  });
}

function setModResults() {
  modifiersList.forEach((e) => {});
}
