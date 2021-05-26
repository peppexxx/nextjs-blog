---
title: 'Two Forms of Pre-rendering'
date: '2020-01-01'
---

Next.js ha due forme di pre-rendering: **Generazione statica** e **Rendering lato server**.
La differenza è **quando** genera l'HTML per una pagina.

- **Generazione statica** è il metodo di pre-rendering che genera l'HTML a **Build Time**.
   L'HTML pre-rendering è quindi _Reused_ su ciascuna richiesta.

- **Il Rendering lato server** è il metodo di pre-rendering che genera l'HTML su **ogni richiesta**.

È importante sottolineare che, next.js ti consente di **Scegliere** Quale modulo di pre-rendering da utilizzare per ogni pagina.
È possibile creare un'app "ibrida" next.js utilizzando la generazione statica per la maggior parte delle pagine 
e utilizzando il rendering lato server per gli altri.