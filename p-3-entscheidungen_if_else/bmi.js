/* Mark und John versuchen ihren BMI (Body Mass Index, de: Körper Gewicht Index) zu vergleichen. 
BMI (Body Mass Index) = Gewicht in Kilogramm / (Größe in Meter * Größe in Meter)  */

// 1. Speichere Marks und Johnss Gewicht und Größe in Variablen.
let mark_gewicht = 68;
let mark_groesse = 180;
let john_gewicht = 72;
let john_groesse = 182;

// 2. Berechne deren BMIs und speichere sie in Variablen. 
// BMI = Gewicht / cm

let bmi_mark = mark_gewicht / (mark_groesse * mark_groesse);
// let bmi_john = john_gewicht / (math.pow(john_groesse, 2));  // oder **2  als Exponent-Operator:
let bmi_john = john_gewicht / mark_groesse ** 2; 

console.log("mark", bmi_mark);
console.log("john", bmi_john);

// 3. Erstelle eine Variable, die einen Wahrheitswert enthält. Ihr Wert soll ausdrücken ob Marks BMI größer ist als Johns.
let compare = true;
// let compare = mark_more = (bmi_mark > bmi_john)


// 4. Gib eine Zeichenkette auf der Konsole aus, die die Variable aus Schritt 3 in einer Interpolation (template String) verwendet. (z. B. "Ist Marks BMI größer als Johns? [(true/false):(Ja ist er / Nein ist er nicht))] ")

if (bmi_mark > bmi_john) {
   compare = true;
   console.log("Ist Mark's BMI größer als John's? " + compare + ": Ja, ist er");
} else if (bmi_john > bmi_mark) {
   compare = false;
   console.log("Ist Mark's BMI größer als John's? " + compare + ": Nein, ist er nicht");
} else if (bmi_mark === bmi_john) {
   console.log("Mark und John BMI's sind gleich");
} else {
console.log("kein treffer vorher");
}


// console.log('ist mark bmi größer als john? ${ mark_more ? "Ja ist er. " : "Nein, ist nidht." } ' );


/* 5. Erstelle eine Wenn (if) Anweisung. Gib damit den Namen und BMI der Person aus, die den größten BMI hat. */
if(bmi_mark > bmi_john) {
    console.log("Größten BMI hat Mark, mit: ", bmi_mark)
} else {
    console.log("Größten BMI hat John, mit: ", bmi_john)
}
