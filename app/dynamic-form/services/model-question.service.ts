import { Injectable }       from '@angular/core';

import { Http, HTTP_PROVIDERS } from '@angular/http';
import { Headers, RequestOptions, RequestMethod } from '@angular/http';

import { QuestionBase }     from '../question-base';
import { DynamicForm }      from '../dynamic-form.component';
import { TextboxQuestion }  from '../question-textbox';
import { DropdownQuestion } from '../question-dropdown';

@Injectable()
export class ModelQuestionService {

  constructor(public http: Http) { }

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous

  //http://127.0.0.1:8000/api/heroes/

  getQuestionsFromApi() {    
    //return this.http.get('http://localhost:8000/api/heroes/');
    var options = new RequestOptions({
      method: RequestMethod.Options
      
    });
    
    return this.http.request('http://localhost:8000/api/heroes/', options);
  }

  getQuestions() {

    let questions:QuestionBase<any>[] = [

      new DropdownQuestion({
        key:'brave',
        label: 'Bravery Rating',
        options: [
          {key:'solid',  value:'Solid'},
          {key:'great',  value:'Great'},
          {key:'good',   value:'Good'},
          {key:'unproven',value:'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key:'firstName',
        label:'First name',
        value:'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key:'emailAddress',
        label:'Email',
        type: 'email',
        order: 2
      })
    ];
  
    return questions.sort((a,b) => a.order - b.order);
  }
}

