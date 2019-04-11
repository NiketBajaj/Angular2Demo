import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: "app/app.component.html?v=${new Date().getTime()}",
})
export class AppComponent {
    
}
