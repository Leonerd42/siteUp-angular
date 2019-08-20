import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

 registerForm: FormGroup;
 submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
        to: ['', Validators.required],
        name: ['', Validators.required],
        email: ['', Validators.required], 
        company: ['', Validators.required], 
        phone: ['', Validators.required], 
        message: ['', Validators.required]
      });
  }

  onSubmit(){
      this.submitted = true; 
      if(this.registerForm.invalid){
        console.log(`Formulário invalido`); 
        return;
      }
      try{
          console.log(`do something`);
      }catch(e){
          console.log(`error`);
      }

      this.Send();
  }

  get f() { return this.registerForm.controls; }

  Send(){
    console.log("Enviando!");
  }

}
