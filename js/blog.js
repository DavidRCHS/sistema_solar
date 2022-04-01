const API_KEY = 'ZuY52Vb89mMWnvajCtGRp8Kyfn8HBQmYM4yOo0wn';


function getNotice()
{
    let fecha = document.getElementById('fecha').value ;
    const API_URL = `https://api.nasa.gov/planetary/apod?date=${fecha}&api_key=${API_KEY}`;
    return fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        document.getElementById('descripcion').innerHTML= data.explanation;
        document.getElementById('noticia_img').src = data.url;
        document.getElementById('titulo').innerHTML = data.title;
    })
}