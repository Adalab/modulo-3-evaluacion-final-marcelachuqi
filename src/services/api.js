const getDataFromApi = () => {
  return fetch(
    "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json"
  )
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((cartoon) => {
        return {
          name: cartoon.name,
          species: cartoon.species,
          image: cartoon.image,
          id: cartoon.id,
          planet: cartoon.location.name,
          episodes: cartoon.episode.length,
          status: cartoon.status,
        };
      });
      return cleanData;
    });
};

export default getDataFromApi;
