import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { IVideos } from 'src/app/models/videos';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  videos$!: Observable<IVideos[]>;

  loginForm!: FormGroup;
  loading: boolean = false;

  constructor(
    private coreService: CoreService,
    public authService: AuthService,
    private messageService: MessagesService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login() {
    this.loading = true;
    const val = this.loginForm.value;

    this.authService.login(val).subscribe(
      () => {
        this.router.navigateByUrl('/dashboard');
        this.loading = false;
      },
      (err) => {
        this.messageService.error(err.error.message);
        this.loading = false;
      }
    );
  }

  ngOnInit(): void {
    this.videos$ = this.coreService.videos$;
  }
}
