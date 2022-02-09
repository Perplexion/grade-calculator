const SU = require("./StudentUser.js");                                                                       // import all required files
const SC = require("./StudentCategory.js");
const A = require("./Assignment.js");

const testUser = new SU.StudentUser();                                                                        // create sample StudentUser

testUser.addCategory(new SC.StudentCategory("Homework", 15));                                                 // create 4 categories
testUser.addCategory(new SC.StudentCategory("Quizzes", 20));
testUser.addCategory(new SC.StudentCategory("Midterm", 30));
testUser.addCategory(new SC.StudentCategory("Final", 35));

testUser.categoriesList[0].addAssignment(new A.Assignment("HW1", 100, 100));                                  // add to Homework category
testUser.categoriesList[0].addAssignment(new A.Assignment("HW2", 100, 75));
testUser.categoriesList[0].addAssignment(new A.Assignment("HW3", 100, 80));
testUser.categoriesList[0].addAssignment(new A.Assignment("HW4", 100, 95));
testUser.categoriesList[0].addAssignment(new A.Assignment("HW5", 100, 60));

testUser.categoriesList[1].addAssignment(new A.Assignment("Quiz1", 20, 18));                                  // add to Quizzes category
testUser.categoriesList[1].addAssignment(new A.Assignment("Quiz2", 20, 20));
testUser.categoriesList[1].addAssignment(new A.Assignment("Quiz3", 20, 13));

testUser.categoriesList[2].addAssignment(new A.Assignment("Midterm1", 80, 48));                               // add to Midterm category
testUser.categoriesList[2].addAssignment(new A.Assignment("Midterm2", 80, 60));

testUser.categoriesList[3].addAssignment(new A.Assignment("Final Exam", 80, 72));                             // add to Final category 

// Homework Category
console.log("\nHomework Average: " + testUser.categoriesList[0].calcCategoryAvg() + "%");                     // expected 82
console.log("Category Weight: " + testUser.categoriesList[0].percentageWeight + "%");
testUser.categoriesList[0].calcWeightVal();                             
console.log("Value on Final Grade: " + testUser.categoriesList[0].categoryWeightVal + " points");             // expected 12.3

// Quizzes Category
console.log("\nQuiz Average: " + testUser.categoriesList[1].calcCategoryAvg() + "%");                         // expected 85
console.log("Category Weight: " + testUser.categoriesList[1].percentageWeight + "%");
testUser.categoriesList[1].calcWeightVal();                             
console.log("Value on Final Grade: " + testUser.categoriesList[1].categoryWeightVal + " points");             // expected 17

// Midterm Category
console.log("\nMidterm Average: " + testUser.categoriesList[2].calcCategoryAvg() + "%");                      // expected 67.5
console.log("Category Weight: " + testUser.categoriesList[2].percentageWeight + "%");
testUser.categoriesList[2].calcWeightVal();                             
console.log("Value on Final Grade: " + testUser.categoriesList[2].categoryWeightVal + " points");             // expected 20.25

// Final Category
console.log("\nFinal Average: " + testUser.categoriesList[3].calcCategoryAvg() + "%");                        // expected 90
console.log("Category Weight: " + testUser.categoriesList[3].percentageWeight + "%");
testUser.categoriesList[3].calcWeightVal();                             
console.log("Value on Final Grade: " + testUser.categoriesList[3].categoryWeightVal + " points");             // expected 31.5

// User Final Weighted Average
console.log("\nFinal Grade: " + testUser.calcFinalGrade() + "%");                                             // expected 81.05


// Note: Refine classes to perform Linear search with Assignment/Category name and return the index of that element