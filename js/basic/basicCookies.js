function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function setCookies(Category_List) {
    if(Category_List.length>0){
    setCookie("cookies",Category_List.length,365);
        for(i=0; i<Category_List.length;i++)
        {
            setCookie("name"+i, Category_List[i], 365);
            setCookie("weight"+i, Category_List[i], 365);
            setCookie("grade"+i, Category_List[i], 365);
        }
    }
}

function getCookies() {
    let num=getCookie("cookies");
    let zname, zweight, zgrade;
    let x=1;
    if (num != ""){
        for(i=0;i<num.cvalue;i++)
        {
            zname=getCookie("name"+i).cvalue;
            zweight=getCookie("weight"+i).cvalue;
            zgrade=getCookie("grade"+i).cvalue;
            autofill(zname, zweight, zgrade,i);
            x++;
        }
        return x;
    }
    else
        return 1;
}

function autofill(zname, zweight, zgrade,i) {
    let newCategory = $(document.createElement("div"));
    let newCatName = $(document.createElement("input"));
    let newWeight = $(document.createElement("input"));
    let newGrade = $(document.createElement("input"));
    let newButton = $(document.createElement("button"));
    let iTag = $(document.createElement("i"));
    
    /**
     * Set the attributes of the input fields
     */
    $(newCatName).attr({
        type: "text",
        value: zname,
    });

    $(newWeight).attr({
        type: "text",
        value: zweight,
    });

    $(newGrade).attr({
        type: "text",
        value: zgrade,
    });

    /**
     * Modify the CSS to style the input fields
     * This section modifies width and height of input fields
     */
    $(newCategory).css({"padding-top": "5px"});
    $(newCatName).css({"width": "150px", "height": "80px"});
    $(newWeight).css({"width": "150px", "height": "80px"});
    $(newGrade).css({"width": "150px", "height": "80px"});
    
    /**
     * Create the Button for deleting the category
     */

    iTag.text("Delete");
    iTag.css({
         "position": "relative",
         "font-style": "normal",
         "font-size": "1.2em",
         "text-transform": "uppercase"});
    $(newButton).append(iTag);
    $(newButton).addClass("btn_delete");                             
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
    $(newCategory).attr("id", "category" + i++);

    /**
     * Append the div to the main container, also a div
     */
    $("#inputFields").append(newCategory);

    return true;
}
  