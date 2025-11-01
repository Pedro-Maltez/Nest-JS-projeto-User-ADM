
export class ClientEntity {
  constructor(
    public id: string,
    public name: string,
    public document: string,
    public email: string | null
  ) {}
}
