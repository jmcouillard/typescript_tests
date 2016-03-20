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

class Draggable {

    x:number = 0;
    y:number = 0;
    width:number = 0;
    height:number = 0;

    handleX:number = 0;
    handleY:number = 0;
    grabbed:boolean = false;
    el:JQuery;

    constructor(selector:string) {
        this.el = jQuery(selector);
        this.width = this.el.width();
        this.height = this.el.height();
        this.x = this.el.offset().left;
        this.y = this.el.offset().top;

        $(document).on("mousemove", $.proxy(this.mousemove, this));
        $(document).on("mousedown", $.proxy(this.mousedown, this));
        $(document).on("mouseup", $.proxy(this.mouseup, this));
    }

    mousemove(e):void {
        var x = e.pageX;
        var y = e.pageY;

        if (this.grabbed) {
            this.moveTo(x - this.handleX, y - this.handleY);
        }
    }

    mousedown(e):void {

        if (this.isOver(e.pageX, e.pageY)) {
            this.grabbed = true;
            this.handleX = e.pageX - this.x;
            this.handleY = e.pageY - this.y;
        }
    }

    mouseup(e):void {
        this.grabbed = false;
    }

    isOver(x:number, y:number):boolean {
        return false;
    }

    moveTo(x:number, y:number):void {
        this.x = x;
        this.y = y;

        this.el.css("left", x).css("top", y);
    }

}

class DraggableSquare extends Draggable {

    constructor(selector:string) {
        super(selector);
    }

    isOver(x:number, y:number):boolean {
        if (x > this.x && x < (this.x + this.width) && y > this.y && y < (this.y + this.height)) {
            return true;
        } else {
            return false;
        }
    }

}


