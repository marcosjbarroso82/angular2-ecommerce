import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { DynamicFormComponent }     from './dynamicForm/dynamic-form.component';
import { QuestionService } from './dynamicForm/question.service';


@Component({ 
  moduleId: module.id,
  selector: 'app-container',
  templateUrl: 'app.component.html',
  directives: [ ROUTER_DIRECTIVES, DynamicFormComponent ],
  providers: [ QuestionService ] 
})
export class AppComponent {
  questions: any[];
  
  constructor(service: QuestionService) {
    this.questions = service.getQuestions();

  }
  
}
