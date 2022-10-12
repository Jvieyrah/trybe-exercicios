export default class Person {
    constructor(private _name: string, private _birthDate: Date) {
      this.name = _name;
      this.birthDate = _birthDate;
    }
  
    get name(): string {
      return this._name;
    }
  
    set name(value: string) {
      this.validateName(value);
      this._name = value;
    }
  
    get birthDate(): Date {
      return this._birthDate;
    }
  
    set birthDate(value: Date) {
      this.validateBirthDate(value);
      this._birthDate = value;
    }
  
    static getAge(value: Date): number {
      const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
      const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
      return Math.floor(diff / yearMs);
    }
  
    private validateName(value: string): void {
      if (value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }
  
    private validateBirthDate(value: Date): void {
      if (value.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro.');
      if (Person.getAge(value) > 120) throw new Error('A pessoa deve ter no máximo 120 anos.');
    }
  }
  

const maria = new Person('Maria da Consolação', new Date('1980/01/25'));
const luiza = new Person('Luiza Andrade', new Date('2005/10/02'));

console.log(maria);
console.log(luiza);


class Student extends Person {
    private _enrollment = String();
    private _examsGrades: number[] = [];
    private _worksGrades: number[] = [];

    constructor(name: string, birthDate: Date) {
        super(name, birthDate);
        this._enrollment = this.generateEnrollment();
      }
      get enrollment(): string {
        return this._enrollment;
      }
    
      //esse método checa se a inscrição da pessoa estudante possui no mínimo 16 caracteres
      set enrollment(value: string) {
        if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
    
        this._enrollment = value;
      }
    
      get examsGrades(): number[] {
        return this._examsGrades;
      }
    
      set examsGrades(value: number[]) {
        if (value.length > 4) throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
    
        this._examsGrades = value;
      }
    
      get worksGrades(): number[] {
        return this._worksGrades;
      }
    
      set worksGrades(value: number[]) {
        if (value.length > 2) throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');
    
        this._worksGrades = value;
      }
    
      //esse método gera um id de inscrição aleatório baseado na data de cadastro da pessoa estudante
      generateEnrollment(): string {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    
        return `STU${randomStr}`;
      }
    }
       
    const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
    const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
    const jessica = new Student('Jéssica Bianca Nunes', new Date('2004/06/06'));
    const tamires = new Student('Tamires Santos Bastos', new Date('2005/11/05'));
    const fernando = new Student('Fernando Gonçalves', new Date('2006/09/11'));
    
    carolina.examsGrades = [25, 20, 25, 23];
    lucas.examsGrades = [25, 20, 25, 23];
    jessica.worksGrades = [50, 45];
    tamires.worksGrades = [47, 42];
    
    console.log(carolina);
    console.log(lucas);
    console.log(jessica);
    console.log(tamires);
    console.log(fernando);

    export default interface Employee {
        registration: string;
        salary: number;
        admissionDate: Date;
      
        generateRegistration(): string;
      }

      // ./Subject.ts

export default class Subject {
    constructor(private _name: string) {
      this.name = _name;
    }
  
    get name(): string {
      return this._name;
    }
  
    set name(value: string) {
      this.validateName(value);
      this._name = value;
    }
  
    private validateName(value: string): void {
      if (value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }
  }
  
  const math = new Subject('Matemática');
const story = new Subject('História');
const philosophy = new Subject('Filosofia');

console.log(math);
console.log(story);
console.log(philosophy);

export default class Teacher extends Person implements Employee {
    private _subject: Subject;
    private _registration = String();
    private _admissionDate: Date;

    constructor(name: string, birthDate: Date, private _salary: number, subject: Subject) {
        super(name, birthDate);
    
        this._subject = subject;
        this.salary = _salary;
        this._admissionDate = new Date();
        this.registration = this.generateRegistration();
      }

      constructor(name: string, birthDate: Date, private _salary: number, subject: Subject) {
        super(name, birthDate);
    
        this._subject = subject;
        this.salary = _salary;
        this._admissionDate = new Date();
        this.registration = this.generateRegistration();
      }


      et subject(): Subject {
        return this._subject;
      }
    
      set subject(value: Subject) {
        this._subject = value;
      }
    
      get registration(): string {
        return this._registration;
      }
    
      set registration(value: string) {
        if (value.length < 16) throw new Error('O registro deve possuir no mínimo 16 caracteres.');
    
        this._registration = value;
      }
    
      get salary(): number {
        return this._salary;
      }
    
      set salary(value: number) {
        if (value < 0) throw new Error('O salário não pode ser negativo.');
    
        this._salary = value;
      }
    
      get admissionDate(): Date {
        return this._admissionDate;
      }
    
      set admissionDate(value: Date) {
        if (value.getTime() > new Date().getTime()) throw new Error('A data de admissão não pode ser uma data no futuro.');
    
        this._admissionDate = value;
      }
    
      generateRegistration(): string {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    
        return `PRF${randomStr}`;
      }
    }