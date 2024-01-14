export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': "fab6caa435msh1663b3eaa0ef5cep142e59jsn341369dce05d",
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  ;

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'fab6caa435msh1663b3eaa0ef5cep142e59jsn341369dce05d',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


export const fetchData = async(url, options) =>{
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}