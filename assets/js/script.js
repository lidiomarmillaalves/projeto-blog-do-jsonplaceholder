// https://jsonplaceholder.typicode.com/posts

async  function readPosts() {
    let postArea = document.querySelector('.posts');
    postArea.innerHTML = 'Carregando....';

    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();

    if (json.length > 0) {
        postArea.innerHTML = '';

        for (let i in json) {
            let postHtml = `<div><h1>${json[i].title}</h1>${json[i].body}</hr></div>`;
            postArea.innerHTML += postHtml;
            //postArea.insertAdjacentHTML("beforeend", postHtml);
        }

    } else {
        postArea.innerHTML = 'Nenhum post para exibir';
    }
}

//fazendo a requisição post
async function addNewpost(title, body) {
    await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                body,
                userId: 2
            })
        }
    );
    
    //limpando os posts
    document.querySelector('#titleField').value = '';
    document.querySelector('#bodyField').value = '';
    
    //lendo os posts
    readPosts();

}

//fazendo o evento de click
document.querySelector('#insertButton').addEventListener('click', () => {
    let title = document.querySelector('#titleField').value;
    let body = document.querySelector('#bodyField').value;

//fazendo a verificação
    if (title && body) {
        addNewpost(title, body);
    } else {
        alert("Preencha os campos...");
    }
});

readPosts();



