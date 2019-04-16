const btnSearch = document.getElementById('btn-search');
const result = document.getElementById('result');
const words = document.getElementById('words');

btnSearch.addEventListener('click', ()=>{
  let palabra = words.value;
  fetchDataSearch(palabra);
});

const fetchDataSearch = (word) =>{
  let dataMovie;
  const apiKey = 'apikey=f4578cd7';
  fetch(`http://www.omdbapi.com/?&${apiKey}&s=${word}`)
    .then(response => response.json())
    .then(data=>{
      dataMovie = data.Search;
      console.log(movie.getData(dataMovie));
      result.innerHTML = drawTemplate(dataMovie);      
    });  
};

const drawTemplate = (data)=>{
  let totalCard = '';
  for (let i = 0; i < data.length;i++) {
    let card = `
        <div class="card" style="width:200px">
          <img class="card-img-top" src="${data[i].Poster}" alt="Card image">
          <div class="card-body">
            <h4 class="card-title">${data[i].Title}</h4>
            <a href="#" class="btn btn-primary">See Profile</a>
          </div>
        </div> 
    `;
    totalCard += card;
  }
  return totalCard;
};

