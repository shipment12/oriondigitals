window.addEventListener('scroll', function(){
    let menuArea = document.getElementById('app');

    if(window.pageYOffset > 0){
        menuArea.classList.add('cus-nav');
        
    }else{
        menuArea.classList.remove('cus-nav')
    }
})