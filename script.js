function displaySum() {
    let firstNum = Number(document.getElementById('firstNum').value)
    let secondNum = Number(document.getElementById('secondNum').value)
  
    let total = firstNum + secondNum;
    document.getElementById("answer").innerHTML = ` ${firstNum} + ${secondNum} = ${total}` ;
}
  
document.getElementById('sumButton').addEventListener("click", displaySum);
