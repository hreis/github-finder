import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-github-finder-textbox',
  templateUrl: './github-finder-textbox.component.html',
  styleUrls: ['./github-finder-textbox.component.scss']
})
export class GithubFinderTextboxComponent implements OnInit {

  formGroup: FormGroup;
  @Output() formHasBeenSubmited: EventEmitter<string> = new EventEmitter<string>();

  constructor(private _formBuilder: FormBuilder) { 
    
    this.formGroup = this._formBuilder.group({
      fcUserName: ['', Validators.required],
    });

  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    let username = this.formGroup.get('fcUserName')?.value;
    this.formHasBeenSubmited.emit(username);
  }

}
