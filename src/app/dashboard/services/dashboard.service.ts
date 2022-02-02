import { shareReplay, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IVideos } from 'src/app/models/videos';
import { environment } from 'src/environments/environment';
import { IChannels } from 'src/app/models/channels';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private channelSubject = new BehaviorSubject<IChannels[]>([]);
  channels$: Observable<IChannels[]> = this.channelSubject.asObservable();

  constructor(private http: HttpClient) {}

  addVideo(body: Partial<IVideos>): Observable<IVideos> {
    return this.http
      .post<IVideos>(`${environment.basedUrl}` + '/video/add', body)
      .pipe(shareReplay());
  }

  getChannels(): Observable<IChannels> {
    return this.http
      .get<IChannels>(`${environment.basedUrl}` + 'channel/user')
      .pipe(
        tap((channels: any) => {
          this.channelSubject.next(channels['userChannel']);
        }),
        shareReplay()
      );
  }
}
