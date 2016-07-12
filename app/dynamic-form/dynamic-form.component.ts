import { Component, Input, OnInit }  from '@angular/core';
import { ControlGroup }              from '@angular/common';

import { QuestionBase }                 from './question-base';
import { QuestionControlService }       from './question-control.service';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';

@Component({
  selector:'dynamic-form',
  templateUrl:'/app/dynamic-form/dynamic-form.component.html',
  directives: [DynamicFormQuestionComponent],
  providers:  [QuestionControlService]
})
export class DynamicForm {

  @Input() questions: QuestionBase<any>[] = [];
  form: ControlGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {  }

  ngOnInit(){
    this.form = this.qcs.toControlGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/