import { Injectable }   from '@angular/core';
import { ControlGroup, FormBuilder, Validators } from '@angular/common';
import { QuestionBase } from './question-base';

@Injectable()
export class QuestionControlService {
  constructor(private fb:FormBuilder){ }

  toControlGroup(questions:QuestionBase<any>[] ) {
    let group = {};

    questions.forEach(question => {
      group[question.key] = question.required ? [question.value || '', Validators.required] : [question.value || ''];
    });
    return this.fb.group(group);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/