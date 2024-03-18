import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = {
    email: '',
    password: '',
  };
  constructor(private router: Router) {}

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form submitted');
      this.router.navigate(['booking']);
    } else {
      console.log('Form invalid');
    }
  }
}
