const carousel = document.querySelector('.carousel')
let sliders = []

let slideIndex = 0;

const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0
    }
    // criando elementos no DOM
    let slide = document.createElement('div')
    let imgElement = document.createElement('img')
    let content = document.createElement('div')
    let h1 = document.createElement('h1')
    let p = document.createElement('p')

    //anexando todos os elementos
    imgElement.appendChild(document.createTextNode(''))
    h1.appendChild(document.createTextNode(movies[slideIndex].name))
    p.appendChild(document.createTextNode(movies[slideIndex].desc))
    content.appendChild(h1)
    content.appendChild(p)
    slide.appendChild(content)
    slide.appendChild(imgElement)
    carousel.appendChild(slide)

    //ajeitar imagem
    imgElement.src = movies[slideIndex].image;
    slideIndex++

    //anexando nomes de classe dos elementos
    slide.className = 'slider'
    content.className = 'slide-content'
    h1.className = 'movie-title'
    p.className = 'movie-desc'

    sliders.push(slide)

    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`
    }
}

for (let i = 0; i < 3; i++) {
    createSlide();
}

setInterval(() => {
    createSlide();
}, 3000);