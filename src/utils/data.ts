import { getData } from './getData';

export const questions = [
  'Cuál es el valor de this para una arrow function',
  'Qué es una expression?',
  'Qué es una declaration?',
  'Diferencia entre expression y declaration',
];

export const answers = [
  'El valor de this para una función flecha (arrow function) en JavaScript está determinado por el contexto léxico en el que se define la función, y no cambia cuando se llama la función. En otras palabras, el valor de this en una arrow function se hereda del contexto circundante en el que se creó la función. Esto significa que no importa cómo o dónde se llame la función flecha, this siempre tendrá el mismo valor que tenía cuando se definió la función.',
  'En JavaScript, una expresión es como una pregunta o una tarea que le das al programa para que haga algo y te dé una respuesta. Esta tarea puede ser una operación matemática, asignar un valor a una variable, llamar a una función o tomar decisiones basadas en condiciones. Si le pides a JavaScript que sume 2 + 3, eso es una expresión y obtendrás la respuesta 5.Si le dices a JavaScript que tome el nombre "Juan" y lo guarde en una variable llamada "nombre", eso también es una expresión. Cuando llamas a una función, como console.log("Hola, mundo"), eso es una expresión que muestra un mensaje en la consola.',
  'Es cuando definimos alguna variable pero no le damos valor. En muchos lenguajes, las declaraciones suelen terminar con un punto y coma (;).',
  'Las declaraciones se utilizan para crear elementos en un programa, mientras que las expresiones se utilizan para realizar cálculos y producir valores, y se evalúan en tiempo de ejecución. Las expresiones pueden utilizarse en muchas partes del código donde se espera un valor, mientras que las declaraciones establecen la estructura y la lógica del programa.',
];

export const randomData = async () => {
  const data = await getData();
  const numberOfquestions = Object.keys(data).length / 2;
  const position = Math.floor(Math.random() * numberOfquestions) + 1;

  return {
    questions: data[`q${position}`],
    answers: data[`a${position}`],
  };
};
