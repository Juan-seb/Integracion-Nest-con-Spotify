import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyApiService {

    clientID: string = '21d663ceb1ea45fb8ba74cdaa63fb5c4';
    clientSecret: string = 'bf0b7c252ae4446a813069f6fbd40622';
    token: any;

    constructor(private _http: HttpService) { }

    onModuleInit() {
        const headers = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: this.clientID,
                password: this.clientSecret,
            },
        };
        const data = {
            grant_type: 'client_credentials',
        };
        
        try {
            const response = this._http.post('https://accounts.spotify.com/api/token',
                new URLSearchParams(data),
                headers);
            response.toPromise().then(res => {
                this.token = res.data.access_token;
            })
        } catch (error) {
            console.log(error)
        }
    }

    async getList() {

        const result = await this._http.get(`https://api.spotify.com/v1/browse/categories?locale=sv_US`,
            { headers: { 'Authorization': 'Bearer ' + this.token } })
            .toPromise().then(res => {
                return res.data.categories.items;
            })

        const dat = await result
        return dat;

    }


}
