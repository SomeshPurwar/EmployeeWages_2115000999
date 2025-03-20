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

// UC5 :Calculate Wages till a condition of total working hours of 160 or max days of 20 is reached for a month
const MAX_HRS_IN_MONTH=160;
let totalEmpHrs=0;
let totalWorkingDays=0;

//UC6: Store the Daily Wage along with the Total Wage - Save in an Array the Daily
let empDailyWageArr=new Array();

while(totalEmpHrs<MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    totalEmpHrs+=getWorkingHours(empCheck);
    let empHrs=getWorkingHours(empCheck);
    empDailyWageArr.push(empHrs*WAGE_PER_HOUR);
}
empWage=totalEmpHrs*WAGE_PER_HOUR;
console.log("UC-6- Total Days: "+totalWorkingDays+" Total Hrs: "+totalEmpHrs+" Emp Wages: "+ empWage);

//UC7
//UC7A: Calc total Wage using Array forEach or reduce method

let totEmpWage=0;
function sum(dailyWage){
    totEmpWage+=dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A Total Days: "+ totalWorkingDays+" Total Hrs: "+totalEmpHrs+" Emp Wage: "+totEmpWage);

function totalWages(totalWage,dailyWage){
    return totalWage+dailyWage;
}
console.log("UC7A Emp wage with reduce "+ empDailyWageArr.reduce(totalWages,0));

//UC7B: Show the Day along with Daily Wage using Array map helper function

let dailyCntr=0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr+ "="+dailyWage;
}
let mapDayWithWageArr=empDailyWageArr.map(mapDayWithWage);
console.log("UC7B Daily Wage Map");
console.log(mapDayWithWageArr);

//UC7C: Show Days when Full time wage of 160 were earned using filter function

function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr=mapDayWithWageArr.filter(fullTimeWage);
console.log("UC7C Daily Wage Filter When Full Time Wage Earned");
console.log(fullDayWageArr);

//UC7D: Find the first occurrence when Full Time Wage was earned using find function

console.log("UC7D First Time Full Time wage was earned on the day:"+mapDayWithWageArr.find(fullTimeWage));

//UC7E: Check if Every Element of Full Time Wage is truly holding Full time wage
console.log("UC7E check all elements have full time wages:"+mapDayWithWageArr.every(fullTimeWage));

//UC7F: Check if there is any Part Time Wage
function isAnyPartTimeWage(dailywage){
    return dailywage.includes("80");
}
console.log("UC7F check some have part time wages:"+mapDayWithWageArr.some(isAnyPartTimeWage));

//UC7G: Find the number of days the Employee Worked

function totalDayWorked(numOfDays,dailyWage){
    if(dailyWage>0) return numOfDays+1;
    return numOfDays;
}
console.log("UC7G Number of Days Employ worked:"+empDailyWageArr.reduce(totalDayWorked,0));
