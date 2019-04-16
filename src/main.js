const btnSearch = document.getElementById('btn-search');
const result = document.getElementById('result');
const resultMovie = document.getElementById('result-movie');
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
      console.log(dataMovie);
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
            <button type="button" class="btn btn-primary" id="${data[i].imdbID}">Ver mas</button>
          </div>
        </div> 
    `;
    totalCard += card;
  }
  return totalCard;
};

const changeContent = (content1, content2) => {
  content1.style.display = 'none';
  content2.style.display = 'block';
};


const fetchDataMovie = (id)=>{
  const apiKey = 'apikey=f4578cd7';
  fetch(`http://www.omdbapi.com/?&${apiKey}&i=${id}`)
    .then(response => response.json())
    .then(data=> {
      console.log(data);
      resultMovie.innerHTML = drawTemplateMovie(data);
    });  
};

const drawTemplateMovie = (data)=>{
  let card = `
        <div class="card" style="width:200px">
          <img class="card-img-top" src="${data.Poster}" alt="Card image">
          <div class="card-body">
            <h4 class="card-title">${data.Title}</h4>            
          </div>
        </div> 
    `;    
  return card;
};


result.addEventListener('click', (e)=>{
  const movie = e.target.id;  
  changeContent(result, resultMovie);
  fetchDataMovie(movie);
});
