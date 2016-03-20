/// <reference path="jquery.d.ts" />

class App {

    user:Person;
    square1:DraggableSquare;
    square2:DraggableSquare;

    constructor(firstname:string, lastname:string) {
        this.user = {firstname: firstname, lastname: lastname};
        this.square1 = new DraggableSquare("#square1");
        this.square2 = new DraggableSquare("#square2");
    }

    display() {
        var message = greeter(this.user);
        jQuery("#console").text(message);
    }

}

interface Person {
    firstname:string;
    lastname:string;
}

function greeter(person:Person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}
