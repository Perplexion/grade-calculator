var categoryCount = 1;                          // store the category count to be used when creating dynamic input fields for unique id names

/**
 * Style the default loaded category line once the page is loaded
 * Note: Things you want to happen when the page loads can also be included here
 */
$(document).ready(function() {
    /**
     * Add removal to the default loaded category line
     */
    $("#button0").on("click", function() {
        $("#category0").remove();
    });
});

/**
 * Functionality to add new lines for user input as well as deletion of the fields
 */
$("#newCategory").on("click", function() {
    /**
     * Create the new HTML elements - the category div, three input fields and the delete button for this category
     */
    var newCategory = $(document.createElement("div"));
    var newCatName = $(document.createElement("input"));
    var newWeight = $(document.createElement("input"));
    var newGrade = $(document.createElement("input"));
    var newButton = $(document.createElement("button"));
    var trashIcon = $(document.createElement("i"));
    
    /**
     * Set the attributes of the input fields
     */
    $(newCatName).attr({
        type: "text",
        placeholder: "Category Name",
    });

    $(newWeight).attr({
        type: "text",
        placeholder: "Weight",
    });

    $(newGrade).attr({
        type: "text",
        placeholder: "Grade",
    });

    /**
     * Modify the CSS to style the input fields
     * This section modifies width and height of input fields
     */
    $(newCategory).css({"padding-top": "5px"});
    $(newCatName).css({"width": "200px", "height": "25px"});
    $(newWeight).css({"width": "100px", "height": "25px"});
    $(newGrade).css({"width": "100px", "height": "25px"});
    
    /**
     * Create the Button for deleting the category
     */
    $(trashIcon).addClass("fas fa-trash-alt");                                  // add "trashcan" icon to button
    $(newButton).append(trashIcon);                                             // append to button so that the element appears within the button tag
    $(newButton).addClass("btn_round");                                         // give button round shape
    $(newButton).on("click", function() {
        $(newCategory).remove();
    });

    /**
     * Append the newly created category to the HTML page
     */
    $(newCategory).append(newCatName, " ", newWeight, " ", newGrade, " ", newButton);

    /**
     * Give it a unique id name so that it can be referenced later on (hopefully)
     */
    $(newCategory).attr("id", "category" + categoryCount);

    /**
     * Append the div to the main container, also a div
     */
    $("#inputFields").append(newCategory);

    /**
     * Increment the count so the number is always unique for each new category created
     */
    categoryCount++;
    return categoryCount;
});