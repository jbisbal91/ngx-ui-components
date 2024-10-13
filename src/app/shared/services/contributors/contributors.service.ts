import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContributorsService {

  private contributorSubject = new BehaviorSubject<any>({}); // Reactive data store.
  public contributors$ = this.contributorSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  getContributors() {
    return this.httpClient.get('https://api.github.com/repos/jbisbal91/ngx-ui-components/contributors').subscribe((contributors) => {
      this.contributorSubject.next(contributors);
    });
  }
}
