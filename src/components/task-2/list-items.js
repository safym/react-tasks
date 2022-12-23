import React from "react";

const List_items = (props) => {
  let finallItems = [];

  for (let i = 0; i < props.arrItemsSeconds.length - 1; i++) {
    let sec = props.arrItemsSeconds[i];

    finallItems.push(<li>"Исчезнет через " + {sec} + " секунд"</li>);
  }

  return (
    <div className="itemSpec">
      <ul id="list">
        {finallItems}
      </ul>
    </div>
  );
};

export default List_items;
