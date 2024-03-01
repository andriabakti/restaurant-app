import { DatabaseModule } from '@/configs/database/database.module';
import { Module } from '@nestjs/common';
import { SeederService } from './seeder.service';

@Module({
  imports: [DatabaseModule],
  providers: [SeederService],
  exports: [SeederService],
})
export class SeederModule {}
