import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IVideos } from 'src/app/models/videos';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css'],
})
export class ViewPageComponent implements OnInit {
  details: any;
  vidId!: string;

  constructor(private route: ActivatedRoute, private coreService: CoreService) {
    this.vidId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.coreService.singleVideo(this.vidId).subscribe((res: any) => {
      this.details = res.watchVideo;
      console.log(this.details);
    });
  }
}
