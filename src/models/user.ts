import { RoleDto } from "./role";

export interface UserDto {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: RoleDto;
}
