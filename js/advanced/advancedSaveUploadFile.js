//courtesy of: https://www.js-tutorials.com/javascript-tutorial/reading-csv-file-using-javascript-html5/
$(document).ready(function(){
    $('#header').load('../header-ads.html');
    $('#footer').load('../footer-ads.html');
    
    $('#submit-file').on("click",function(e){
        e.preventDefault();
        $('#files').parse({
            config: {
                header: false,
                delimiter: "",
                complete: fillInputFields,
            },
            before: function(file, inputElem)
            {
                console.log("Parsing file...", file);
            },
            error: function(err, file)
            {
                console.log("ERROR:", err, file);
            },
            complete: function()
            {
                console.log("Done with all files");
            }
        });
    });
      
    function fillInputFields(results){
        let data = results.data;
        let heading = data.shift().join(",");  //remove the row that is just column names
        //TODO: add -'s to csv the way it looks like in Dan's chart, update code accordingly 
        let headingShouldBe = ["Category Name","Weight"].join(",");
        //TODO:This warning is in the console, but I would like it to have it's own box that is only visible if there is a warning present
        //I tried to do this, but it was taking too long so I decided to wrap this up and commit
        if (heading !== headingShouldBe){ //until above TODO is fixed, this will always throw errors
            console.log("Waring: \dUpload file has heading: "+heading);
            console.log("Upload File heading should look like: "+headingShouldBe)
        }

        //clearing all input fields
        for (let i = 0; i < categoryCount; i++){
            if($("#category"+i).length){ // if category exists
                $("#category"+i+" .btn_delete").click(); //finds and presses delete button 
            }
        }
        //reset category count for simplicity
        categoryCount = 0;
        //filling fields with data from csv
        console.log("data.length = "+data.length)
        for(let i =0; i < data.length; i++){
            if (data[i][0] === "-"){ //is either assignment of assignment heading
                let categoryAssignments = $("#category"+(categoryCount-1)+"-assignments").find("div");
                //causing weird error rn
                /*while (data[i][0] === "-"){
                    console.log(data[i][0]);
                    if (data[i][1] === "Assignment Name"){
                        //don't add this row to 
                        console.log("data["+i+"][1] === Assignment Name");
                        i++;
                    } else {
                        //find category add button
                        console.log("data["+i+"][1] !== Assignment Name");
                        console.log($("#category"+(categoryCount-1)+" .btn_add_assignment"));
                        i++;
                        //add things to final assignment
                    }
                }*/

            } else { //if this should be a new category
                //make new category
                $("#newCategory").click();
                let categoryValues = $("#category"+(categoryCount-1)).find("input");
                for (let j = 0; j < 2; j++){//categories only have two fields
                    categoryValues[j].value = data[i][j]; 
                    if (data[i][j]===undefined){
                        console.log("data["+i+"]["+j+"] === undefined")
                        //find button to clear row we just made
                        $("#category"+i+" .btn_delete").click(); //finds and presses delete button
                        break;
                    }
                }                                                      // find information about the Category
            }
        }

        
        

        //filling fields with data from csv
        for(let i =0; i < data.length; i++){
            //create new category for 
            $("#newCategory").click();
            let values = $("#category"+(categoryCount-1)).find("input");
            for(let j = 0; j < values.length; j++){
                //checking for undefined values because some CSV editors save files in such a way 
                //that this step generates a mostly empty row at the bottom of the file.
                //this step prevents that from happening
                if (data[i][j]===undefined){
                    //find button to clear row we just made
                    $("#category"+(categoryCount-1)).find("button").click();
                    break;
                }
                values[j].value = data[i][j];  
            }
        }

    }
});

  function downloadSheet(){
      let rows = [];
      rows.push(["Category Name","Weight","Grade"]);

      for (let i = 0; i < categoryCount; i++){
          if($("#category"+i).length >0){ // if category exists
              let inputs = $("#category"+i).find("input");
              let values = [];
              for(let j = 0; j < inputs.length; j++){
                  //if there are commas it will break the csv parser so just remove them
                  let valueSansCommas = inputs[j].value.replace(/,/g,'');
                  values.push(valueSansCommas);
              }
              rows.push(values);
          }
      }

      //courtesy of https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side
      //-some adjustments made
      let csvContent = "data:text/csv;charset=utf-8,";
      for (let i = 0; i < rows.length-1; i++){
          let row = rows[i].join(",");
          csvContent += row + "\r\n";
      }
      //don't add carriage return to final line
      let row = rows[rows.length-1].join(",");
      csvContent += row;

      var encodedUri = encodeURI(csvContent);
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "Basic_Grade_Calc_"+Date()+".csv");
      document.body.appendChild(link); 
      link.click(); // This will download the data file 
      document.body.removeChild(link);
  }