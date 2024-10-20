const number = document.getElementById("counting-num");

const incButton = document.getElementById("increase");


let count = 0;

number.textContent = count;


function increaseCount() {

 count++; // count = count + 1

 showNumber();

}

function showNumber() {
    if(count > 0) {
        number.style.color = `rgba(${count*10},0,0)`;
    }
   
    number.textContent = count;
   
}

function decreaseCount() {

    count--; // count = count + 1
   
    number.textContent = count; // 숫자 변화 반영
   
}



incButton.addEventListener("click", increaseCount);