//UC1 Checking EMployee Presence
const IS_Absent=0;
let empCheck=Math.floor(Math.random()*10)%3;
if(empCheck==IS_Absent){
    console.log("Employee is Absent");
    return;
}else{
    console.log("Employee is Present");
}

//UC2 Calculating Employee Wages
const IS_PART_TIME=1; 
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;

// UC3 Refractoring Code 

function getWorkingHours(empcheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
            break;
        default:
            return 0;
    }
}

let empHrs=0;
empHrs= getWorkingHours(empCheck);
let empWage=empHrs*WAGE_PER_HOUR;
console.log("Emp Wages:"+ empWage);


// UC4 : Calculating Wages for a month

const NUM_OF_WORKING_DAYS=20;
empHrs=0;
for(let day=1;day<=NUM_OF_WORKING_DAYS;day++){
    empHrs+=getWorkingHours(empCheck);  
}

empWage=empHrs*WAGE_PER_HOUR;
console.log("Total Hrs:"+empHrs+" Emp Wage:"+ empWage);


