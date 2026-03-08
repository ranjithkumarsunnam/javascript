const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const AddBtn=document.getElementtById("addBtn");
const subBtn =document.getElementById("subBtn");
const Result =document.getElementById("result");

//Add function
AddBtn.addEventListener("click",(click)=>{
    let value1  =number(num1Input.value);
    let valu2 =number(num2Input.value);
    let sum = value1 + value2;
    Result.textContent = "Result: " + sum;
});

Result.textContent = "Result: " + sum;