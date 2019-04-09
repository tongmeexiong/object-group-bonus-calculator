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


bonusCalculation({})

function bonusCalculation(employee) {
  //for ( let i=0; i<employees.length; i++)
  if (employee.reviewRating < 2  ) {
    bonusReviews.bonusPercentage = 0;
    console.log ('bonusreviews');
  } else if (employees.reviewRating === 3){
    bonusReviews.bonusPercentage = .04*employee[i].annualSalary;
    console.log('bonusreviews');
  } else if (employees.reviewRating === 4) {
    bonusReviews.bonusPercentage = .06*employees[i].annualSalary;
    console.log('bonusreviews');
  } else if (employees.reviewRating === 5) {
    bonusReviews.bonusPercentage = .1*employees[i].annualSalary;
    console.log('bonusreviews');
    }
    // Return the bonus reviews of new object
    return bonusReviews; 
}



console.log( employees );
