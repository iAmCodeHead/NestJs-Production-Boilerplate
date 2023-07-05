import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserSeedService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  async run() {
    const users = await this.repository.count({});

    if (!users) {
      await this.repository.save(
        this.repository.create({
          email: 'jane.doe@example.com',
          password: 'secret',
        }),
      );
    }
  }
}
