const birthDay = document.querySelector("#birthday");
const check = document.querySelector("#check");
const output = document.querySelector("#output");

check.addEventListener("click", () => {
  clickHandler(birthDay.value);
});

function clickHandler(date) {
  if (date == "") {
    output.innerHTML = "Please enter a date";
    return;
  }
  date = date.split("-");
  // mm-dd-yyyy
  let strDate1 = date[2] + date[1] + date[0];
  if (isPalindrome(strDate1)) {
    console.log("Wow! Your Birthday is a Palindrome");
    output.innerHTML = "Wow! Your Birthday is a Palindrome";
    return;
  }
  // dd-mm-yyyy
  let strDate2 = date[1] + date[2] + date[0];
  if (isPalindrome(strDate2)) {
    console.log("Wow! Your Birthday is a Palindrome");
    output.innerHTML = "Wow! Your Birthday is a Palindrome";
    return;
  }
  // mm-dd-yy
  let strDate3 = date[1] + date[2] + date[0].slice(2, 4);
  if (isPalindrome(strDate3)) {
    console.log("Wow! Your Birthday is a Palindrome");
    output.innerHTML = "Wow! Your Birthday is a Palindrome";
    return;
  }
  let data = nearestPalindrome(strDate2, date);
  console.log(
    `Aww! Not a palindrome. Nearest Palindrome date is ${data[0]}. You missed by ${data[1]} days.`
  );
  output.innerHTML = `Aww! Not a palindrome. Nearest Palindrome date is ${data[0]}. You missed by ${data[1]} days.`;
  return;
}

function nearestPalindrome(dt2, date) {
  let p_days, print_date;
  // dd-mm-yyyy
  let b_date = new Date(date);
  let date_d = dt2.slice(6, 8).split("").reverse().join("");
  let date_m = dt2.slice(4, 6).split("").reverse().join("");
  let date_y = dt2.slice(4, 8);
  let p_date1 = new Date(date_y, date_m - 1, date_d);

  // Year is below 2001
  // Send out the palindrome in 2001
  if (date_y < 2001) {
    p_date1 = new Date(2001, 1, 10);
    p_days = (p_date1.getTime() - b_date.getTime()) / (1000 * 60 * 60 * 24);
    print_date = "10-02-2001";
    return [print_date, Math.abs(p_days)];
  }

  // Check if the date and month is valid
  else {
    let valid = 1;
    do {
      if (
        date_d > 0 &&
        date_d <= 31 &&
        date_m >= 0 &&
        date_m < 12 &&
        valid === 1
      ) {
        print_date = `${date_d}-${date_m}-${date_y}`;
        if (p_date1 > date) {
          p_days =
            (p_date1.getTime() - b_date.getTime()) / (1000 * 60 * 60 * 24);
        } else {
          p_days =
            (b_date.getTime() - p_date1.getTime()) / (1000 * 60 * 60 * 24);
        }
        return [print_date, Math.abs(p_days)];
      }
      // Get a new date
      date_y = (date_y - 1).toString();
      date_d = `${date_y[3]}${date_y[2]}`;
      date_m = `${date_y[1]}${date_y[0]}`;
      print_date = `${date_d}-${date_m}-${date_y}`;
      p_date1 = new Date(date_y, date_m - 1, date_d);
      let temp = `${p_date1.getDate()}-${
        p_date1.getMonth() + 1
      }-${p_date1.getFullYear()}`;

      // Check if the date is actually valid
      if (print_date[0] == temp[0]) {
        valid = 1;
      } else {
        valid = 0;
      }
    } while (true);
  }
  // TODO: Complete the UI
  // TODO: Implement calculation for future years and compare with previous
  // TODO: Check for other formats
  // Its okay if you are unable to complete the last 2 steps
}

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
