const form = document.querySelector('form')
// This usecase will give empty value
// const height = parseInt(document.querySelector('#height').value)

const resultValue = form.addEventListener('submit', (e) => {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    if (height == '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height ${height}`
    }else if (weight == '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight ${weight}`
    }else{
        const bmi = (weight/ ((height * height)/10000)).toFixed(2)
        // Show the result
        result.innerHTML = `<span>${bmi}</span>`
        const comparison = document.querySelector('#comparison')

        if (bmi < 18.6) {
            comparison.innerHTML = `<span>Your BMI is less than 18.6, you are Under weight</span>`
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            comparison.innerHTML = `<span>Your BMI range is Normal</span>`;
        } else if (bmi > 24.9) {
            comparison.innerHTML = `<span>Your BMI is more than 24.9, you are Over weight</span>`;
        } else {
            comparison.innerHTML = `<span>Invalid BMI value</span>`;
        }
    }
})
