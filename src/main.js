class Fn {
  constructor(name){
    this.name = name;
  }
  getName() {
    console.log(this.name);
    
  }
}

const hoge = new Fn('ky')

hoge.getName();