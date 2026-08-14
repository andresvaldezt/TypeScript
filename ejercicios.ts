
const arrayNumbers: number[] = [6,1,2,7,3,4,5];
//1.-Dado un array de numeros, escribir una funcion que encuentre el numero mas grande
const resultMayor: number = [6,1,2,7,3,4,5].reduce((acc, element) => element > acc ? element : acc, 0);
console.log(resultMayor);
const biggetsNumber: number = Math.max(...arrayNumbers)
console.log(biggetsNumber)

//2.-Dado un array de numeros, escribir una funcion que encuentre el numero mas pequeno
const resultMenor: number = [6,1,2,7,3,4,5].reduce((acc, element) => element < acc ? element : acc);
console.log(resultMenor);
const smallNumber: number = Math.min(...arrayNumbers)
console.log(smallNumber)

//3.-Dado un array de numeros, escribir una funcion que calcule la suma de todos los elementos
const suma: number = [6,1,2,7,3,4,5].reduce((acc, element) => element + acc);
console.log(suma);

//4.-Dado un array de numeros, escribir una funcion que calcule el promedio de todos los elementos
const promedio: number = suma / [6,1,2,7,3,4,5].length;
console.log(promedio);

//5.-Dado un string, escribir una funcion que invierta el orden de las letras en el string
const resultInvertido: string = 'Pepito clavo un clavito'.split('').reverse().join('');
console.log(resultInvertido);

//6.-Dado un string, escribir una funcion que encuentre la palabra mas larga en el string
const masLarga: string = 'Pepito clavo un clavito'.split(' ').reduce((acc, element) => element.length > acc.length ? element : acc);
console.log(masLarga);

//7.-Dado un string y un numero n, escribir una funcion que trunque el string a n caracteres y agregue "..." al final
const resultTruncar = (myString:string, n: number): string => myString.slice(0, n) + ((myString.length > n) ? "..." : "");

console.log(resultTruncar('Pepito clavo un clavito', 10));

//8.-Dado un array de numeros, escribir una funcion que elimine todos los numeros duplicados y devuelva el arreglo limpio
const removeDuplicated = new Set<number>();
[6,1,1,1,2,2,2,7,3,3,4,4,5].forEach(element => removeDuplicated.add(element)) //Los set no permiten duplicados
console.log(Array.from(removeDuplicated))

//9.-Dado un arrya de numeros y un numero objetivo, escribir una funcion que va a encontrar dos numeros en el arreglo que sumen un objetivo
const arrayOfNumbers: number[] = [1, 2, 3, 4, 4, 3];
const magicNumber = 7;
const checkNumbers = (numberArray: number[], n: number) => {
    let secondNumber = null;
    const result = numberArray.find((e, index) =>
        numberArray.slice(index).find((secondE) => {
            const condition = secondE + e === n;
            if(condition) secondNumber = secondE;
            return condition;
        })
    );
    return console.log({number1: result, number2: secondNumber})
}
checkNumbers(arrayOfNumbers, magicNumber)