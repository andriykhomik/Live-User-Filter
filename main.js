const result = document.querySelector('#result');
const filter = document.querySelector('#filter');

let listItem = [];

getUsers();

async function getUsers(){
    const data = await fetch('https://randomuser.me/api?results=20');
    const response = await data.json();
    const {results} = response;
    createUser(results);
}

filter.addEventListener('input', (e)=> {
    filterData(filter.value)
})

function createUser(users){

    result.innerHTML = '';

    users.forEach(user => {

        const liEl = document.createElement('li');

        listItem.push(liEl);

        liEl.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `

        result.appendChild(liEl);
    })

}


function filterData(searchTerm){

    listItem.forEach(item => {

        if (item.innerText.toLowerCase().includes(searchTerm)){
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}
