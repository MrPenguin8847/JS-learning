# Chai aur JavaScript - Projects for Beginners

This video series focuses on building four JavaScript projects designed to build confidence in coding, even with basic JavaScript knowledge.

---

## 📺 Introduction to "Chai aur JavaScript" Series
**Timestamp: 0:00-1:22**

- Continuation of "Chai aur Code" series focusing on JavaScript
- Goal: Build beginner-friendly projects to gain confidence
- Only basics and some intermediate DOM concepts have been taught so far
- Free learning experience based on 10-12 years of instructor's coding experience

---

## ⚠️ Project Limitations & Future Topics: Events
**Timestamp: 1:23-2:09**

- More complex projects require understanding **events** (cursor movements, clicks, page refreshes, etc.)
- Events are crucial for interactive projects
- Dedicated videos will cover different event types
- Basic event handling will be demonstrated as needed

---

## 🎯 Overview: Four Projects with Progressive Difficulty
**Timestamp: 2:10-2:27**

Video covers **4 projects** that gradually increase in complexity to build confidence

---

## 🛠️ Setting Up the Project Environment
**Timestamp: 2:28-6:19**

- **CodeSandbox** - Initial choice but had minor beginner issues
- **StackBlitz** - Browser-based coding environment (recommended)
  - No local setup required
  - Open in regular browser (not incognito)
  - **Fork** the project to save changes (requires sign-in)
- Solutions available in GitHub markdown files for easy copying

---

## 🎨 Project 1: Color Changer
**Timestamp: 9:07-22:18**

### Goal
Change the background color of the page by clicking on color-themed buttons

### HTML Structure
- Span elements with specific IDs (`grey`, `white`, `blue`, `yellow`) acting as buttons

### CSS
- Pre-styled for basic appearance (focus is on JavaScript)

### JavaScript Implementation

**Step 1:** Select all buttons
```javascript
document.querySelectorAll('.button')
```

**Step 2:** Select the body element
```javascript
document.querySelector('body')
```

**Step 3:** Iterate through each button using `forEach()`

**Step 4:** Attach `addEventListener` for the `'click'` event to each button

**Step 5:** Access the clicked element's ID using `e.target.id`

**Step 6:** Use `if-else if` (or `switch` statement) to set background color
```javascript
if (id === 'grey') {
  body.style.backgroundColor = '#808080';
}
```

### Key Points
- Easy to add new colors: add HTML element + add `else if` condition
- Solution code available in GitHub file
- Refresh StackBlitz link to get clean starting code

---

## 🧮 Project 2: BMI Calculator
**Timestamp: 24:41-37:48**

### Goal
Calculate Body Mass Index (BMI) based on user-entered height and weight

### Formula
$$\text{BMI} = \frac{\text{Weight (kg)}}{\text{Height (m)}^2}$$

### HTML Structure
- Input fields for height and weight
- Calculate button (form submit button)
- Div element for displaying results

### JavaScript Implementation

**Step 1:** Select the form element
```javascript
document.querySelector('form')
```

**Step 2:** Attach `addEventListener` for the `'submit'` event

**Step 3:** Prevent default form submission
```javascript
e.preventDefault()
```

**Step 4:** Get height and weight values from input fields
```javascript
const height = document.querySelector('#height').value
const weight = document.querySelector('#weight').value
```

**⚠️ Important:** Retrieve values **inside the event listener** to capture current values, not empty ones on page load

**Step 5:** Parse input values to integers
```javascript
parseInt(height)  // Input values are strings initially
```

**Step 6:** Select result display area
```javascript
document.querySelector('#results')
```

**Step 7:** Implement validation checks for height and weight

Validate:
- ✓ Value is not empty
- ✓ Value is greater than zero
- ✓ Value is a valid number using `isNaN()`

Display error message if validation fails:
```javascript
results.innerHTML = "Error message here"
```

### Testing
- Validation works with various inputs (empty, zero, negative, invalid)