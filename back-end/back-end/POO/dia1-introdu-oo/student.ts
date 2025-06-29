class student {
    private _matricule: number;
    private _name: string;
    private _examsGrades: [number, number, number, number];
    private _assignmentGrades: [number, number];

    constructor(matricule: number, name: string) {
        this._matricule = matricule;
        this._name = name;
        this._examsGrades = [];
        this._assignmentGrades = [];
    }

sumGrades(): number {
        let sum = 0;
        for (let i = 0; i < this._examsGrades.length; i++) {
            sum += this._examsGrades[i];
        }
        for (let i = 0; i < this._assignmentGrades.length; i++) {
            sum += this._assignmentGrades[i];
        }
        return sum;
    }

averageGrades(): number {
        return this.sumGrades() / (this._examsGrades.length + this._assignmentGrades.length);
    }   
}