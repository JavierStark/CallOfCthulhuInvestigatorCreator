function throwDice(element, diceN, diceFaces, multiplier = 1, bonus = 0) {
  let diceResult =
    (Math.floor(Math.random() * (diceN * diceFaces)) + (1 + bonus)) *
    multiplier;
  element.value = diceResult;

  characteristicsUpdated();
}
