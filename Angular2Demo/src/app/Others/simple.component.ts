import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: "simple",
    template: `Your Text : {{simpleInput}}`
})
export class SimpleComponent implements OnChanges {
    @Input() simpleInput: string;

    ngOnChanges(changes: SimpleChanges) {
        for (let properyName in changes) {
            let change = changes[properyName];
            let current = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);
            console.log(properyName + ': currentValue = ' + current + ', previousValue = ' + previous);
            //console.log(`${properyName}: currentValue ${current}, previousValue = ${previous}`);
        }
    }
}