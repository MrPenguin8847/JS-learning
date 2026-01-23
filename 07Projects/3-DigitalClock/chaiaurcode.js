const clock = document.querySelector('#clock')
// To display a working clock we'll have to refresh every second for that we will use setInterval
setInterval((e) => {
    let time = new Date()
    clock.innerHTML = time.toLocaleTimeString()
}, 1000);