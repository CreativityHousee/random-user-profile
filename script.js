const profileElem = document.querySelector('#profile')
const nameElem = document.querySelector('#name')
const locationElem = document.querySelector('#location')

window.addEventListener('load', () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => fetchData(data.results[0]))
})

const fetchData = data => {
    console.log(data);

    document.body.classList.remove('loading-effect')
    profileElem.parentElement.classList.remove('loading-effect')

    nameElem.innerHTML = `${data.name.first} ${data.name.last}`
    locationElem.innerHTML = `${data.location.country} ${data.location.city}`
    profileElem.src = data.picture.large
}