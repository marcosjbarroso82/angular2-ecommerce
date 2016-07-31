import { Injectable }       from '@angular/core';
import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class QuestionService {
  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous

    _questions$ = <Subject<any[]>>new Subject();

  getQuestions() {
    let questions: QuestionBase<any>[] = [
      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),
      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),
      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];
    return questions.sort((a, b) => a.order - b.order);
  }

  get questions$() {
    return this._questions$.asObservable();
  }

  loadAll() {

    let questions: QuestionBase<any>[] = [
      new DropdownQuestion({
        key: 'xxx',
        label: 'xxx',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),
      new TextboxQuestion({
        key: 'yyy',
        label: 'yyy',
        value: 'yy',
        required: true,
        order: 1
      }),
      new TextboxQuestion({
        key: 'zzz',
        label: 'zz',
        type: 'zzz',
        order: 2
      })
    ];
    this._questions$.next(questions);
    
  }
}
