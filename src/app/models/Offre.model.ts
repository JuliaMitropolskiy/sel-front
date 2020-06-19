export class Offre {
  constructor(
    public id: number,
    public titre: string,
    public text: string,
    public rubrique: OffreRubrique,
    public dateCreation: Date,
    public lienPhoto?: string
  ) { }
}

export class OffreRubrique {
  id: string;
  libelle: string;
  category: OffreCategory;
}

export class OffreCategory {
  id: string;
  libelle: string;
}
