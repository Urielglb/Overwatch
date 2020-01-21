import names from './imgNames';

function addSrcs() {
    const imgs = document.querySelectorAll('img');
    let i = 0;
    imgs.forEach(img =>{
        img.src = names[i++]; 
    })
    console.log(names);
}

/*names.forEach(name => {
    console.log(name);
});*/

addSrcs();