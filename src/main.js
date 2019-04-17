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
  const url = `//www.omdbapi.com/?&${apiKey}&s=${query}`;
  fetchDataSearchTotal(url);
  document.getElementById('buttons').classList.remove('none');
  }
});

btnSearchNav.addEventListener('click', () => {
  if (inputQuery.value !== '') {
  let query = inputQueryNav.value;
  const url = `//www.omdbapi.com/?&${apiKey}&s=${query}`;
  fetchDataSearchTotal(url);
}
});

btnRating.addEventListener('click', () => {
 const dataOrdered = movie.sortData(dataSearched);
 result.innerHTML = drawTemplate(dataOrdered);
});

result.addEventListener('click', (event) => {
  const url = `//www.omdbapi.com/?&${apiKey}&t=${event.target.alt}`;
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
 fetch(url)
   .then(response => response.json())
   .then(data => movie.getId(data.Search))
   .then(dataIds =>{
     let newData = [];
     for (let i = 0; i < dataIds.length;i++) {
       newData.push(fetch(`//www.omdbapi.com/?&${apiKey}&i=${dataIds[i]}`).then(response=>response.json()));
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
}

const drawDetailsTemplate = (obj) => {
 let template = `<div class="container">
                   <img class="rounded float-left" src="${obj.Poster}" alt="${obj.Title}" />
                   <h3>${obj.Title}</h3>
                   <p>${obj.imdbRating}</p>
                   <p>${obj.Runtime}</p>
                   <p>${obj.Genre}</p>
                   <p>${obj.Actors}</p>
                   <p>${obj.Plot}</p>
                 </div>`;
 return template;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('nav-form').reset();
  document.getElementById('main-form').reset();
});
