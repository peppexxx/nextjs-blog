---
title: 'When to Use Static Generation v.s. Server-side Rendering'
date: '2020-01-02'
---

Si consiglia di utilizzare **Generazione statica** (con e senza dati) quando possibile perché la tua pagina può essere costruita una volta 
e servita da CDN, il che rende molto più veloce di avere un server rendering della pagina su ogni richiesta.

È possibile utilizzare la generazione statica per molti tipi di pagine, incluso:

- Pagine di marketing.
- I post del blog
- E-elenchi di prodotti E-Commerce
- Aiuto e documentazione


Dovresti chiederti: "Posso pre-pre-rendering questa pagina **avanti** della richiesta di un utente?"
Se la risposta è sì, dovresti scegliere la generazione statica.

D'altra parte, la generazione statica **non** è una buona idea se non riesci a pre-rendering di una pagina in vista della richiesta di un utente.
Forse la tua pagina mostra i dati aggiornati frequentemente e il contenuto della pagina cambia su ogni richiesta.

In tal caso, è possibile utilizzare **rendering lato server**. Sarà più lento, ma la pagina pre-rendering sarà sempre aggiornata.
Oppure puoi saltare il pre-rendering e utilizzare JavaScript del lato client per popolare i dati.