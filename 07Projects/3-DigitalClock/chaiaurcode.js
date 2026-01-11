const clock = document.getElementById('clock')

// To create a date which changes we use setInterval
setInterval(() => {
    let date = new Date()
    // console.log(date.toLocaleTimeString);
    clock.innerHTML = date.toLocaleTimeString()
}, 1000);
