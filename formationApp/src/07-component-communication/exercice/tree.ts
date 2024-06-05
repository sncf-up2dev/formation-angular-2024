/* Classe repésentant une arborescence */
/* /!\ Ce fichier ne doit pas être modifié pour l'exercice ! */

export class Tree {
    constructor(
        public value: string,
        public children: Tree[] = []
    ) { }
}