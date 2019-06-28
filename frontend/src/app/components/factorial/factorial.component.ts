import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.css']
})
export class FactorialComponent implements OnInit {
  message;
  submitted: boolean = false;
  validationFail: boolean = false;
  numericNumberReg= '^\\d+$';
  constructor(private formBuilder: FormBuilder, private _commonService: CommonService) { 
  }

  factorialForm = this.formBuilder.group({
    number: ['', [Validators.required, Validators.pattern(this.numericNumberReg)]]
  });

  get number(){
    return this.factorialForm.get('number');
  }

  getFactorial() {
    if(this.factorialForm.valid) {
      this.validationFail = false;
      this.submitted = true;
      this._commonService.getFactorial(this.factorialForm.value)
      .subscribe(
        (data: any) => { 
          if(data.status) {
            this.message = "Factorial is : " + data.factorial;
          } else {
            debugger;
          }
          this.submitted = false;
        },
        (error) => {
          debugger;
          this.submitted = false;
        }
      )
    } else {
      this.submitted = false;
      this.validationFail = true;
    }
  }

  ngOnInit() {
  }

}
