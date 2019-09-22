import {set, view, lensProp} from 'ramda'
import {Person} from './Person'

const person = new Person('Alonzo', 'Church', '44-44-4444');

const lastnameLens = lensProp('_lastname');

// console.log(view(lastnameLens, person));

const newPerson = set(lastnameLens, 'Mourning', person);
console.log(newPerson);
