/**
 * Class to represent a grading category when the grade calculator is being used as a student user
 */
class StudentCategory {
    categoryName;                                                                               // the name of this grading category
    assignmentsList;                                                                            // list of assignments under this category
    percentageWeight;                                                                           // the weight of this category on the final grade
    categoryWeightVal;                                                                          // how many points this category contributes to the final grade

    constructor(categoryName, percentageWeight) {
        this.categoryName = categoryName;
        this.assignmentsList = [];
        this.percentageWeight = percentageWeight;
        this.categoryWeightVal = 0;
    }

    /**
     * Accessor to get the percentage weight of this category
     */
    get percentageWeight() {
        return this.percentageWeight;
    }

    /**
     * Accessor to get the exact value of this category on the final grade
     */
    get categoryWeightVal() {
        return this.categoryWeightVal;
    }

    /**
     * Function that calculates the average of this grading category at the time the function was called
     * @returns the average of this grading category
     */
    calcCategoryAvg() {
        var sum = 0;

        for(var i = 0; i < this.assignments.length; i++)
            sum += (this.assignmentsList[i].calcScore() * 100);                                 // convert decimal to percentage before adding to sum
        return sum / this.assignmentsList.length;
    }

    /**
     * Function that calculates and updates the exact number of points this category is worth towards a students final grade
     */
    calcWeightVal() {
        this.categoryWeightVal = this.calcCategoryAvg() * this.percentageWeight;
    }

    /**
     * Function to push the newly created user assignment to the list of assignments and updates the weight value of this category
     * @param {Assignment} assignment - an assignment created by the student user within this category
     */
    addAssignment(assignment) {
        this.assignmentsList.push(assignment);
        this.calcWeightVal();
    }
}