import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IVideos } from 'src/app/models/videos';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  videos$!: Observable<IVideos[]>;

  constructor(private coreService: CoreService) {}

  ngOnInit(): void {
    this.videos$ = this.coreService.videos$;
  }
}
