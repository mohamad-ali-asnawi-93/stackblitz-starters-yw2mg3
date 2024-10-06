Here's a coding exercise in the format you requested:

# Introduction
In this exercise, we will create a simple JavaScript program to take a user's age as input, increment it by 1, and output the new age.

# Step-by-Step Coding Exercise
1. First, let's create a variable to store the user's age as a number. We'll use `prompt()` to get the user's input and `parseFloat()` to convert it to a number:
   ```js
   const age = parseFloat(prompt('What is your age? '));
   ```

2. Next, we need to increment the user's age by 1. Let's create another variable called `newAge` to store the incremented age:
   ```js
   const newAge = age + 1;
   ```

3. Finally, we'll use `console.log()` to output the new age to the console:
   ```js
   console.log(newAge);
   ```
4. In the console, it should look like this:

```
What is your age? > 20
21
```

<details>
<summary>Full code</summary>
  
```js
  const age = parseFloat(prompt('What is your age? '));
  const newAge = age + 1;
  console.log(newAge);
```
</details>