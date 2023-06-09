const button = document.querySelector("button")! as HTMLInputElement;
const input1 = document.getElementById("num1")! as HTMLInputElement; //(!) means it will never return null
const input2 = document.getElementById("num2")! as HTMLInputElement; //(as HTMLInputElement) is refrerred here is type casting
const input3 = <HTMLInputElement>document.getElementById("num2"); //type casting can also be like this but it will clash in React jsx

function add(num1: number, num2: number, num3: number) {
  return num1 + num2 + num3;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value, +input3.value));
});
