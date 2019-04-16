const btnSearch = document.getElementById('btn-search');
const btnRating = document.getElementById('btn-rating');
const result = document.getElementById('result');
const inputQuery = document.getElementById('input-query');
const apiKey = 'apikey=f4578cd7';

let dataSearched;

btnSearch.addEventListener('click', () => {
  toggleDisplay();
  let query = inputQuery.value;
  const url = `https://www.omdbapi.com/?&${apiKey}&s=${query}`;
  fetchDataSearchTotal(url);
});

result.addEventListener('click', (event) => {
  const url = `https://www.omdbapi.com/?&${apiKey}&t=${event.target.alt}`;
  console.log(fetchDataSearch(url));
});


const fetchDataSearch = (url) =>{
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const dataSearch = movie.getSearchData(data.Search);
      result.innerHTML = drawTemplate(dataSearch);
    });  
};

const fetchDataSearchTotal = (url) => {
  fetch(url)
    .then(response => response.json())
    .then(data => movie.getId(data.Search))
    .then(dataIds =>{
      let newData = [];
      for (let i = 0; i < dataIds.length;i++) {
        newData.push(fetch(`http://www.omdbapi.com/?&${apiKey}&i=${dataIds[i]}`).then(response=>response.json()));
      }
      Promise.all(newData)
        .then(responses =>{
          dataSearched = responses;
          result.innerHTML = drawTemplate(dataSearched);
        });
    });
};

const drawTemplate = (data)=>{
  let totalCard = '<div class="row">';
  for (let i = 0; i < data.length;i++) {
    let card = `<div class="col-sm-4 col-md-2">
        <div class="card">
          <a href="#"><img src="${data[i].Poster}" class="card-img-top" alt="${data[i].Title}"></a>
          <div class="card-body">
            <p class="card-text">${data[i].Title}</p>
            <p class="card-text">${data[i].imdbRating}</p>
          </div>
        </div>
        </div>
    `;
    totalCard += card;
  }
  totalCard += '</div>';
  return totalCard;
};

const toggleDisplay = () => {
  document.getElementById('nav-form').classList.remove('none');
  document.getElementById('main-form').classList.add('none');  
};

btnRating.addEventListener('click', () => {
  const dataOrdered = movie.sortData(dataSearched);
  result.innerHTML = drawTemplate(dataOrdered);
});  
