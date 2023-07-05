import {Module} from '@nestjs/common';
import {UsersModule} from './users/users.module';
import {AuthModule} from './auth/auth.module';
import databaseConfig from './config/database.config';
import authConfig from './config/auth.config';
import appConfig from './config/app.config';
import {ConfigModule} from '@nestjs/config';
import {TypeOrmConfigService} from './database/typeorm-config.service';
import {DataSource, DataSourceOptions} from 'typeorm';
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        databaseConfig,
        authConfig,
        appConfig,
      ],
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      dataSourceFactory: async (options: DataSourceOptions) => {
        return await new DataSource(options).initialize();
      },
    }),
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
