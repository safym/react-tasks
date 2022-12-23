import React from "react";

// import components
import Example_block from "./expample-block";

const Task_1 = () => {
  return (
    <div className="task-block" id="task-1">
      <h1>Задача 1.</h1>

      <p>
        Дана строка, содержащая скобки трёх видов (круглые, квадратные и
        фигурные) и любые другие символы. Посчитайте сколько скобок расставлено
        корректно а сколько нет.
      </p>
      <p>
        Например, в строке {"([]{})[]"} скобки расставлены корректно, а в строке{" "}
        {"([]]"} — нет. В первом случае правильно расставлено 8 скобок. Во
        втором случае указаны 2 скобки правильно, и 2 не правильно.
      </p>

      <div className="task-solution">
        <div className="example-wrapper">
          <h2>Решение</h2>

          <Example_block value="([]{})[]" number="1" />
          <Example_block value="([]]" number="2" />
          <Example_block value="(hi[(hello]]" number="2" />
        </div>
      </div>
    </div>
  );
};

export default Task_1;
