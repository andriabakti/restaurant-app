import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BaseConfigModule } from './configs/base-config.module';
import { DatabaseModule } from './configs/database/database.module';
import { QueueModule } from './configs/queue/queue.module';
import { UserModule } from './modules/users/user.module';
import { SeederService } from './modules/seeders/seeder.service';
import { SeederModule } from './modules/seeders/seeder.module';

@Module({
  imports: [
    BaseConfigModule,
    DatabaseModule,
    QueueModule,
    UserModule,
    SeederModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnApplicationBootstrap {
  constructor(private readonly seederSvc: SeederService) {}

  async onApplicationBootstrap() {
    await this.seederSvc.seedFoods();
  }
}
