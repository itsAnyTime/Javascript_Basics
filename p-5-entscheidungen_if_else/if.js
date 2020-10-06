// 1. Aleeza and Lis spielen Basketball in verschiedenen Mannschaften. 
// In den letzten drei Spielen erreichten sie verschiedene Punkte

// | Aleezas Mannschaft | Lis' Mannschaft |
// | --- | --- |
// | 89  | 116 |
// | 120 | 94  |
// | 103 | 123 |

// - 1a) Berechne den Durchschnitt für jede Mannschaft

// pkt_al = 89 + 120 + 103;
// pkt_lis = 116 + 94 + 123;

// durchschnitt_al = pkt_al / 2;
// durchschnitt_lis = pkt_lis / 2;

// oder kürzer
durchschnitt_al = (1 + 100 + 100) / 2;
durchschnitt_lis = (10 + 100 + 100) / 2;

console.log("Al:", durchschnitt_al, "Lis:", durchschnitt_lis);


// - 1b) Entscheide welche Mannschaft im Durchschnitt gewinnt (höherer Durchschnittswert). Gib den Gewinner und dessen Durchschnittswert auf der Konsole aus.
vorsprungswert_al = durchschnitt_al - durchschnitt_lis;
vorsprungswert_lis = durchschnitt_lis - durchschnitt_al;


// mit 2 Teams:
// if(durchschnitt_lis > durchschnitt_al) {
//     console.log("Gewinnervorsprungsdurchschnitt: Lis' Mannschaft mit", vorsprungswert_lis, "Punkten.");
// } else if (durchschnitt_lis === durchschnitt_al) {
// console.log("Gleichstand!!!"); } else {
// console.log("Gewinnervorsprungsdurchschnitt: Aleeza's Mannschaft mit", vorsprungswert_al, "Punkten.");
// }


// - 1c) Ändere die Punkte der Mannschaften um andere Gewinner zu erhalten. Vergiss nicht, dass auch ein Unentschieden herauskommen kann (wenn beide Mannschaften den gleichen Durchschnitt erhalten).
    // habe unter 1b ein else if für Gleichstand eingebaut

// - 1d) Mary spielt auch Basketball. Ihr Team erreicht 97, 134 und 105 Punkte. Wie zuvor, gib den Gewinner abhängig vom Durchschnitt auf der Konsole aus.

// mit 3 Teams:
durchschnitt_mary = (97 + 134 + 105) / 2;

console.log("Al:", durchschnitt_al, "Lis:", durchschnitt_lis, "Mary:", durchschnitt_mary);

if(durchschnitt_lis > durchschnitt_al && durchschnitt_lis > durchschnitt_mary ) {
    console.log("Gewinnervorsprungsdurchschnitt: Lis' Mannschaft!");
} else if (durchschnitt_lis === durchschnitt_al && durchschnitt_al === durchschnitt_mary) {
    console.log("Gleichstand!!!"); } else if(durchschnitt_al > durchschnitt_lis && durchschnitt_al > durchschnitt_mary) {
    console.log("Gewinnervorsprungsdurchschnitt: Aleeza's Mannschaft!"); 
} else {
    console.log("Gewinnervorsprungsdurchschnitt: Marys Mannschaft!"); 
}


// - 1e) Wie zuvor, ändere ein wenig an den Punkten herum, um verschiedene Gewinner zu bekommen. Behalte im Kopf, dass es Unentschieden geben kann.

// sieht etwas umständlich aus, aber funktioniert :)