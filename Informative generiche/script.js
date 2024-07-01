//le API sono librerie esterne che ci mettono in contatto con server e client tramite delle chiamate con protocollo http(request)

//APPLICATION PROGRAMMING INTERFACE - UN INSIEME DI PROCEDURE RESE DISPONIBILI PER SVOLGERE UN INSIEME COERENTE DI OPERAZIONI NASCONDENDO PARTE DELLA COMPLESSITà SOTTOSTANTE

//le http request sono composte da 4 parti: riga di richiesta, header, riga vuota, body(corpo della richiesta)

//la riga di richiesta contiene la uri(unified resource identifier, il nome del server che voglio contattare) e il metodo (GET, POST, PUT,PATCH, DELETE)

//HTTP - header, uno spazio di lunghezza variabile che contiene informazioni sulle proprietà in formato key-value: user-agent(una stringa identificativa del browser), accept(una lista di file che il client si aspetta), content-type( il tipo di contenuto di una richiesta), content-length(una lunghezza di un contenuto, in modo che il server possa verificare di averla ricevuta correttamente).

//HTTP response: sono i codici di stato della risposta, i più frequenti sono: 200(ok),301(redirect/muved permanently - la risorsa richiesta è stata spostata in modo permanente), 400(bad request), 404(not found), 500(internal server error). generalmente i codici di rispodta sono 1xx - messaggi info, 2xx - messaggi di successo, 3xx - messaggi di redirect, 4xx - messaggi di errore(client), 5xx - messaggi di errore(server).

//AJAX - AJAX sta per Asynchronous JavaScript e XML. AJAX sta per 'risposta asincrona' e 'XML'. Permette di fare chiamate asincrone e di gestire la risposta in modo asincrono. Cosa intendiamo per asincrono? Mentre in un processo sincrono dove il processo A fa una richiesta a B e deve attendere la sua risposta prima di continuare a lavorare, in un processo asincrono il processo A non deve attendere la risposta di B per continuare a lavorare.

//cos'è un XML? un file di testo che contiene informazioni in un formato di markup:

<utenti>
  <utente anni="30">
    <nome>Mario</nome>
    <cognome>Bros</cognome>
    <indirizzo>Via Roma</indirizzo>
  </utente>
  <utente anni="32">
    <nome>Luigi</nome>
    <cognome>Bros</cognome>
    <indirizzo>Via Dante</indirizzo>
  </utente>
</utenti>

//oggi per scrivere questi dati si usano i file json in formato OOP
{
  "utenti": [
    {
      "annI": "30",
      "nome": "Mario",
      "cognome": "Bros",
      "indirizzo": "Via Roma"
    },
    {
      "annI": "32",
      "nome": "Luigi",
      "cognome": "Bros",
      "indirizzo": "Via Dante"
    }
  ]
}

