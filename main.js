// JavaScript source code

function validateForm() {
    // Specify which elemts in form to be validates=d
    let x = document.forms["movieForm"]["apikey"].value;
    let y = document.forms["movieForm"]["title"].value;

    // If either element is blank, function produces an alert.
    if (x == "" || y == "") {
        alert("API Key and Title must be filled out");
        return false;

        // If elemts are valid, function calls for the main function to run.
    } else {
        myFunct1();
    }
}

// Main funtion
function myFunct1() {

    let list1 = []; //Create a list to store returned data

    // Store user inouts from form into variables to use later
    let apikey1 = document.getElementById("apikey").value;
    let title1 = document.getElementsByName("title").value;
    let id1 = document.getElementsByName("omdbid").value;
    let year1 = document.getElementsByName("year").value;
    let plot1 = year1 = document.getElementsByName("plot").value;

    // Create variable to save created API url
    let fetchurl = 'http://www.omdbapi.com/?apikey=' + apikey1 + '&t=' + document.getElementById("title").value;

    // Use fetch function to make API call
    fetch(fetchurl)

        // Detirmine how to handle the response data
        .then((data) => {
            return data.json(); //converted respionse data to JSON object
            /*list1.push(data);
            console.log(data)*/
        })



        .then((objectData) => {
            list1.push(objectData); // Push json data into a list
            console.log(list1); // Log list to console for verification
            resulturl = list1[0].Poster // Saved Poster (if any) to a variable to diaplay later

            let tableData = ""; // Variable to hold poster url
            let arry1 = []; //Array to hold other info about serched for movie.
            tableData = `<img src= ${resulturl} style="width:500; height:500">`; // Created poster img tag
            arry1.push('Title: ' + list1[0].Title, 'Year: ' + list1[0].Year, 'Rated: ' + list1[0].Rated, 'Released: ' + list1[0].Released) //push other info about serched for movie to array


            /*objectData.map((objectData=>{
                tableData=`<img src= ${objectData} style="width:500; height:500">`;*/

            document.getElementById("bod_div2").innerHTML = tableData; // Display created img tag
            document.getElementById("bod_div3").innerHTML = arry1; // Display secondary array.

            /*list1.shift();*/
        });


};

/*document.getElementById('bod_div').innerHTML = list1;*/



// Created funtion to run Validation function ONLY when button is pressed.
document.getElementById("search").onclick = function () {
    validateForm();
};



/*document.getElementById('bod_div').innerHTML = list1;*/




/*functionToExecute();*/
