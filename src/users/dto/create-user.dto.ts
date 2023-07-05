import { AuthRegisterLoginDto } from '../../auth/dto/auth-register-login.dto';

export class CreateUserDto extends AuthRegisterLoginDto {
  hash?: string;
}
