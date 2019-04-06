"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EventBindingComponent = /** @class */ (function () {
    function EventBindingComponent() {
        this.name = "Tom";
    }
    EventBindingComponent.prototype.onClick = function () {
        console.log('Button Clicked');
    };
    EventBindingComponent = __decorate([
        core_1.Component({
            selector: "my-event",
            templateUrl: "app/eventBinding/event.component.html"
        })
    ], EventBindingComponent);
    return EventBindingComponent;
}());
exports.EventBindingComponent = EventBindingComponent;
//# sourceMappingURL=event.component.js.map