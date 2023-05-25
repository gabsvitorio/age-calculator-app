
let daysH = document.getElementById("dia");
let monthH = document.getElementById("mes");
let yearH = document.getElementById("ano");

let showAgeDay = document.getElementById("show-age-day");
let showAgeMonth = document.getElementById("show-age-month");
let showAgeYear = document.getElementById("show-age-year");

const btn = document.getElementById("calc-btn");

var today = new Date();
var anoBissexto = false;

let d = today.getDate();
let m = today.getMonth()+1;
let y = today.getFullYear();

let maxDays = 0;
let monthNum = 1;

btn.addEventListener("click", (days, month, year) => {
    days = daysH.value;
    month = monthH.value;
    year = yearH.value;

    if(yearH.value%4 == 0 && yearH.value%100 != 0){
        anoBissexto = true;
        console.log("É um ano bissexto");
    }else{
        anoBissexto= false;
        console.log("Não é um ano bissexto");
    }


    if (daysH.value == "" || monthH.value == "" || yearH.value == "") {
        document.getElementById('p-invalid-day').style.display = "block"
        document.getElementById('p-invalid-month').style.display = "block"
        document.getElementById('p-invalid-year').style.display = "block"
    }
    else if (daysH.value < 1 || daysH.value > 31) {
        document.getElementById('p-invalid-day').style.display = "block"
    } else if (monthH.value < 1 || monthH.value > 12) {
        document.getElementById('p-invalid-month').style.display = "block"
    }else if (yearH.value > y){
        document.getElementById('p-invalid-year').style.display = "block"
    }else if(monthH.value == 1 && daysH.value == 30){
        document.getElementById('p-invalid-day').style.display = "block"
    }else if(monthH.value == 3 && daysH.value == 30){
        document.getElementById('p-invalid-day').style.display = "block"
    }else if(monthH.value == 5 && daysH.value == 30){
        document.getElementById('p-invalid-day').style.display = "block"
    }else if(monthH.value == 7 && daysH.value == 30){
        document.getElementById('p-invalid-day').style.display = "block"
    }else if(monthH.value == 8 && daysH.value == 30){
        document.getElementById('p-invalid-day').style.display = "block"
    }else if(monthH.value == 10 && daysH.value == 30){
        document.getElementById('p-invalid-day').style.display = "block"
    }else if(monthH.value == 12 && daysH.value == 30){
        document.getElementById('p-invalid-day').style.display = "block"
    }else if(monthH.value == 4 && daysH.value == 31){
        document.getElementById('p-invalid-day').style.display = "block"
    }else if(monthH.value == 6 && daysH.value == 31){
        document.getElementById('p-invalid-day').style.display = "block"
    }else if(monthH.value == 9 && daysH.value == 31){
        document.getElementById('p-invalid-day').style.display = "block"
    }else if(monthH.value == 11 && daysH.value == 31){
        document.getElementById('p-invalid-day').style.display = "block"
    }else if(monthH.value == 2 && anoBissexto == true && daysH.value == 28){
        document.getElementById('p-invalid-day').style.display = "block"
    }

    console.log();
    console.log(`Data atual: ${d} ${m} ${y}`);

    if(m == 1){ 
        maxDays = 31;
        monthNum = 1;
    }
    else if(m == 2){
        maxDays = 28;
        monthNum = 2;
    }
    else if(m == 3){
        maxDays = 31;
        monthNum = 3;
    }
    else if(m == 4){
        maxDays = 30;
        monthNum = 4;
    }
    else if(m == 5){
        maxDays = 31;
        monthNum = 5;
    }
    else if(m == 6){
        maxDays = 30;
        monthNum = 6;
    }
    else if(m == 7){
        maxDays = 31;
        monthNum = 7;
    }
    else if(m == 8){
        maxDays = 31;
        monthNum = 8;
    }
    else if(m == 9){
        maxDays = 30;
        monthNum = 9;
    }
    else if(m == 10){
        maxDays = 31;
        monthNum = 10;
    }
    else if(m == 11){
        maxDays = 30;
        monthNum = 11;
    }
    else if(m == 12){
        maxDays = 31;
        monthNum = 12;
    }
    
    var ageYears = y - year;

    if(m <= month){
        m = m + 12;
    }

    var ageMonths = m - month;

    var ageDays = (maxDays - d) + parseInt(days);
    
    console.log(`Sua idade é ${ageYears} y, ${ageMonths} m and ${ageDays} d`);

    showAgeDay.innerHTML =  `${ageYears}`;
    showAgeMonth.innerHTML =  `${ageMonths}`;
    showAgeYear.innerHTML =  `${ageDays}`;
})