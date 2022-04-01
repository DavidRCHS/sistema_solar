const API_KEY = 'ZuY52Vb89mMWnvajCtGRp8Kyfn8HBQmYM4yOo0wn';


function getNotice()
{
    let fecha = document.getElementById('fecha').value ;
    const API_URL = `https://api.nasa.gov/EPIC/api/natural/date/${fecha}?api_key=${API_KEY}`;
    return fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const date = fecha.split("-");
        let year = date[0];
        let m = date[1];
        let d = date[2];
        data.forEach(datos => {
            const foto = document.createElement("article");
            foto.innerHTML = "<img src='https://epic.gsfc.nasa.gov/archive/natural/"+year+"/"+m+"/"+d+"/png/"+datos.image+".png?api_key=DEMO_KEY'>";
            document.getElementById("contenedor").appendChild(foto);
        });
        

        
    })
}