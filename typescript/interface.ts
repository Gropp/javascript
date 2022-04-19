// exemplo de interface e type
interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean
    //executarRugido(alturaEmDb: number): void
}

// as interfaces IFelino e ICanino são extensoes da interface IAnimal
interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}
interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande'
}

// criamos um type que nos permite selecionar as interfaces filhas
type IDomestico = IFelino | ICanino

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    domestico: false
    //executarRugido: (alturaEmDb) => ('$(alturaEmDb)dB')
}

//animal.executarRugido(5)
const felino: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
    domestico: false
    //executarRugido: (alturaEmDb) => ('$(alturaEmDb)dB')
}

const pet: IDomestico = {
    nome: 'cachorro',
    tipo: 'terrestre',
    domestico: true,
    porte: 'medio',
    visaoNoturna: false
}

console.log(animal);
console.log(felino);
console.log(pet);