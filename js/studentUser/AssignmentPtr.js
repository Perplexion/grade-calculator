const A = require("./Assignment.js");

//stores location of input fields relevant to a specific assignment
//does this instead of simply making an assignment in order to avoid 
//stale data, while keeping all of the user data neatly organized 
class AssignmentPtr {
    nameBox;
    maxScoreBox;
    actScoreBox;

    //TODO: input validation
    toAssignment(){
        return new A.Assignment(this.nameBox.value,this.maxScoreBox.value,this.actScoreBox.value);
    }

    constructor(nameBox,maxScoreBox,actScoreBox){
        this.nameBox = nameBox;
        this.maxScoreBox = maxScoreBox;
        this.actScoreBox = actScoreBox;
    }
}