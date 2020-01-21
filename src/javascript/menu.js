document.querySelector('.menu').addEventListener('click',function(){
    document.querySelector('.menu-screen').classList.add('active');
})

document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.menu-screen').classList.remove('active');
})

function scrollToElement(element) {
    window.scrollTo({
        'behaviour' : 'smooth',
        'top' : element.offsetTop
    });
}

let links = document.querySelectorAll('.menu-screen a');

links.forEach(link =>{
    link.addEventListener('click',function(ev) {
        document.querySelector('.menu-screen').classList.remove('active');
        const paths = this.href.split("/");
        const secction = paths[(paths.length)-1];
        if(window.scrollTo){
            ev.preventDefault();
        } 
        scrollToElement(document.querySelector(secction));
        return !!window.scrollTo;
    })
})

