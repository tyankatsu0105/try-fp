import {Student} from './Student'

const tyankatsu = new Student('yamamoto', 'katsuya', '111-1111', 'seinan');
tyankatsu.address = 'japan'
tyankatsu.birthYear = '1994'

console.log(tyankatsu.toString());
