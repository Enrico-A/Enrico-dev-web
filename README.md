# Enrico Dev Web

Portfolio personale sviluppato come single page application frontend per presentare profilo, competenze, servizi, progetti e canali di contatto di Enrico Arfini.

Il progetto e' pensato per una prima pubblicazione in produzione su Vercel, con build statica generata da Vite.

## Stack

- React 19
- TypeScript
- Vite
- React Router
- React Hook Form
- Nodemailer
- Tailwind CSS
- Font Awesome
- ESLint

## Funzionalita principali

- Home page con hero, valore professionale, tecnologie e progetti in evidenza.
- Pagine dedicate a profilo, servizi, portfolio e contatti.
- Routing client side con pagina 404.
- Layout responsive.
- Supporto multilingua tramite dizionario locale.
- Form contatti collegato a una API serverless Vercel per invio email.
- Pagine informative privacy e cookie.

## Struttura cartelle

```text
public/              Asset statici serviti direttamente
api/                 Vercel Serverless Functions
src/assets/          Immagini e asset importati dall'app
src/components/      Componenti riutilizzabili per le sezioni del sito
src/email/           Helper frontend per inviare il form contatti
src/i18n/            Traduzioni e contesto lingua
src/layout/          Header, footer e layout principale
src/pages/           Pagine della SPA
src/routes/          Configurazione delle route
src/styles/          Stili globali condivisi
```

## Prerequisiti

- Node.js compatibile con le versioni richieste da Vite e React.
- npm, incluso con Node.js.

## Installazione

```bash
npm install
```

## Avvio locale

```bash
npm run dev
```

Vite avvia il server di sviluppo e mostra l'URL locale nel terminale.

## Build produzione

```bash
npm run build
```

Il comando esegue il controllo TypeScript e genera la build statica nella cartella `dist/`.

## Preview produzione

```bash
npm run preview
```

Usare questo comando dopo `npm run build` per verificare localmente la build di produzione.

## Lint

```bash
npm run lint
```

Il comando e' disponibile nel progetto e usa la configurazione ESLint presente in `eslint.config.js`.

## Variabili ambiente

Il frontend non richiede variabili ambiente pubbliche per inviare il form contatti: chiama direttamente `POST /api/send-email`.

La serverless function richiede invece queste variabili solo lato server:

```bash
EMAIL_USER=
EMAIL_PASS=
EMAIL_TO=
```

- `EMAIL_USER`: account Gmail usato come mittente tecnico SMTP.
- `EMAIL_PASS`: Gmail App Password dell'account SMTP.
- `EMAIL_TO`: indirizzo destinatario dei messaggi del form.

Non usare prefissi `VITE_` per queste variabili: le variabili `VITE_*` vengono esposte al bundle frontend. Non inserire credenziali email, password, token privati o valori SMTP dentro `src/`, HTML, CSS o file pubblici.

## API contatti

Endpoint:

```text
POST /api/send-email
```

Payload JSON:

```json
{
  "name": "Nome Cognome",
  "email": "utente@example.com",
  "subject": "Oggetto",
  "message": "Messaggio del form",
  "website": ""
}
```

Risposta positiva:

```json
{ "success": true, "message": "Messaggio inviato correttamente" }
```

Risposta di errore:

```json
{ "success": false, "message": "Messaggio non inviato" }
```

La function valida i dati lato server, accetta solo `POST`, usa Gmail SMTP con `smtp.gmail.com:587` e non invia dettagli sensibili degli errori SMTP al client. Include anche un campo honeypot anti-spam (`website`) e un rate limit in memoria di 5 richieste ogni 15 minuti per IP.

Il rate limit in memoria e' una protezione base: nelle serverless functions puo' azzerarsi tra cold start o istanze diverse. Per produzione ad alto traffico, aggiungere Vercel Firewall, rate limiting persistente con Redis/KV o una verifica CAPTCHA/Turnstile lato server.

## Gmail App Password

`EMAIL_PASS` non e' la password normale dell'account Gmail. Deve essere una App Password generata da Google dopo aver attivato la verifica in due passaggi sull'account.

Conservare `EMAIL_PASS` solo nelle variabili ambiente locali o della piattaforma di deploy. Non committare `.env.local`, screenshot, log o note contenenti credenziali reali. Se la App Password viene esposta, revocarla subito dall'account Google e generarne una nuova.

## Autenticazione email

Per migliorare recapito e ridurre falsificazioni, configurare i record DNS del dominio usato per la posta:

- SPF: autorizza i server che possono inviare email per il dominio.
- DKIM: firma crittograficamente le email in uscita.
- DMARC: definisce cosa fare quando SPF/DKIM falliscono e abilita report di abuso.

Se `EMAIL_USER` e' un indirizzo Gmail personale, Google gestisce parte dell'autenticazione del proprio dominio. Se invece si usa un indirizzo con dominio personalizzato, configurare SPF, DKIM e DMARC nel provider DNS o in Google Workspace prima della produzione.

## Deploy su Vercel

1. Pubblicare il repository su GitHub.
2. Aprire Vercel e scegliere `Add New...` > `Project`.
3. Importare il repository GitHub.
4. Lasciare il preset framework su `Vite`.
5. Verificare i comandi:
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. In Vercel aprire `Project Settings` > `Environment Variables`.
7. Aggiungere `EMAIL_USER`, `EMAIL_PASS` ed `EMAIL_TO` negli ambienti necessari, per esempio Production e Preview.
8. Salvare e avviare un nuovo deploy.

Non serve un `vercel.json` per questa configurazione: Vercel riconosce Vite e pubblica la cartella `dist/`.

## Deploy su Netlify

Netlify puo' essere usato come target secondario con una configurazione equivalente:

- Build command: `npm run build`
- Publish directory: `dist`

La function `api/send-email.ts` e' pensata per Vercel. Per Netlify serve una function equivalente nel formato previsto da Netlify, mantenendo comunque le credenziali solo lato server.

## Checklist pre-pubblicazione

- Eseguire `npm install` se le dipendenze non sono gia' installate.
- Eseguire `npm run lint`.
- Eseguire `npm run build`.
- Verificare la build con `npm run preview`.
- Controllare che `.env.local` non venga committato.
- Configurare `EMAIL_USER`, `EMAIL_PASS` ed `EMAIL_TO` su Vercel prima del deploy produzione.
- Verificare SPF, DKIM e DMARC del dominio email usato in produzione.
- Tenere tutte le credenziali email esclusivamente lato server.
