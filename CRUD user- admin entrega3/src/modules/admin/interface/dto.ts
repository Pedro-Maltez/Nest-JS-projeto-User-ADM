
export class CreateAdminDto {
  name: string;
  email: string;
  role?: string;
}

export class UpdateAdminDto {
  name?: string;
  email?: string;
  role?: string;
}
