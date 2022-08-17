/* 
    Expresiones regulares:
        Son una secuencia de caracteres que forma un patrón de búsqueda,
        principalmente utilizada para la búsqueda de patrones de cadenas
        de caracteres u operaciones de sustituciones.

    Sintaxis:
        /patron/
    
    Banderas:
        i: ignore case. No diferencia entre mayúsculas y minúsculas
        g: global. Busca de forma global, es decir, no se para después de
                    la primera coincidencia.
    
    Comodines:
            - Sustitución: Define un comodín dentro del patron. El símbolo es el "."

            - Listado de caracteres válidos: Entre corchetes se pone una lista de los
                    caracteres válidos [aeiou]
            - Rangos: Entre corchetes si ponesmos un guión entre dos caracteres establecemos
                    un rango. [a-z] Todas las letras minúsculas
            - Mezcla entre rangos y listas:
                Podemos unir los dos anteriores en una sola expresión. [0-5ou] que incluiría
                números del 0 al 5 y las letras "o" y "u"
            - Cadenas completas:
                Para establecer una cadena completa debe ir entre paréntesis, si queremos
                más palabras entonces irán separadas por un pipe (|). (Lorem|amet) -> Es
                válida la palabra "Lorem" y "amet"

    Delimitadores:
        ^ -> Antes de este símbolo no puede haber nada
        $ -> Después de este símbolo no puede haber nada 
             ^hola$
    
    Cantidad:
        - llaves: lo que está antes tiene que aparecer la cantidad exacta de veces. Se tiene
            3 conbinaciones posibles:
                {n} Se tiene que repetir n veces
                {n, m} Se tiene que repetir entre n y m veces, ambos limites imncluidos
                {n,} Se tiene que repetir como mínimo n veces y sin máximo
        - asterisco: Lo que está antes del asterísco puede estar, puede no estar y se puede 
                repetir. .*@.*\..*
        
        - Interrogación: Lo que está antes de la interrogación puede no estar, pero si está
                solo puede aparecer una vez.  ^[ae]?$

        - operador + : lo que está antes del + tiene que estár una vez como mínimo

    Caracteres:
        \s : Coincide con un caracter de espacio, entre ellos incluido el espacio, tab,
                salto de página, salto de line y retorno de carro. ^[a-zA-Z]*\s[a-zA-Z]*$
        \S: Coincide con todo menos caracteres de espacio

        \d : Coincide con un caracter de número. Equivalente a [0-9]
        \D : Coincide con cualquier caracter no numérico.

        \w : Coincide con cualquier caracter alfanumérico, incluido el guión bajo.
        \W : Coincide con todo menos caracteres de palabra
        
    Recursos: 
        regex101.com
*/

const text = document.getElementById('text').textContent

const regEx = /lorem/g
const regEx2 = /lorem/gi

console.log(text)
console.log(regEx.test(text))
console.log(regEx2.test(text))

console.log(text.includes('Lorem'))