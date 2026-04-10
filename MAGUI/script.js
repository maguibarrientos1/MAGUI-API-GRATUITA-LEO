const jokeBtn = document.getElementById("jokeBtn");
const jokeText = document.getElementById("jokeText");

jokeBtn.addEventListener("click", async () => {
    jokeText.textContent = "Cargando...";

    try {
        const res = await fetch("https://restcountries.com/v3.1/alpha?codes=arg,bra,usa");

        const data = await res.json();

        const randomCountry = data[Math.floor(Math.random() * data.length)];

        jokeText.textContent =
            "País: " + randomCountry.name.common +
            " | Capital: " + (randomCountry.capital ? randomCountry.capital[0] : "N/A");

    } catch (error) {
        jokeText.textContent = "Error al obtener datos";
        console.log(error);
    }
});