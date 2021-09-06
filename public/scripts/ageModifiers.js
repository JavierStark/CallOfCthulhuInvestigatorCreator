function displayCharsToModify(sheet) {
  console.log(sheet.basicInfo);
  let age = sheet.basicInfo.age;
  let strDiv = document.getElementById("strMod");
  let conDiv = document.getElementById("conMod");
  let sizDiv = document.getElementById("sizMod");
  let dexDiv = document.getElementById("dexMod");
  let appDiv = document.getElementById("appMod");
  let eduDiv = document.getElementById("eduMod");
  let luckDiv = document.getElementById("luckReroll");

  if (age >= 15 && age <= 19) {
    strDiv.classList.remove("d-none");
    sizDiv.classList.remove("d-none");
    luckDiv.classList.remove("d-none");
  } else if (age >= 20 && age <= 39) {
    eduDiv.classList.remove("d-none");
  } else if (age >= 40) {
    eduDiv.classList.remove("d-none");
    strDiv.classList.remove("d-none");
    conDiv.classList.remove("d-none");
    dexDiv.classList.remove("d-none");
    appDiv.classList.remove("d-none");
  }
}
