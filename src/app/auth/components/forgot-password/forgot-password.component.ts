import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm!: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessagesService
  ) {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
    });
  }

  forgot() {
    const val = this.forgotForm.value;
    this.loading = true;

    this.authService.forgot(val.email).subscribe(
      () => {
        this.messageService.success(
          'Password reset successful. Please check email to complete password reset'
        );
        this.loading = false;
      },
      (err) => {
        this.messageService.error(err.error.message);
        this.loading = false;
      }
    );
  }

  ngOnInit(): void {}
}
