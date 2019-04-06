import { Component } from '@angular/core';

@Component({
    selector: "my-event",
    templateUrl: "app/eventBinding/event.component.html"
})

export class EventBindingComponent {
    onClick(): void {
        console.log('Button Clicked');
    }

    name: string = "Tom";
}