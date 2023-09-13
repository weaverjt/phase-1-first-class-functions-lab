// Code your solution in this file!

function returnFirstTwoDrivers(x = []) {
    const firstTwo = x.slice(0, 2);
    return firstTwo;
}

function returnLastTwoDrivers(y = []) {
    const lastTwo = y.slice(2);
    return lastTwo;

}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (mult) {
    function timesFare (fare) {
        return fare * mult;

    }
    return timesFare;
}

function fareDoubler(fare) {
    return fare * 2;
}

function fareTripler(fare) {
    return fare * 3;
}



function selectDifferentDrivers(arrayOfDrivers, xy) {
   return xy(arrayOfDrivers); 
    

} 

