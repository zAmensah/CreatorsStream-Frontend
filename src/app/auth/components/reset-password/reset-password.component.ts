import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  resetForm!: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private messageService: MessagesService,
    private authService: AuthService,
    private router: Router
  ) {
    this.resetForm = this.fb.group({
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
    });
  }

  reset() {
    const val = this.resetForm.value;
    this.loading = true;

    if (val.password != val.confirm_password) {
      this.messageService.error('Passwords does not match. Please try again');
    } else {
      this.authService.reset(val.password).subscribe(
        () => this.router.navigateByUrl('/auth/login'),
        (err) => {
          this.messageService.error(err.error.message);
          this.loading = false;
        }
      );
    }
  }

  ngOnInit(): void {}
}
