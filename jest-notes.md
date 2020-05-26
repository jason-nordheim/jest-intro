# Setup 

## Initialize NPM in the Project directory 
Execute the command below: 
```sh
npm init -y 
```
* using `-y` switch will skip the prompts
* successfull execution should create a file in the project directory named `package.json`


## Install Jest 
Execute the following command (in the root of the project directory)
```sh
npm install --save-dev jest
```
* This should create a directory called `node_modules` 
* The `--save-dev` indicates that this package is only needed for `development` and is not required for core functionality. 
* If you are using this with `git`, you should add the `node_modules` to you `.gitignore`


## Modify the test script 
Open the `package.json` file, and modify the test command as follows: 
```json
{
  "name": "jest-intro",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest" // this is the important line 
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jest": "^26.0.1"
  }
}
```
* This will tell npm, that when you call `npm test` you want to use `jest` to run your tests


## Create a test file 

Test file should match the name of the file you want to test, in the following manner: 
* `math.js` would have a test file named `math.test.js` 

In the test file, import the functions and variables needed from the library file: 
If you have a multiple functions in a single file, you can import them like so: 

```js
// sample library file 
const sum = (a, b) => {
    return a + b; 
}
const cube = (a) => {
    return a * a * a 
}
const square = (a) => {
    return a * a; 
}
module.exports = {sum, cube, square}; // this allows us to use those functions in our tests 
```
We can then run those from our test file like so: 
```js
//import required functions 
const sum = require('./basic-math').sum; 
const cube = require('./basic-math').cube; 
const square = require('./basic-math').square

test('properly adds two numbers', ()=> {
    expect(sum(1,2)).toBe(3); 
})
// testing the cube function 
test('properly cubes a number', ()=>{
    expect(cube(3)).toBe(27); 
})
// testing the square function 
test('properly squares a number', ()=> {
    expect(square(5)).toBe(25); 
})
```
