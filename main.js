let title1 = document.getElementsByName("title");
let id1 = document.getElementsByName("omdbid");
let year1 = document.getElementsByName("year");
let plot1 = year1 = document.getElementsByName("plot");
let apikey1 = "7fe5d6e7" //document.getElementById("apikey01");

let fetchurl = 'http://www.omdbapi.com/?apikey=' + apikey1 + '&t=' + title1 + '&y=' + year1; // + '&plot=' + plot1;

let list1 = [];

function myFetch() {
    fetch (fetchurl)
    .then ((data)=>{
        return data.json(); //converted to json object
    })

    .then ((objectData)=>{
        list1.push(objectData);
        console.log(list1);

        let tableData = "";

    
        objectData.map((objectData=>{
            tableData=`<img src= ${objectData} style="width:500; height:500">`
        }));

        document.getElementById("bod_div").innerHTML=tableData;
    })
};

/*function functionToExecute() {
    document.getElementById("search").onclick = myFunct1()
};*/

function myFunct1() {
    document.getElementById('bod_div').innerHTML = list1;
}

document.getElementById("start").onclick = function() {
    myFunct1();
}
myFunct1();