import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { IVideos } from 'src/app/models/videos';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  private subject = new BehaviorSubject<IVideos[]>([]);
  videos$: Observable<IVideos[]> = this.subject.asObservable();

  constructor(
    private http: HttpClient,
    private loadingService: LoadingService
  ) {
    this.loadAllVideos();
  }

  private loadAllVideos() {
    const loadVideos$ = this.http
      .get<IVideos[]>(`${environment.basedUrl}` + '/videos/all')
      .pipe(
        map((res: any) => res['videos']),
        tap((videos) => this.subject.next(videos))
      );

    this.loadingService.showLoaderUntilComplete(loadVideos$).subscribe();
  }

  singleVideo(id: string): Observable<IVideos> {
    return this.http
      .get<IVideos>(`${environment.basedUrl}` + '/videos/single/' + `${id}`)
      .pipe(shareReplay());
  }
}
