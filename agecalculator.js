const ageCalculator = function(name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  return (name + " is " + age + " years old."); 
}

console.log(ageCalculator("Jennefer", 1990, 2019));
