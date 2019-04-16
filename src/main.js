const btnSearch = document.getElementById('btn-search');
const result = document.getElementById('result');
const inputQuery = document.getElementById('input-query');
const apiKey = 'apikey=f4578cd7';

btnSearch.addEventListener('click', () => {
  toggleDisplay();
  let query = inputQuery.value;
  const url = `https://www.omdbapi.com/?&${apiKey}&s=${query}`;
  fetchDataSearch(url);
});

 result.addEventListener('click', (event) => {
   const url = `https://www.omdbapi.com/?&${apiKey}&t=${event.target.alt}`;
   console.log(fetchDataSearch(url));
 });


const fetchDataSearch = (url) =>{
  let dataMovie;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const dataSearch = movie.getSearchData(data.Search);
      result.innerHTML = drawTemplate(dataSearch);
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
            <p class="card-text">${data[i].Year}</p>
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

/*
const fetchData = (url) => {
  let searchData = [];
  fetch(url).then((response) => {
            return response.json();
        })
    .then((json) => {
            searchData = [...json.Search];
            return getSearchData(searchData);
        })
    .then((result) => {
      let searchIds = result.map((id) => id.imdbID);
      return searchIds;
    })
    .then((idArray) => {
      debugger
      let fullResults = [];
      for (let i = 0; i < idArray.length; i++) {
        let titleUrl = `https://www.omdbapi.com/?&${apiKey}&i=${idArray[i]}`;
        fetch(titleUrl).then((response) => {
          return response.json();
        })
        .then((json) => {
          fullResults.push(json);
        })
      }
      printTest(fullResults);
    });
}

const printTest = (array) => {
  let template;
  for (var i = 0; i < array.length; i++) {
    template += `<div class="col-6"><p>${array[i].Title}</p>
    <p>${array[i].imdbRating}</p></div>`;    
  }
  return template;
}

*/
/*
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
*/