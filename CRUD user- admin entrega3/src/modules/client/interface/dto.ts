
export class CreateClientDto {
  name: string;
  document: string; // e.g., CPF/CNPJ simplified
  email?: string;
}

export class UpdateClientDto {
  name?: string;
  document?: string;
  email?: string;
}
