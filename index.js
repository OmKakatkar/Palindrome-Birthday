const birthDay = document.querySelector("#birthday");
const check = document.querySelector("#check");

check.addEventListener("click", () => {
  clickHandler(birthDay.value.split("-"));
});

function clickHandler(date) {
  // mm-dd-yyyy
  let strDate1 = date[2] + date[1] + date[0];
  //   console.log(strDate1);
  if (isPalindrome(strDate1)) {
    console.log("Wow! Your Birthday is a Palindrome");
    return;
  }
  // dd-mm-yyyy
  let strDate2 = date[1] + date[2] + date[0];
  console.log(strDate2);
  if (isPalindrome(strDate2)) {
    console.log("Wow! Your Birthday is a Palindrome");
    return;
  }
  // mm-dd-yy
  let strDate3 = date[1] + date[2] + date[0].slice(2, 4);
  //   console.log(strDate3);
  if (isPalindrome(strDate3)) {
    console.log("Wow! Your Birthday is a Palindrome");
    return;
  }
  let data = nearestPalindrome(strDate1, strDate2, strDate3, date);
  console.log(
    `Aww! Not a palindrome. Nearest Palindrome date is ${data[0]}. You missed by ${data[1]} days.`
  );
  return;
}

function nearestPalindrome(dt1, dt2, dt3) {
  console.log(dt2);
  let p_date, p_days;
  // dd-mm-yyyy

  let date_d = dt2.slice(6, 8).split("").reverse().join("");
  let date_m = dt2.slice(4, 6).split("").reverse().join("");
  let date_y = dt2.slice(4, 8);
  //   console.log(date_d);
  //   console.log(date_m);
  //   console.log(date_y);

  if (date_d > 0 && date_d <= 31 && date_d > 0 && date_m <= 12) {
    console.log(date_d, date_m, date_y);
    console.log("Hii");
    p_date = `${date_d}-${date_m}-${date_y}`;
    p_days = parseInt(dt2) - parseInt(p_date);
  }

  return [p_date, p_days];
}

TODO: Calculate number of days between birthday and palindrome Date
TODO: Find palindrome dates in other FormData
TODO: Compare all format dates and find the lowest number of days in between 

function isPalindrome(input) {
  let len = input.length;
  let mid = Math.floor(len / 2);
  for (let i = 0; i < mid; i++) {
    if (input[i] !== input[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
