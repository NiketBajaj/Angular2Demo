"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CSSEventComponent = /** @class */ (function () {
    function CSSEventComponent() {
        this.pageHeader = 'Employee Details';
        this.imagePath = '/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png';
        this.firstName = 'Tom';
        this.lastName = 'Hopkins';
        this.classesToApply = 'boldClass italicsClass';
        this.applyBoldClass = true;
        this.applyItalicsClass = false;
        this.isBold = true;
        this.fontSize = 25;
        this.isItalics = true;
        this.userText = "Pragim";
    }
    CSSEventComponent.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    CSSEventComponent.prototype.addClasses = function () {
        var classes = {
            boldClass: this.applyBoldClass,
            italicsClass: this.applyItalicsClass,
        };
        return classes;
    };
    CSSEventComponent.prototype.addStyles = function () {
        var styles = {
            'font-size.px': this.fontSize,
            'font-style': this.isItalics ? 'italic' : 'normal',
            'font-weight': this.isBold ? 'bold' : 'normal',
        };
        return styles;
    };
    CSSEventComponent.prototype.onClick = function () {
        console.log('Button Clicked');
    };
    CSSEventComponent = __decorate([
        core_1.Component({
            selector: 'css-event',
            templateUrl: "app/CSSEvent/CSSEvent.component.html",
        })
    ], CSSEventComponent);
    return CSSEventComponent;
}());
exports.CSSEventComponent = CSSEventComponent;
//# sourceMappingURL=CSSEvent.component.js.map