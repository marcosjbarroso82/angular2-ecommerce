import { Component, OnInit, Host } from '@angular/core';

import { DynamicFormComponent }     from './dynamic-form.component';
import { QuestionService } from './question.service';

@Component({
  
  selector: 'dynamic-form-demo',
  templateUrl: 'app/dynamicForm/dynamic-form-demo.component.html',
  directives: [ DynamicFormComponent ],
  providers: [ QuestionService ] 
  
})
export class DynamicFormDemoComponent implements OnInit {
  questions: any[];
  
  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
  
  ngOnInit() {}

}