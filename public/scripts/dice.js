function throwCharDice(element, diceN, diceFaces, multiplier = 1, bonus = 0) {
  let diceResult = throwDice(diceN, diceFaces, multiplier, bonus);

  element.value = diceResult;

  characteristicsUpdated();
}

function throwDice(diceN, diceFaces, multiplier = 1, bonus = 0) {
  let diceResult = 0;
  for (let i = 0; i < diceN; i++) {
    diceResult += Math.floor(Math.random() * diceFaces) + 1;
  }
  diceResult += bonus;
  diceResult *= multiplier;
  return diceResult;
}
