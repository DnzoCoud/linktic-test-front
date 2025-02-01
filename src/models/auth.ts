import { UserDto } from "./user";

export interface AuthDto {
  token: string;
  user: UserDto;
}
