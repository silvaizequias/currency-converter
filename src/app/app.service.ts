import { Injectable } from '@angular/core'
import { environment as environmentDev } from '../environments/environment.development'
import { environment } from '../environments/environment'
import { HttpClient } from '@angular/common/http'
import { Observable, map, shareReplay } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private apiUrl = environmentDev.awesomeapi || environment.awesomeapi

  constructor(private readonly http: HttpClient) {}

  converter(currency: string): Observable<any> {
    const url = `${this.apiUrl}/last/${currency}`
    return this.http.get<any>(url).pipe(
      shareReplay(1),
      map((data: any) => {
        return data
      }),
    )
  }
}
