const more_btn = document.querySelector('.more-btn')
const req_btn = document.querySelector('.req-btn')
const vk = document.querySelector('.req-vk')
const req_conf = document.querySelector('.req-conf')
const req_err = document.querySelector('.req-err')

more_btn.addEventListener('click', () => {
    const scr = setInterval(()=>{
        window.scrollBy(0, 10)
        if (scrollY > 1000) {
            clearInterval(scr)
        }
    }, 1)
})

req_btn.addEventListener('click', () => {
    const scr = setInterval(()=>{
        window.scrollBy(0, 10)
        if (scrollY > 2100) {
            clearInterval(scr)
        }
    }, 1)
})

req_conf.addEventListener('click', () => {
    if (vk.value != '' && vk.value.includes('https://vk.com/')) {
        const xhr = new XMLHttpRequest()
        let body = {
            vk: '',
        }
        body.vk = vk.value
        body = JSON.stringify(body)
        xhr.open('POST', '/api', true)
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(body)
        window.scroll(0, 0)
        location.reload()
    } else {
        req_err.innerHTML = 'Некорректно введена ссылка'
    }
})