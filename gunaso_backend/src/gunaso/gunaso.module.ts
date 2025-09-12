import { Module } from '@nestjs/common';
import { GunasoController } from './gunaso.controller';
import { GunasoService } from './gunaso.service';

@Module({
  controllers: [GunasoController],
  providers: [GunasoService]
})
export class GunasoModule {}
