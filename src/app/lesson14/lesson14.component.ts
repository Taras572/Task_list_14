import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-lesson14',
    templateUrl: './lesson14.component.html',
    styleUrls: ['./lesson14.component.css']
})
export class Lesson14Component implements OnInit {

    @Input() Input_name!: Array<any>;
    isShow = true;
    isSave = false;
    Input_save !: string;
    Index_input!: number;

    constructor() { }

    ngOnInit(): void {

    }

    Check_btn(task: any): void {
        // this.isShow = !this.isShow;
        task.status = !task.status;
    }

    Edit_btn(index: number): void {
        this.Index_input = index;
        this.Input_save = this.Input_name[index].name;
        this.isSave = true;
        
    }
    Delete_btn(index: number): void {
        this.Input_name.splice(index, 1);
        
    }
    Save_btn(): void {
        this.Input_name[this.Index_input].name = this.Input_save;
        /* this.Input_name.splice(this.Index_input, 1, this.Input_save); */
        this.isSave = false;
    }

}
