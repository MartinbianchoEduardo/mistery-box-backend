import { Module } from '@nestjs/common';

import { PrismaModule } from 'src/prisma/prisma.Module';
import { WeaponController } from './weapon.controller';
import { WeaponService } from './weapon.service';

@Module({
  imports: [PrismaModule],
  controllers: [WeaponController],
  providers: [WeaponService]
})
export class WeaponModule {}
