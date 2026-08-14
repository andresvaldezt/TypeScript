// JavaScript es tipado? Si, tiene un tipado dinamico
// Lo que pasa en el engine V8 es que guarda un snapshot de que es lo que esta pasando actualmente
// Lo guarda en memoria y optimiza, entonces si utilizas el tipado dinamico cuando JS ve que hay un cambio
// borra lo que estaba antes, vuelve a guardar la nueva estructura y lo optimiza de nuevo, 
// esto en aplicaciones grandes es poco performante.
// Aqui es donde entra la importancia de usar typescript


const metodo = (a: number) : number => a + 1;
metodo(1)

//aspecto socio cultural

//1- seguridad
//2- mantenibilidad
//3- refactorizacion

//que es typescript = javascript con esteroides
//typescript se actualiza con la ultima version de javascript

class Persona {
    name: string;

    constructor(name: string){
        this.name = name
    }

    getName(): string {
        return this.name
    }

    setName(name: string){
        this.name = name;
    }
}

class Persona2 {
    name: string;

    constructor(name: string){
        this.name = name
    }

    getName(): string {
        return this.name
    }

    setName(name: string){
        this.name = name;
    }
}

interface PersonaIn{
    name: string
    getName(): string
    setName(name: string): void
}

const persona = {
    name: 'Andres',
    getName(){
        return this.name
    },
    setName(name: string){
        this.name = name;
    }
}

const sendData = (persona: Persona) => {
    console.log(persona.getName())
}

sendData(persona)
//class y las interfaces son tipos

//Que es shape? es la forma de algo en typescript, dos instancias de clase pueden tener las mismas propiedades que una interface
//entonces ambas clases se dice que tienen la misma shape(forma)
let personaPosible2: Persona2 = persona
let personaPosible: PersonaIn = persona

//Que es un transpilador?
//Yo tengo un lenguaje de alto nivel y lo transformo a otro de alto nivel
//alto nivel = TypeScript -> JavaScript
//bajo nivel = lenguaje maquina

//enum

const NI = {
    ARG: 'pasaporte',
    ES: 'nie'
}

type ARG = string;
type NITYPE = "pasaporte" | "nie"

enum NIENUM {
    ARG = 'pasaporte',
    ES = 'nie'
}

const dni = NIENUM.ARG;

const dimeELNI = (ni: NITYPE) : NITYPE => ni

console.log(dimeELNI('pasaporte'))

//Regla: si puedes siempre usa una interface para declarar algo
//Cuando tengas algo mas complejo que no puedas hacer con la interface ahi usa type

//union y intersection

type A = string | number
//la union son los elementos que se comparten entre string y number
type B = string & number
//son los elementos que se suman entre string y number

interface Alumno {
    nombre: string;
    nota: number;
}

interface Profesor {
    nombre: string;
    legajo?: string
}

//union
type AlumnoUProfesor = Alumno | Profesor
//intersection
type AlumnoYProfesor = Alumno & Profesor

const person: AlumnoUProfesor = {
    nombre: "Juan",
    nota: 1
}

const method = (persona: AlumnoYProfesor) => {
    persona.nota;
}

//unknown vs any
let num: unknown = 1;

//type assertion
const texto: string = num as string;
let text: unknown;

const method2 = (text: unknown) => {
    if(Array(texto)){
        return ( <[]>text ).length;
    }
}

const myArray: number[] = [1, 2, 3, 4, 5]

const colores = ["rojo", "amarillo", "verde"] as const;

console.log(colores)
//TS siempre trata de generalizar

// function obtenerConfiguracion(){
//     return {
//         modo: "prod",
//         version: "1.0.0",
//         opciones: {
//             depuracion: false,
//         },
//     } as const
// }

// const configuracion = obtenerConfiguracion();
// configuracion.opciones.depuracion = true
// //No se puede asignar un nuevo valor a depuracion porque las propiedades son de tipo readonly

//genericos
const method3 = <T>(x: T): T => x;
const a = method3<number>(1)
const b = method3<string>("1")

interface Saludar<T> {
    saludar(x: T): string
}

const persona2: Saludar<string> = {
    saludar(x: string){
        return `Hola ${x}`
    }
}

const perro: Saludar<number> = {
    saludar(x: number){
        return `Hola ${x} veces`
    }
}



//functional overloading
function methodStringOrNumber(x: string): number;
function methodStringOrNumber(x: number): string;
function methodStringOrNumber(x: string | number): string | number {
    if(typeof x === "number"){
        return x.toString()
    }
    
    if(typeof x === 'string'){
        return x.length
    }

    return x
}

methodStringOrNumber('1')

//enum
enum Keys{
    name = "name",
    raza = "raza"
}

//hagamos un tipo que dependa de una propiedad para el resultado de la funcion
type Dependant<T extends {property: any}> = T["property"]

type Independant = {
    property: number
}

//enum
enum Numbers1 {
    "NUMBER1" = "number1",
    "NUMBER2" = "number2",
}

enum Numbers2 {
    "NUMBER3" = "number3"
}

const myNumbers = {...Numbers1, ...Numbers2} as const;
const mixValues = Object.values(myNumbers)

type MixNumbers = (typeof mixValues)[number]

type Enums = {
    [key in MixNumbers]: any;
}