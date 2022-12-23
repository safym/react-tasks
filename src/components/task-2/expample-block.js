import React from "react";

// import components
import List_items from "./list-items";

const Example_block = () => {
  // массив секунд, которые будут жить элементы списа
  const arrItemsSeconds = [];

  // обработка события нажатия на кнопку "добавить"
  function addElement() {
    let newElement = document.createElement("li");
    let sec = getRandomSec(10, 30);

    newElement.innerText = "Исчезнет через " + sec + " секунд";
    newElement.className = "list-item";
    newElement.callback = getCallback(sec, newElement);

    arrItemsSeconds.push(sec);
    document.getElementById("list").appendChild(newElement);
  }

  //коллбек, с таймером и отменой таймера через указанное количество секунд
  function getCallback(sec, newElement) {
    let timer = setInterval(() => {
      newElement.innerText = "Исчезнет через " + sec-- + " секунд";
    }, 1000);

    setTimeout(() => clearInterval(timer), sec * 1000);

    return setTimeout(removeItem, sec * 1000, newElement);
  }

  // удаление указанного элемента списка из дерева элементов
  function removeItem(elem) {
    elem.remove();
  }

  // Получение случайного числа в диапазоне от min до max
  function getRandomSec(min, max) {
    return Math.round((min + Math.random() * max * 1000) / 1000);
  }

  return (
    <div className="example-block">
      <div className="list-wrapper">
        <button onClick={addElement}>Добавить элемент списка</button>

        <List_items arrItemsSeconds={arrItemsSeconds} />
      </div>
    </div>
  );
};

export default Example_block;
