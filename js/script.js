var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Draggable = (function () {
    function Draggable(selector) {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.handleX = 0;
        this.handleY = 0;
        this.grabbed = false;
        this.el = jQuery(selector);
        this.width = this.el.width();
        this.height = this.el.height();
        this.x = this.el.offset().left;
        this.y = this.el.offset().top;
        $(document).on("mousemove", $.proxy(this.mousemove, this));
        $(document).on("mousedown", $.proxy(this.mousedown, this));
        $(document).on("mouseup", $.proxy(this.mouseup, this));
    }
    Draggable.prototype.mousemove = function (e) {
        var x = e.pageX;
        var y = e.pageY;
        if (this.grabbed) {
            this.moveTo(x - this.handleX, y - this.handleY);
        }
    };
    Draggable.prototype.mousedown = function (e) {
        if (this.isOver(e.pageX, e.pageY)) {
            this.grabbed = true;
            this.handleX = e.pageX - this.x;
            this.handleY = e.pageY - this.y;
        }
    };
    Draggable.prototype.mouseup = function (e) {
        this.grabbed = false;
    };
    Draggable.prototype.isOver = function (x, y) {
        return false;
    };
    Draggable.prototype.moveTo = function (x, y) {
        this.x = x;
        this.y = y;
        this.el.css("left", x).css("top", y);
    };
    return Draggable;
})();
var DraggableSquare = (function (_super) {
    __extends(DraggableSquare, _super);
    function DraggableSquare(selector) {
        _super.call(this, selector);
    }
    DraggableSquare.prototype.isOver = function (x, y) {
        if (x > this.x && x < (this.x + this.width) && y > this.y && y < (this.y + this.height)) {
            return true;
        }
        else {
            return false;
        }
    };
    return DraggableSquare;
})(Draggable);
/// <reference path="references/jquery.d.ts" />
var Test1 = (function () {
    function Test1(firstname, lastname) {
        this.user = { firstname: firstname, lastname: lastname };
        this.square1 = new DraggableSquare("#square1");
        this.square2 = new DraggableSquare("#square2");
    }
    Test1.prototype.display = function () {
        var message = greeter(this.user);
        jQuery("#console").text(message);
    };
    return Test1;
})();
function greeter(person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}
//# sourceMappingURL=script.js.map