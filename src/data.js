const getSearchData = (data) => {
  const dataMovie = data.map(data => {
    return { Title: data.Title, Poster: data.Poster, Year: data.Year };
  });
  return dataMovie;
};
const getId = (data) => {
  const dataMovie = data.map(data => data.imdbID);
  return dataMovie;
};
const sortData = (data) => {
  const dataOrder = [...data];
  let orderedMovie = dataOrder.sort((eleA, eleB) => eleB.imdbRating - eleA.imdbRating);    
  return orderedMovie;
};

window.movie = {
  getSearchData,
  getId,
  sortData
};
