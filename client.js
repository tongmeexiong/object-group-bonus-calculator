const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// Create function to take one Employee Object 
// new objects 

let bonusReviews = {
  name: name,
  bonusPercentage: 0,    
  totalCompensation: 0,
  totalBonus: 0

}
function bonusCalculation(employeeName) {
  for ( let i=0; i<employees.length; i++)
  if (employees[i].reviewRating < 2  ) {
    return 'No Bonus'
  } else if (employees[i].reviewRating === 3){
    return employees[i].annualSalary *.04; 
  } else if (employees[i].reviewRating === 4) {
    return employees[i].annualSalary * .06; 
  } else if (employees[i].reviewRating === 5) {
    return employees[i].annualSalary * .1
    }
    // Return the bonus reviews of new object
    return bonusReviews; 
}



console.log( employees );
