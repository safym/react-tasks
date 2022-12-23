import React, { useState, useEffect } from "react";

const Example_block = (props) => {
  // переменные состояния
  const [brackets, setBrackets] = useState(props.value);
  const [openBrackets, setOpenBrackets] = useState(0);

  // динамические айти элементов
  let idResultElement = "example_" + props.number;
  let idInputElement = "input_" + props.number;

  // пары кодов открывающих и закрывающих скобок
  const pairsCodeBrackets = [
    [40, 41],   // '(' , ')'
    [91, 93],   // '[' , ']'
    [123, 125], // '{' , '}'
  ];

  // хук эффекта
  useEffect(() => {
    checkOpenBrackets(brackets);
  });

  // обработка события ввода в инпут
  function handleChange(event) {
    setBrackets(event.target.value);
  }

  // проверка на незакрытые скобки
  function checkOpenBrackets(string) {
    let countedBrackets = countBrackets(string, pairsCodeBrackets);

    let result = getDiffBrackets(countedBrackets, pairsCodeBrackets);

    setOpenBrackets(result);
  }

  // подсчет символов отфильтрованной строки (только скобки)
  // и запись в объект, где записи типа - "код символа": количество символа в строке
  function countBrackets(string, pairs) {
    let filteredString = filterString(string, pairs);

    return filteredString.reduce((sumBrackets, current) => {
      let codeOfSymbol = current.charCodeAt(0);

      return {
        ...sumBrackets,
        [codeOfSymbol]: (sumBrackets[codeOfSymbol] || 0) + 1,
      };
    }, {});
  }

  // фильтрация строки по двумерному массиву:
  // 1. двумерный массив складывается в одномерный
  // 2. из исходной строки выбираются только сиволы входящие в массив
  function filterString(string, pairs) {
    let bracketCodes = pairs.flat();

    let filteredString = string.split("").filter(function (symbol) {
      return bracketCodes.includes(symbol.charCodeAt(0));
    });

    return filteredString;
  }

  // получение разницы между количеством открытых скобок и закрытых
  function getDiffBrackets(countedBrackets, pairs) {
    let result = 0;

    for (let pair of pairs) {
      let openCode = pair[0];
      let closeCode = pair[1];

      if (countedBrackets[openCode] && countedBrackets[closeCode]) {
        if (countedBrackets[openCode] !== countedBrackets[closeCode]) {
          result =
            result +
            Math.abs(countedBrackets[openCode] - countedBrackets[closeCode]);
        }
      } else if (countedBrackets[openCode] || countedBrackets[closeCode]) {
        result =
          result + countedBrackets[openCode] ||
          result + countedBrackets[closeCode];
      }
    }

    return result;
  }

  return (
    <div className="example-block">
      <input
        className="my-input"
        id={idInputElement}
        value={brackets}
        onChange={handleChange}
      />

      <div className="result" id={idResultElement}>
        <div>
          Правильных скобок: {filterString(brackets, pairsCodeBrackets).length - openBrackets}
        </div>
        <div>Неправильных скобок: {openBrackets}</div>
      </div>

    </div>
  );
};

export default Example_block;
