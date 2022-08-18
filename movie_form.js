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
                <label for="apikey">API Key: <span class="mandatory">*</span></label><br>
                <input type="text" id="apikey" name="apikey" placeholder="Enter API key" aria-required="true" aria-label="Enter API Key" required><br>
            </div>
        `
    }
};

customElements.define('apikey-search', APIKeySearch);


//Create a class for our custom element
class MovieForm extends HTMLElement {
    //use connectedcallback for what to display
    connectedCallback() {
        this.innerHTML = `
            <div id="form_div">
                <form id="form1" name="movieForm" action="http://www.omdbapi.com/?" method="get" onsubmit="return validateForm()">
                    <!--
                    <label for="apikey">API Key:</label><br>
                    <input type="text" id="apikey" name="apikey" required><br>
                    -->

                    <apikey-search></apikey-search>

                    <br>

                    <label for="t">Title:</label><br>
                    <input type="text" id="title" name="title" required value="Jurassic World"><br>
                    
                    <br>

                    <label for="imdbid">OMDB ID:</label><br>
                    <input type="text" id="imdbid" name="omdbid"><br>

                    <br>

                    <label for="y">Year:</label><br>
                    <!--<input type="text" id="year" name="year" value="2022"><br>-->
                    <select id="year">
                        <option>2022</option>
                        <option>2021</option>
                        <option>2020</option>
                        <option>2019</option>
                    </select><br>

                    <br>
                    <p>Plot:</p>
                    <input type="radio" id="Short" name="movie_plot" value="Short">
                    <label for="Short">Short</label>

                    <br>
                    
                    <input type="radio" id="Long" name="movie_plot" value="Short">
                    <label for "Long">Long</label>
                </form><br>

                <button id="search" type="submit">SEARCH!</button>
            </div>
        `
    }
}


/*
class APIKeySearch extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<div>
            <label for="apikey">API Key: <span class="mandatory">*</span></label><br>
            <input type="text" id="apikey" name="apikey" placeholder="Enter API key" aria-required="true" aria-label="Enter API Key" required><br>
</div>
</div>
        `
    }
}
*/

customElements.define('movie-form', MovieForm);
// customElements.define('apikey-search', APIKeySearch);
