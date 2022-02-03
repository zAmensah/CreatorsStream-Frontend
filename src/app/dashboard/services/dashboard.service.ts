import { map, shareReplay, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IVideos } from 'src/app/models/videos';
import { environment } from 'src/environments/environment';
import { IChannels } from 'src/app/models/channels';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private channelSubject = new BehaviorSubject<IChannels[]>([]);
  channels$: Observable<IChannels[]> = this.channelSubject.asObservable();

  constructor(
    private http: HttpClient,
    private loadingService: LoadingService
  ) {
    this.getChannels();
  }

  addVideo(body: Partial<IVideos>): Observable<IVideos> {
    return this.http
      .post<IVideos>(`${environment.basedUrl}` + '/video/add', body)
      .pipe(shareReplay());
  }

  private getChannels() {
    const channel$ = this.http
      .get<IChannels[]>(`${environment.basedUrl}` + '/channel/user')
      .pipe(
        map((res: any) => res['userChannel']),
        tap((channels) => this.channelSubject.next(channels))
      );
    this.loadingService.showLoaderUntilComplete(channel$).subscribe();
  }

  singleChannel(id: string): Observable<IChannels> {
    return this.http
      .get<IChannels>(`${environment.basedUrl}` + '/channel/single/' + `${id}`)
      .pipe(shareReplay());
  }

  addChannel(body: Partial<IChannels>): Observable<IChannels> {
    return this.http
      .post<IChannels>(`${environment.basedUrl}` + '/channel/add', body)
      .pipe(shareReplay());
  }
}
