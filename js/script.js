// Constantes de ambiente, para formular o ambiente de trabalho, são escritas em maiúsculas como boa prática!

const BASE_URL = "https://newsapi.org/v2";
const API_KEY = "827408e50e7e44b3a0ff390c8c222f16";
const boardNoticias = document.querySelector("#listaDeNoticias");

// Forma usando fetch

// fetch(`${BASE_URL}/top-headlines?country=br&apiKey=${API_KEY}`)
//     .then((resposta) => resposta.json())
//     .then((dados) => console.log(dados));

// Forma usando async await

async function getNotices() {
    let resposta = await fetch(`${BASE_URL}/top-headlines?country=br&apiKey=${API_KEY}`);

    let dados = await resposta.json();

    dados.articles.forEach(noticia => {
        boardNoticias.innerHTML += `<div class="col-4">
        <div class="card"><img class="card-img-top"
            src="${noticia.urlToImage}">
          <div class="card-body">
            <h5 class="card-title">${noticia.title}</h5>
            <p class="card-text">${noticia.description}</p><a class="btn btn-primary"
              href="${noticia.url}">Ir
              para noticia</a>
          </div>
        </div>
      </div>`
    });
}

getNotices();

// Como enviar um POST, PUT, DELETE para a API

// fetch(link, {
//     method:'POST',
//     headers:{
//         "Content-Type": 'application/json',
//     },
//     body: 
// })