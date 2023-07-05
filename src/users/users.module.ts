import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ShouldExist } from '../utils/validators/should-exist.validator';
import { ShouldNotExist } from '../utils/validators/should-not-exist.validator';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [ShouldExist, ShouldNotExist, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
