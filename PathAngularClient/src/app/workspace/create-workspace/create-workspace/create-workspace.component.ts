import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-workspace',
  templateUrl: './create-workspace.component.html',
  styleUrls: ['./create-workspace.component.css']
})
export class CreateWorkspaceComponent implements OnInit{
myform: FormGroup;
  form: any;

  
constructor(
  public fb: FormBuilder,
  private http: HttpClient
) {
  this.myform = this.fb.group({
    title: [''],
    description: ['']
  })
}
ngOnInit() { }
submitForm() {
  var formData: any = new FormData();
  formData.append("title", this.form.get('title').value);
  formData.append("description", this.form.get('description').value);
  this.http.post('http://localhost:4200/workspace', formData).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  )
}
}