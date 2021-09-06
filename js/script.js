//fetch
//then
//catch


// fetch('https://jsonplaceholder.typicode.com/users').then(response = response.json()).then(res => console.log(res))

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(json => console.log(json))
// .catch(err => console.log(err))



const BASE_URL = 'https://jsonplaceholder.typicode.com'
const container = document.querySelector('.row')
const getBase = document.querySelector('.GET')

function fetchData(route , cb){
    fetch(`${BASE_URL}/${route}`)
    .then(res => res.json())
    .then(r =>{
        cb(r)
    })
}

getBase.addEventListener('click' , e =>{
    e.preventDefault()
})

fetchData('photos' , res =>{
    console.log(res);
    const card = res.slice(0,10).map(item =>{
        return `
            <div class = 'col'>
                <div class = 'cardd'>
                    <div class = "title">
                        <h2>${item.title}</h2>
                    </div>
                    <div class = "card-image">
                        <img src= ${item.url}>
                    </div>
                </div>
            </div>
        `
    }).join('')

    container.innerHTML = card
})


//у меня все сломалось нафиг, простите,я исправлю,только закрепить не успела бы оказывается,поэтому исправлю после того как закреплю,на следующий урок кажись