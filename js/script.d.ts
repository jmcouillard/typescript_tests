/// <reference path="../ts/jquery.d.ts" />
declare class Draggable {
    x: number;
    y: number;
    width: number;
    height: number;
    handleX: number;
    handleY: number;
    grabbed: boolean;
    el: JQuery;
    constructor(selector: string);
    mousemove(e: any): void;
    mousedown(e: any): void;
    mouseup(e: any): void;
    isOver(x: number, y: number): boolean;
    moveTo(x: number, y: number): void;
}
declare class DraggableSquare extends Draggable {
    constructor(selector: string);
    isOver(x: number, y: number): boolean;
}
declare class App {
    user: Person;
    square1: DraggableSquare;
    square2: DraggableSquare;
    constructor(firstname: string, lastname: string);
    display(): void;
}
interface Person {
    firstname: string;
    lastname: string;
}
declare function greeter(person: Person): string;
