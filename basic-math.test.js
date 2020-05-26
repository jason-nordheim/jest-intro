//import {sum} from './basic-math'; 
const sum = require('./basic-math').sum; 
const cube = require('./basic-math').cube; 
const square = require('./basic-math').square


test('properly adds two numbers', ()=> {
    expect(sum(1,2)).toBe(3); 
})

test('properly cubes a number', ()=>{
    expect(cube(3)).toBe(27); 
})

test('properly squares a number', ()=> {
    expect(square(5)).toBe(25); 
})