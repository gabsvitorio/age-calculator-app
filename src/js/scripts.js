
let daysH = document.getElementById("dia");
let monthH = document.getElementById("mes");
let yearH = document.getElementById("ano");

let showAgeDay = document.getElementById("show-age-day");
let showAgeMonth = document.getElementById("show-age-month");
let showAgeYear = document.getElementById("show-age-year");

const btn = document.getElementById("calc-btn");

var today = new Date();

let d = today.getDate();
let m = today.getMonth()+1;
let y = today.getFullYear();

let maxDays = 0;
let monthNum = 1;

btn.addEventListener("click", (days, month, year) => {
    days = daysH.value;
    month = monthH.value;
    year = yearH.value;

    if (daysH.value == "" || monthH.value == "" || yearH.value == "") {
        return alert("Por favor, insira uma data de aniversário válida para calcular sua idade!");
    }

    console.log();
    console.log(`Data atual: ${d} ${m} ${y}`);

    if(m == 1){ //janeiro
        maxDays = 31;
        monthNum = 1;
    }
    else if(m == 2){ //fevereiro
        maxDays = 28;
        monthNum = 2;
    }
    else if(m == 3){ //março
        maxDays = 31;
        monthNum = 3;
    }
    else if(m == 4){ //abril
        maxDays = 30;
        monthNum = 4;
    }
    else if(m == 5){ //maio
        maxDays = 31;
        monthNum = 5;
    }
    else if(m == 6){ //junho
        maxDays = 30;
        monthNum = 6;
    }
    else if(m == 7){ //julho
        maxDays = 31;
        monthNum = 7;
    }
    else if(m == 8){ //agosto
        maxDays = 31;
        monthNum = 8;
    }
    else if(m == 9){ //setembro
        maxDays = 30;
        monthNum = 9;
    }
    else if(m == 10){ //outubro
        maxDays = 31;
        monthNum = 10;
    }
    else if(m == 11){ //novembro
        maxDays = 30;
        monthNum = 11;
    }
    else if(m == 12){ //dezembro
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