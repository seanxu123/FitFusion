export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2681ca8ab5msh607d905c6d3af77p1e99b9jsn2ba5a5434e7f',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  ;

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2681ca8ab5msh607d905c6d3af77p1e99b9jsn2ba5a5434e7f',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


export const fetchData = async(url, options) =>{
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}

//console.log(process.env.RAPID_API_KEY);