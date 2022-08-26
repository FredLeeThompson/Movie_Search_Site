
window.addEventListener(
    //wait for page to load
    'load', 
    
    //Once page is loaded,
    () => {
        if(localStorage.getItem('testObject') !== null){
            var cache_stor = localStorage.getItem('testObject');
            document.getElementById("bod_div2").innerHTML=cache_stor;
        }
    });

var tableData =``;
var fav_tableData =``;

function myFetch() {

    let title1 = document.getElementById("title").value;
    //console.log(title1);
    let id1 = document.getElementsByName("omdbid");
    let year1 = document.getElementsByName("year");
    let plot1 = document.getElementsByName("plot");
    let apikey1 = document.getElementById("apikey01").value;
    //console.log(apikey1);

    //const fav = document.getElementById("fav_bttn")
    
    let fetchurl = 'http://www.omdbapi.com/?apikey=' + apikey1 + '&t=' + title1 ; //+ '&y=' + year1 + '&plot=' + plot1;
    //console.log(fetchurl);
    
    let list1 = []; 
    
    /*   
    //Capture a copy of the data in list1.
    var fav_list1_capture = [];
    function list1_capture() {
        for (var i of list1) {
            fav_list1_capture.push(i);
        };
    };
    */

    //.....................................................................
    
    fetch (fetchurl)
    
    .then ((data)=>{
        return data.json(); //converted to json object
    })
    
    
    
    .then ((objectData)=>{
        list1.push(objectData);
        movURL = list1[0].Poster;
        console.log(list1[0].imdbRating);
    
        tableData = `
            <table>
                <tr>
                    <th>Poster</th>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Rating</th>
                    <th>Released</th>
                    <th>Favorite</th>
                    <th>Actors</th>
                </tr>
                <tr>
                    <td><img src="${movURL}" alt="movie poster"></td>
                    <td>${list1[0].Title}</td>
                    <td>${list1[0].Year}</td>
                    <td>${list1[0].imdbRating}</td>
                    <td>${list1[0].Released}</td>
                    <td>
                        <button class="fav_bttn">Add to favorites</button>
                    </td>
                    <td>${list1[0].Actors}</td>
                </tr>
                <!--<img src= ${movURL} alt="movie poster">-->
            </table>
        `;

        fav_tableData = `
        <br>
        <table>
            <h3>My Favorites</h3>
            <tr>
                <th>Poster</th>
                <th>Title</th>
                <th>Year</th>
                <th>Rating</th>
                <th>Released</th>
                <th>Notes</th>
                <th></th>
            </tr>
            <tr>
                <td><img src="${movURL}" alt="movie poster"></td>
                <td>${list1[0].Title}</td>
                <td>${list1[0].Year}</td>
                <td>${list1[0].imdbRating}</td>
                <td>${list1[0].Released}</td>
                <td>
                    <textarea rows="4" cols="50" name="notes">Sample text notes.</textarea>
                </td>
                <td><button class="del_bttn">Remove from favorites</button></td>
            </tr>
            <!--<img src= ${movURL} alt="movie poster">-->
        </table>
    `;
    
        
            /*objectData.map((objectData=>{
                tableData=`<img src= ${objectData} style="width:500; height:500">`
            }));*/
    
            document.getElementById("bod_div").innerHTML=tableData;
            //console.log(tableData);

            /*const saveToStorage = () => {
                localStorage.setItem('favMovItem', JSON.stringify(tableData));
                console.log(localStorage.getItem('favMovItem'), JSON.parse('favMovItem'));
            };*/



            //................................................................................

            const favBttn = document.querySelector(".fav_bttn");

            function saveMe () {
                tableData += fav_tableData;
                localStorage.setItem('testObject', fav_tableData);
                var saved = localStorage.getItem('testObject');
                console.log(saved);
                document.getElementById("bod_div2").innerHTML=saved;
            }

            function deleteMe () {
                localStorage.removeItem('testObject');
            }

            //var saved = localStorage.getItem('testObject');

            favBttn.addEventListener('click', saveMe);
            

            //console.log(saved);

            //console.log('saved: ', JSON.parse(saved));


            //console.log(list1);

            //favBttn.addEventListener('click', saveToStorage);

            //list1.shift();
        })
    
    list1.shift();


};

    //Define a fuction to show movie results table in the DOM.
    function myFunct1() {
        document.getElementById('bod_div').innerHTML = tableData;
    }

    
    //Define a form validation fuction.
    function validateForm() {
        let x = document.forms["movieForm"]["apikey"].value;
        let y = document.forms["movieForm"]["title"].value;
        if (x == "" || y == "") {
            alert("Please check your API key or title");
            return false;
        }
        else {
            return true;
        };
    }


    //...........................................................................................

    //.................Save To Local Storage...................................................
  

    //Add a listener for the favorites button.

    //create varibale to hold the button.
    

    //console.log(tableData)

