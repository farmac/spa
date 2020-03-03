class Students {
    constructor(names) {
        this.names = names;
    }

    startWith(letter){
        // names (array) which starts with the letter
        return this.names.filter(name => name.startsWith(letter));
    }

    sort() {
        // names (array) in alphabetical order
        let arr = this.names.slice();
        arr.sort();
        return arr; 
    }

    get() {
        // names (array) in natural order
        return this.names;
    }

    getFirst(n, arr) {
        // get first 'n' names (array)
        return arr.slice(0, n);
    }
}

names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

students = new Students(names);
console.log(students.get());
console.log(students.sort());
console.log(students.startWith('P'));
console.log(students.startWith('M').sort());
console.log(students.getFirst(4, students.sort()));
console.log(students.getFirst(2, students.startWith('M').sort()));
console.log(students.get());