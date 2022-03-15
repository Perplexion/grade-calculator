/**
 * Implementation of the Basic Grade Calculator
 * Function is called when user clicks "Calculate"
 */
$("#calculate").on("click", function() {
    let basicModeUser = new BasicMode();

    for(let i = 0; i < categoryCount; i++) {
        if($("#category" + i).length) {                                                                 // check if the category by number still exists
            let categoryValues = $("#category" + i).find("input");
            
            let categoryName = categoryValues[0].value;                                                 // store the user specified category name
            let categoryWeight = parseFloat(categoryValues[1].value);
            let categoryGrade = parseFloat(categoryValues[2].value);

            if(!isValidInput(categoryWeight)) return;                                                // verify the category weight input
            if(!isValidInput(categoryGrade)) return;                                                 // verify the category grade input

            basicModeUser.addCategory(new BasicCategory(categoryName, categoryWeight, categoryGrade));  // add the user defined category

            if(basicModeUser.totalPercentageWeight > 100) {                                             // reject if user inputted more than 100% of category weight's
                alert("Total Category Weight cannot exceed 100%");
                return;
            }
        }
    }
    calculateWeightValue(basicModeUser.categoriesList);
    alert("Final Grade: " + basicModeUser.calcFinalGrade());
});

/**
 * Function that goes through all the user defined categories and calculates the point value it has on the final grade
 */
calculateWeightValue = function(categoriesList) {
    for(let i = 0; i < categoriesList.length; i++) {
        categoriesList[i].calcWeightVal();
    }
}

/**
 * Function that verifies the input of CategoryWeight and CategoryGrade to ensure they are valid numerics
 */
isValidInput = function(checkValue) {
    if(isNaN(checkValue)) {
        alert("A value in a Category is not a number!");
        return false;
    } else if(checkValue < 0) {
        alert("A value in Category is less than 0!");
        return false;
    } else if(checkValue > 100) {
        alert("A value in Category is greater than 100!");
        return false;
    }
    return true;
}