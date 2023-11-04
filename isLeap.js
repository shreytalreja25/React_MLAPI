function isLeapYear(year) {
  // Your code to check if 'year' is a leap year goes here
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 100 == 0 && year % 400 == 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

const yearToCheck = 2028; // Change this to test different years

if (isLeapYear(yearToCheck)) {
  console.log(`${yearToCheck} is a leap year`);
} else {
  console.log(`${yearToCheck} is not a leap year`);
}
