import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: "app/app.component.html?v=${new Date().getTime()}",
})
export class AppComponent {
    pageHeader: string = 'Employee Details';
    imagePath: string = '/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png';
    firstName: string = 'Tom';
    lastName: string = 'Hopkins';
    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }

    classesToApply: string = 'boldClass italicsClass';
    applyBoldClass: boolean = true;
    applyItalicsClass: boolean = false;
    addClasses() {
        let classes = {
            boldClass: this.applyBoldClass,
            italicsClass: this.applyItalicsClass,
        }
        return classes;
    }

    isBold: boolean = true;
    fontSize: number = 25;
    isItalics: boolean = true;
    addStyles() {
        let styles = {
            'font-size.px': this.fontSize,
            'font-style': this.isItalics ? 'italic' : 'normal',
            'font-weight': this.isBold ? 'bold' : 'normal',
        }
        return styles;
    }

    onClick(): void {
        console.log('Button Clicked');
    }

    userText: string = "Pragim";
}
