console.log("Movie Search");
const form = document.querySelector(".form");
const result = document.querySelector("#result");
/* <section>
<h2>Name</h2>
<img src="./" alt="Poster">
<p>Year</p>
<hr />
</section> */

function createMovie(name, linkToPoster, year) {
    const titleText = document.createTextNode(name);
    const title = document.createElement("h2");
    title.appendChild(titleText);

    const poster = document.createElement("img");
    poster.src = linkToPoster;
    poster.alt = name;

    const yearText = document.createTextNode(year);
    const yearP = document.createElement("p");
    yearP.appendChild(yearText);

    const hr = document.createElement("hr");

    const movieSection = document.createElement("section");
    movieSection.appendChild(title);
    movieSection.appendChild(poster);
    movieSection.appendChild(yearP);
    movieSection.appendChild(hr);

    return movieSection;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const type = document.querySelector("#type").value;
    
    fetch(`http://www.omdbapi.com/?s=${name}&type=${type}&apikey=5e6f46b5`)
    .then((response) => response.json())
    .then((data) => { 
        data.Search.forEach((movie) => {
            const movieLeyout = createMovie(movie.Title, movie.Poster, movie.Year);

            result.appendChild(movieLeyout);
        });    
    });

    console.log({ name, type });
});
