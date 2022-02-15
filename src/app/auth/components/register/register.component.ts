import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessagesService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  register() {
    const val = this.registerForm.value;
    this.loading = true;

    this.authService.register(val).subscribe(
      () => {
        this.router.navigateByUrl('/dashboard');
      },
      (err) => {
        this.messageService.error(err.error.message);
        this.loading = false;
      }
    );
  }

  ngOnInit(): void {}
}
