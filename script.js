const birthDate = document.querySelector("#birth-date");
const luckyNumber = document.querySelector("#lucky-number")
var btnCheck = document.querySelector("#btn-check");
const displayMsg = document.querySelector("#display-msg");

function checkLuckyBirthday(){
    if (birthDate.value === ""){
        displayMsg.innerHTML = "Please enter your birth date!";
        return
    }
    if (luckyNumber.value <=0){
        displayMsg.innerHTML = "Lucky Number should be greater or equal to 1";
        return
    }

    const birthDateStr = birthDate.value.replaceAll("-","");
    var count = 0;
    console.log(birthDateStr);
    for(let i=0; i<birthDateStr.length;i++){
        count += parseInt(birthDateStr[i]);
    }

    if((count % luckyNumber.value) === 0){
        displayMsg.innerHTML = "You are lucky!!!🍀";

    }
    else{
        displayMsg.innerHTML = "Sadly, your birthday is unlucky😢";
    }
}

btnCheck.addEventListener("click", checkLuckyBirthday);

