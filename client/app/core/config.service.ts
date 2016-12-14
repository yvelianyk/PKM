import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
    static clientId = 'EkzeJaI9rvsOJfCVdRORspYBrddOlGDB';
    static domain = 'pkm.eu.auth0.com';
    static serverApiUrl = 'http://' + window.location.host + '/api/'
}