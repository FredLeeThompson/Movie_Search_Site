
class APIKeySearch extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div>
                <label for="apikey01">API Key: <span class="mandatory">*</span></label><br>
                <input type="text" id="apikey01" name="apikey" placeholder="Enter API key" aria-required="true" aria-label="Enter API Key" required><br>
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
                <input type="text" id="imdbid" name="omdbid" placeholder="optional"><br>
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

            </div>
        `
    }  
};
customElements.define('movie-form', MovieForm);


document.getElementById("search").onclick = function() {
    if (validateForm()) {
        myFetch();
    }
}



