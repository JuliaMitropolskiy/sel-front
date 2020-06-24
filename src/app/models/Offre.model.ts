export class Offre {
  constructor(
    public id: number,
    public titre: string,
    public text: string,
    public userId: number,
    public userPrenom: string,
    public userCommune: string,
    public rubrique: Rubrique,
    public dateCreation: Date,
    public photoLien?: string
  ) { }
}

export class Rubrique {
  code: string;
  libelle: string;
  category: Category;
}

export class Category {
  categoryCode: string;
  libelle: string;
}

/*
id: number,
titre: string,
text: string,
userId: number,
userPrenom: string,
userCommune: string,
rubrique: OffreRubrique,
dateCreation: Date,
photoLien?: string
*/
/*
id
titre
text
userId
userPrenom
userCommune
rubrique
dateCreation
photoLien
*/

