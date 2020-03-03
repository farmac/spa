class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        let tempName = this.name.charAt(0).toUpperCase() + this.name.substring(1).toLowerCase();
        let tempSurname = this.surname.toUpperCase();
        return tempName + " " + tempSurname;
    }

    getInitials() {
        return this.name.charAt(0).toUpperCase() + "." + this.surname.charAt(0).toUpperCase() + ".";
    }
}

person1 = new Person('jaN', 'nowak');
console.log(person1.getFullName());
console.log(person1.getInitials());

person2 = new Person('adam', 'małySz');
console.log(person2.getFullName());
console.log(person2.getInitials());
