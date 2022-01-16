import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger("moveInLeft",[
       transition("void=> *",[style({transform:"translateX(300px)"}),
         animate(200,keyframes([
          style({transform:"translateX(300px)"}),
          style({transform:"translateX(0)"})
  
           ]))]),
 transition("*=>void",[style({transform:"translateX(0px)"}),
         animate(200,keyframes([
          style({transform:"translateX(0px)"}),
          style({transform:"translateX(300px)"})
  
           ]))])    
      
     ])
 ]
})
export class AppComponent {
  @ViewChild('todoForm') todoForms!: NgForm;
  title = 'todo-app';
  todo = '';
  todoArray: string[] = [];

  addTodo(value: any) {
    if(value !== null){
    this.todoArray.push(value);
    }
    this.todoForms.reset();
    console.log(value);
  }
  deleteItem(value: any){
    for(let i=0; i <= this.todoArray.length; i++){
      if(value == this.todoArray[i]){
        this.todoArray.splice(i,1);
      }
    }
  }

}
