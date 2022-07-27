import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from 'src/prisma/prisma.Module';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}