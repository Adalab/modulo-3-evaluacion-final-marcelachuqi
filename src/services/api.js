const getDataFromApi = () => {
  return fetch("http://rickandmortyapi.com/documentation/#get-all-characters")
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
