# JavaScript Code Execution and Call Stack

> **Video:** Execution Context and Call Stack - Chai Aur Code

## 📌 Overview

Understanding JavaScript code execution and the call stack is **critical for interviews**. These fundamental concepts form the backbone of JavaScript knowledge, and mastering them can help you crack over **50% of interview questions**.

---

## 🎯 Core Concepts

### 1. Execution Context: The Foundation
**Timestamp:** 1:59-5:26

Execution Context is **how JavaScript runs and executes your code**.

#### Three Types of Execution Context

| Context Type | When Created | Purpose |
|-------------|-------------|---------|
| **Global Execution Context (GEC)** | Always, when code runs | Default context for all code |
| **Function Execution Context (FEC)** | Every time a function is called | Creates new variable environment per function |
| **Eval Execution Context** | When eval() is called | Less common, rarely discussed in interviews |

**Key Point:** The **Global Execution Context** is always at the bottom and is referred to by the `this` keyword. In browsers, `this` in GEC = **window object**.

---

### 2. The Two-Phase Execution Model
**Timestamp:** 2:37 onwards

Every execution context (Global or Function) goes through **exactly two phases**:

#### Phase 1️⃣: Memory Creation Phase
**Also called:** Creation Phase / Memory Phase

```
┌─────────────────────────────────┐
│  Memory Creation Phase          │
├─────────────────────────────────┤
│ Variables → undefined           │
│ Functions → Full Definition     │
└─────────────────────────────────┘
```

- **Variables** are allocated memory and set to `undefined`
- **Functions** are stored with their complete definitions (function hoisting)
- This happens BEFORE any code execution

#### Phase 2️⃣: Execution Phase
**Also called:** Code Execution Phase

```
┌─────────────────────────────────┐
│  Execution Phase                │
├─────────────────────────────────┤
│ Variables → Actual Values       │
│ Functions → Execute When Called │
└─────────────────────────────────┘
```

- **Variables** are assigned their actual values
- **Code executes** line by line
- **Functions execute** when called (creating new FEC)
- **Return values** go back to calling context

---

### 3. Global Execution Context (GEC)
**Timestamp:** 2:52, 8:10

- Created first and always exists when JavaScript runs
- Accessible via `this` keyword
- In browsers: `this` = **window object**
- ⚠️ Important for React & server-side rendering issues

---

### 4. Function Execution Context (FEC)
**Timestamp:** 4:39, 11:58

- Created **every time a function is called**
- Each FEC has its own:
  - Variable environment
  - Execution thread
  - Memory Creation Phase
  - Execution Phase
- Deleted once function completes execution

---

## 📋 Step-by-Step Execution Example
**Timestamp:** 6:55-18:07

### Sample Code

```javascript
var val1 = 10;
var val2 = 5;

function addNum(num1, num2) {
  var total = num1 + num2;
  return total;
}

var result1 = addNum(val1, val2);
var result2 = addNum(10, 20);
```

### Execution Flow

#### Step 1️⃣: Global Execution Context Created
```
GEC created and assigned to this
```

#### Step 2️⃣: Memory Phase (Global)
```
val1       → undefined
val2       → undefined
addNum     → [Function Definition]
result1    → undefined
result2    → undefined
```

#### Step 3️⃣: Execution Phase (Global)

| Line | Action | Value |
|------|--------|-------|
| 1 | `val1 = 10` | 10 |
| 2 | `val2 = 5` | 5 |
| 8 | `addNum(10, 5)` called | **Creates FEC** |

#### Step 4️⃣: Function Execution Context (First Call)
**For:** `addNum(10, 5)`

**Memory Phase:**
```
num1  → undefined
num2  → undefined
total → undefined
```

**Execution Phase:**
```
num1  = 10
num2 = 5
total = 15 (10 + 5)
return 15
```

**Result:** FEC is **deleted**, value returns to GEC

#### Step 5️⃣: Continue Global Execution
```
result1 = 15
```

#### Step 6️⃣: Second Function Call
**For:** `addNum(10, 20)` → Creates new FEC → Returns 30 → Deleted

```
result2 = 30
```

---

## 🔄 Call Stack: Managing Execution Order
**Timestamp:** 18:22-25:50

### What is the Call Stack?

The **Call Stack** is a mechanism that manages the **order of function execution** in JavaScript.

#### Key Principles

- **LIFO (Last In, First Out):** Last function added is first to execute and be removed
- **Always has GEC at bottom:** Global Execution Context is the foundation
- **Functions pushed on call:** When function is invoked
- **Functions popped off:** When function completes

#### Visual Representation

```
┌──────────────────┐
│  FunctionC()     │  ← Executes first (LIFO)
├──────────────────┤
│  FunctionB()     │
├──────────────────┤
│  FunctionA()     │
├──────────────────┤
│  Global (GEC)    │  ← Always at bottom
└──────────────────┘
```

### Nested Function Calls Example

```javascript
function A() {
  function B() {
    function C() {
      console.log("C");
    }
    C();
  }
  B();
}
A();
```

**Call Stack Order:**
1. Global pushed
2. A() called → pushed
3. B() called → pushed
4. C() called → pushed
5. C() completes → popped
6. B() completes → popped
7. A() completes → popped
8. Global remains

---

## 🛠️ Visualizing with Chrome DevTools
**Timestamp:** 20:51-25:50

### How to Debug

1. **Open DevTools** → Inspect Element (F12)
2. **Go to Sources Tab**
3. **Create Snippet** (e.g., `chaiandcode.js`)
4. **Set Breakpoints** → Click on line numbers
5. **Run Code** → Watch Call Stack update in real-time

### What You'll See

- Functions being **pushed** onto Call Stack
- Variables in **Memory Heap** changing values
- **Execution flow** progressing through code
- Functions being **popped** when complete

---

## 💡 Key Insights & Patterns

| Concept | Key Takeaway |
|---------|-------------|
| **Foundation First** | Build strong understanding before advanced topics |
| **Two Phases** | Memory Creation, then Execution (always!) |
| **Per Function** | Each function gets its own context with both phases |
| **LIFO Execution** | Call Stack manages order via Last-In-First-Out |
| **Context Deletion** | FEC is deleted when function completes |
| **Visual Learning** | Use DevTools to see execution in action |

---

## 📚 Important Interview Points

✅ **Know the two phases:** Memory Creation + Execution Phase

✅ **Understand hoisting:** Variables = `undefined`, Functions = full definition

✅ **GEC always exists:** First context, referred to by `this`

✅ **FEC for every call:** New context, new variables, LIFO order

✅ **Call Stack visualization:** Understand push/pop order

✅ **Practice with DevTools:** See these concepts in action

---

## 🎓 Mastery Checklist

- [ ] Explain execution context and its types
- [ ] Describe the two-phase execution model
- [ ] Trace code through memory creation and execution phases
- [ ] Explain how the call stack manages function execution
- [ ] Use Chrome DevTools to debug and visualize execution
- [ ] Answer interview questions about hoisting and scope
