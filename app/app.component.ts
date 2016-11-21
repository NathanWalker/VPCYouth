import { Component } from "@angular/core";
import { topmost } from 'ui/frame';

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public items: any[] = [
        { title: 'test' },
        { title: 'test 2' },
        { title: 'test 3' }
    ]
    public counter: number = 16;

    constructor() {
        topmost().ios.controller.navigationBar.barStyle = 1;
    }

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public onTap() {
        this.counter--;
    }
}
