import { Module , HttpModule} from '@nestjs/common';
import { SpotifyApiController } from './spotify-api.controller';
import { SpotifyApiService } from './spotify-api.service';

@Module({
  imports: [HttpModule],
  controllers: [SpotifyApiController],
  providers: [SpotifyApiService]
})
export class SpotifyApiModule {}
