import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";

import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { SearchResult } from './search-result.model';

// please add your own youtube data api key in YOUTUBE_API_KEY
export const YOUTUBE_API_KEY: string = "youtube-data-api-key";
export const YOUTUBE_API_URL: string = "https://www.googleapis.com/youtube/v3/search";

@Injectable()
export class YouTubeSearchService {

  constructor(
    private http: HttpClient,
    @Inject(YOUTUBE_API_KEY) private apiKey: string,
    @Inject(YOUTUBE_API_URL) private apiUrl: string
  ) {}

  search(query: string): Observable<SearchResult[]> {
    const params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=6`
    ].join('&');
    const queryUrl = `${this.apiUrl}?${params}`;
    return this.http.get(queryUrl)
      .pipe(
        map(response => {
          return <any>response['items'].map(item => {
            return new SearchResult({
              id: item.id.videoId,
              title: item.snippet.title.replace(/&quot;/g,'"'),
              description: item.snippet.description,
              thumbnailUrl: item.snippet.thumbnails.high.url
            });
          });
        })
      );
  }

}

