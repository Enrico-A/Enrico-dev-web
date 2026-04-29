# Enrico Dev Web

Portfolio personale sviluppato come single page application frontend per presentare profilo, competenze, servizi, progetti e canali di contatto di Enrico Arfini.

Il progetto e' pensato per una prima pubblicazione in produzione su Vercel, con build statica generata da Vite.

## Stack

- React 19
- TypeScript
- Vite
- React Router
- React Hook Form
- Tailwind CSS
- Font Awesome
- ESLint

## Funzionalita principali

- Home page con hero, valore professionale, tecnologie e progetti in evidenza.
- Pagine dedicate a profilo, servizi, portfolio e contatti.
- Routing client side con pagina 404.
- Layout responsive.
- Supporto multilingua tramite dizionario locale.
- Form contatti predisposto per invio verso una futura API pubblica.
- Pagine informative privacy e cookie.

## Struttura cartelle

```text
public/              Asset statici serviti direttamente
src/assets/          Immagini e asset importati dall'app
src/components/      Componenti riutilizzabili per le sezioni del sito
src/email/           Helper frontend e template predisposti per il contatto
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

Il progetto non richiede variabili ambiente obbligatorie per essere avviato.

Per collegare il form contatti a una API pubblica, creare un file `.env.local` partendo da `.env.example`:

```bash
VITE_CONTACT_API_URL=https://example.com/api/contact
```

`VITE_CONTACT_API_URL` deve contenere solo l'URL pubblico dell'endpoint contatti. Le variabili con prefisso `VITE_` vengono esposte al bundle frontend, quindi non devono contenere segreti.

Non inserire nel frontend credenziali email, password, token privati o variabili come `EMAIL_USER`, `EMAIL_PASS`, `SMTP_PASS`, `SMTP_HOST` con dati sensibili.

## Nota su form contatti e API serverless

Il form contatti e' predisposto per chiamare una futura API serverless tramite `VITE_CONTACT_API_URL`.

Le credenziali email devono restare solo lato server, per esempio dentro le variabili ambiente della funzione serverless su Vercel o Netlify. Nodemailer non deve essere usato nel client React e non deve essere incluso nel bundle frontend.

Se `VITE_CONTACT_API_URL` non e' configurata, il form mantiene un comportamento dimostrativo lato client.

## Deploy su Vercel

1. Pubblicare il repository su GitHub.
2. Aprire Vercel e scegliere `Add New...` > `Project`.
3. Importare il repository GitHub.
4. Lasciare il preset framework su `Vite`.
5. Verificare i comandi:
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Aggiungere eventuali variabili ambiente pubbliche, come `VITE_CONTACT_API_URL`, solo se gia' esiste una API contatti.
7. Avviare il deploy.

Non serve un `vercel.json` per questa configurazione: Vercel riconosce Vite e pubblica la cartella `dist/`.

## Deploy su Netlify

Netlify puo' essere usato come target secondario con una configurazione equivalente:

- Build command: `npm run build`
- Publish directory: `dist`

Se si aggiunge `VITE_CONTACT_API_URL`, configurarla nelle environment variables del sito Netlify. Anche su Netlify non inserire credenziali email nel frontend.

## Checklist pre-pubblicazione

- Eseguire `npm install` se le dipendenze non sono gia' installate.
- Eseguire `npm run lint`.
- Eseguire `npm run build`.
- Verificare la build con `npm run preview`.
- Controllare che `.env.local` non venga committato.
- Configurare `VITE_CONTACT_API_URL` solo se l'endpoint contatti pubblico esiste.
- Tenere tutte le credenziali email esclusivamente lato server.
