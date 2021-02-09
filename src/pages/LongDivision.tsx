import React, { useState, useEffect } from "react";
import {
  Grid,
  Button,
} from "@material-ui/core";
import { AlertSnackbar } from "../components/AlertComponents";
import { MyFrame } from "../components/HeadingComponents";
import { MyKeypad } from "../components/KeypadComponents";
import { MyInput, HorizontalLine, VerticalLine } from "../components/InputComponents";
import ForwardRoundedIcon from '@material-ui/icons/ForwardRounded';
import { pagesStyles } from "../themes/styles";

interface ILongDivisionOwnProps {
  languageIndex: number;
  topic: string;
  learningTool: string;
  topicIndex: number;
  learningToolIndex: number;
}

//×÷👍👍🏻
export const LongDivision: React.FC<ILongDivisionOwnProps> = ({ languageIndex, topic, learningTool, topicIndex, learningToolIndex }): JSX.Element => {
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [severity, setSeverity] = useState<"error" | "success" | "info" | "warning">("error");
  const [completed, setCompleted] = useState<boolean>(false);
  const [zeroArray, setZeroArray] = useState<Array<number>>([]);
  const [inputTypeIndex, setInputTypeIndex] = useState<number>(0);
  const [quotientArray, setQuotientArray] = useState<Array<number>>([]);
  const [quotientStartIndex, setQuotientStartIndex] = useState<number>(0);
  const [quotientFocusedIndex, setQuotientFocusedIndex] = useState<number>(-1);
  const [quotientHighlighted, setQuotientHighlighted] = useState<boolean>(false);
  const [divisorArray, setDivisorArray] = useState<Array<number>>([]);
  const [divisorFocusedIndex, setDivisorFocusedIndex] = useState<number>(0);
  const [divisorHighlightStartIndex, setDivisorHighlightStartIndex] = useState<number>(0);
  const [divisorHighlightEndIndex, setDivisorHighlightEndIndex] = useState<number>(learningToolIndex);
  const [divisorHighlighted, setDivisorHighlighted] = useState<boolean>(false);
  const [divisorValue, setDivisorValue] = useState<number>(0);
  const [dividendArray, setDividendArray] = useState<number[][]>([[]]);
  const [dividendLineFocusedIndex, setDividendLineFocusedIndex] = useState<number>(0);
  const [dividendPositionFocusedIndex, setDividendPositionFocusedIndex] = useState<number>(0);
  const [dividendStartIndexArray, setDividendStartIndexArray] = useState<Array<number>>([0]);
  const [dividendEndIndexArray, setDividendEndIndexArray] = useState<Array<number>>([topicIndex + 1]);
  const [dividendHighlighted, setDividendHighlighted] = useState<boolean>(false);
  const [dividendValue, setDividendValue] = useState<number>(0);
  const [productArray, setProductArray] = useState<number[][]>([[]]);
  const [productLineFocusedIndex, setProductLineFocusedIndex] = useState<number>(-1);
  const [productPositionFocusedIndex, setProductPositionFocusedIndex] = useState<number>(0);
  const [productStartIndexArray, setProductStartIndexArray] = useState<Array<number>>([]);
  const [productEndIndexArray, setProductEndIndexArray] = useState<Array<number>>([]);
  const [productHighlighted, setProductHighlighted] = useState<boolean>(false);
  const [productValue, setProductValue] = useState<number>(0);
  const [productCarryArray, setProductCarryArray] = useState<number[][]>([[]]);
  const timeDelay: number = 200;
  const timeDelayLarge: number = 1500;

  const topics: Array<string> = [
    "除以",
    "除以",
    " divided by ",
    " divisé par "
  ];

  const wellDone: Array<string> = [
    "你做得到﹗你完成了這題除法計算﹗",
    "你做得到﹗你完成了这题除法计算﹗",
    "You can do it! You have completed this division calculation!",
    "Vous pouvez le faire! Vous avez terminé ce calcul de division!"
  ];

  const nextOriginalDigit: Array<string> = [
    "這位值上的數字不正確，這應是上方原來被除數的數字。",
    "这位值上的数字不正确，这应是上方原来被除数的数字。",
    "The digit on this place value is incorrect. This should be the digit from the original dividend above.",
    "Le chiffre de cette valeur de position est incorrect. Cela devrait être le chiffre du dividende original ci-dessus."
  ];

  const zeroAtFront: Array<string> = [
    "0是正確的，在左方的0不用寫出來。",
    "0是正确的，在左方的0不用写出来。",
    "0 is correct, the 0 on the left does not need to be written.",
    "0 est correct, le 0 à gauche n'a pas besoin d'être écrit."
  ];

  const quotientTooSmall: Array<string> = [
    "這位值上的商太小，所以得出的餘數比除數大。",
    "这位值上的商太小，所以得出的余数比除数大。",
    "The quotient on this place value is too small, so the remainder obtained is larger than the divisor.",
    "Le quotient sur cette valeur de position est trop petit, donc le reste obtenu est plus grand que le diviseur."
  ];

  const subtractDigit: Array<string> = [
    "這位值上的減法不正確。",
    "这位值上的减法不正确。",
    "The subtraction on this place value is incorrect.",
    "La soustraction sur cette valeur de position est incorrecte."
  ];

  const quotientNear: Array<string> = [
    "這位值上的商是不是太大或太小﹖讓我們來驗証。",
    "这位值上的商是不是太大或太小﹖让我们来验证。",
    "Is the quotient on this place value too small or too large? Let us check it.",
    "Le quotient de cette valeur de position est-il trop petit ou trop grand? Vérifions-le."
  ];

  const quotientTooLarge: Array<string> = [
    "這位值上的商太大，所以乘出來的積比這位值上的被除數還大。",
    "这位值上的商太大，所以乘出来的积比这位值上的被除数还大。",
    "The quotient on this place value is too large, so the product obtained is larger than the dividend on this place value.",
    "Le quotient de cette valeur de position est trop grand, donc le produit obtenu est plus grand que le dividende de cette valeur de position."
  ];

  const productDigit: Array<string> = [
    "這位值上的積不正確，這應是商和除數相關位值上的數字（黃色格內的數字）乘出來的積，再加上右方位值的進位，然後寫上這數的個位數字。",
    "这位值上的积不正确，这应是商和除数相关位值上的数字（黄色格内的数字）乘出来的积，再加上右方位值的进位，然后写上这数的个位数字。",
    "The product on this place value is incorrect. This should be the product of the digit (the digit in the yellow box) on the relevant place value of the quotient and the divisor, plus the carry of the right place value, and then write this number Ones digit.",
    "Le produit de cette valeur de position est incorrect. Cela doit être le produit du chiffre (le chiffre dans la case jaune) sur la valeur de position appropriée du quotient et du diviseur, plus le report de la valeur de position correcte, puis écrire ce nombre Un chiffre."
  ];

  const quotientHintLeft: Array<string> = [
    "這位值上的除法是 ",
    "这位值上的除法是 ",
    "The division on this place value is ",
    "La division de cette valeur de position est "
  ];

  const quotientHintRight: Array<string> = [
    " ，這位值上的商接近 ",
    " ，这位值上的商接近 ",
    " . The quotient of this value is close to ",
    " . Le quotient de cette valeur est proche de "
  ];

  const quotientHintEnd: Array<string> = [
    " 。",
    " 。",
    " .",
    " ."
  ]

  useEffect(() => {
    resetDefault();
  }, [learningToolIndex]);

  useEffect(() => {
    resetDefault();
  }, [topicIndex])

  const closeAlert = () => {
    setOpenAlert(false);
  };

  function resetDefault() {
    setSeverity("error");
    setCompleted(false);
    setInputTypeIndex(0);
    setQuotientStartIndex(0)
    setQuotientFocusedIndex(-1);
    setQuotientHighlighted(false);
    setDivisorFocusedIndex(0);
    setDivisorHighlightStartIndex(0);
    setDivisorHighlightEndIndex(learningToolIndex);
    setDivisorHighlighted(false);
    setDivisorValue(0);
    setDividendLineFocusedIndex(0);
    setDividendPositionFocusedIndex(0);
    setDividendStartIndexArray([0]);
    setDividendEndIndexArray([topicIndex + 1]);
    setDividendHighlighted(false);
    setDividendValue(0);
    setProductArray([]);
    setProductLineFocusedIndex(-1);
    setProductPositionFocusedIndex(0);
    setProductStartIndexArray([]);
    setProductEndIndexArray([]);
    setProductHighlighted(false);
    setProductValue(0);
    setProductCarryArray([]);
    let tmpZeroArray: Array<number> = [];
    for (let i = 0; i < topicIndex + 2; i++) {
      tmpZeroArray.push(0);
    }
    setZeroArray(tmpZeroArray);
    setQuotientArray(tmpZeroArray);
    var tmpTwoDimenArray = [tmpZeroArray];
    setDividendArray(tmpTwoDimenArray);
    tmpZeroArray = [];
    for (let i = 0; i < learningToolIndex + 1; i++) {
      tmpZeroArray.push(0);
    }
    setDivisorArray(tmpZeroArray);
  }

  const resetClick = () => {
    if (completed) {
      resetDefault();
    } else {

    }
  };

  function handleDividendInput(value: number) {
    setNestedArrayValue(value, setDividendArray, dividendLineFocusedIndex, dividendPositionFocusedIndex, false, false);
    if (dividendLineFocusedIndex === 0) {
      if (dividendPositionFocusedIndex < dividendEndIndexArray[0]) {
        setDividendPositionFocusedIndex(dividendPositionFocusedIndex + 1);
      } else {
        setInputTypeIndex(1);
      }
    } else {
      //second and other line dividends
      if (dividendPositionFocusedIndex > quotientFocusedIndex) {
        //after subtraction, take next digit and calculate new dividend value
        if (value === dividendArray[0][quotientFocusedIndex + 1]) {
          //correct next digit
          var tmpDividendValue = 0;
          var i;
          for (i = dividendStartIndexArray[dividendLineFocusedIndex]; i < dividendEndIndexArray[dividendLineFocusedIndex]; i++) {
            tmpDividendValue = tmpDividendValue * 10 + dividendArray[dividendLineFocusedIndex][i];
          }
          tmpDividendValue = tmpDividendValue * 10 + value;
          setDividendValue(tmpDividendValue);
          setInputTypeIndex(2);
          setQuotientFocusedIndex(quotientFocusedIndex + 1);
          setDivisorHighlightStartIndex(0);
          setDivisorHighlightEndIndex(divisorArray.length - 1);
          setDivisorHighlighted(true);
          setDividendHighlighted(true);
          setProductHighlighted(false);
        } else {
          //incorrect next digit
          setErrorMessage(nextOriginalDigit[languageIndex]);
          setSeverity("error");
          setTimeout(() => {
            setOpenAlert(true);
          }, timeDelay);
        }
      } else {
        //check the answer of subtraction
        var diff = dividendValue - productValue;
        var diffAtPlace = Math.floor(diff / (10 ** (quotientFocusedIndex - dividendPositionFocusedIndex)));
        var diffAtDigit = diffAtPlace % 10;
        if (value === diffAtDigit) {
          //correct subtracting this digit
          if (dividendPositionFocusedIndex === dividendStartIndexArray[dividendLineFocusedIndex - 1]) {//productStartIndexArray[productLineFocusedIndex]
            //complete subtraction, complete or take next digit
            if (value === 0) {
              //not display 0 at the front
              setErrorMessage(zeroAtFront[languageIndex]);
              setSeverity("success");
              setTimeout(() => {
                setOpenAlert(true);                
              }, timeDelay);
              setTimeout(() => {
                var tmpStartIndex = dividendPositionFocusedIndex + 1;
                var i;
                for (i = tmpStartIndex; i <= quotientFocusedIndex; i++) {
                  if (dividendArray[dividendLineFocusedIndex][i] === 0) {
                    tmpStartIndex = i + 1;
                  } else {
                    i = quotientFocusedIndex + 1;
                  }
                }
                setArrayValue(tmpStartIndex, dividendStartIndexArray, setDividendStartIndexArray, dividendLineFocusedIndex, false);
              }, timeDelayLarge);
            }
            if (diff >= divisorValue) {
              //quotient at this place is too small and remainder is too large
              setErrorMessage(quotientTooSmall[languageIndex]);
              setSeverity("error");
              setTimeout(() => {
                setOpenAlert(true);                
              }, timeDelay);
              setTimeout(() => {
                setInputTypeIndex(2);
                setArrayValue(0, quotientArray, setQuotientArray, quotientFocusedIndex, false);
                setDivisorHighlightEndIndex(divisorArray.length - 1);
                setNestedArrayValue(0, setDividendArray, -1, -1, false, true);
                setDividendLineFocusedIndex(dividendLineFocusedIndex - 1);
                setArrayValue(0, dividendStartIndexArray, setDividendStartIndexArray, -1, true);
                setArrayValue(0, dividendEndIndexArray, setDividendEndIndexArray, -1, true);
                setNestedArrayValue(0, setProductArray, -1, -1, false, true);
                setNestedArrayValue(0, setProductCarryArray, -1, -1, false, true);
                setProductLineFocusedIndex(productLineFocusedIndex - 1);
                setArrayValue(0, productStartIndexArray, setProductStartIndexArray, -1, true);
                setArrayValue(0, productEndIndexArray, setProductEndIndexArray, -1, true);
              }, timeDelayLarge);
            } else {
              //complete or take next digit?
              if (quotientFocusedIndex === dividendArray[0].length - 1) {
                //completed
                setProductHighlighted(false);
                setCompleted(true);
                setInputTypeIndex(-1);
                setErrorMessage("👍" + wellDone[languageIndex]);
                setSeverity("success");
                setTimeout(() => {
                  setOpenAlert(true);  
                }, timeDelay);
              } else {
                //take next digit
                setDividendPositionFocusedIndex(quotientFocusedIndex + 1);
                setArrayValue(quotientFocusedIndex + 1, dividendEndIndexArray, setDividendEndIndexArray, dividendLineFocusedIndex, false);
              }
            }

          } else {
            //go to subtract previous digit
            setDividendPositionFocusedIndex(dividendPositionFocusedIndex - 1);
            setArrayValue(dividendPositionFocusedIndex - 1, dividendStartIndexArray, setDividendStartIndexArray, dividendStartIndexArray.length - 1, false)
          }
        } else {
          //incorrect subtracting this digit
          setErrorMessage(subtractDigit[languageIndex]);
          setSeverity("error");
          setTimeout(() => {
            setOpenAlert(true);
          }, timeDelay);
        }
      }
    }
  }

  function handleDivisorInput(value: number) {
    setArrayValue(value, divisorArray, setDivisorArray, divisorFocusedIndex, false)
    if (divisorFocusedIndex < divisorArray.length - 1) {
      setDivisorFocusedIndex(divisorFocusedIndex + 1);
    } else {
      setInputTypeIndex(2);
      setQuotientFocusedIndex(0);
      setDividendHighlighted(true);
      setDivisorHighlighted(true);
      setDividendValue(dividendArray[0][0]);
      var tmpDivisorValue = 0;
      var i;
      for (i = 0; i < divisorArray.length - 1; i++) {
        tmpDivisorValue = tmpDivisorValue * 10 + divisorArray[i];
      }
      tmpDivisorValue = tmpDivisorValue * 10 + value;
      setDivisorValue(tmpDivisorValue);
    }
  }

  function handleQuotientInput(value: number) {
    setArrayValue(value, quotientArray, setQuotientArray, quotientFocusedIndex, false)
    var quotientDiff = Math.abs(Math.floor(dividendValue / divisorValue) - value);
    if (quotientDiff > 1
      || quotientDiff === 1
      && (Math.floor(dividendValue / divisorValue) === 0 || value === 0)
    ) {
      //Wrong quotient digit
      var placeValue = 10 ** (divisorArray.length - 1);
      var divisorReduced = Math.round(divisorValue / placeValue);
      var divisorApprox = divisorReduced * placeValue;
      var dividendReduced = Math.round(dividendValue / placeValue);
      var divisionOriginal = dividendValue + "÷" + divisorValue;
      var divisionApprox = dividendValue + "÷" + divisorApprox;
      var divisionReduced = dividendReduced + "÷" + divisorReduced;
      var hints = divisionApprox + "≈" + divisionReduced;
      setErrorMessage(quotientHintLeft[languageIndex] + divisionOriginal + quotientHintRight[languageIndex] + hints + quotientHintEnd[languageIndex]);
      setSeverity("error");
      setTimeout(() => {
        setOpenAlert(true);
      }, timeDelay);
    } else {
      //quotient diff from answer less than or equal to 1
      if (value === 0 && quotientStartIndex === quotientFocusedIndex) {
        //whole dividend is smaller than the divisor
        if (quotientFocusedIndex === dividendArray[0].length - 1) {
          setInputTypeIndex(3);
          setNestedArrayValue(0, setProductArray, -1, -1, true, false)
        } else {
          var tmpDividendValue = dividendValue * 10 + dividendArray[dividendLineFocusedIndex][quotientFocusedIndex + 1];
          setErrorMessage(zeroAtFront[languageIndex]);
          setSeverity("success");
          setTimeout(() => {
            setOpenAlert(true);
          }, timeDelay);
          setTimeout(() => {
            setDividendValue(tmpDividendValue);
            setQuotientStartIndex(quotientStartIndex + 1);
            setQuotientFocusedIndex(quotientFocusedIndex + 1);
          }, timeDelayLarge);
        }
      } else {
        if (quotientDiff === 1) {
          setErrorMessage(quotientNear[languageIndex]);
          setSeverity("error");
          setTimeout(() => {
            setOpenAlert(true);
          }, timeDelay);
        }
        setInputTypeIndex(3);
        setNestedArrayValue(0, setProductArray, -1, -1, true, false);
        setNestedArrayValue(0, setProductCarryArray, -1, -1, true, false);
        setQuotientHighlighted(true);
        setDivisorHighlighted(true);
        setDivisorHighlightEndIndex(divisorArray.length - 1);
        setDivisorHighlightStartIndex(divisorArray.length - 1);
        setDividendHighlighted(false);
        setProductValue(0)
        setProductLineFocusedIndex(productLineFocusedIndex + 1);
        setProductPositionFocusedIndex(quotientFocusedIndex);
        setArrayValue(quotientFocusedIndex, productStartIndexArray, setProductStartIndexArray, productStartIndexArray.length, false);
        setArrayValue(quotientFocusedIndex, productEndIndexArray, setProductEndIndexArray, productEndIndexArray.length, false);
      }
    }
  }

  function handleProductInput(value: number) {
    setNestedArrayValue(value, setProductArray, productLineFocusedIndex, productPositionFocusedIndex, false, false);
    var tmpDivisor = (divisorHighlightEndIndex < 0 ? 0 : divisorArray[divisorHighlightEndIndex]);
    var product = quotientArray[quotientFocusedIndex] * tmpDivisor + (productPositionFocusedIndex < quotientFocusedIndex ? productCarryArray[productLineFocusedIndex][productPositionFocusedIndex + 1] : 0);
    //correct product digit
    if (value === product % 10) {
      //dividend start digit
      if (productPositionFocusedIndex === dividendStartIndexArray[dividendLineFocusedIndex]) {
        //first digit is 0 but not the last digit
        if (value === 0 && productPositionFocusedIndex < quotientFocusedIndex) {
          setErrorMessage(zeroAtFront[languageIndex]);
          setSeverity("success");
          setTimeout(() => {
            setOpenAlert(true);
          }, timeDelay);
          setTimeout(() => {
            var tmpStartIndex = productPositionFocusedIndex + 1;
            var i;
            for (i = tmpStartIndex; i < quotientFocusedIndex; i++) {
              if (productArray[productLineFocusedIndex][i] === 0) {
                tmpStartIndex = i + 1;
              } else {
                i = quotientFocusedIndex;
              }
            }
            setArrayValue(tmpStartIndex, productStartIndexArray, setProductStartIndexArray, productLineFocusedIndex, false);
          }, timeDelayLarge);
        }
        //product with carry> dividend check
        var productWhole = product * (10 ** (productEndIndexArray[productLineFocusedIndex] - productPositionFocusedIndex)) + productValue;
        if (productWhole > dividendValue) {
          //too large quotient results in too large product              
          setErrorMessage(quotientTooLarge[languageIndex]);
          setSeverity("error");
          setTimeout(() => {
            setOpenAlert(true);
          }, timeDelay);
          setTimeout(() => {
            setInputTypeIndex(2);
            setArrayValue(0, quotientArray, setQuotientArray, quotientFocusedIndex, false);
            setQuotientHighlighted(false);
            setDividendHighlighted(true);
            setDivisorHighlightEndIndex(divisorArray.length - 1);
            setNestedArrayValue(0, setProductArray, -1, -1, false, true);
            setNestedArrayValue(0, setProductCarryArray, -1, -1, false, true);
            setProductLineFocusedIndex(productLineFocusedIndex - 1);
            setArrayValue(0, productStartIndexArray, setProductStartIndexArray, -1, true);
            setArrayValue(0, productEndIndexArray, setProductEndIndexArray, -1, true);
          }, timeDelayLarge);
        } else {
          //correct quotient and product, go to calculate the diff of subtraction
          setProductValue(productWhole);
          setInputTypeIndex(0);
          setQuotientHighlighted(false);
          setDivisorHighlighted(false);
          setDividendHighlighted(true);
          setProductHighlighted(true);
          setProductPositionFocusedIndex(-1);
          setNestedArrayValue(0, setDividendArray, -1, -1, true, false);
          setDividendLineFocusedIndex(dividendLineFocusedIndex + 1);
          setDividendPositionFocusedIndex(quotientFocusedIndex);
          setArrayValue(quotientFocusedIndex, dividendStartIndexArray, setDividendStartIndexArray, dividendStartIndexArray.length, false);
          setArrayValue(quotientFocusedIndex, dividendEndIndexArray, setDividendEndIndexArray, dividendEndIndexArray.length, false);
        }
      } else {
        //go on caluclating the product
        setNestedArrayValue(Math.floor(product / 10), setProductCarryArray, productLineFocusedIndex, productPositionFocusedIndex, false, false);
        setProductPositionFocusedIndex(productPositionFocusedIndex - 1);
        setArrayValue(productPositionFocusedIndex - 1, productStartIndexArray, setProductStartIndexArray, productLineFocusedIndex, false);
        setDivisorHighlightStartIndex(divisorHighlightStartIndex - 1);
        setDivisorHighlightEndIndex(divisorHighlightEndIndex - 1);
        setProductValue(value * (10 ** (productEndIndexArray[productLineFocusedIndex] - productPositionFocusedIndex)) + productValue);
      }
    } else {
      //incorrect product digit
      setErrorMessage(productDigit[languageIndex]);
      setSeverity("error");
      setTimeout(() => {
        setOpenAlert(true);
      }, timeDelay);
    }
  }

  const handleKeypadClick = (key: string) => {
    var value = parseInt(key);
    switch (inputTypeIndex) {
      case 0: {
        handleDividendInput(value);
        break;
      }
      case 1: {
        handleDivisorInput(value);
        break;
      }
      case 2: {
        handleQuotientInput(value);
        break;
      }
      case 3: {
        handleProductInput(value);
        break;
      }
    }

  }

  function setArrayValue(value: number, originalArray: Array<number>, setArray: (value: React.SetStateAction<number[]>) => void, positionIndex: number, popValue: boolean) {
    var tmpArray = [...originalArray];
    if (positionIndex >= tmpArray.length) {
      tmpArray.push(value);
    } else {
      if (positionIndex >= 0) {
        tmpArray[positionIndex] = value;
      }
    }
    if (popValue) {
      tmpArray.pop();
    }
    setArray(tmpArray);
  }

  function setNestedArrayValue(value: number, setArray: (value: React.SetStateAction<number[][]>) => void, lineIndex: number, positionIndex: number, pushLine: boolean, popLine: boolean) {
    setArray(prevLines => {
      var tmpPrevLines = prevLines.map((line, lIndex) => {
        if (lIndex === lineIndex) {
          if (pushLine) {
            return zeroArray;
          } else {
            var tmpLine = line.map((position, pIndex) => {
              if (pIndex === positionIndex) {
                return value;
              } else {
                return position;
              }
            })
            return tmpLine;
          }
        } else {
          return line;
        }
      })
      if (pushLine && lineIndex < 0) {
        tmpPrevLines.push(zeroArray);
      }
      if (popLine) {
        tmpPrevLines.pop();
      }
      return tmpPrevLines;
    })
  }

  const classes = pagesStyles();
  return (
    <MyFrame topic={topic + topics[languageIndex] + learningTool} learningTool={""}>
      <Grid className={classes.spaceGrid} />
      <Grid className={classes.centerRow}>
        <Grid className={classes.formulaColumn}>
          <Grid className={classes.endRow}>
            {
              quotientArray.map((quotient, index) => {
                return <MyInput
                  key={index}
                  value={quotient}
                  superValue={0}
                  colorStage={
                    index > quotientFocusedIndex || index < quotientStartIndex ? "invisible"
                      : inputTypeIndex === 2 && index === quotientFocusedIndex ? "focused"
                        : quotientHighlighted && index === quotientFocusedIndex ? "highlighted"
                          : "usual"
                  }
                />
              })
            }
          </Grid>
          <Grid className={classes.endRow}>
            <HorizontalLine lengthArray={zeroArray} />
          </Grid>
          <Grid className={classes.endRow}>
            {
              divisorArray.map((divisor, index) => {
                return <MyInput
                  key={index}
                  value={divisor}
                  superValue={0}
                  colorStage={
                    inputTypeIndex === 1 && divisorFocusedIndex === index ? "focused"
                      : divisorHighlighted && index >= divisorHighlightStartIndex && index <= divisorHighlightEndIndex ? "highlighted"
                        : "usual"
                  }
                />
              })
            }
            <VerticalLine />
            <Grid>
              <Grid>
                {
                  dividendArray[0].map((dividend, index) => {
                    return <MyInput
                      key={index}
                      value={dividend}
                      superValue={0}
                      colorStage={
                        inputTypeIndex === 0 && dividendLineFocusedIndex === 0 && dividendPositionFocusedIndex === index ? "focused"
                          : dividendHighlighted && index <= quotientFocusedIndex
                            && ((inputTypeIndex === 2 && dividendLineFocusedIndex === 0)
                              || (inputTypeIndex === 0 && dividendLineFocusedIndex === 1)) ? "highlighted"
                            : "usual"
                      }
                    />
                  })
                }
              </Grid>
              {
                productArray.map((productLine, lineIndex) => {
                  return <Grid key={lineIndex}>
                    <Grid>
                      {
                        productLine.map((product, positionIndex) => {
                          return <MyInput
                            key={positionIndex}
                            value={product}
                            superValue={productCarryArray[lineIndex][positionIndex]}
                            colorStage={
                              positionIndex < productStartIndexArray[lineIndex] || positionIndex > productEndIndexArray[lineIndex] ? "invisible"
                                : inputTypeIndex === 3 && productLineFocusedIndex === lineIndex && productPositionFocusedIndex === positionIndex ? "focused"
                                  : productHighlighted && productLineFocusedIndex === lineIndex ? "highlighted"
                                    : "usual"
                            }
                          />
                        })
                      }
                    </Grid>
                    <Grid className={classes.endRow}>
                      {
                        dividendArray.length > lineIndex + 1 && <HorizontalLine lengthArray={zeroArray} />
                      }
                    </Grid>
                    <Grid>
                      {
                        dividendArray.length > lineIndex + 1 && dividendArray[lineIndex + 1].map((dividend, positionIndex) => {
                          return <MyInput
                            key={positionIndex}
                            value={dividend}
                            superValue={0}
                            colorStage={
                              positionIndex < dividendStartIndexArray[lineIndex + 1] || positionIndex > dividendEndIndexArray[lineIndex + 1] ? "invisible"
                                : inputTypeIndex === 0 && dividendLineFocusedIndex === lineIndex + 1 && dividendPositionFocusedIndex === positionIndex ? "focused"
                                  : dividendHighlighted
                                    && ((dividendLineFocusedIndex === lineIndex + 1 && inputTypeIndex === 2)
                                      || (dividendLineFocusedIndex - 2 === lineIndex && inputTypeIndex === 0)) ? "highlighted"
                                    : "usual"
                            }
                          />
                        })
                      }
                    </Grid>
                  </Grid>
                })
              }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.centerRow}>
        {
          completed &&
          <Button
            className={classes.okButton}
            variant="contained"
            onClick={resetClick}
            color="primary"
          ><ForwardRoundedIcon className={classes.resetArrow} /></Button>
        }
      </Grid>
      <Grid className={classes.spaceGrid} />
      <MyKeypad
        handleClick={handleKeypadClick}
      />
      <AlertSnackbar
        open={openAlert}
        closeAlert={closeAlert}
        errorMessage={errorMessage}
        severity={severity}
      />
    </MyFrame>
  );
}
