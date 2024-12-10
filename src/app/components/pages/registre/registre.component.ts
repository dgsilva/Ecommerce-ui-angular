import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent {
  mensagem: string = '';

  constructor() { }

  formRegister = new FormGroup({
    nome: new FormControl('',
      [Validators.required, Validators.minLength(6), Validators.maxLength(150)]),
 
    email: new FormControl('',
      [Validators.required, Validators.email]),
 
    telefone: new FormControl('',
      [Validators.required]),
 
    senha: new FormControl('',
      [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
 
    senhaConfirmacao: new FormControl('',
      [Validators.required]),
  }, {
  });
 
  get form(): any {
    return this.formRegister.controls;
  }

  onSubmit(): void {
    this


  }
}
