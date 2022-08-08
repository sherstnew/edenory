const more_btn = document.querySelector('.more-btn')

more_btn.addEventListener('click', ()=>{
    const scr = setInterval(()=>{
        window.scrollBy(0, 10)
        if (scrollY > 580) {
            clearInterval(scr)
        }
    }, 1)
})