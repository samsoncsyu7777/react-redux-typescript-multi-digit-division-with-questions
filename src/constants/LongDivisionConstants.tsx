const constants: { [key: string]: string[] } = {
  stageText: ["階段", "阶段", "Stage", "Étape"],
  topics: ["除以", "除以", " divided by ", " divisé par "],
  wellDone: [
    "你做得到﹗你完成了這題除法計算﹗",
    "你做得到﹗你完成了这题除法计算﹗",
    "You can do it! You have completed this division calculation!",
    "Vous pouvez le faire! Vous avez terminé ce calcul de division!",
  ],
  nextOriginalDigit: [
    "這位值上的數字不正確，這應是上方原來被除數的數字。",
    "这位值上的数字不正确，这应是上方原来被除数的数字。",
    "The digit on this place value is incorrect. This should be the digit from the original dividend above.",
    "Le chiffre de cette valeur de position est incorrect. Cela devrait être le chiffre du dividende original ci-dessus.",
  ],
  zeroAtFront: [
    "0是正確的，在左方的0不用寫出來。",
    "0是正确的，在左方的0不用写出来。",
    "0 is correct, the 0 on the left does not need to be written.",
    "0 est correct, le 0 à gauche n'a pas besoin d'être écrit.",
  ],
  quotientTooSmall: [
    "這位值上的商太小，所以得出的餘數比除數大。",
    "这位值上的商太小，所以得出的余数比除数大。",
    "The quotient on this place value is too small, so the remainder obtained is larger than the divisor.",
    "Le quotient sur cette valeur de position est trop petit, donc le reste obtenu est plus grand que le diviseur.",
  ],
  subtractDigit: [
    "這位值上的減法不正確。",
    "这位值上的减法不正确。",
    "The subtraction on this place value is incorrect.",
    "La soustraction sur cette valeur de position est incorrecte.",
  ],
  quotientNear: [
    "這位值上的商是不是太大或太小﹖讓我們來驗証。",
    "这位值上的商是不是太大或太小﹖让我们来验证。",
    "Is the quotient on this place value too small or too large? Let us check it.",
    "Le quotient de cette valeur de position est-il trop petit ou trop grand? Vérifions-le.",
  ],
  quotientTooLarge: [
    "這位值上的商太大，所以乘出來的積比這位值上的被除數還大。",
    "这位值上的商太大，所以乘出来的积比这位值上的被除数还大。",
    "The quotient on this place value is too large, so the product obtained is larger than the dividend on this place value.",
    "Le quotient de cette valeur de position est trop grand, donc le produit obtenu est plus grand que le dividende de cette valeur de position.",
  ],
  productDigit: [
    "這位值上的積不正確，這應是商和除數相關位值上的數字（黃色格內的數字）乘出來的積，再加上右方位值的進位，然後寫上這數的個位數字。",
    "这位值上的积不正确，这应是商和除数相关位值上的数字（黄色格内的数字）乘出来的积，再加上右方位值的进位，然后写上这数的个位数字。",
    "The product on this place value is incorrect. This should be the product of the digit (the digit in the yellow box) on the relevant place value of the quotient and the divisor, plus the carry of the right place value, and then write this number Ones digit.",
    "Le produit de cette valeur de position est incorrect. Cela doit être le produit du chiffre (le chiffre dans la case jaune) sur la valeur de position appropriée du quotient et du diviseur, plus le report de la valeur de position correcte, puis écrire ce nombre Un chiffre.",
  ],
  quotientHintLeft: [
    "這位值上的除法是 ",
    "这位值上的除法是 ",
    "The division on this place value is ",
    "La division de cette valeur de position est ",
  ],
  quotientHintRight: [
    " ，這位值上的商接近 ",
    " ，这位值上的商接近 ",
    " . The quotient of this value is close to ",
    " . Le quotient de cette valeur est proche de ",
  ],
  quotientHintEnd: [" 。", " 。", " .", " ."],
  zeroDivisorHint: [
    "除數不可以是0。",
    "除数不可以是0。",
    "The divisor cannot be 0.",
    "Le diviseur ne peut pas être 0.",
  ],
};

export default constants;
