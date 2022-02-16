
class AssignmentFieldBuilder{
    i;
    assignmentsPtrs;

    constructor(){
        this.assignmentsPtrs = new Map(); 
        this.i = 0; //helps give new input fields distinct names
    }

    buildSingleInputField(containerDiv,fieldID){
        let input = containerDiv.createElement("input");
        input.type = "text";
        input.id = fieldID;
        containerDiv.appendChild(input) 
        return input;
    }


    //adds input fields necessary for assignment to div specified by argument. 
    //returns AssignmentPtr object, but also adds said AssignmentPtr to AssignmentPtrs
    addAssignment(containerDiv) {
        let name = this.buildSingleInputField(containerDiv,"name"+i);
        let maxScore = this.buildSingleInputField(containerDiv, "maxScore"+i);
        let actScore = this.buildSingleInputField(containerDiv, "actScore"+i);
        let assignmentPtr = new AssignmentPtr(name,maxScore,actScore);
        this.assignmentsPtrs.set(i,assignmentPtr);
        i++;
        //I increment 'i' every time a new field is added so they all have distinct names,
        //this feels like a hack-y way of doing things but I can't think of anything better atm
        return assignmentPtr;
    }

    getAssignments(){
        let assignments = new Array();
        //TODO: find if this let goes here
        for(let ptr in this.assignmentsPtrs){
            assignments.push(ptr.toAssignment());
        }
        return assignments;
    }

}