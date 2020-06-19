export class User {
  constructor(
    public nom: string,
    public commune: string,
    public mail: string,
    public password: string,
    public soldeMinutes: number,

    public id?: number,
    public prenom?: string,
    public adresse?: string,
    public numTel?: string,
    public photoLien?: string
  ) { }

}
