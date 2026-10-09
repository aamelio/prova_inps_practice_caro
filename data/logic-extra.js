/* Original, non-official draft practice questions. Editorial review required. */
window.PECS_QUESTIONS = (window.PECS_QUESTIONS || []).concat([
  {
    "id": "lg-001",
    "subject": "logica",
    "topic": "Deduzione",
    "question": "Tutti i medici sono laureati; alcuni laureati sono musicisti. Che cosa segue necessariamente?",
    "choices": [
      "Tutti i medici sono laureati",
      "Alcuni medici sono musicisti",
      "Tutti i musicisti sono medici",
      "Nessun medico è musicista"
    ],
    "correct": 0,
    "explanation": "La sola conclusione necessaria è quella già contenuta nella prima premessa.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-002",
    "subject": "logica",
    "topic": "Deduzione",
    "question": "Nessun archivista è un robot. Tutti i robot usano batterie. Quale affermazione è sicuramente vera?",
    "choices": [
      "Nessun archivista usa batterie",
      "Tutti gli archivisti usano batterie",
      "Alcuni robot sono archivisti",
      "Nessun robot è archivista"
    ],
    "correct": 3,
    "explanation": "La relazione «nessun A è B» è simmetrica.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-003",
    "subject": "logica",
    "topic": "Deduzione",
    "question": "Tutti i documenti firmati sono protocollati. Questo documento non è protocollato. Ne consegue che:",
    "choices": [
      "è protocollato",
      "non è un documento",
      "non è firmato",
      "è firmato"
    ],
    "correct": 2,
    "explanation": "Contrapposizione: se firmato implica protocollato, non protocollato implica non firmato.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-004",
    "subject": "logica",
    "topic": "Deduzione",
    "question": "Se un ufficio è aperto, il sistema è attivo. Il sistema non è attivo. Quale conclusione è valida?",
    "choices": [
      "Non si può dedurre nulla",
      "L'ufficio non è aperto",
      "L'ufficio è aperto",
      "Il sistema è in manutenzione"
    ],
    "correct": 1,
    "explanation": "Modus tollens: P implica Q; non Q implica non P.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-005",
    "subject": "logica",
    "topic": "Deduzione",
    "question": "Se piove, la strada è bagnata. La strada è bagnata. Possiamo concludere che piove?",
    "choices": [
      "No, non necessariamente",
      "Sì, sempre",
      "Sì, se è mattina",
      "No, perché la pioggia asciuga"
    ],
    "correct": 0,
    "explanation": "Affermare il conseguente non prova l'antecedente.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-006",
    "subject": "logica",
    "topic": "Deduzione",
    "question": "Alcuni analisti sono ingegneri. Tutti gli ingegneri conoscono la matematica. Quale conclusione segue?",
    "choices": [
      "Tutti gli analisti sono ingegneri",
      "Nessun analista conosce la matematica",
      "Tutti i matematici sono analisti",
      "Alcuni analisti conoscono la matematica"
    ],
    "correct": 3,
    "explanation": "Gli analisti che sono ingegneri conoscono necessariamente la matematica.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-007",
    "subject": "logica",
    "topic": "Deduzione",
    "question": "Tutti gli X sono Y; tutti gli Y sono Z. Qual è la conclusione?",
    "choices": [
      "Nessun X è Z",
      "Alcuni Z non sono Y",
      "Tutti gli X sono Z",
      "Tutti gli Z sono X"
    ],
    "correct": 2,
    "explanation": "L'inclusione tra insiemi è transitiva.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-008",
    "subject": "logica",
    "topic": "Deduzione",
    "question": "Se A è falso e la proposizione «A oppure B» è vera, B è:",
    "choices": [
      "necessariamente uguale ad A",
      "vero",
      "falso",
      "indeterminato"
    ],
    "correct": 1,
    "explanation": "Nella disgiunzione inclusiva almeno una proposizione deve essere vera.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-009",
    "subject": "logica",
    "topic": "Deduzione",
    "question": "L'affermazione «Non tutti i candidati sono puntuali» equivale a:",
    "choices": [
      "Almeno un candidato non è puntuale",
      "Nessun candidato è puntuale",
      "Tutti i candidati sono in ritardo",
      "Almeno un candidato è puntuale"
    ],
    "correct": 0,
    "explanation": "La negazione del quantificatore universale è un quantificatore esistenziale con predicato negato.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-010",
    "subject": "logica",
    "topic": "Deduzione",
    "question": "Qual è la negazione di «Tutti i fascicoli sono completi»?",
    "choices": [
      "Nessun fascicolo è completo",
      "Tutti i fascicoli sono incompleti",
      "Qualche fascicolo è completo",
      "Esiste almeno un fascicolo incompleto"
    ],
    "correct": 3,
    "explanation": "La negazione di «tutti» è «almeno uno non».",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-011",
    "subject": "logica",
    "topic": "Insiemi",
    "question": "In una classe di 30 persone, 18 studiano inglese, 14 francese e 6 entrambe. Quante studiano almeno una delle due lingue?",
    "choices": [
      "24",
      "32",
      "26",
      "20"
    ],
    "correct": 2,
    "explanation": "Inclusione-esclusione: 18+14−6=26.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-012",
    "subject": "logica",
    "topic": "Insiemi",
    "question": "Su 40 persone, 25 leggono il giornale A, 20 il giornale B e 10 entrambi. Quante non leggono nessuno dei due?",
    "choices": [
      "25",
      "5",
      "10",
      "15"
    ],
    "correct": 1,
    "explanation": "L'unione è 25+20−10=35; il complemento è 40−35=5.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-013",
    "subject": "logica",
    "topic": "Insiemi",
    "question": "In un gruppo di 50, 30 praticano nuoto, 25 corsa e 15 entrambi. Quanti praticano una sola delle due attività?",
    "choices": [
      "25",
      "15",
      "30",
      "40"
    ],
    "correct": 0,
    "explanation": "Solo nuoto 15, solo corsa 10: totale 25.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-014",
    "subject": "logica",
    "topic": "Insiemi",
    "question": "Se A è sottoinsieme di B, quale relazione è sempre vera?",
    "choices": [
      "A ∩ B = B",
      "A e B sono disgiunti",
      "B è sottoinsieme di A",
      "A ∩ B = A"
    ],
    "correct": 3,
    "explanation": "Ogni elemento di A appartiene anche a B.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-015",
    "subject": "logica",
    "topic": "Insiemi",
    "question": "Quanti sottoinsiemi ha un insieme con 4 elementi distinti?",
    "choices": [
      "8",
      "12",
      "16",
      "4"
    ],
    "correct": 2,
    "explanation": "Ogni elemento può essere incluso o escluso: 2^4=16.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-016",
    "subject": "logica",
    "topic": "Probabilità",
    "question": "Lanciando un dado equilibrato a sei facce, qual è la probabilità di ottenere un numero pari?",
    "choices": [
      "2/3",
      "1/2",
      "1/3",
      "1/6"
    ],
    "correct": 1,
    "explanation": "Gli esiti pari sono 2,4,6: tre su sei.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-017",
    "subject": "logica",
    "topic": "Probabilità",
    "question": "Da un mazzo di 52 carte, qual è la probabilità di estrarre un asso?",
    "choices": [
      "1/13",
      "1/4",
      "1/26",
      "4/13"
    ],
    "correct": 0,
    "explanation": "Quattro assi su 52 carte: 4/52=1/13.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-018",
    "subject": "logica",
    "topic": "Probabilità",
    "question": "Lanciando due monete eque, qual è la probabilità di ottenere due teste?",
    "choices": [
      "1/2",
      "1/3",
      "3/4",
      "1/4"
    ],
    "correct": 3,
    "explanation": "Gli esiti equiprobabili sono TT, TC, CT, CC; uno favorevole.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-019",
    "subject": "logica",
    "topic": "Probabilità",
    "question": "Un sacchetto contiene 3 palline rosse e 2 blu. Estraendo una pallina a caso, P(rossa) è:",
    "choices": [
      "1/2",
      "3/2",
      "3/5",
      "2/5"
    ],
    "correct": 2,
    "explanation": "Tre palline rosse su cinque.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-020",
    "subject": "logica",
    "topic": "Probabilità",
    "question": "Quanti modi diversi esistono per ordinare tre libri distinti?",
    "choices": [
      "12",
      "6",
      "3",
      "9"
    ],
    "correct": 1,
    "explanation": "Le permutazioni di tre elementi sono 3!=6.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-021",
    "subject": "logica",
    "topic": "Probabilità",
    "question": "In quanti modi si possono scegliere 2 persone da un gruppo di 5, senza distinguere l'ordine?",
    "choices": [
      "10",
      "5",
      "15",
      "20"
    ],
    "correct": 0,
    "explanation": "Combinazioni: 5·4/2=10.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-022",
    "subject": "logica",
    "topic": "Matematica",
    "question": "Un negozio applica uno sconto del 20% a un prezzo di 150 euro. Quanto si paga?",
    "choices": [
      "110 euro",
      "125 euro",
      "130 euro",
      "120 euro"
    ],
    "correct": 3,
    "explanation": "Si paga l'80% di 150: 120 euro.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-023",
    "subject": "logica",
    "topic": "Matematica",
    "question": "Un importo aumenta del 25% e diventa 100 euro. Quanto valeva prima?",
    "choices": [
      "85 euro",
      "90 euro",
      "80 euro",
      "75 euro"
    ],
    "correct": 2,
    "explanation": "Valore iniziale = 100/1,25 = 80 euro.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-024",
    "subject": "logica",
    "topic": "Matematica",
    "question": "In un rapporto 2:3, la somma delle parti è 50. Qual è la parte maggiore?",
    "choices": [
      "35",
      "30",
      "20",
      "25"
    ],
    "correct": 1,
    "explanation": "Cinque quote da 10, la parte maggiore è tre quote.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-025",
    "subject": "logica",
    "topic": "Matematica",
    "question": "Se il 15% di un numero è 45, il numero è:",
    "choices": [
      "300",
      "225",
      "150",
      "450"
    ],
    "correct": 0,
    "explanation": "45/0,15=300.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-026",
    "subject": "logica",
    "topic": "Matematica",
    "question": "La media aritmetica di 4, 6, 10 e 12 è:",
    "choices": [
      "7",
      "9",
      "10",
      "8"
    ],
    "correct": 3,
    "explanation": "La somma è 32, divisa per 4 fa 8.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-027",
    "subject": "logica",
    "topic": "Matematica",
    "question": "La mediana dei valori 3, 9, 4, 8, 5 è:",
    "choices": [
      "6",
      "8",
      "5",
      "4"
    ],
    "correct": 2,
    "explanation": "Ordinando: 3,4,5,8,9; il valore centrale è 5.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-028",
    "subject": "logica",
    "topic": "Matematica",
    "question": "Se 3x+5=20, quanto vale x?",
    "choices": [
      "6",
      "5",
      "3",
      "4"
    ],
    "correct": 1,
    "explanation": "3x=15, quindi x=5.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-029",
    "subject": "logica",
    "topic": "Matematica",
    "question": "Un treno percorre 120 km in 2 ore. La velocità media è:",
    "choices": [
      "60 km/h",
      "40 km/h",
      "80 km/h",
      "100 km/h"
    ],
    "correct": 0,
    "explanation": "Velocità media = distanza/tempo.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-030",
    "subject": "logica",
    "topic": "Matematica",
    "question": "Un impiegato completa 12 pratiche in 3 ore a ritmo costante. Quante in 5 ore?",
    "choices": [
      "15",
      "18",
      "24",
      "20"
    ],
    "correct": 3,
    "explanation": "Quattro pratiche per ora per cinque ore.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-031",
    "subject": "logica",
    "topic": "Matematica",
    "question": "Tre addetti impiegano 8 ore per terminare un lavoro. Con sei addetti ugualmente produttivi, quanto tempo serve?",
    "choices": [
      "6 ore",
      "16 ore",
      "4 ore",
      "2 ore"
    ],
    "correct": 2,
    "explanation": "Doppiare gli addetti dimezza il tempo a produttività costante.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-032",
    "subject": "logica",
    "topic": "Ordinamento",
    "question": "Luigi arriva prima di Marco; Sara arriva dopo Marco. Chi arriva per primo tra i tre?",
    "choices": [
      "Impossibile stabilirlo",
      "Luigi",
      "Marco",
      "Sara"
    ],
    "correct": 1,
    "explanation": "L'ordine è Luigi, Marco, Sara.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-033",
    "subject": "logica",
    "topic": "Ordinamento",
    "question": "Nel torneo A batte B, B batte C e A batte C. Chi non ha vinto alcun incontro tra questi tre?",
    "choices": [
      "C",
      "A",
      "B",
      "A e B"
    ],
    "correct": 0,
    "explanation": "C perde contro entrambi.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-034",
    "subject": "logica",
    "topic": "Ordinamento",
    "question": "Quattro persone sono in fila. Elena è immediatamente prima di Fabio e Fabio è ultimo. In quale posizione si trova Elena?",
    "choices": [
      "Prima",
      "Seconda",
      "Quarta",
      "Terza"
    ],
    "correct": 3,
    "explanation": "Fabio è quarto, Elena immediatamente prima: terza.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-035",
    "subject": "logica",
    "topic": "Ordinamento",
    "question": "La riunione A inizia alle 9:20 e dura 50 minuti; B inizia alle 10:15. Quanti minuti intercorrono tra la fine di A e l'inizio di B?",
    "choices": [
      "10",
      "15",
      "5",
      "0"
    ],
    "correct": 2,
    "explanation": "A termina alle 10:10, B inizia alle 10:15.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-036",
    "subject": "logica",
    "topic": "Spaziale",
    "question": "Ruotando un foglio di 180°, dove si sposta l'angolo in alto a sinistra?",
    "choices": [
      "Rimane fermo",
      "In basso a destra",
      "In alto a destra",
      "In basso a sinistra"
    ],
    "correct": 1,
    "explanation": "La rotazione di mezzo giro scambia alto/basso e sinistra/destra.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-037",
    "subject": "logica",
    "topic": "Spaziale",
    "question": "Su una mappa, cammini 3 km a nord e poi 4 km a est. La distanza in linea retta dalla partenza è:",
    "choices": [
      "5 km",
      "6 km",
      "7 km",
      "12 km"
    ],
    "correct": 0,
    "explanation": "Teorema di Pitagora: √(3²+4²)=5.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-038",
    "subject": "logica",
    "topic": "Spaziale",
    "question": "Un cubo ha quante facce?",
    "choices": [
      "4",
      "8",
      "12",
      "6"
    ],
    "correct": 3,
    "explanation": "Il cubo ha sei facce quadrate.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-039",
    "subject": "logica",
    "topic": "Spaziale",
    "question": "Un orologio analogico segna le 3:00. L'angolo minore tra le lancette è:",
    "choices": [
      "120°",
      "180°",
      "90°",
      "45°"
    ],
    "correct": 2,
    "explanation": "Tre intervalli di un'ora da 30° ciascuno.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-040",
    "subject": "logica",
    "topic": "Spaziale",
    "question": "Una figura viene riflessa rispetto a uno specchio verticale. Quale relazione cambia?",
    "choices": [
      "Il numero di lati",
      "Sinistra e destra",
      "Alto e basso",
      "La dimensione"
    ],
    "correct": 1,
    "explanation": "Una riflessione verticale inverte la direzione orizzontale.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-041",
    "subject": "logica",
    "topic": "Analogie",
    "question": "Libro : leggere = musica : ?",
    "choices": [
      "Ascoltare",
      "Scrivere",
      "Misurare",
      "Stampare"
    ],
    "correct": 0,
    "explanation": "L'analogia lega l'oggetto all'azione percettiva tipica.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-042",
    "subject": "logica",
    "topic": "Analogie",
    "question": "Termometro : temperatura = cronometro : ?",
    "choices": [
      "Peso",
      "Volume",
      "Distanza",
      "Tempo"
    ],
    "correct": 3,
    "explanation": "Entrambi sono strumenti di misura.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-043",
    "subject": "logica",
    "topic": "Analogie",
    "question": "Medico : ospedale = giudice : ?",
    "choices": [
      "Farmacia",
      "Biblioteca",
      "Tribunale",
      "Scuola"
    ],
    "correct": 2,
    "explanation": "Relazione professione-luogo di esercizio tipico.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-044",
    "subject": "logica",
    "topic": "Analogie",
    "question": "Semina : raccolto = studio : ?",
    "choices": [
      "Riposo",
      "Apprendimento",
      "Dimenticanza",
      "Rumore"
    ],
    "correct": 1,
    "explanation": "La seconda parola indica un risultato atteso della prima attività.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-045",
    "subject": "logica",
    "topic": "Serie numeriche",
    "question": "Completa la serie: 3, 7, 11, 15, ...",
    "choices": [
      "19",
      "15",
      "23",
      "27"
    ],
    "correct": 0,
    "explanation": "La successione aumenta ogni volta di 4.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-046",
    "subject": "logica",
    "topic": "Serie numeriche",
    "question": "Completa la serie: 6, 11, 16, 21, ...",
    "choices": [
      "21",
      "31",
      "36",
      "26"
    ],
    "correct": 3,
    "explanation": "La successione aumenta ogni volta di 5.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-047",
    "subject": "logica",
    "topic": "Serie numeriche",
    "question": "Completa la serie: 11, 14, 17, 20, ...",
    "choices": [
      "26",
      "29",
      "23",
      "20"
    ],
    "correct": 2,
    "explanation": "La successione aumenta ogni volta di 3.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-048",
    "subject": "logica",
    "topic": "Serie numeriche",
    "question": "Completa la serie: 7, 13, 19, 25, ...",
    "choices": [
      "43",
      "31",
      "25",
      "37"
    ],
    "correct": 1,
    "explanation": "La successione aumenta ogni volta di 6.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-049",
    "subject": "logica",
    "topic": "Serie numeriche",
    "question": "Completa la serie: 18, 25, 32, 39, ...",
    "choices": [
      "46",
      "39",
      "53",
      "60"
    ],
    "correct": 0,
    "explanation": "La successione aumenta ogni volta di 7.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-050",
    "subject": "logica",
    "topic": "Serie numeriche",
    "question": "Completa la serie: 25, 34, 43, 52, ...",
    "choices": [
      "52",
      "70",
      "79",
      "61"
    ],
    "correct": 3,
    "explanation": "La successione aumenta ogni volta di 9.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-051",
    "subject": "logica",
    "topic": "Serie numeriche",
    "question": "Completa la serie: 2, 13, 24, 35, ...",
    "choices": [
      "57",
      "68",
      "46",
      "35"
    ],
    "correct": 2,
    "explanation": "La successione aumenta ogni volta di 11.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-052",
    "subject": "logica",
    "topic": "Serie numeriche",
    "question": "Completa la serie: 13, 21, 29, 37, ...",
    "choices": [
      "61",
      "45",
      "37",
      "53"
    ],
    "correct": 1,
    "explanation": "La successione aumenta ogni volta di 8.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-053",
    "subject": "logica",
    "topic": "Serie numeriche",
    "question": "Completa la serie: 21, 25, 29, 33, ...",
    "choices": [
      "37",
      "33",
      "41",
      "45"
    ],
    "correct": 0,
    "explanation": "La successione aumenta ogni volta di 4.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-054",
    "subject": "logica",
    "topic": "Serie numeriche",
    "question": "Completa la serie: 5, 17, 29, 41, ...",
    "choices": [
      "41",
      "65",
      "77",
      "53"
    ],
    "correct": 3,
    "explanation": "La successione aumenta ogni volta di 12.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-055",
    "subject": "logica",
    "topic": "Serie numeriche",
    "question": "Completa la serie: 14, 27, 40, 53, ...",
    "choices": [
      "79",
      "92",
      "66",
      "53"
    ],
    "correct": 2,
    "explanation": "La successione aumenta ogni volta di 13.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-056",
    "subject": "logica",
    "topic": "Serie numeriche",
    "question": "Completa la serie: 31, 37, 43, 49, ...",
    "choices": [
      "67",
      "55",
      "49",
      "61"
    ],
    "correct": 1,
    "explanation": "La successione aumenta ogni volta di 6.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-057",
    "subject": "logica",
    "topic": "Serie numeriche",
    "question": "Quale numero segue? 1 - 3 - 9 - 27 - ?",
    "choices": [
      "81",
      "27",
      "84",
      "162"
    ],
    "correct": 0,
    "explanation": "Ogni termine è il precedente moltiplicato per 3.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-058",
    "subject": "logica",
    "topic": "Serie numeriche",
    "question": "Quale numero segue? 2 - 6 - 18 - 54 - ?",
    "choices": [
      "54",
      "165",
      "324",
      "162"
    ],
    "correct": 3,
    "explanation": "Ogni termine è il precedente moltiplicato per 3.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-059",
    "subject": "logica",
    "topic": "Serie numeriche",
    "question": "Quale numero segue? 3 - 9 - 27 - 81 - ?",
    "choices": [
      "246",
      "486",
      "243",
      "81"
    ],
    "correct": 2,
    "explanation": "Ogni termine è il precedente moltiplicato per 3.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-060",
    "subject": "logica",
    "topic": "Serie numeriche",
    "question": "Quale numero segue? 4 - 12 - 36 - 108 - ?",
    "choices": [
      "648",
      "324",
      "108",
      "327"
    ],
    "correct": 1,
    "explanation": "Ogni termine è il precedente moltiplicato per 3.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-061",
    "subject": "logica",
    "topic": "Serie numeriche",
    "question": "Quale numero segue? 2 - 8 - 32 - 128 - ?",
    "choices": [
      "512",
      "128",
      "516",
      "1024"
    ],
    "correct": 0,
    "explanation": "Ogni termine è il precedente moltiplicato per 4.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-062",
    "subject": "logica",
    "topic": "Serie numeriche",
    "question": "Quale numero segue? 3 - 12 - 48 - 192 - ?",
    "choices": [
      "192",
      "772",
      "1536",
      "768"
    ],
    "correct": 3,
    "explanation": "Ogni termine è il precedente moltiplicato per 4.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-063",
    "subject": "logica",
    "topic": "Serie numeriche",
    "question": "Quale numero segue? 4 - 16 - 64 - 256 - ?",
    "choices": [
      "1028",
      "2048",
      "1024",
      "256"
    ],
    "correct": 2,
    "explanation": "Ogni termine è il precedente moltiplicato per 4.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-064",
    "subject": "logica",
    "topic": "Serie numeriche",
    "question": "Quale numero segue? 1 - 5 - 25 - 125 - ?",
    "choices": [
      "1250",
      "625",
      "125",
      "630"
    ],
    "correct": 1,
    "explanation": "Ogni termine è il precedente moltiplicato per 5.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-065",
    "subject": "logica",
    "topic": "Matematica",
    "question": "Un rettangolo misura 8 cm per 5 cm. Qual è il perimetro?",
    "choices": [
      "26 cm",
      "40 cm",
      "13 cm",
      "30 cm"
    ],
    "correct": 0,
    "explanation": "Il perimetro è 2×(8+5)=26 cm.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-066",
    "subject": "logica",
    "topic": "Matematica",
    "question": "Un rettangolo misura 7 cm per 9 cm. Qual è il perimetro?",
    "choices": [
      "63 cm",
      "16 cm",
      "36 cm",
      "32 cm"
    ],
    "correct": 3,
    "explanation": "Il perimetro è 2×(7+9)=32 cm.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-067",
    "subject": "logica",
    "topic": "Matematica",
    "question": "Un rettangolo misura 12 cm per 3 cm. Qual è il perimetro?",
    "choices": [
      "15 cm",
      "34 cm",
      "30 cm",
      "36 cm"
    ],
    "correct": 2,
    "explanation": "Il perimetro è 2×(12+3)=30 cm.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-068",
    "subject": "logica",
    "topic": "Matematica",
    "question": "Un rettangolo misura 14 cm per 6 cm. Qual è il perimetro?",
    "choices": [
      "44 cm",
      "40 cm",
      "84 cm",
      "20 cm"
    ],
    "correct": 1,
    "explanation": "Il perimetro è 2×(14+6)=40 cm.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-069",
    "subject": "logica",
    "topic": "Matematica",
    "question": "Un rettangolo misura 9 cm per 11 cm. Qual è il perimetro?",
    "choices": [
      "40 cm",
      "99 cm",
      "20 cm",
      "44 cm"
    ],
    "correct": 0,
    "explanation": "Il perimetro è 2×(9+11)=40 cm.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-070",
    "subject": "logica",
    "topic": "Matematica",
    "question": "Un rettangolo misura 17 cm per 4 cm. Qual è il perimetro?",
    "choices": [
      "68 cm",
      "21 cm",
      "46 cm",
      "42 cm"
    ],
    "correct": 3,
    "explanation": "Il perimetro è 2×(17+4)=42 cm.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-071",
    "subject": "logica",
    "topic": "Matematica",
    "question": "Un rettangolo misura 15 cm per 8 cm. Qual è il perimetro?",
    "choices": [
      "23 cm",
      "50 cm",
      "46 cm",
      "120 cm"
    ],
    "correct": 2,
    "explanation": "Il perimetro è 2×(15+8)=46 cm.",
    "source": "original-authored",
    "verified": false
  },
  {
    "id": "lg-072",
    "subject": "logica",
    "topic": "Matematica",
    "question": "Un rettangolo misura 18 cm per 7 cm. Qual è il perimetro?",
    "choices": [
      "54 cm",
      "50 cm",
      "126 cm",
      "25 cm"
    ],
    "correct": 1,
    "explanation": "Il perimetro è 2×(18+7)=50 cm.",
    "source": "original-authored",
    "verified": false
  }
]);
