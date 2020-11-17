import { Controller , Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {SpotifyApiService} from './spotify-api.service'

@ApiTags('SpotifyAPI')
@Controller('SpotifyAPI')
export class SpotifyApiController {

    constructor (private readonly _serviceSpotify: SpotifyApiService ){}

    @Get('Generos')
    GetGeneros(){
       return this._serviceSpotify.getList();
    }
}
