import { HttpClient } from '@angular/common/http';
import { Component, Pipe, PipeTransform } from '@angular/core';
import { formatRating } from '@bg-hoard/store/util-formatters';

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Board Game Hoard';
  games$ = this._http.get<any[]>('/api/games');

  constructor(private readonly _http: HttpClient) {}
}

@Pipe({ name: 'formatRating' })
export class FormatRatingPipe implements PipeTransform {
  transform = formatRating;
}
