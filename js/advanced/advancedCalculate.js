/**
 * Implementation of the Advanced Grade Calculator
 * Function is called when the user clicks "Calculate" on the Advanced page
 */
$("#calculate").on("click", function() {
    let advancedModeUser = new AdvancedMode();

    for(let i = 0; i < categoryCount; i++) {
        if($("#category" + i).length) {
            let categoryValues = $("#category" + i).find("input");                                                      // find information about the Category
            let categoryName = categoryValues[0].value;
            let categoryWeight = parseFloat(categoryValues[1].value);

            if(!(isValidCategoryWeight(categoryWeight))) return;                                                        // verify that the Category weight is a valid number
            let newCategory = new AdvancedCategory(categoryName, categoryWeight);                                       // create new AdvancedCategory

            let categoryAssignments = $("#category" + i + "-assignments").find("div");                                  // find all assignments associated with this Category
            for(let j = 0; j < categoryAssignments.length; j++) {
                let currentAssignment = $(categoryAssignments[j]).find("input");                                        // find information about each individual Assignment
                let assignmentName = currentAssignment[0].value;
                let assignmentMaxScore = parseFloat(currentAssignment[1].value);
                let assignmentEarnedScore = parseFloat(currentAssignment[2].value)

                if(!(isValidAssignmentNumber(assignmentMaxScore, "Max Score"))) return;                                 // verify that Assignment max score and earned score are valid number
                if(!(isValidAssignmentNumber(assignmentEarnedScore, "Earned Score"))) return;
     
                newCategory.addAssignment(new Assignment(assignmentName, assignmentMaxScore, assignmentEarnedScore));   // add a new Assignment to the Category
            }
            advancedModeUser.addCategory(newCategory);                                                                  // add the Category to the AdvancedUser
        }
        if(advancedModeUser.totalPercentageWeight > 100) {
            alert("Total Weight of all Category's cannot be greater than 100!");
            return;
        }
    }
    $("#finalGrade").val(advancedModeUser.calcFinalGrade() + "%");
});

/**
 * Function that checks whether or not the Category weight is a valid number
 */
let isValidCategoryWeight = function(value) {
    if(isNaN(value)) {
        alert("Category Weight values must be numeric!");
        return false;
    } else if(value <= 0) {
        alert("Category Weight values must be at least 1!");
        return false;
    } else if(value > 100) {
        alert("Category Weight values cannot be greater than 100!");
        return false;
    }
    return true;
}

/**
 * Function that checks whether or not value is valid as input in the specified field
 */
let isValidAssignmentNumber = function(value, valueName) {
    if(isNaN(value)) {
        alert("Value for an Assignment's " + valueName + " must be a number!");
        return false;
    } else if(value <= 0) {
        alert("Value for an Assignment's " + valueName + " must be at least 1!");
        return false;
    }
    return true;
}