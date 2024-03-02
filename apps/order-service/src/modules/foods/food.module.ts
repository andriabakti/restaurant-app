import { DatabaseModule } from '@/configs/database/database.module';
import { Module } from '@nestjs/common';
import { FoodController } from './food.controller';
import { FoodService } from './food.service';

@Module({
  imports: [DatabaseModule],
  controllers: [FoodController],
  providers: [FoodService],
})
export class FoodModule {}
