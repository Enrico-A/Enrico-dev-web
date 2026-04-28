export const languages = ['it', 'en'] as const

export type Language = (typeof languages)[number]

export const translations = {
  it: {
    meta: {
      title: 'Enrico Dev Web | Full-stack developer',
      description:
        'Portfolio di Enrico Dev Web, full-stack developer per web app, gestionali, CRM e integrazioni frontend/backend.',
    },
    common: {
      contactMe: 'Contattami',
      viewProjects: 'Vedi progetti',
      viewAll: 'Vedi tutti',
      techStack: 'Stack',
      technologies: 'Tecnologie',
    },
    header: {
      homeLabel: 'Enrico Dev Web home',
      openMenu: 'Apri menu di navigazione',
      closeMenu: 'Chiudi menu di navigazione',
      navLabel: 'Navigazione principale',
      languageLabel: 'Seleziona lingua',
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        portfolio: 'Portfolio',
        contact: 'Contact',
      },
    },
    footer: {
      copy: 'Copyright',
      policiesLabel: 'Link policy',
      socialLabel: 'Link social',
    },
    home: {
      hero: {
        stackLabel: 'Stack principale',
        title: 'Full-stack developer per web app solide, scalabili e curate.',
        subtitle:
          'Progetto e sviluppo applicazioni web, gestionali, CRM e integrazioni frontend/backend con un approccio pragmatico, moderno e orientato al risultato.',
      },
      value: {
        kicker: 'Valore',
        title: 'Dal frontend al backend, con una visione completa del prodotto.',
        cards: [
          {
            icon: '01',
            title: 'Web app moderne',
            description:
              'Interfacce React e Angular responsive, veloci e pensate per flussi utente reali.',
          },
          {
            icon: '02',
            title: 'Soluzioni full-stack',
            description:
              'Backend, API, database e frontend integrati in architetture pulite e mantenibili.',
          },
          {
            icon: '03',
            title: 'Integrazioni e gestionali',
            description:
              'CRM, applicazioni enterprise e integrazioni tra sistemi con attenzione a dati e processi.',
          },
        ],
      },
      tech: {
        kicker: 'Tech stack',
        title: 'Tecnologie principali',
        label: 'Tecnologie principali',
        technologies: [
          'React',
          'TypeScript',
          'Angular',
          '.NET / C#',
          'Node.js',
          'PHP',
          'PostgreSQL',
          'MySQL',
          'Azure',
        ],
      },
      featured: {
        kicker: 'Progetti',
        title: 'Progetti in evidenza',
        cardLink: 'Vai al portfolio',
        projects: [
          {
            title: 'AlphaShop Web App',
            description:
              'Piattaforma e-commerce con dashboard operativa, gestione catalogo e flussi checkout.',
            stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
          },
          {
            title: 'CRM Enterprise',
            description:
              'Sistema CRM modulare per team sales e support, con ruoli, pipeline e reportistica.',
            stack: ['Angular', '.NET', 'C#', 'SQL'],
          },
          {
            title: 'Healthcare Collaboration Platform',
            description:
              'Applicazione collaborativa per coordinare dati, attività e comunicazioni tra reparti.',
            stack: ['React', 'Azure', '.NET', 'MySQL'],
          },
        ],
      },
      cta: {
        kicker: 'Collaboriamo',
        title: "Hai un progetto web, un gestionale o un'integrazione da realizzare?",
        body: 'Possiamo partire da obiettivi, vincoli tecnici e priorità operative per costruire una soluzione concreta e mantenibile.',
      },
    },
    about: {
      hero: {
        kicker: 'About',
        title: 'Full-stack developer con esperienza su web app, gestionali e CRM.',
        body: 'Aiuto aziende e startup a trasformare processi, flussi operativi e idee di prodotto in applicazioni web concrete, manutenibili e integrate con i sistemi esistenti.',
      },
      story: {
        kicker: 'Chi sono',
        title: 'Un profilo tecnico, concreto e abituato a lavorare sui processi.',
        paragraphs: [
          'Sono un full-stack developer con circa 7 anni di esperienza nello sviluppo software. Ho lavorato su gestionali, CRM, web app e applicazioni enterprise, seguendo sia la parte frontend sia la parte backend.',
          'Nel tempo ho usato tecnologie come React, TypeScript, Angular, .NET, C#, PHP, Node.js e database relazionali come PostgreSQL, MySQL e SQL Server. Mi trovo bene nei progetti in cui bisogna capire il processo, tradurlo in funzionalità chiare e mantenere il codice leggibile nel tempo.',
          'Il valore che porto è un approccio pragmatico: ascolto il contesto, individuo i vincoli tecnici e costruisco soluzioni che possano evolvere senza diventare difficili da gestire.',
        ],
      },
      experience: {
        kicker: 'Esperienza',
        title: 'Esperienze su prodotti interni, CRM, enterprise e healthcare.',
        items: [
          {
            context: 'Electronic Center',
            role: 'Sviluppo software e manutenzione gestionale',
            description:
              'Esperienza su applicazioni interne e strumenti operativi, con focus su manutenzione, evoluzione funzionale e interfacce per processi aziendali.',
            technologies: ['.NET', 'WPF', 'MySQL', 'HTML', 'JavaScript', 'Canvas'],
            highlights: [
              'Sviluppo e manutenzione di un gestionale interno.',
              'Lavoro su funzionalità desktop con interfacce WPF.',
              'Sviluppo frontend per giochi online con HTML, JavaScript e Canvas.',
            ],
          },
          {
            context: 'Sintesi Software / progetto enterprise',
            role: 'Full-stack developer su CRM e processi aziendali',
            description:
              'Attività su sistemi gestionali e CRM, con attenzione ai flussi interni, all’integrazione tra sistemi e alla gestione di dati aziendali.',
            technologies: ['.NET', 'C#', 'Database relazionali', 'Frontend web'],
            highlights: [
              'Sviluppo su CRM e processi aziendali.',
              'Integrazione con sistemi gestionali esistenti.',
              'Lavoro su flussi legati a produzione, magazzino e processi interni.',
            ],
          },
          {
            context: 'Healthcare startup',
            role: 'Sviluppo web app in ambito healthcare',
            description:
              'Sviluppo di una piattaforma orientata alla collaborazione professionale in ambito sanitario, con gestione di processi specialistici e condivisione di materiale clinico anonimizzato.',
            technologies: ['Web app', 'Healthcare', 'DICOM', 'Frontend/backend'],
            highlights: [
              'Collaborazione tra medici, chirurghi vascolari e specialisti.',
              'Gestione e condivisione di immagini DICOM anonimizzate.',
              'Applicazione orientata a processi specialistici e collaborazione professionale.',
            ],
          },
        ],
      },
      skills: {
        kicker: 'Skills',
        title: 'Competenze tecniche e metodo di lavoro',
        groups: [
          {
            title: 'Frontend',
            skills: ['React', 'TypeScript', 'Angular', 'HTML', 'CSS', 'JavaScript'],
          },
          {
            title: 'Backend',
            skills: ['.NET', 'C#', 'PHP', 'Node.js', 'API', 'Integrazioni'],
          },
          {
            title: 'Database',
            skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'Database relazionali'],
          },
          {
            title: 'Cloud & Tools',
            skills: ['Azure', 'Git', 'Vite', 'Deployment', 'Debugging'],
          },
          {
            title: 'Soft skills / metodo',
            skills: ['Analisi processi', 'Problem solving', 'Manutenibilità', 'Collaborazione'],
          },
        ],
      },
      cta: {
        kicker: 'Prossimo step',
        title: 'Vuoi vedere come applico queste competenze nei progetti?',
        body: "Dai un occhio al portfolio oppure contattami per parlare del tuo prossimo gestionale, CRM o progetto web.",
      },
    },
    services: {
      hero: {
        kicker: 'Services',
        title: 'Sviluppo siti, web app, gestionali e integrazioni su misura.',
        body: 'Aiuto aziende, startup, professionisti e agenzie a costruire soluzioni web concrete: dal frontend al backend, fino a database, API e manutenzione.',
      },
      sections: {
        servicesKicker: 'Cosa posso fare',
        servicesTitle: 'Servizi full-stack per prodotti digitali e processi aziendali.',
        processKicker: 'Come lavoro',
        processTitle: 'Un processo semplice, trasparente e orientato alla consegna.',
        fitKicker: 'Per chi',
        fitTitle: 'Posso essere utile se cerchi competenza tecnica e visione pratica.',
      },
      services: [
        {
          title: 'Sviluppo Frontend',
          description:
            'Realizzo interfacce moderne, responsive e integrate con API, pensate per essere chiare, veloci e facili da evolvere.',
          points: [
            'UI responsive per desktop e mobile',
            'Componenti riutilizzabili e scalabili',
            'Integrazione API e gestione stati applicativi',
          ],
          technologies: ['React', 'Angular', 'Vue.js', 'Next.js', 'TypeScript', 'JavaScript'],
        },
        {
          title: 'Sviluppo Backend',
          description:
            'Sviluppo API, logica business e servizi applicativi per collegare dati, utenti e processi in modo affidabile.',
          points: [
            'API REST per web app e gestionali',
            'Autenticazione e autorizzazione',
            'Logica business e integrazione con database',
          ],
          technologies: ['.NET / C#', 'Node.js', 'PHP', 'Python', 'Java', 'API REST'],
        },
        {
          title: 'Sviluppo Full-stack',
          description:
            'Creo applicazioni complete, dalla struttura frontend fino al backend, con attenzione a flussi operativi e manutenibilità.',
          points: [
            'Web app complete e dashboard operative',
            'Gestionali e CRM su misura',
            'Integrazione coerente tra frontend e backend',
          ],
          technologies: ['Web app', 'Dashboard', 'Gestionali', 'CRM', 'Frontend/backend'],
        },
        {
          title: 'Database & Integrazioni',
          description:
            'Progetto strutture dati e integrazioni tra sistemi, servizi esterni e applicazioni già presenti in azienda.',
          points: [
            'Modellazione dati relazionali',
            'Integrazione con servizi esterni',
            'Supporto a processi e flussi aziendali',
          ],
          technologies: ['PostgreSQL', 'MySQL', 'SQL Server', 'Modellazione dati'],
        },
        {
          title: 'Siti portfolio e landing page',
          description:
            'Sviluppo siti professionali e landing page essenziali, veloci e orientate alla conversione.',
          points: [
            'Siti professionali e pagine di presentazione',
            'Form contatti e CTA chiare',
            'SEO tecnica base e deploy',
          ],
          technologies: ['Landing page', 'Portfolio', 'Form contatti', 'SEO base', 'Deploy'],
        },
      ],
      process: [
        {
          title: 'Analisi esigenza',
          description:
            'Parto da obiettivi, vincoli, utenti e processi per capire cosa serve davvero.',
        },
        {
          title: 'Progettazione soluzione',
          description:
            'Definisco struttura, tecnologie e priorità per arrivare a una soluzione chiara.',
        },
        {
          title: 'Sviluppo iterativo',
          description:
            'Procedo per step verificabili, con feedback continui e attenzione alla qualità.',
        },
        {
          title: 'Consegna e supporto',
          description:
            'Preparo il rilascio e posso supportare evoluzioni, manutenzione e miglioramenti.',
        },
      ],
      usefulFor: [
        'Aziende che vogliono modernizzare strumenti interni.',
        'Professionisti che vogliono una presenza online chiara e credibile.',
        'Startup che devono validare una web app o un prodotto digitale.',
        'Team che hanno bisogno di supporto frontend, backend o integrazioni.',
      ],
      cta: {
        kicker: 'Parliamone',
        title: 'Hai bisogno di sviluppare o migliorare una soluzione web?',
        body: 'Raccontami il contesto: possiamo capire insieme priorità, fattibilità e prossimi step.',
      },
    },
    portfolio: {
      filtersLabel: 'Filtra progetti',
      liveLabel: 'Progetti filtrati',
      unavailable: 'non disponibile',
      projectLinkLabel: 'del progetto',
      detailsLabel: 'Dettagli',
      hero: {
        kicker: 'Portfolio',
        title: 'Progetti, case study e competenze applicate a problemi reali.',
        body: 'Una selezione di web app, CRM, integrazioni e interfacce sviluppate con attenzione a processi, dati, usabilità e manutenibilità.',
      },
      section: {
        kicker: 'Projects',
        title: 'Progetti in evidenza',
      },
      cta: {
        kicker: 'Nuovo progetto',
        title: "Vuoi discutere una web app, un gestionale o un'integrazione?",
        body: 'Raccontami obiettivo, contesto e vincoli tecnici: possiamo capire insieme la soluzione più adatta.',
      },
      filters: [
        { id: 'all', label: 'Tutti' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'fullstack', label: 'Full-stack' },
        { id: 'backend', label: 'Backend' },
        { id: 'enterprise', label: 'Enterprise' },
        { id: 'healthcare', label: 'Healthcare' },
      ],
      projects: [
        {
          title: 'AlphaShop Web App',
          type: 'Full-stack / Web App',
          description:
            'Applicazione web per gestione articoli, ricerca prodotti, modifica dati e interazione con API backend.',
          stack: ['Angular', 'TypeScript', '.NET', 'SQL Server'],
          highlights: [
            'Gestione articoli e dati prodotto.',
            'Ricerca e modifica informazioni da interfaccia web.',
            'Interazione con API backend.',
          ],
          status: 'Demo',
          filters: ['fullstack', 'frontend', 'backend'],
        },
        {
          title: 'CRM Enterprise / Process Management',
          type: 'Enterprise / Backend / Integration',
          description:
            'Soluzione gestionale/CRM per processi aziendali, flussi interni, dati di produzione e integrazione con sistemi esistenti.',
          stack: ['.NET', 'C#', 'Database relazionali', 'API'],
          highlights: [
            'Supporto a processi aziendali e flussi interni.',
            'Gestione dati legati alla produzione.',
            'Integrazione con sistemi esistenti.',
          ],
          status: 'Case study',
          filters: ['enterprise', 'backend'],
        },
        {
          title: 'Healthcare Collaboration Platform',
          type: 'Healthcare / Web App',
          description:
            'Piattaforma web per collaborazione tra specialisti, condivisione di immagini DICOM anonimizzate e supporto a processi clinici specialistici.',
          stack: ['Web App', 'DICOM', 'Backend API', 'Database'],
          highlights: [
            'Collaborazione tra specialisti.',
            'Condivisione di immagini DICOM anonimizzate.',
            'Supporto a processi clinici specialistici.',
          ],
          status: 'In sviluppo',
          filters: ['healthcare', 'fullstack', 'backend'],
        },
        {
          title: 'Personal Portfolio Website',
          type: 'Frontend / Portfolio',
          description:
            'Sito portfolio personale sviluppato con React, TypeScript e Vite, orientato a performance, responsive design e presentazione professionale.',
          stack: ['React', 'TypeScript', 'Vite', 'CSS'],
          highlights: [
            'Routing e layout responsive.',
            'Design system leggero e componenti riutilizzabili.',
            'Presentazione professionale di servizi e competenze.',
          ],
          status: 'In sviluppo',
          filters: ['frontend'],
          githubUrl: 'https://github.com/Enrico-A/Enrico-dev-web',
        },
      ],
    },
    contact: {
      emailSubject: 'Nuova richiesta dal sito web',
      hero: {
        kicker: 'Contact',
        title: 'Parliamo del tuo progetto web.',
        body: 'Hai bisogno di una web app, un gestionale, un CRM o un supporto tecnico frontend/backend? Scrivimi qualche dettaglio e ti ricontatterò.',
      },
      info: {
        ariaLabel: 'Informazioni di contatto',
        kicker: 'Info',
        title: 'Disponibile per collaborazioni freelance',
        email: 'Email',
        availability: 'Disponibilità',
        availabilityText: 'Progetti freelance, consulenza e supporto tecnico.',
        location: 'Località',
        locationText: 'Italia / remoto',
      },
      form: {
        name: 'Nome',
        email: 'Email',
        message: 'Messaggio',
        privacy: 'Accetto di essere ricontattato in merito alla mia richiesta.',
        submitting: 'Invio in corso',
        submit: 'Invia messaggio',
        success: 'Messaggio inviato correttamente. Ti ricontatterò appena possibile.',
        error: 'Qualcosa non ha funzionato. Riprova tra poco.',
        validation: {
          nameRequired: 'Il nome è obbligatorio.',
          nameMin: 'Il nome deve contenere almeno 2 caratteri.',
          emailRequired: 'L’email è obbligatoria.',
          emailPattern: 'Inserisci un indirizzo email valido.',
          messageRequired: 'Il messaggio è obbligatorio.',
          messageMin: 'Il messaggio deve contenere almeno 10 caratteri.',
          privacyRequired: 'Devi accettare per inviare la richiesta.',
        },
      },
    },
    legal: {
      privacy: {
        eyebrow: 'Informativa',
        title: 'Privacy policy',
        body: "Pagina predisposta per l'informativa privacy del sito portfolio.",
      },
      cookies: {
        eyebrow: 'Preferenze',
        title: 'Cookie policy',
        body: "Pagina predisposta per spiegare l'uso dei cookie e delle preferenze tecniche del sito.",
      },
    },
    notFound: {
      title: 'Pagina non trovata',
      body: 'La pagina richiesta non esiste.',
      link: 'Torna alla Home',
    },
  },
  en: {
    meta: {
      title: 'Enrico Dev Web | Full-stack developer',
      description:
        'Portfolio of Enrico Dev Web, full-stack developer for web apps, management systems, CRM platforms and frontend/backend integrations.',
    },
    common: {
      contactMe: 'Contact me',
      viewProjects: 'View projects',
      viewAll: 'View all',
      techStack: 'Stack',
      technologies: 'Technologies',
    },
    header: {
      homeLabel: 'Enrico Dev Web home',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
      navLabel: 'Main navigation',
      languageLabel: 'Select language',
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        portfolio: 'Portfolio',
        contact: 'Contact',
      },
    },
    footer: {
      copy: 'Copyright',
      policiesLabel: 'Policy links',
      socialLabel: 'Social links',
    },
    home: {
      hero: {
        stackLabel: 'Primary stack',
        title: 'Full-stack developer for solid, scalable and polished web apps.',
        subtitle:
          'I design and build web applications, management tools, CRM systems and frontend/backend integrations with a pragmatic, modern and results-focused approach.',
      },
      value: {
        kicker: 'Value',
        title: 'From frontend to backend, with a complete product perspective.',
        cards: [
          {
            icon: '01',
            title: 'Modern web apps',
            description:
              'Responsive React and Angular interfaces built around real user workflows.',
          },
          {
            icon: '02',
            title: 'Full-stack solutions',
            description:
              'Backend, APIs, databases and frontend layers integrated into clean, maintainable architectures.',
          },
          {
            icon: '03',
            title: 'Integrations and business tools',
            description:
              'CRM platforms, enterprise apps and system integrations with careful attention to data and processes.',
          },
        ],
      },
      tech: {
        kicker: 'Tech stack',
        title: 'Core technologies',
        label: 'Core technologies',
        technologies: [
          'React',
          'TypeScript',
          'Angular',
          '.NET / C#',
          'Node.js',
          'PHP',
          'PostgreSQL',
          'MySQL',
          'Azure',
        ],
      },
      featured: {
        kicker: 'Projects',
        title: 'Featured projects',
        cardLink: 'Go to portfolio',
        projects: [
          {
            title: 'AlphaShop Web App',
            description:
              'E-commerce platform with an operational dashboard, catalog management and checkout workflows.',
            stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
          },
          {
            title: 'CRM Enterprise',
            description:
              'Modular CRM for sales and support teams, with roles, pipelines and reporting.',
            stack: ['Angular', '.NET', 'C#', 'SQL'],
          },
          {
            title: 'Healthcare Collaboration Platform',
            description:
              'Collaborative application to coordinate data, activities and communication across departments.',
            stack: ['React', 'Azure', '.NET', 'MySQL'],
          },
        ],
      },
      cta: {
        kicker: "Let's work together",
        title: 'Do you have a web project, management tool or integration to build?',
        body: 'We can start from goals, technical constraints and operational priorities to build a concrete, maintainable solution.',
      },
    },
    about: {
      hero: {
        kicker: 'About',
        title: 'Full-stack developer with experience on web apps, business tools and CRM systems.',
        body: 'I help companies and startups turn processes, operational workflows and product ideas into concrete, maintainable web applications integrated with existing systems.',
      },
      story: {
        kicker: 'About me',
        title: 'A practical technical profile, used to working around real processes.',
        paragraphs: [
          'I am a full-stack developer with around 7 years of experience in software development. I have worked on management systems, CRM platforms, web apps and enterprise applications, covering both frontend and backend work.',
          'Over time I have used technologies such as React, TypeScript, Angular, .NET, C#, PHP, Node.js and relational databases including PostgreSQL, MySQL and SQL Server. I work well on projects where the process needs to be understood, translated into clear features and kept readable over time.',
          'The value I bring is a pragmatic approach: I listen to the context, identify technical constraints and build solutions that can evolve without becoming hard to manage.',
        ],
      },
      experience: {
        kicker: 'Experience',
        title: 'Experience across internal products, CRM, enterprise and healthcare.',
        items: [
          {
            context: 'Electronic Center',
            role: 'Software development and management system maintenance',
            description:
              'Experience on internal applications and operational tools, focused on maintenance, feature evolution and interfaces for business processes.',
            technologies: ['.NET', 'WPF', 'MySQL', 'HTML', 'JavaScript', 'Canvas'],
            highlights: [
              'Development and maintenance of an internal management system.',
              'Work on desktop features with WPF interfaces.',
              'Frontend development for online games with HTML, JavaScript and Canvas.',
            ],
          },
          {
            context: 'Sintesi Software / enterprise project',
            role: 'Full-stack developer on CRM and business processes',
            description:
              'Work on management systems and CRM platforms, with attention to internal workflows, system integration and business data management.',
            technologies: ['.NET', 'C#', 'Relational databases', 'Web frontend'],
            highlights: [
              'Development on CRM and business processes.',
              'Integration with existing management systems.',
              'Work on flows related to production, warehouse and internal processes.',
            ],
          },
          {
            context: 'Healthcare startup',
            role: 'Web app development in healthcare',
            description:
              'Development of a platform for professional collaboration in healthcare, with specialist process management and sharing of anonymized clinical material.',
            technologies: ['Web app', 'Healthcare', 'DICOM', 'Frontend/backend'],
            highlights: [
              'Collaboration between doctors, vascular surgeons and specialists.',
              'Management and sharing of anonymized DICOM images.',
              'Application focused on specialist processes and professional collaboration.',
            ],
          },
        ],
      },
      skills: {
        kicker: 'Skills',
        title: 'Technical skills and working method',
        groups: [
          {
            title: 'Frontend',
            skills: ['React', 'TypeScript', 'Angular', 'HTML', 'CSS', 'JavaScript'],
          },
          {
            title: 'Backend',
            skills: ['.NET', 'C#', 'PHP', 'Node.js', 'API', 'Integrations'],
          },
          {
            title: 'Database',
            skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'Relational databases'],
          },
          {
            title: 'Cloud & Tools',
            skills: ['Azure', 'Git', 'Vite', 'Deployment', 'Debugging'],
          },
          {
            title: 'Soft skills / method',
            skills: ['Process analysis', 'Problem solving', 'Maintainability', 'Collaboration'],
          },
        ],
      },
      cta: {
        kicker: 'Next step',
        title: 'Want to see how I apply these skills in projects?',
        body: 'Take a look at the portfolio or contact me to discuss your next management tool, CRM or web project.',
      },
    },
    services: {
      hero: {
        kicker: 'Services',
        title: 'Custom websites, web apps, management tools and integrations.',
        body: 'I help companies, startups, professionals and agencies build concrete web solutions: from frontend to backend, databases, APIs and maintenance.',
      },
      sections: {
        servicesKicker: 'What I can do',
        servicesTitle: 'Full-stack services for digital products and business processes.',
        processKicker: 'How I work',
        processTitle: 'A simple, transparent process focused on delivery.',
        fitKicker: 'Who it is for',
        fitTitle: 'I can help when you need technical skill and practical product sense.',
      },
      services: [
        {
          title: 'Frontend Development',
          description:
            'I build modern, responsive interfaces integrated with APIs, designed to be clear, fast and easy to evolve.',
          points: [
            'Responsive UI for desktop and mobile',
            'Reusable and scalable components',
            'API integration and application state management',
          ],
          technologies: ['React', 'Angular', 'Vue.js', 'Next.js', 'TypeScript', 'JavaScript'],
        },
        {
          title: 'Backend Development',
          description:
            'I develop APIs, business logic and application services to connect data, users and processes reliably.',
          points: [
            'REST APIs for web apps and business tools',
            'Authentication and authorization',
            'Business logic and database integration',
          ],
          technologies: ['.NET / C#', 'Node.js', 'PHP', 'Python', 'Java', 'REST API'],
        },
        {
          title: 'Full-stack Development',
          description:
            'I create complete applications, from frontend structure to backend, with attention to operational workflows and maintainability.',
          points: [
            'Complete web apps and operational dashboards',
            'Custom management tools and CRM systems',
            'Consistent integration between frontend and backend',
          ],
          technologies: ['Web app', 'Dashboard', 'Management tools', 'CRM', 'Frontend/backend'],
        },
        {
          title: 'Database & Integrations',
          description:
            'I design data structures and integrations between systems, external services and existing business applications.',
          points: [
            'Relational data modeling',
            'Integration with external services',
            'Support for business processes and workflows',
          ],
          technologies: ['PostgreSQL', 'MySQL', 'SQL Server', 'Data modeling'],
        },
        {
          title: 'Portfolio Sites and Landing Pages',
          description:
            'I build essential, fast professional websites and landing pages focused on conversion.',
          points: [
            'Professional websites and presentation pages',
            'Contact forms and clear calls to action',
            'Basic technical SEO and deployment',
          ],
          technologies: ['Landing page', 'Portfolio', 'Contact forms', 'Basic SEO', 'Deploy'],
        },
      ],
      process: [
        {
          title: 'Needs analysis',
          description:
            'I start from goals, constraints, users and processes to understand what is truly needed.',
        },
        {
          title: 'Solution design',
          description:
            'I define structure, technologies and priorities to reach a clear solution.',
        },
        {
          title: 'Iterative development',
          description:
            'I work in verifiable steps, with continuous feedback and attention to quality.',
        },
        {
          title: 'Delivery and support',
          description:
            'I prepare the release and can support future evolution, maintenance and improvements.',
        },
      ],
      usefulFor: [
        'Companies that want to modernize internal tools.',
        'Professionals who want a clear and credible online presence.',
        'Startups that need to validate a web app or digital product.',
        'Teams that need frontend, backend or integration support.',
      ],
      cta: {
        kicker: "Let's talk",
        title: 'Do you need to build or improve a web solution?',
        body: 'Tell me the context: we can assess priorities, feasibility and next steps together.',
      },
    },
    portfolio: {
      filtersLabel: 'Filter projects',
      liveLabel: 'Filtered projects',
      unavailable: 'unavailable',
      projectLinkLabel: 'for project',
      detailsLabel: 'Details',
      hero: {
        kicker: 'Portfolio',
        title: 'Projects, case studies and skills applied to real problems.',
        body: 'A selection of web apps, CRM platforms, integrations and interfaces developed with attention to processes, data, usability and maintainability.',
      },
      section: {
        kicker: 'Projects',
        title: 'Featured projects',
      },
      cta: {
        kicker: 'New project',
        title: 'Want to discuss a web app, management tool or integration?',
        body: 'Tell me about the goal, context and technical constraints: we can identify the most suitable solution together.',
      },
      filters: [
        { id: 'all', label: 'All' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'fullstack', label: 'Full-stack' },
        { id: 'backend', label: 'Backend' },
        { id: 'enterprise', label: 'Enterprise' },
        { id: 'healthcare', label: 'Healthcare' },
      ],
      projects: [
        {
          title: 'AlphaShop Web App',
          type: 'Full-stack / Web App',
          description:
            'Web application for item management, product search, data editing and interaction with backend APIs.',
          stack: ['Angular', 'TypeScript', '.NET', 'SQL Server'],
          highlights: [
            'Item and product data management.',
            'Search and edit information through a web interface.',
            'Interaction with backend APIs.',
          ],
          status: 'Demo',
          filters: ['fullstack', 'frontend', 'backend'],
        },
        {
          title: 'CRM Enterprise / Process Management',
          type: 'Enterprise / Backend / Integration',
          description:
            'Management/CRM solution for business processes, internal workflows, production data and integration with existing systems.',
          stack: ['.NET', 'C#', 'Relational databases', 'API'],
          highlights: [
            'Support for business processes and internal workflows.',
            'Management of production-related data.',
            'Integration with existing systems.',
          ],
          status: 'Case study',
          filters: ['enterprise', 'backend'],
        },
        {
          title: 'Healthcare Collaboration Platform',
          type: 'Healthcare / Web App',
          description:
            'Web platform for collaboration between specialists, sharing anonymized DICOM images and supporting specialist clinical processes.',
          stack: ['Web App', 'DICOM', 'Backend API', 'Database'],
          highlights: [
            'Collaboration between specialists.',
            'Sharing of anonymized DICOM images.',
            'Support for specialist clinical processes.',
          ],
          status: 'In development',
          filters: ['healthcare', 'fullstack', 'backend'],
        },
        {
          title: 'Personal Portfolio Website',
          type: 'Frontend / Portfolio',
          description:
            'Personal portfolio website built with React, TypeScript and Vite, focused on performance, responsive design and professional presentation.',
          stack: ['React', 'TypeScript', 'Vite', 'CSS'],
          highlights: [
            'Responsive routing and layout.',
            'Lightweight design system and reusable components.',
            'Professional presentation of services and skills.',
          ],
          status: 'In development',
          filters: ['frontend'],
          githubUrl: 'https://github.com/Enrico-A/Enrico-dev-web',
        },
      ],
    },
    contact: {
      emailSubject: 'New request from the website',
      hero: {
        kicker: 'Contact',
        title: "Let's talk about your web project.",
        body: 'Do you need a web app, management tool, CRM or frontend/backend technical support? Send me a few details and I will get back to you.',
      },
      info: {
        ariaLabel: 'Contact information',
        kicker: 'Info',
        title: 'Available for freelance collaborations',
        email: 'Email',
        availability: 'Availability',
        availabilityText: 'Freelance projects, consulting and technical support.',
        location: 'Location',
        locationText: 'Italy / remote',
      },
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        privacy: 'I agree to be contacted about my request.',
        submitting: 'Sending',
        submit: 'Send message',
        success: 'Message sent successfully. I will get back to you as soon as possible.',
        error: 'Something went wrong. Please try again shortly.',
        validation: {
          nameRequired: 'Name is required.',
          nameMin: 'Name must contain at least 2 characters.',
          emailRequired: 'Email is required.',
          emailPattern: 'Enter a valid email address.',
          messageRequired: 'Message is required.',
          messageMin: 'Message must contain at least 10 characters.',
          privacyRequired: 'You must accept before sending the request.',
        },
      },
    },
    legal: {
      privacy: {
        eyebrow: 'Information',
        title: 'Privacy policy',
        body: 'Page prepared for the portfolio website privacy information.',
      },
      cookies: {
        eyebrow: 'Preferences',
        title: 'Cookie policy',
        body: 'Page prepared to explain cookie usage and the technical preferences of the website.',
      },
    },
    notFound: {
      title: 'Page not found',
      body: 'The requested page does not exist.',
      link: 'Back to Home',
    },
  },
} as const
