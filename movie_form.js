/*class MyCounter extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }


    render() {
        this.shadow.innerHTML = `
            <h1>Counter</h1>
            ${this.count}
            <button id='bttn'>Increment</button>
        `
    }




};*/


class APIKeySearch extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div>
                <label id="apikey01" for="apikey">API Key: <span class="mandatory">*</span></label><br>
                <input type="text" id="apikey" name="apikey" placeholder="Enter API key" aria-required="true" aria-label="Enter API Key" required><br>
            </div>
        `
    }
};
customElements.define('apikey-search', APIKeySearch);


class TitleSearch extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div>
                <label for="title">Title: <span class ="mandatory">*</span></label><br>
                <input type="text" id="title" name="title" aria-required="true" aria-label="Enter movie title" value="Jurassic World" required><br>
            </div>
        `
    }
};
customElements.define('title-search', TitleSearch);


class IDSearch extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div>
                <label for="imdbid">OMDB ID:</label><br>
                <input type="text" id="imdbid" name="omdbid" placeholder="optional"<br>
            </div>
        `
    }
};
customElements.define('id-search', IDSearch);


class YearSearch extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div>
                <label for="y">Year:</label><br>
                <select id="year">
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                </select><br>
            </div>
        `
    }
};
customElements.define('year-search', YearSearch);


class PlotSearch extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div>
                <p>Plot:</p>
                <input type="radio" id="Short" name="movie_plot" value="Short">
                <label for="Short">Short</label>

                &nbsp;
            
                <input type="radio" id="Long" name="movie_plot" value="Short">
                <label for "Long">Long</label>
            </div>
        `
    }
};
customElements.define('plot-search', PlotSearch);

//Create a class for our custom element
class MovieForm extends HTMLElement {
    //use connectedcallback for what to display
    connectedCallback() {
        this.innerHTML = `
            <div id="form_div">
                <form id="form1" name="movieForm" action="http://www.omdbapi.com/?" method="get"> <!--onsubmit="return validateForm()">--> 
                   
                    <apikey-search></apikey-search>

                    <br>

                    <title-search></title-search>
                    
                    <br>

                    <id-search></id-search>

                    <br>

                    <year-search></year-search>

                    <br>
                    
                    <plot-search></plot-search>

                </form><br>

                <br>

                <!--<button id="search" type="submit" onclick="main.js">SEARCH!</button>-->

            </div>
        `
    }  
};
customElements.define('movie-form', MovieForm);
// customElements.define('apikey-search', APIKeySearch);
//Test comment

function myFetch() {

let title1 = document.getElementById("title").value;
console.log(title1);
let id1 = document.getElementsByName("omdbid");
let year1 = document.getElementsByName("year");
let plot1 = year1 = document.getElementsByName("plot");
let apikey1 = "7fe5d6e7" //document.getElementById("apikey01");

let fetchurl = 'http://www.omdbapi.com/?apikey=' + apikey1 + '&t=' + title1 ; //+ '&y=' + year1 + '&plot=' + plot1;
console.log(fetchurl);

let list1 = [];

//function myFetch() {
    fetch (fetchurl)
    .then ((data)=>{
        return data.json(); //converted to json object
    })

    .then ((objectData)=>{
        list1.push(objectData);
        console.log(list1);
        movURL = list1[0].Poster;
        console.log(movURL);

        let tableData = `
            <table>
            <tr>
                <th>Movie</th>
                <th>Released</th>
                <th>Plot</th>
                <th>Actors</th>
            </tr>
            <tr>
                <td><img src="${movURL}" alt="movie poster"></td>
                <td>${list1[0].Released}</td>
                <td>${list1[0].Plot}</td>
                <td>${list1[0].Actors}</td>
            </tr>
            <!--<img src= ${movURL} alt="movie poster">-->
        `;

    
        /*objectData.map((objectData=>{
            tableData=`<img src= ${objectData} style="width:500; height:500">`
        }));*/

        document.getElementById("bod_div").innerHTML=tableData;

        list1.shift();
    })
};

/*function functionToExecute() {
    document.getElementById("search").onclick = myFunct1()
};*/

function myFunct1() {
    document.getElementById('bod_div').innerHTML = tableData;
}

document.getElementById("search").onclick = function() {
    myFetch();
    //myFunct1();
}
//myFunct1();


