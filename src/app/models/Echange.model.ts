import { Category } from './Offre.model';
import { User } from './User.model';

export class Echange {
  constructor(
    public id: number,
    public emetteur: User,
    public beneficiaire: User,
    public dateEchange: Date,
    public category: Category,
    public minutes: number,
    public message: string
  ) { }
}
