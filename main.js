allItemsReturn = [];
window.addEventListener(
    //wait for page to load
    'load', 
    
    //Once page is loaded,
    () => {
        if(localStorage.getItem('testObject') !== null){
            //var cache_stor = localStorage.getItem('testObject');
            //document.getElementById("bod_div2").innerHTML=cache_stor;
            document.getElementById("bod_div2").innerHTML=allItemsReturn;
        }
    });

var tableData =``;
var fav_tableData =``;
let counter = 0;
let newObjName = 'testObject' + counter;
reMe = [];


function getAllItems()  
{    
    for (i = 0; i <= localStorage.length-1; i++)    
    {     
        allItemsReturn.push(localStorage.getItem(localStorage.key(i)));        
    }
    return allItemsReturn;
}  

console.log(getAllItems());



function myFetch() {

    let title1 = document.getElementById("title").value;
    //console.log(title1);
    let id1 = document.getElementsByName("omdbid");
    let year1 = document.getElementsByName("year");
    let plot1 = document.getElementsByName("plot");
    let apikey1 = document.getElementById("apikey01").value;
    //console.log(apikey1);
    

    //const fav = document.getElementById("fav_bttn")
    
    let fetchurl = 'http://www.omdbapi.com/?apikey=' + apikey1 + '&t=' + title1 + '&y=' + year1 + '&plot=' + plot1;
    console.log('the fetch url is: ' + fetchurl);
    
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
        //console.log(movURL);
    
        tableData = `
            <table>
                <tr>
                    <th>Poster</th>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Rating</th>
                    <th>Released</th>
                    <th>Favorite</th>
                    <th>Notes</th>
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
            <tr>
                <th>Poster</th>
                <th>Title</th>
                <th>Year</th>
                <th>Rating</th>
                <th>Released</th>
                <th>Favorite</th>
                <th>Notes</th>
            </tr>
            <tr>
                <td><img src="${movURL}" alt="movie poster"></td>
                <td>${list1[0].Title}</td>
                <td>${list1[0].Year}</td>
                <td>${list1[0].imdbRating}</td>
                <td>${list1[0].Released}</td>
                <td>${list1[0].Actors}</td>
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
                console.log('Counter is set to: ' + counter);
                if (localStorage.getItem('testObject') === null) {
                    console.log('No favorite was found saved! A new one has now been saved.')
                    localStorage.setItem('testObject', fav_tableData);
                    var saved = localStorage.getItem('testObject');
                    console.log(saved);
                    document.getElementById("bod_div2").innerHTML=saved;
                    counter++;
                    newObjName = 'testObject' + counter;
                } else {
                    console.log('Object was found present as: ' + newObjName)
                    localStorage.setItem(newObjName, fav_tableData);
                    var saved = localStorage.getItem(newObjName);
                    console.log(saved);
                    document.getElementById("bod_div2").innerHTML=allItemsReturn;
                    counter++;
                    newObjName = 'testObject' + counter;
                }
            
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

