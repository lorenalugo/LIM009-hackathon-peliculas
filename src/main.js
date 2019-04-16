const btnSearch = document.getElementById('btn-search');
const result = document.getElementById('result');
const words = document.getElementById('words');
const apiKey = 'apikey=f4578cd7';

btnSearch.addEventListener('click', ()=>{
  let query = words.value;
  const url = `https://www.omdbapi.com/?&${apiKey}&s=${query}`;
  fetchDataSearch(query);
});

result.addEventListener('click', (event) => {
  const url = `https://www.omdbapi.com/?&${apiKey}&t=${event.target.alt}`;
  fetchDataSearch(url);
});


const fetchDataSearch = (url) =>{
  let dataMovie;
  fetch(url)
    .then(response => response.json())
    .then(data=>{
      dataMovie = data.Search;
      result.innerHTML = drawTemplate(dataMovie);      
    });  
};

const drawTemplate = (data)=>{
  let totalCard = '';
  for (let i = 0; i < data.length;i++) {
    let card = `
        <div class="card" style="width: 18rem;">
          <a href="#"><img src="${data[i].Poster}" class="card-img-top" alt="${data[i].Title}"></a>
          <div class="card-body">
            <p class="card-text">${data[i].Title}</p>
            <p class="card-text">${data[i].Year}</p>
          </div>
        </div>
    `;
    totalCard += card;
  }
  return totalCard;
};

