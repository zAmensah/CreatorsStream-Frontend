import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private messageService: MessagesService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login() {
    this.loading = true;
    const val = this.loginForm.value;

    console.log(val)

    // this.authService.login(val).subscribe(
    //   () => {
    //     this.router.navigateByUrl('/dashboard');
    //   },
    //   (err) => {
    //     this.messageService.error(err.error.message);
    //     this.loading = false;
    //   }
    // );
  }

  ngOnInit(): void {}
}
