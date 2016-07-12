import { Component, Input, OnInit }  from '@angular/core';
import { ControlGroup }              from '@angular/common';

import { QuestionBase }                 from './question-base';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';

import { ModelQuestionControlService }       from './services/model-question-control.service';
import { ModelQuestionService }       from './services/model-question.service';

import { Http, HTTP_PROVIDERS } from '@angular/http';
import { Headers, RequestOptions, Response } from '@angular/http';

import { DynamicForm }      from './dynamic-form.component';
import { TextboxQuestion }  from './question-textbox';
import { DropdownQuestion } from './question-dropdown';

@Component({
  selector:'dynamic-create-model-form',
  templateUrl:'/app/dynamic-form/templates/dynamic-create-model-form.component.html',
  directives: [DynamicFormQuestionComponent],
  providers:  [ModelQuestionControlService, ModelQuestionService]
})
export class DynamicCreateModelForm {

  @Input() api_url: string;
  form: ControlGroup;
  payLoad = '';
  private questions: QuestionBase<any>[] = [];

  constructor(
    private modelQuestionControlService: ModelQuestionControlService, 
    private modelQuestionService: ModelQuestionService) {  }
  
  parseResponse(aux: Response) {
    let questions:QuestionBase<any>[]=[];
    var temp = aux.json();
    temp = temp['actions']['POST'];

    for(var key in temp) {      
      console.log(key + ' => ' + temp[key]);
      var q = new TextboxQuestion({
        key: key,
        label: temp[key]['label'],
        //value:'Bombasto',
        required: temp[key]['required'],
        read_only: temp[key]['read_only'],
        max_length: temp[key]['max_length'],
        //order: 1
      });
      questions.push(q);
    }
    this.questions = questions;
    this.form = this.modelQuestionControlService.toControlGroup(this.questions);
  }

  ngOnInit(){
    let response: string;
    this.modelQuestionService.getQuestionsFromApi()      
      .subscribe(response => this.parseResponse(response));
    this.form = this.modelQuestionControlService.toControlGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
