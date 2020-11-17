import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpotifyApiModule } from './modules/spotify-api/spotify-api.module';

@Module({
  imports: [SpotifyApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
