

function myFetch() {

    let title1 = document.getElementById("title").value;
    console.log(title1);
    let id1 = document.getElementsByName("omdbid");
    let year1 = document.getElementsByName("year");
    let plot1 = document.getElementsByName("plot");
    let apikey1 = document.getElementById("apikey01").value;
    console.log(apikey1);

    //const fav = document.getElementById("fav_bttn")
    
    let fetchurl = 'http://www.omdbapi.com/?apikey=' + apikey1 + '&t=' + title1 ; //+ '&y=' + year1 + '&plot=' + plot1;
    console.log(fetchurl);
    
    let list1 = [];
    
    fetch (fetchurl)
    
    .then ((data)=>{
        return data.json(); //converted to json object
    })
    
    
    
    .then ((objectData)=>{
        list1.push(objectData);
        console.log(list1);
        movURL = list1[0].Poster;
        //console.log(movURL);
    
        let tableData = `
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
                    <td>${list1[0].Rating}</td>
                    <td>${list1[0].Released}</td>
                    <td>
                        <input type="checkbox" id="fav_bttn" name="movie_fav">
                        <label for="fav_bttn">Add to Favorite</label>
                    </td>
                    <td>${list1[0].Actors}</td>
                </tr>
                <!--<img src= ${movURL} alt="movie poster">-->
            </table>
        `;
    
        
            /*objectData.map((objectData=>{
                tableData=`<img src= ${objectData} style="width:500; height:500">`
            }));*/
    
            document.getElementById("bod_div").innerHTML=tableData;
    
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


