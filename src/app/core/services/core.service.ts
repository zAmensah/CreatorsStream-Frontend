import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { IChannels } from 'src/app/models/channels';
import { IUser } from 'src/app/models/user';
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

  // channelSub(id: string): Observable<IUser> {
  //   return this.http
  //     .get<IUser>(
  //       `${environment.basedUrl}` + '/channel/subscription/' + `${id}`
  //     )
  //     .pipe(shareReplay());
  // }

  channelSubscription(id: string, body: any): Observable<any> {
    return this.http
      .post<any>(
        `${environment.basedUrl}` + '/channel/subscription/' + `${id}`,
        body
      )
      .pipe(shareReplay());
  }

  singleChannel(id: string): Observable<IChannels> {
    return this.http
      .get<IChannels>(`${environment.basedUrl}` + '/channel/single/' + `${id}`)
      .pipe(shareReplay());
  }

  userSubscription(): Observable<IChannels> {
    return this.http
      .get<IChannels>(`${environment.basedUrl}` + '/user/subscription')
      .pipe(shareReplay());
  }

  channelVideos(id: string): Observable<IChannels> {
    return this.http
      .get<IChannels>(`${environment.basedUrl}` + '/channel/videos/' + `${id}`)
      .pipe(shareReplay());
  }
}
