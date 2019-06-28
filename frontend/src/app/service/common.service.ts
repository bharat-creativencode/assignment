
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
	apiUrl = environment.apiUrl;
  _getFactorial = this.apiUrl + 'getFactorial';
  _getHash = this.apiUrl + 'getHash';

  constructor(private http: HttpClient) { }

  getFactorial(data) {
    return this.http.get(this._getFactorial + `/${data.number}`);
  }
}