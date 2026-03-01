export interface Resident {
    id?: number;
    cni: string;
    nom: string;
    prenom: string;
    nationalite: string;
    diplomeLePlusEleve: string;
    isLettre: boolean;
    trancheSalariale: string;
    dateNaissance: Date | string;
    isChef: boolean;
}

export interface Household {
    id?: number;
    nomChef: string;
    hasTv: boolean;
    hasRadio: boolean;
    hasMoto: boolean;
    hasVoiture: boolean;
    isProprietaire: boolean;
    adresse: string;
    residents: Resident[];
    score?: number;
    categorieSociale?: string;
}

export interface SocialProgram {
    id?: number;
    nom: string;
    description: string;
    dateDebut?: Date | string;
    dateFin?: Date | string;
    budget?: number;
    scoreMin?: number;
}
