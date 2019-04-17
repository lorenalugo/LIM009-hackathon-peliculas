const btnSearch = document.getElementById('btn-search');
const result = document.getElementById('result');
const btnRating = document.getElementById('btn-rating');
const inputQuery = document.getElementById('input-query');
const inputQueryNav = document.getElementById('input-query2');
const btnSearchNav = document.getElementById('btn-search2');
const apiKey = 'apikey=f4578cd7';
let dataSearched;

btnSearch.addEventListener('click', () => {
  if (inputQuery.value !== '') {
  toggleDisplay();
  let query = inputQuery.value;
  const url = `https://www.omdbapi.com/?&${apiKey}&s=${query}`;
  fetchDataSearchTotal(url);
  document.getElementById('buttons').classList.remove('d-none');
  document.getElementById('result').classList.remove('d-none');
  }
});

btnSearchNav.addEventListener('click', () => {
  if (inputQuery.value !== '') {
  let query = inputQueryNav.value;
  const url = `https://www.omdbapi.com/?&${apiKey}&s=${query}`;
  fetchDataSearchTotal(url);
}
});

btnRating.addEventListener('click', () => {
  const dataOrdered = movie.sortData(dataSearched);
  result.innerHTML = drawTemplate(dataOrdered);
});

result.addEventListener('click', (event) => {
  const url = `https://www.omdbapi.com/?&${apiKey}&t=${event.target.alt}`;
  fetchDataDetails(url);
});

const fetchDataDetails = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const dataDetail = movie.getItemDetails(data);
      result.innerHTML = drawDetailsTemplate(dataDetail);
    });
};

const fetchDataSearchTotal = (url) => {
  const page = 3; 
  let dataPages = [];
  for (let i = 1; i <= page; i++) {
    dataPages.push(fetch(`${url}&page=${[i]}`)
      .then(response=>response.json())
      .then(data=>data.Search)
    );
  }
  Promise.all(dataPages)
    .then(responses =>responses[0].concat(responses[1], responses[2]))  
    .then(result=> movie.getId(result))
    .then(movie =>{ 
      let newData = [];  
      let movieId;         
      movieId = movie;
      for (let i = 0; i < movieId.length;i++) {
        newData.push(fetch(`https://www.omdbapi.com/?&${apiKey}&i=${movieId[i]}`).then(response=>response.json()));
      }
      Promise.all(newData)
        .then(responses => {
          dataSearched = responses;
          result.innerHTML = drawTemplate(dataSearched);
        });
    });
};

const drawTemplate = (data) => {
  let totalCard = '<div class="row bg-dark p-3 m-0">';
  for (let i = 0; i < data.length; i++) {
    let card = `<div class="col-md-2 col-8 card-height mb-3 mx-auto">
          <div class="card bg-dark b-4 shadow-sm h-100">
            <a href="#"><img src="${data[i].Poster}" class="card-img-top" alt="${data[i].Title}"></a>
            <div class="card-body p-0">
              <small class="card-text">${data[i].Title}</small>
              <div class="align-items-left">
                <small class="text-muted">${data[i].imdbRating}</small>
              </div>
            </div>
          </div>
        </div>`;
    totalCard += card;
  }
  totalCard += '</div>';
  return totalCard;
};

const toggleDisplay = () => {
  document.getElementById('nav-form').classList.remove('d-none');
  document.getElementById('main-form').classList.add('d-none');  
}

const drawDetailsTemplate = (obj) => {
  let template = `<div class="container bg-dark container-details">
                   <img class="rounded float-left h-100 w-auto" src="${obj.Poster}" alt="${obj.Title}" />
                   <h3>${obj.Title}</h3>
                   <p>Rating: ${obj.imdbRating}</p>
                   <p>Duración: ${obj.Runtime} min</p>
                   <p>Género: ${obj.Genre}</p>
                   <p>Actores: ${obj.Actors}</p>
                   <p>Sinopsis: ${obj.Plot}</p>
                 </div>`;
  return template;
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('nav-form').reset();
  document.getElementById('main-form').reset();
});
