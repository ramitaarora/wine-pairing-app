const searchBar = document.querySelector("#searchbar");
const searchInput = document.querySelector("#search-input");
const searchbarResults = document.querySelector("#searchbar-results")



searchBar.addEventListener("submit", async (event) => {
    event.preventDefault();
    const response = await fetch('/api/word-compare/wine', {
        method: 'POST',
        body: JSON.stringify({ "food": searchInput.value }),
        headers: { 'Content-Type': 'application/json' },
      });
    const data = await response.json()
    console.log(data);

    searchbarResults.innerHTML = "";
    for( let i=0; i < data.similarWines.length; i++){
    const newWine = document.createElement("p")
    newWine.textContent = data.similarWines[i]
    searchbarResults.append(newWine)
    }
    });

