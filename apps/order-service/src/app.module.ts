import {
  MiddlewareConsumer,
  Module,
  NestModule,
  OnApplicationBootstrap,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthMiddleware } from './commons/middlewares/auth.middlewares';
import { BaseConfigModule } from './configs/base-config.module';
import { DatabaseModule } from './configs/database/database.module';
import { QueueModule } from './configs/queue/queue.module';
import { FoodModule } from './modules/foods/food.module';
import { OrderController } from './modules/orders/order.controller';
import { OrderModule } from './modules/orders/order.module';
import { SeederModule } from './modules/seeders/seeder.module';
import { SeederService } from './modules/seeders/seeder.service';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [
    BaseConfigModule,
    DatabaseModule,
    QueueModule,
    SeederModule,
    UserModule,
    FoodModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnApplicationBootstrap, NestModule {
  constructor(private readonly seederSvc: SeederService) {}

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(OrderController);
  }

  async onApplicationBootstrap() {
    await this.seederSvc.seedFoods();
  }
}
