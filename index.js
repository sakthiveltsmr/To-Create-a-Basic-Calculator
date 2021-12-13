var cal = "";
const usein = document.getElementById("useinp");
const comout = document.getElementById("comout");
function calc(value) {
  cal += value;
  usein.value = cal;
}
function remove() {
  cal = cal.substring(0, cal.length - 1);
  usein.value = cal;
}
function solution() {
  if (cal.length == 0 || cal == "01-01-2021" || cal == "") {
    confirm("Enter a number !");
    return;
  } else if (cal == "10-06-1998") {
    confirm("Sakthi your birthday...!");
  } else if (cal == "12-12-2021") {
    confirm("Sakthi your waste....!");
  }
  try {
    var ans = eval(cal);
    comout.value = ans;
  } catch (err) {
    alert("Invalid Input");
  }
}
function reset() {
  usein.value = "";
  comout.value = "";
  cal = "";
}
