(()=>{
    const headerNav = document.querySelector('.header__content');
    const headerBtn = document.querySelector('.top-menu-btn')
    const svgIcon = document.querySelector('.top-menu-btn use');
    let closeFlag = false;
    
    headerBtn.addEventListener('click', ()=>{
        console.log('click');
        closeFlag = !closeFlag;
        switchIcon();
        headerNav.classList.toggle('header__content--mobile')
    })

    function switchIcon(){
        closeFlag ? svgIcon.setAttribute('href',"./images/sprite.svg#icon-mobile-menu-close") : 
            svgIcon.setAttribute('href',"./images/sprite.svg#icon-mobile-menu");
    }
    
})()