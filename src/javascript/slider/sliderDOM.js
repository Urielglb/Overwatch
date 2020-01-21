import Slider from './slider';
import elements from './elements';
import Preloader from '../preloader/preloader';

let sliderTextContent = document.querySelector('#slider-text-content');
let title = document.querySelector('#slider-title');
let text = document.querySelector('#slider-text');
let img  = document.querySelector('#slider-img');
let controls = document.querySelector('.controls');
let leftArrow = document.querySelector('.left-arrow');
let rightArrow = document.querySelector('.right-arrow');


let slider = new Slider({
    elements,
    animationFunc : function(element){
        sliderTextContent.classList.add("hide");
        img.classList.add("hide");
        setTimeout(function(){
        title.textContent = element.title;
        img.src = element.img;
        text.textContent = element.text;
        sliderTextContent.classList.remove("hide");
        img.classList.remove("hide");
        },600);
    },
    speed : 5000
})

slider.play();

leftArrow.addEventListener('click',slider.prev);

rightArrow.addEventListener('click',slider.next);

const imagePaths = elements.map(el => el.img);

Preloader.preloadImages({
    images : imagePaths,
    completed : function(){
        controls.style.display = "flex";
    }
})
