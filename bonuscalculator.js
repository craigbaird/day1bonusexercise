//Anna Springfield, Craig Baird, Logan Kelly

var tim = ["Tim", 4627, 15000, 2];
var billy = ["Billy", 123, 45000, 5];
var margaret = ["Margaret", 3333, 70000, 5];
var samantha = ["Samantha", 23, 90000, 1];
var benny = ["Benny", 1515, 40000, 3];
var ralph = ["Ralph", 434, 59000, 4];
var allEmployees = [tim, billy, margaret, samantha, benny, ralph];

$(document).ready(function(){
  cycleEmployees(allEmployees);
});

//cycles through employeeArray and calls calcBonus, consoles
function cycleEmployees(employeeArray) {
  for (var i=0; i < employeeArray.length; i++) {
    var newArray = [];
    var employeeInfo = employeeArray[i];
    var bonusPer = calcBonus(employeeInfo);
    newArray[0] = employeeInfo[0];
    newArray[1] = bonusPer + "%";
    newArray[2] = "$" + ((bonusPer*employeeInfo[2])/100 + employeeInfo[2]);
    newArray[3] = "$" + Math.round((bonusPer*employeeInfo[2])/100);
    var prettyOutput = "";
    for (var j=0; j< newArray.length; j++){
      if (j===0) {
        prettyOutput += newArray[j];
      } else if (j<newArray.length - 1) {
        prettyOutput += ", " + newArray[j];
      } else {
        prettyOutput += ", " + newArray[j] + "!";
      }


    }
    console.log(newArray);
    $('ol').append('<li> ' + prettyOutput + '</li>');
  }
}


//calculates individual bonus
function calcBonus(employeeInfo) {
  var num = employeeInfo[1];
  var sal = employeeInfo[2];
  var rating = employeeInfo[3];
  var bonusPer = 0;

  //calc base bonusPer
  switch(rating) {
    case 3:
    // change math
      bonusPer = 4;
      break;
    case 4:
      bonusPer = 6;
      break;
    case 5:
      bonusPer = 10;
      break;
    default:
      bonusPer = 0;
  }

//tenured employees receive a 5% bonus boost
  if (num.toString().length == 4) {
    bonusPer += 5;
  }

//if the employee is ballin, take one percent off bonus
  if (sal > 65000) {
    bonusPer -= 1;
  }

//limits max bonus to 13% and min bonus to 0
  if (bonusPer > 13) {
    bonusPer = 13;
  } else if (bonusPer < 0) {
    bonusPer = 0;
  }
  return bonusPer;
}


console.log(calcBonus(tim));
console.log(calcBonus(billy));
console.log(calcBonus(margaret));
