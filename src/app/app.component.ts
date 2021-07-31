import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'lesson14';
    add_mas !: string;

    Mas_Inform: Array<object> = [
        {
            name: 'HTML5',
            status: true
        },
        {
            name: 'CSS3',
            status: true
        },
        {
            name: 'SCSS',
            status: true
        },
        {
            name: 'JavaScript',
            status: true
        },
        {
            name: 'jQuery',
            status: true
        },
        {
            name: 'Angular',
            status: true
        }
    ];

    Add(): void {
        if (this.add_mas != null) {
            this.Mas_Inform.push({ name: this.add_mas, status: true });
            this.add_mas = '';
        }
    }
}
