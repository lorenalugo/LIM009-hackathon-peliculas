// function for movie details
/* const getData = (url) => {
	fetch(url, {
            method: "get"
        }).then(function (response) {
            return response.text();
        }).then(function (text) {
            let json = JSON.parse(text);
            console.log(json);
        });
}

getData('https://www.omdbapi.com/?t=glass&apikey=44019e1c');

// function for query search
const getQuery = (url) => {
	fetch(url, {
            method: "get"
        }).then(function (response) {
            return response.text();
        }).then(function (text) {
            let json = JSON.parse(text);
            let movies = [...json.Search];
            console.log(movies);
        });
}

getQuery('https://www.omdbapi.com/?s=batman&apikey=44019e1c');
*/