/**
 * Class to represent a Student User for the grade calculator website
 */
class StudentUser {
    categoriesList;
    totalPercentageWeight;

    constructor() {
        this.categoriesList = [];
        this.totalPercentageWeight = 0;
    }

    /**
     * Function that updates the total percentage weight based on all categories created by the student user
     */
    updateTotalWeight() {
        this.totalPercentageWeight = 0;

        for(var i = 0; i < this.categoriesList.length; i++)
            this.totalPercentageWeight += this.categoriesList[i].percentageWeight;
    }

    /**
     * Function that adds a new category to the list of categories and updates the current total percentage weight
     * @param {StudentCategory} category the new category created by the student user
     */
    addCategory(category) {
        this.categoriesList.push(category);
        this.updateTotalWeight();
    }

    /**
     * Calculates and returns the final grade for a class based on all categories specified by the student user
     * @returns the final weighted grade for a class
     */
    calcFinalGrade() {
        var totalWeightValue = 0;

        for(var i = 0; i < this.categoriesList.length; i++)
            totalWeightValue += this.categoriesList[i].categoryWeightVal;
        
        return totalWeightValue / this.totalPercentageWeight;
    }
}