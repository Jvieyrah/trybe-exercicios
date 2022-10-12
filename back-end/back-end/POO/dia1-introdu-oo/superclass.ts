interface MyInterface {
  myNumber : number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber : number) {}
  myFunc(myParam: number): string {
    return `myNumber + myParam: ${this.myNumber + myParam}`;
  }
  }

const myClass = new MyClass(10);
console.log(myClass.myFunc(5));
  


class SuperClass {
    isSuper: boolean
  constructor() {
    this.isSuper = true;
  }
  public sayHello() {
    console.log('Olá, eu sou a SuperClass!');
  }
}

class SubClass extends SuperClass {
    constructor() {
        super();
        this.isSuper = false;
    }
    public sayHello2() {
        this.sayHello();
    }
    }

const myFunc = (obj: SubClass) => {
    obj.sayHello();
}

// const mySuper = new SuperClass();
const mySub = new SubClass();

// myFunc(mySuper);
myFunc(mySub);
