const equation = document.querySelector("#calc_display_equation");
const result = document.querySelector("#calc_display_result")
const display_equation = document.querySelectorAll(".btn_operation");
const btnNumbers = document.querySelectorAll(".btn_number");
const clear = document.querySelector(".calc_keyboard_btn");
const equals = document.querySelector(".btn_operation_on")

btnNumbers.forEach((btn) => {
  btn.addEventListener("click", () => {
    equation.textContent += btn.textContent;
  });
});

clear.onclick = () => {
  equation.textContent = 0;
  result.textContent = 0;
};


display_equation.forEach((btn) => {
  btn.addEventListener("click", () => {
    equation.textContent += btn.textContent;
  });
});

equals.onclick = () => {
    result.textContent = eval(equation.textContent);
  };
  