const form = document.querySelector('form')
// if height and weight are assigned globally it will return empty value

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    if (height <= 0 || isNaN(height) || height == '') {
        alert('Please enter a valid number')
    } else if (weight <= 0 || isNaN(weight) || weight == '') {
        alert('Please enter a valid number')
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        result.innerHTML = `${bmi}`
        const comparison = document.querySelector('#comparison')
        if (bmi < 18.6) {
            comparison.innerHTML = `You are Under Weight`
        } else if (bmi > 18.6 && bmi < 24.9) {
            comparison.innerHTML = `You are Normal Range`
        } else {
            comparison.innerHTML = `You are Over Weight`
        }
    }
})