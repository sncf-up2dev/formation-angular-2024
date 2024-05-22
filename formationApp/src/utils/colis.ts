export type Colis = {
    id: string,
    address: string,
    email: string,
    title: string,
    details: string,
    deliveryPersonId: number
}

export const colisList: Colis[] = [
    {
        title: "Lampe",
        address: "248-7407 Bibendum. Av.",
        email: "a@icloud.net",
        id: "D1AB7E3C-5D23-D646-4375-9B7872B52289",
        details: "cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin",
        deliveryPersonId: 8
    },
    {
        title: "Chaise",
        address: "3475 Nascetur Rd.",
        email: "cras.pellentesque@yahoo.org",
        id: "C9CE1525-59A7-577D-EE9E-B29065C0EB63",
        details: "ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat",
        deliveryPersonId: 1
    },
    {
        title: "Livre",
        address: "6638 Sem Street",
        email: "ornare.placerat.orci@icloud.net",
        id: "394DDD7E-E252-2DE4-9BF3-A2D0BC41C469",
        details: "auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis",
        deliveryPersonId: 5
    },
    {
        title: "Téléphone",
        address: "P.O. Box 283, 3500 Et Ave",
        email: "senectus.et.netus@yahoo.com",
        id: "3F87BC6E-81DE-71AF-945C-9072CE383E75",
        details: "imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit,",
        deliveryPersonId: 9
    }
]