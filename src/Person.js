export class Person {
  constructor(firstname, lastname, ssn){
    this._firstname = firstname;
    this._lastname = lastname;
    this._ssn = ssn;
    this._address = null;
    this._birthYear = null;
  };

  get ssn() {
    return this._ssn;
  };

  get firstname(){
    this._firstname
  };

  get lastname(){
    this._lastname
  };

  get address(){
    this._address
  };

  get birthYear(){
    this._birthYear
  };

  set birthYear(year) {
    this._birthYear = year
  };

  set address(addr) {
    this._address = addr
  };

  toString(){
    return new Person(`${this._firstname}, ${this._lastname}`)
  };
};