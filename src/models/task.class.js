export class Task {
    name = '';
    lastName = '';
    email = '';
    completed = false;

    constructor (name, lastName, email, completed) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.completed = completed;
    }
}