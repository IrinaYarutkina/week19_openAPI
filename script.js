function getposts(object){
    return `
        <div> 
            <h2>${object.title} </h2>
        </div>
    `;
}
function appendPost(container, markup) {
    container.innerHTML += markup;
}

function fetchData(){
    const container = document.getElementById('container');
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((info) => {
        info.forEach((par) => {
            const markup = getposts(par);
            appendPost(container, markup);
        });
    })
    .catch((err) => console.log(err));
}
fetchData(); 


function createPost(title, body){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({title, body}),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
    })
    .then((res) => res.json())
    .then((post) => {
        const markup = createPost(post);
        appendPost(container, markup);
    })
    .catch((err) => console.log(err))
}
document.getElementById('button').addEventListener('click', () => {
    createPost(document.getElementById('title').value, 'body');
});