
let regole ="<h2>REGOLE</h2><ul><li>Tutte le risposte devono essere scritte in JavaScript</li><li>Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant</li><li>Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione</li><li>Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta</li><li>Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)</li></ul>"
document.getElementById("regole").innerHTML = regole; 

let q1 = "<p>ESERCIZIO 1"
document.getElementById("q1").innerHTML = q1; 

let domanda ="<p>Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.</p>"
document.getElementById("domanda_1").innerHTML = domanda; 

let risposta = "<ul><li><strong>Stringhe</strong> => comprendono caratteri alfanumerici e numerici intesi come TransformStreamDefaultController, quindi non usabili per formule matematiche</li><li><strong>Numeri</strong> => comprendono solo caratteri numerici e possono essere usati per i calcoli matematici</li><li><strong>Boolean</strong> => Vero o falso, acceso o spento, si o no</li><li><strong>Undefined</strong> => significa che js non sa cosa contiene la variabile, o il contenuto non è stato dichiaratro correttamente</li><li><strong>Null</strong> => significa che il valore della variabile è stato dichiarato vuoto e non contiene alcun dato</li><li><strong>Object</strong> => è una variabile che contine al suo interno un insieme di dati di tipo diverso, contrasegnati da un etichetta che li indentifica </li><li><strong>Array</strong> => è una variabile che contiene al suo interno un insieme di dati di tipo divers, inseriti in maniera sequenziale senza etichette</li></ul>"
document.getElementById("risposta").innerHTML = risposta; 

let q2 = "<p>ESERCIZIO 2"
document.getElementById("q2").innerHTML = q2;

domanda ="<p>Descrivi cos'è un oggetto in JavaScript, con parole tue.</p>"
document.getElementById("domanda_2").innerHTML = domanda; 

risposta = "<ul><li>Object => è una variabile che contine al suo interno un insieme di dati di tipo diverso, contrasegnati da un etichetta che li indentifica</li></ul>" 
document.getElementById("risposta_2").innerHTML = risposta;



let q3 = "<p>ESERCIZIO 3</p>";
document.getElementById("q3").innerHTML = q3;

domanda = "<p>Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.</p>"
document.getElementById("domanda_3").innerHTML = domanda;

risposta = "<ul><li>let a = 12;</li><li>let b = 20;</li><li>let risultatoAddizione= a + b;</li></ul><ul> Seconda opzione <li>let result = 12 + 20;<ul></ul> "
document.getElementById("risposta_3").innerHTML = risposta;

let q4 ="<p>ESERCIZIO 4</p>";
document.getElementById("q4").innerHTML = q4;

domanda ="<p>Crea una variable di nome 'x' e assegna ad essa il numero 12.</p>" 
document.getElementById("domanda_4").innerHTML = domanda;

risposta = "<ul><li>let a = 12;</li></ul>"
document.getElementById("risposta_4").innerHTML = risposta;

let q5 = "<p>ESERCIZIO 5</p>"
document.getElementById("q5").innerHTML = q5;

domanda = "<p>Crea una variable chiamata 'nome' e assegna ad essa il tuo nome, sotto forma di stringa.</p>";
document.getElementById("domanda_5").innerHTML = domanda;

risposta = "<ul><li>let nome = 'Andrea'</li></ul><ul> Seconda opzione<li>let nome = `Andrea`;</li></ul> "
document.getElementById("risposta_5").innerHTML = risposta;

let q6 = "<p>ESERCIZIO 6</p>"
document.getElementById("q6").innerHTML = q6;

domanda = "<p> Esegui una sottrazione tra i numeri 4 e la variable 'x' appena dichiarata (che contiene il numero 12).</p>";
document.getElementById("domanda_6").innerHTML = domanda;

risposta = "<ul><li>let x = 12;</li><li>let y = 4;</li><li>let risultatoSomma = x - y;</li></ul>"
document.getElementById("risposta_6").innerHTML = risposta;

let q7 = "<p>ESERCIZIO 7</p>"
document.getElementById("q7").innerHTML = q7;

domanda = "<p>Crea due variabili: 'name1 e 'name2'. Assegna a name1 la stringa 'john', e assegna a name2 la stringa 'John' (con la J maiuscola!).Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!). NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log()</p>"
document.getElementById("domanda_7").innerHTML = domanda;

risposta ="<ul><li>let name1 = 'john';</li><li>let name2 = 'John';</li><li>console.log(name1===name2);</li><li>console.log(name1.toLowerCase()===name2.toLowerCase());</li></ul>"
document.getElementById("risposta_7").innerHTML = risposta;

