export type PrivacyLanguageCode = "de" | "en" | "fr" | "it" | "es";

export type PrivacyBlock =
  | { type: "p"; text: string; emphasis?: boolean }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "address"; lines: string[] }
  | { type: "email"; label?: string; text: string }
  | { type: "link"; label: string; href: string }
  | { type: "hr" };

export interface PrivacySection {
  number: string;
  slug: string;
  title: string;
  blocks: PrivacyBlock[];
}

export interface PrivacyDocument {
  title: string;
  updatedLabel: string;
  updated: string;
  sections: PrivacySection[];
  closingNote: string;
}

export interface PrivacyLanguage {
  code: PrivacyLanguageCode;
  label: string;
  backLabel: string;
  inProgressLabel: string;
  pendingNotice?: string;
}

export const privacyLanguages: PrivacyLanguage[] = [
  { code: "de", label: "Deutsch", backLabel: "Zurück", inProgressLabel: "in Arbeit" },
  { code: "en", label: "English", backLabel: "Back", inProgressLabel: "in progress" },
  { code: "fr", label: "Français", backLabel: "Retour", inProgressLabel: "en cours" },
  { code: "it", label: "Italiano", backLabel: "Indietro", inProgressLabel: "in corso" },
  { code: "es", label: "Español", backLabel: "Volver", inProgressLabel: "en curso" },
];

const de: PrivacyDocument = {
  title: "Datenschutzerklärung – REFOMA Pro",
  updatedLabel: "Stand",
  updated: "12. November 2026",
  sections: [
    {
      number: "1",
      slug: "verantwortlicher",
      title: "Verantwortlicher",
      blocks: [
        { type: "p", text: "Verantwortlich für die App REFOMA Pro ist:" },
        {
          type: "address",
          lines: ["Julian Böckmann", "Zum Ausspann 2a", "22419 Hamburg", "Deutschland"],
        },
        { type: "email", label: "E-Mail", text: "moin@julianboeckmann.de" },
      ],
    },
    {
      number: "2",
      slug: "allgemeine-informationen",
      title: "Allgemeine Informationen",
      blocks: [
        { type: "p", text: "REFOMA Pro ist eine offline nutzbare Fußball-Managementsimulation." },
        {
          type: "p",
          emphasis: true,
          text: "Der Schutz deiner Privatsphäre ist uns wichtig. Die App wurde so entwickelt, dass möglichst wenige personenbezogene Daten verarbeitet werden.",
        },
        {
          type: "p",
          text: "Für die Spielfunktionen ist keine Internetverbindung erforderlich. Die App verfügt über keine Benutzerkonten, keine Cloud-Synchronisierung, keine Analyse- oder Trackingfunktionen und keine integrierte Werbung.",
        },
        {
          type: "p",
          text: "Die App überträgt keine Spiel- oder Nutzerdaten an uns oder externe Dienstleister.",
        },
      ],
    },
    {
      number: "3",
      slug: "welche-daten",
      title: "Welche Daten verarbeitet die App?",
      blocks: [
        { type: "h3", text: "3.1 Managername" },
        {
          type: "p",
          text: "Beim Start eines neuen Spiels kannst du freiwillig einen Namen für deinen Manager eingeben.",
        },
        {
          type: "ul",
          items: [
            "Die Eingabe ist freiwillig.",
            "Der Name darf maximal 20 Zeichen enthalten.",
            "Das Feld kann leer bleiben.",
            "Der Name wird als Bestandteil deines lokalen Spielstands gespeichert.",
          ],
        },
        {
          type: "p",
          text: "Wir empfehlen, keinen vollständigen echten Namen oder andere persönliche Informationen einzugeben.",
        },
        { type: "h3", text: "3.2 Spielstände" },
        {
          type: "p",
          text: "Die App speichert deinen Spielverlauf lokal auf deinem Gerät. Dazu gehören beispielsweise:",
        },
        {
          type: "ul",
          items: [
            "Verein und Mannschaft",
            "Spieler und Mannschaftszusammensetzung",
            "Ergebnisse und Saisonverläufe",
            "Finanzen und virtuelle Spielwährung",
            "Managername und weitere Spielinformationen",
          ],
        },
        {
          type: "p",
          text: "Diese Daten werden ausschließlich gespeichert, damit du dein Spiel später fortsetzen kannst.",
        },
        { type: "h3", text: "3.3 Einstellungen" },
        {
          type: "p",
          text: "Ebenfalls lokal gespeichert werden deine Spieleinstellungen, beispielsweise:",
        },
        {
          type: "ul",
          items: [
            "Sprache",
            "Darstellung und Schriftart",
            "Bildschirmformat",
            "Toneinstellungen",
            "Anzeigeoptionen",
          ],
        },
        { type: "h3", text: "3.4 Technische Anzeigeinformationen" },
        {
          type: "p",
          text: "Zur Anpassung der Benutzeroberfläche verwendet die App bestimmte technische Informationen, beispielsweise Bildschirmgröße, Bildschirmorientierung, den verfügbaren Anzeigebereich und die Höhe der virtuellen Tastatur.",
        },
        {
          type: "p",
          text: "Diese Informationen werden ausschließlich lokal für die Darstellung verwendet und nicht an uns übertragen.",
        },
      ],
    },
    {
      number: "4",
      slug: "speicherung-und-sicherheit",
      title: "Speicherung und Sicherheit",
      blocks: [
        {
          type: "p",
          text: "Spielstände und Einstellungen werden im privaten Speicherbereich der App auf deinem Gerät gespeichert.",
        },
        {
          type: "p",
          text: "Andere reguläre Apps können auf diesen Speicherbereich grundsätzlich nicht zugreifen.",
        },
        {
          type: "p",
          text: "Die Spieldaten werden lokal in Dateien gespeichert. Eine zusätzliche Verschlüsselung der Spielstände durch die App findet nach aktuellem technischem Stand nicht statt. Der Schutz erfolgt insbesondere über die Speicherisolierung des Android-Betriebssystems.",
        },
        {
          type: "p",
          text: "Eine Speicherung auf unseren Servern oder eine Synchronisierung mit einem Cloud-Dienst findet nicht statt.",
        },
        {
          type: "p",
          text: "Die automatische Android-Cloud-Sicherung ist in der aktuellen Exportkonfiguration deaktiviert.",
        },
      ],
    },
    {
      number: "5",
      slug: "datenuebermittlung",
      title: "Datenübermittlung und Drittanbieter",
      blocks: [
        { type: "p", text: "Die aktuelle Version der App enthält keine integrierten Dienste für:" },
        {
          type: "ul",
          items: [
            "Google Firebase Analytics",
            "Firebase Crashlytics",
            "Firebase Cloud Messaging",
            "Google AdMob",
            "Werbe- oder Trackingnetzwerke",
            "Externe Analyse- oder Statistikdienste",
          ],
        },
        {
          type: "p",
          text: "Es werden keine Nutzungsprofile erstellt und keine Spiel- oder Nutzerdaten an Dritte weitergegeben.",
        },
      ],
    },
    {
      number: "6",
      slug: "speicherdauer",
      title: "Speicherdauer und Löschung",
      blocks: [
        {
          type: "p",
          text: "Deine Spielstände und Einstellungen bleiben auf deinem Gerät gespeichert, solange die App installiert ist und du die Daten nicht selbst löschst.",
        },
        {
          type: "p",
          text: "Du kannst einzelne Spielstände über die entsprechenden Funktionen innerhalb des Spiels löschen.",
        },
        {
          type: "p",
          text: "Bei einer Deinstallation der App werden die zugehörigen lokalen App-Daten durch das Betriebssystem entfernt.",
        },
        {
          type: "p",
          text: "Da wir keine Spielstände oder Nutzerdaten auf eigenen Servern speichern, existiert bei uns keine zusätzliche Kopie, die separat gelöscht werden müsste.",
        },
      ],
    },
    {
      number: "7",
      slug: "rechtsgrundlage",
      title: "Rechtsgrundlage",
      blocks: [
        {
          type: "p",
          text: "Die App verarbeitet die von dir eingegebenen Spielinformationen lokal auf deinem Gerät, um die von dir gewünschten Spielfunktionen bereitzustellen.",
        },
        {
          type: "p",
          text: "Eine Übermittlung dieser Informationen an uns findet nicht statt. Wir erhalten dadurch keine Kenntnis von deinem Managername, deinen Spielständen oder deinem Spielverhalten.",
        },
        {
          type: "p",
          text: "Soweit im Zusammenhang mit der Bereitstellung der App eine Verarbeitung personenbezogener Daten durch uns stattfindet, erfolgt diese ausschließlich im Rahmen der jeweils anwendbaren datenschutzrechtlichen Vorschriften.",
        },
      ],
    },
    {
      number: "8",
      slug: "google-play",
      title: "Google Play und Android",
      blocks: [
        { type: "p", text: "REFOMA Pro wird über Google Play bereitgestellt." },
        {
          type: "p",
          text: "Beim Herunterladen, Installieren und Aktualisieren der App können Google und das Android-Betriebssystem eigenständig technische und personenbezogene Daten verarbeiten. Diese Verarbeitung erfolgt außerhalb der eigentlichen Spielfunktionen und unterliegt den jeweiligen Datenschutzbestimmungen von Google.",
        },
        { type: "p", text: "Weitere Informationen findest du unter:" },
        {
          type: "link",
          label: "https://policies.google.com/privacy",
          href: "https://policies.google.com/privacy",
        },
      ],
    },
    {
      number: "9",
      slug: "datenschutzrechte",
      title: "Deine Datenschutzrechte",
      blocks: [
        {
          type: "p",
          text: "Soweit die Datenschutz-Grundverordnung (DSGVO) Anwendung findet, stehen dir insbesondere die folgenden Rechte zu:",
        },
        {
          type: "ul",
          items: [
            "Recht auf Auskunft",
            "Recht auf Berichtigung",
            "Recht auf Löschung",
            "Recht auf Einschränkung der Verarbeitung",
            "Recht auf Datenübertragbarkeit",
            "Recht auf Widerspruch, soweit die gesetzlichen Voraussetzungen erfüllt sind",
          ],
        },
        {
          type: "p",
          text: "Da wir über die App keine Spielstände oder Nutzerdaten auf eigenen Servern erhalten oder speichern, können wir in der Regel keine bei uns gespeicherten Spieldaten bereitstellen, ändern oder löschen.",
        },
        {
          type: "p",
          text: "Die auf deinem Gerät gespeicherten Daten kannst du direkt innerhalb des Spiels oder durch Deinstallation der App entfernen.",
        },
        {
          type: "p",
          text: "Du hast außerdem das Recht, dich bei einer zuständigen Datenschutzaufsichtsbehörde zu beschweren.",
        },
      ],
    },
    {
      number: "10",
      slug: "aenderungen",
      title: "Änderungen dieser Datenschutzerklärung",
      blocks: [
        {
          type: "p",
          text: "Wir können diese Datenschutzerklärung anpassen, wenn sich die technischen Funktionen oder die Datenverarbeitung der App ändern.",
        },
        {
          type: "p",
          text: "Insbesondere wird diese Erklärung aktualisiert, falls künftig Online-Dienste, Cloud-Speicherung, Werbung, Analysefunktionen oder andere externe Dienste integriert werden.",
        },
        { type: "p", text: "Es gilt die jeweils auf dieser Seite veröffentlichte Fassung." },
      ],
    },
    {
      number: "11",
      slug: "kontakt",
      title: "Kontakt",
      blocks: [
        {
          type: "p",
          text: "Bei Fragen zum Datenschutz oder zur Verarbeitung personenbezogener Daten kannst du uns kontaktieren:",
        },
        { type: "address", lines: ["Julian Böckmann"] },
        { type: "email", label: "E-Mail", text: "moin@julianboeckmann.de" },
      ],
    },
  ],
  closingNote:
    "Diese Datenschutzerklärung bezieht sich ausschließlich auf die Android-App REFOMA Pro. Die Datenverarbeitung beim Besuch der Website julianboeckmann.de ist davon getrennt zu betrachten und wird gegebenenfalls in einer eigenen Datenschutzerklärung beschrieben.",
};

const en: PrivacyDocument = {
  title: "Privacy Policy – REFOMA Pro",
  updatedLabel: "Last updated",
  updated: "November 12, 2026",
  sections: [
    {
      number: "1",
      slug: "controller",
      title: "Data Controller",
      blocks: [
        { type: "p", text: "The controller responsible for REFOMA Pro is:" },
        {
          type: "address",
          lines: ["Julian Böckmann", "Zum Ausspann 2a", "22419 Hamburg", "Germany"],
        },
        { type: "email", label: "Email", text: "moin@julianboeckmann.de" },
      ],
    },
    {
      number: "2",
      slug: "general-information",
      title: "General Information",
      blocks: [
        {
          type: "p",
          text: "REFOMA Pro is an offline football management simulation game.",
        },
        {
          type: "p",
          emphasis: true,
          text: "We value your privacy. The app has been designed to minimise the processing of personal data.",
        },
        {
          type: "p",
          text: "An internet connection is not required for gameplay. The app does not provide user accounts, cloud synchronisation, analytics or tracking features, or integrated advertising.",
        },
        {
          type: "p",
          text: "The app does not transmit game or user data to us or to external service providers.",
        },
      ],
    },
    {
      number: "3",
      slug: "data-processed",
      title: "Data Processed by the App",
      blocks: [
        { type: "h3", text: "3.1 Manager Name" },
        {
          type: "p",
          text: "When starting a new game, you may optionally enter a name for your manager.",
        },
        {
          type: "ul",
          items: [
            "Providing a name is voluntary.",
            "The name may contain up to 20 characters.",
            "The field may be left empty.",
            "The name is stored as part of your local game save.",
          ],
        },
        {
          type: "p",
          text: "We recommend not entering your full real name or other personal information.",
        },
        { type: "h3", text: "3.2 Game Saves" },
        {
          type: "p",
          text: "The app stores your game progress locally on your device, including:",
        },
        {
          type: "ul",
          items: [
            "Club and team information",
            "Players and team composition",
            "Results and season progress",
            "Finances and virtual in-game currency",
            "Manager name and other game-related information",
          ],
        },
        {
          type: "p",
          text: "This data is stored solely to allow you to continue your game later.",
        },
        { type: "h3", text: "3.3 Settings" },
        {
          type: "p",
          text: "Your game preferences are also stored locally, including:",
        },
        {
          type: "ul",
          items: [
            "Language",
            "Appearance and fonts",
            "Screen format",
            "Audio settings",
            "Display options",
          ],
        },
        { type: "h3", text: "3.4 Technical Display Information" },
        {
          type: "p",
          text: "To adapt the user interface to your device, the app uses certain technical display information, such as screen size, screen orientation, available display area and virtual keyboard height.",
        },
        {
          type: "p",
          text: "This information is used locally for display purposes only and is not transmitted to us.",
        },
      ],
    },
    {
      number: "4",
      slug: "storage-and-security",
      title: "Storage and Security",
      blocks: [
        {
          type: "p",
          text: "Game saves and settings are stored in the app's private storage area on your device.",
        },
        {
          type: "p",
          text: "Other ordinary apps generally cannot access this storage area.",
        },
        {
          type: "p",
          text: "Game data is stored locally in files. The app does not currently provide additional encryption for game saves. Protection is primarily provided by the storage isolation mechanisms of the Android operating system.",
        },
        {
          type: "p",
          text: "No game data is stored on our servers or synchronised with any cloud service.",
        },
        {
          type: "p",
          text: "Automatic Android cloud backup is disabled in the current export configuration.",
        },
      ],
    },
    {
      number: "5",
      slug: "data-transfers",
      title: "Data Transfers and Third Parties",
      blocks: [
        { type: "p", text: "The current version of the app does not include:" },
        {
          type: "ul",
          items: [
            "Google Firebase Analytics",
            "Firebase Crashlytics",
            "Firebase Cloud Messaging",
            "Google AdMob",
            "Advertising or tracking networks",
            "External analytics or statistics services",
          ],
        },
        {
          type: "p",
          text: "No user profiles are created, and no game or user data is shared with third parties.",
        },
      ],
    },
    {
      number: "6",
      slug: "retention",
      title: "Data Retention and Deletion",
      blocks: [
        {
          type: "p",
          text: "Your game saves and settings remain on your device while the app is installed, unless you delete them yourself.",
        },
        {
          type: "p",
          text: "You can delete individual game saves using the relevant functions within the game.",
        },
        {
          type: "p",
          text: "When you uninstall the app, the associated local app data is removed by the operating system.",
        },
        {
          type: "p",
          text: "Since we do not store game saves or user data on our own servers, we do not hold an additional copy that would need to be deleted separately.",
        },
      ],
    },
    {
      number: "7",
      slug: "legal-basis",
      title: "Legal Basis",
      blocks: [
        {
          type: "p",
          text: "The app processes the game information you enter locally on your device in order to provide the gameplay features you request.",
        },
        {
          type: "p",
          text: "This information is not transmitted to us. We therefore do not receive information about your manager name, game saves or gameplay behaviour.",
        },
        {
          type: "p",
          text: "Where we process personal data in connection with providing the app, such processing is carried out exclusively in accordance with applicable data protection laws.",
        },
      ],
    },
    {
      number: "8",
      slug: "google-play",
      title: "Google Play and Android",
      blocks: [
        { type: "p", text: "REFOMA Pro is distributed through Google Play." },
        {
          type: "p",
          text: "When you download, install or update the app, Google and the Android operating system may independently process technical and personal data. This processing takes place outside the actual gameplay features and is subject to Google's applicable privacy policies.",
        },
        { type: "p", text: "More information is available at:" },
        {
          type: "link",
          label: "https://policies.google.com/privacy",
          href: "https://policies.google.com/privacy",
        },
      ],
    },
    {
      number: "9",
      slug: "privacy-rights",
      title: "Your Privacy Rights",
      blocks: [
        {
          type: "p",
          text: "Where the General Data Protection Regulation (GDPR) applies, you may have the following rights:",
        },
        {
          type: "ul",
          items: [
            "Right of access",
            "Right to rectification",
            "Right to erasure",
            "Right to restriction of processing",
            "Right to data portability",
            "Right to object, where the legal requirements are met",
          ],
        },
        {
          type: "p",
          text: "Since we do not receive or store game saves or user data on our own servers through the app, we generally cannot provide, modify or delete game data stored by us.",
        },
        {
          type: "p",
          text: "You can remove data stored on your device directly within the game or by uninstalling the app.",
        },
        {
          type: "p",
          text: "You also have the right to lodge a complaint with a competent data protection supervisory authority.",
        },
      ],
    },
    {
      number: "10",
      slug: "changes",
      title: "Changes to This Privacy Policy",
      blocks: [
        {
          type: "p",
          text: "We may update this Privacy Policy if the app's technical features or data processing practices change.",
        },
        {
          type: "p",
          text: "In particular, this policy will be updated if online services, cloud storage, advertising, analytics or other external services are introduced.",
        },
        { type: "p", text: "The version published on this page is the applicable version." },
      ],
    },
    {
      number: "11",
      slug: "contact",
      title: "Contact",
      blocks: [
        {
          type: "p",
          text: "If you have questions about privacy or the processing of personal data, please contact:",
        },
        { type: "address", lines: ["Julian Böckmann"] },
        { type: "email", label: "Email", text: "moin@julianboeckmann.de" },
      ],
    },
  ],
  closingNote:
    "This Privacy Policy applies exclusively to the Android app REFOMA Pro. Data processing in connection with visits to julianboeckmann.de is separate and may be described in a separate website privacy policy.",
};

const it: PrivacyDocument = {
  title: "Informativa sulla privacy – REFOMA Pro",
  updatedLabel: "Ultimo aggiornamento",
  updated: "12 novembre 2026",
  sections: [
    {
      number: "1",
      slug: "titolare",
      title: "Titolare del trattamento",
      blocks: [
        { type: "p", text: "Il titolare del trattamento responsabile di REFOMA Pro è:" },
        {
          type: "address",
          lines: ["Julian Böckmann", "Zum Ausspann 2a", "22419 Amburgo", "Germania"],
        },
        { type: "email", label: "Email", text: "moin@julianboeckmann.de" },
      ],
    },
    {
      number: "2",
      slug: "informazioni-generali",
      title: "Informazioni generali",
      blocks: [
        {
          type: "p",
          text: "REFOMA Pro è un gioco di simulazione calcistica manageriale utilizzabile offline.",
        },
        {
          type: "p",
          emphasis: true,
          text: "La tutela della tua privacy è importante per noi. L'app è stata sviluppata per ridurre al minimo il trattamento dei dati personali.",
        },
        {
          type: "p",
          text: "Per le funzionalità di gioco non è necessaria una connessione Internet. L'app non dispone di account utente, sincronizzazione cloud, funzioni di analisi o tracciamento né pubblicità integrata.",
        },
        {
          type: "p",
          text: "L'app non trasmette dati di gioco o dati degli utenti a noi o a fornitori di servizi esterni.",
        },
      ],
    },
    {
      number: "3",
      slug: "dati-trattati",
      title: "Dati trattati dall'app",
      blocks: [
        { type: "h3", text: "3.1 Nome del manager" },
        {
          type: "p",
          text: "Quando inizi una nuova partita, puoi inserire facoltativamente un nome per il tuo manager.",
        },
        {
          type: "ul",
          items: [
            "L'inserimento è volontario.",
            "Il nome può contenere al massimo 20 caratteri.",
            "Puoi lasciare il campo vuoto.",
            "Il nome viene salvato come parte del salvataggio locale della partita.",
          ],
        },
        {
          type: "p",
          text: "Ti consigliamo di non inserire il tuo nome completo reale o altre informazioni personali.",
        },
        { type: "h3", text: "3.2 Salvataggi di gioco" },
        {
          type: "p",
          text: "L'app memorizza localmente sul tuo dispositivo i progressi della partita, tra cui:",
        },
        {
          type: "ul",
          items: [
            "Club e squadra",
            "Giocatori e composizione della squadra",
            "Risultati e andamento delle stagioni",
            "Finanze e valuta virtuale del gioco",
            "Nome del manager e altre informazioni relative alla partita",
          ],
        },
        {
          type: "p",
          text: "Questi dati vengono salvati esclusivamente per consentirti di continuare la partita in un secondo momento.",
        },
        { type: "h3", text: "3.3 Impostazioni" },
        {
          type: "p",
          text: "Anche le preferenze di gioco vengono memorizzate localmente, tra cui lingua, aspetto grafico, caratteri, formato dello schermo, impostazioni audio e opzioni di visualizzazione.",
        },
        { type: "h3", text: "3.4 Informazioni tecniche di visualizzazione" },
        {
          type: "p",
          text: "Per adattare l'interfaccia al dispositivo, l'app utilizza alcune informazioni tecniche, come le dimensioni e l'orientamento dello schermo, l'area di visualizzazione disponibile e l'altezza della tastiera virtuale.",
        },
        {
          type: "p",
          text: "Queste informazioni vengono utilizzate esclusivamente localmente e non vengono trasmesse a noi.",
        },
      ],
    },
    {
      number: "4",
      slug: "archiviazione-e-sicurezza",
      title: "Archiviazione e sicurezza",
      blocks: [
        {
          type: "p",
          text: "I salvataggi e le impostazioni vengono conservati nell'area di archiviazione privata dell'app sul tuo dispositivo.",
        },
        {
          type: "p",
          text: "Le altre normali applicazioni generalmente non possono accedere a quest'area.",
        },
        {
          type: "p",
          text: "I dati di gioco vengono memorizzati localmente in file. Attualmente l'app non applica un'ulteriore cifratura ai salvataggi. La protezione è garantita principalmente dai meccanismi di isolamento dello spazio di archiviazione del sistema operativo Android.",
        },
        {
          type: "p",
          text: "Nessun dato di gioco viene memorizzato sui nostri server o sincronizzato con servizi cloud.",
        },
        {
          type: "p",
          text: "Il backup automatico Android nel cloud è disattivato nella configurazione di esportazione attuale.",
        },
      ],
    },
    {
      number: "5",
      slug: "trasmissione-dati",
      title: "Trasmissione dei dati e servizi di terze parti",
      blocks: [
        { type: "p", text: "La versione attuale dell'app non integra:" },
        {
          type: "ul",
          items: [
            "Google Firebase Analytics",
            "Firebase Crashlytics",
            "Firebase Cloud Messaging",
            "Google AdMob",
            "Reti pubblicitarie o di tracciamento",
            "Servizi esterni di analisi o statistiche",
          ],
        },
        {
          type: "p",
          text: "Non vengono creati profili utente e nessun dato di gioco o dato dell'utente viene condiviso con terze parti.",
        },
      ],
    },
    {
      number: "6",
      slug: "conservazione",
      title: "Conservazione e cancellazione dei dati",
      blocks: [
        {
          type: "p",
          text: "I salvataggi e le impostazioni rimangono sul dispositivo finché l'app è installata e finché non li elimini personalmente.",
        },
        {
          type: "p",
          text: "Puoi eliminare singoli salvataggi tramite le apposite funzioni del gioco.",
        },
        {
          type: "p",
          text: "Disinstallando l'app, i relativi dati locali vengono rimossi dal sistema operativo.",
        },
        {
          type: "p",
          text: "Poiché non conserviamo salvataggi o dati degli utenti sui nostri server, non esiste una copia aggiuntiva presso di noi da cancellare separatamente.",
        },
      ],
    },
    {
      number: "7",
      slug: "base-giuridica",
      title: "Base giuridica",
      blocks: [
        {
          type: "p",
          text: "L'app tratta localmente sul tuo dispositivo le informazioni di gioco che inserisci, al fine di fornire le funzionalità di gioco da te richieste.",
        },
        {
          type: "p",
          text: "Tali informazioni non vengono trasmesse a noi. Pertanto, non riceviamo informazioni sul tuo nome di manager, sui tuoi salvataggi o sulle tue abitudini di gioco.",
        },
        {
          type: "p",
          text: "Qualora trattassimo dati personali nell'ambito della fornitura dell'app, tale trattamento avverrebbe esclusivamente nel rispetto delle disposizioni applicabili in materia di protezione dei dati.",
        },
      ],
    },
    {
      number: "8",
      slug: "google-play",
      title: "Google Play e Android",
      blocks: [
        { type: "p", text: "REFOMA Pro viene distribuito tramite Google Play." },
        {
          type: "p",
          text: "Durante il download, l'installazione e l'aggiornamento dell'app, Google e il sistema operativo Android possono trattare autonomamente dati tecnici e personali. Tale trattamento avviene al di fuori delle funzionalità di gioco ed è soggetto alle rispettive informative sulla privacy di Google.",
        },
        { type: "p", text: "Ulteriori informazioni sono disponibili all'indirizzo:" },
        {
          type: "link",
          label: "https://policies.google.com/privacy",
          href: "https://policies.google.com/privacy",
        },
      ],
    },
    {
      number: "9",
      slug: "diritti",
      title: "I tuoi diritti in materia di protezione dei dati",
      blocks: [
        {
          type: "p",
          text: "Laddove si applichi il GDPR, hai diritto, tra l'altro, di accedere ai tuoi dati, rettificarli, chiederne la cancellazione, limitarne il trattamento, ottenerne la portabilità e opporti al trattamento, nei limiti previsti dalla legge.",
        },
        {
          type: "p",
          text: "Poiché tramite l'app non riceviamo né conserviamo sui nostri server i salvataggi o i dati degli utenti, generalmente non possiamo fornire, modificare o cancellare i dati di gioco memorizzati da noi.",
        },
        {
          type: "p",
          text: "Puoi eliminare i dati presenti sul tuo dispositivo direttamente nel gioco oppure disinstallando l'app.",
        },
        {
          type: "p",
          text: "Hai inoltre il diritto di presentare un reclamo a un'autorità di controllo competente per la protezione dei dati personali.",
        },
      ],
    },
    {
      number: "10",
      slug: "modifiche",
      title: "Modifiche all'informativa",
      blocks: [
        {
          type: "p",
          text: "Questa informativa potrà essere aggiornata in caso di modifiche alle funzionalità tecniche o alle modalità di trattamento dei dati dell'app.",
        },
        {
          type: "p",
          text: "In particolare, verrà aggiornata qualora vengano introdotti servizi online, archiviazione cloud, pubblicità, funzioni di analisi o altri servizi esterni.",
        },
        { type: "p", text: "Fa fede la versione pubblicata su questa pagina." },
      ],
    },
    {
      number: "11",
      slug: "contatti",
      title: "Contatti",
      blocks: [
        {
          type: "p",
          text: "Per domande sulla privacy o sul trattamento dei dati personali puoi contattarci:",
        },
        { type: "address", lines: ["Julian Böckmann"] },
        { type: "email", label: "Email", text: "moin@julianboeckmann.de" },
      ],
    },
  ],
  closingNote:
    "La presente informativa si riferisce esclusivamente all'app Android REFOMA Pro. Il trattamento dei dati in relazione alla visita del sito julianboeckmann.de è separato e può essere descritto in un'informativa distinta per il sito web.",
};

const es: PrivacyDocument = {
  title: "Política de privacidad – REFOMA Pro",
  updatedLabel: "Última actualización",
  updated: "12 de noviembre de 2026",
  sections: [
    {
      number: "1",
      slug: "responsable",
      title: "Responsable del tratamiento",
      blocks: [
        { type: "p", text: "El responsable del tratamiento relacionado con REFOMA Pro es:" },
        {
          type: "address",
          lines: ["Julian Böckmann", "Zum Ausspann 2a", "22419 Hamburgo", "Alemania"],
        },
        { type: "email", label: "Correo electrónico", text: "moin@julianboeckmann.de" },
      ],
    },
    {
      number: "2",
      slug: "informacion-general",
      title: "Información general",
      blocks: [
        {
          type: "p",
          text: "REFOMA Pro es un juego de simulación de gestión futbolística que puede utilizarse sin conexión.",
        },
        {
          type: "p",
          emphasis: true,
          text: "Tu privacidad es importante para nosotros. La aplicación ha sido diseñada para minimizar el tratamiento de datos personales.",
        },
        {
          type: "p",
          text: "Las funciones del juego no requieren conexión a Internet. La aplicación no dispone de cuentas de usuario, sincronización en la nube, funciones de análisis o seguimiento ni publicidad integrada.",
        },
        {
          type: "p",
          text: "La aplicación no transmite datos del juego ni datos de los usuarios a nosotros ni a proveedores externos.",
        },
      ],
    },
    {
      number: "3",
      slug: "datos-tratados",
      title: "Datos tratados por la aplicación",
      blocks: [
        { type: "h3", text: "3.1 Nombre del mánager" },
        {
          type: "p",
          text: "Al comenzar una nueva partida, puedes introducir voluntariamente un nombre para tu mánager.",
        },
        {
          type: "ul",
          items: [
            "La introducción del nombre es voluntaria.",
            "Se permiten un máximo de 20 caracteres.",
            "Puedes dejar el campo vacío.",
            "El nombre se guarda como parte de la partida almacenada localmente.",
          ],
        },
        {
          type: "p",
          text: "Recomendamos no introducir tu nombre real completo ni otros datos personales.",
        },
        { type: "h3", text: "3.2 Partidas guardadas" },
        {
          type: "p",
          text: "La aplicación almacena localmente en tu dispositivo el progreso del juego, incluidos:",
        },
        {
          type: "ul",
          items: [
            "Club y equipo",
            "Jugadores y composición de la plantilla",
            "Resultados y temporadas",
            "Finanzas y moneda virtual del juego",
            "Nombre del mánager y otra información relacionada con la partida",
          ],
        },
        {
          type: "p",
          text: "Estos datos se almacenan únicamente para que puedas continuar jugando más adelante.",
        },
        { type: "h3", text: "3.3 Configuración" },
        {
          type: "p",
          text: "También se guardan localmente tus preferencias de juego, como el idioma, la apariencia, las fuentes, el formato de pantalla, los ajustes de sonido y las opciones de visualización.",
        },
        { type: "h3", text: "3.4 Información técnica de visualización" },
        {
          type: "p",
          text: "Para adaptar la interfaz al dispositivo, la aplicación utiliza determinada información técnica, como el tamaño y la orientación de la pantalla, el área de visualización disponible y la altura del teclado virtual.",
        },
        {
          type: "p",
          text: "Esta información se utiliza únicamente de forma local y no se transmite a nosotros.",
        },
      ],
    },
    {
      number: "4",
      slug: "almacenamiento-y-seguridad",
      title: "Almacenamiento y seguridad",
      blocks: [
        {
          type: "p",
          text: "Las partidas guardadas y la configuración se almacenan en el espacio privado de la aplicación en tu dispositivo.",
        },
        {
          type: "p",
          text: "Otras aplicaciones normales generalmente no pueden acceder a este espacio.",
        },
        {
          type: "p",
          text: "Los datos del juego se almacenan localmente en archivos. Actualmente, la aplicación no aplica un cifrado adicional a las partidas guardadas. La protección se basa principalmente en los mecanismos de aislamiento del almacenamiento del sistema operativo Android.",
        },
        {
          type: "p",
          text: "No se almacena ningún dato del juego en nuestros servidores ni se sincroniza con servicios en la nube.",
        },
        {
          type: "p",
          text: "La copia de seguridad automática de Android en la nube está desactivada en la configuración de exportación actual.",
        },
      ],
    },
    {
      number: "5",
      slug: "transferencia-datos",
      title: "Transferencia de datos y terceros",
      blocks: [
        { type: "p", text: "La versión actual de la aplicación no integra:" },
        {
          type: "ul",
          items: [
            "Google Firebase Analytics",
            "Firebase Crashlytics",
            "Firebase Cloud Messaging",
            "Google AdMob",
            "Redes publicitarias o de seguimiento",
            "Servicios externos de análisis o estadísticas",
          ],
        },
        {
          type: "p",
          text: "No se crean perfiles de usuario ni se comparten datos del juego o de los usuarios con terceros.",
        },
      ],
    },
    {
      number: "6",
      slug: "conservacion",
      title: "Conservación y eliminación de datos",
      blocks: [
        {
          type: "p",
          text: "Las partidas guardadas y la configuración permanecen en tu dispositivo mientras la aplicación esté instalada y no las elimines manualmente.",
        },
        {
          type: "p",
          text: "Puedes eliminar partidas individuales mediante las funciones correspondientes del juego.",
        },
        {
          type: "p",
          text: "Al desinstalar la aplicación, el sistema operativo elimina los datos locales asociados.",
        },
        {
          type: "p",
          text: "Como no almacenamos partidas ni datos de los usuarios en nuestros propios servidores, no existe una copia adicional que debamos eliminar por separado.",
        },
      ],
    },
    {
      number: "7",
      slug: "base-juridica",
      title: "Base jurídica",
      blocks: [
        {
          type: "p",
          text: "La aplicación trata localmente en tu dispositivo la información del juego que introduces para proporcionar las funciones de juego que solicitas.",
        },
        {
          type: "p",
          text: "Esta información no se transmite a nosotros. Por tanto, no recibimos información sobre tu nombre de mánager, tus partidas guardadas ni tu comportamiento durante el juego.",
        },
        {
          type: "p",
          text: "Cuando tratemos datos personales en relación con la prestación de la aplicación, dicho tratamiento se realizará exclusivamente de conformidad con la normativa aplicable en materia de protección de datos.",
        },
      ],
    },
    {
      number: "8",
      slug: "google-play",
      title: "Google Play y Android",
      blocks: [
        { type: "p", text: "REFOMA Pro se distribuye a través de Google Play." },
        {
          type: "p",
          text: "Durante la descarga, instalación y actualización de la aplicación, Google y el sistema operativo Android pueden tratar de forma independiente datos técnicos y personales. Este tratamiento tiene lugar fuera de las funciones propias del juego y está sujeto a las respectivas políticas de privacidad de Google.",
        },
        { type: "p", text: "Más información:" },
        {
          type: "link",
          label: "https://policies.google.com/privacy",
          href: "https://policies.google.com/privacy",
        },
      ],
    },
    {
      number: "9",
      slug: "derechos",
      title: "Tus derechos de privacidad",
      blocks: [
        {
          type: "p",
          text: "Cuando sea aplicable el RGPD, tienes derecho, entre otros, a acceder a tus datos, rectificarlos, solicitar su eliminación, limitar su tratamiento, obtener su portabilidad y oponerte al tratamiento, dentro de los límites legales.",
        },
        {
          type: "p",
          text: "Dado que no recibimos ni almacenamos en nuestros servidores las partidas guardadas ni los datos de los usuarios a través de la aplicación, generalmente no podemos proporcionar, modificar ni eliminar datos del juego almacenados por nosotros.",
        },
        {
          type: "p",
          text: "Puedes eliminar los datos de tu dispositivo directamente desde el juego o desinstalando la aplicación.",
        },
        {
          type: "p",
          text: "También tienes derecho a presentar una reclamación ante una autoridad de control competente en materia de protección de datos.",
        },
      ],
    },
    {
      number: "10",
      slug: "cambios",
      title: "Cambios en esta política",
      blocks: [
        {
          type: "p",
          text: "Esta política podrá actualizarse si cambian las funciones técnicas o las prácticas de tratamiento de datos de la aplicación.",
        },
        {
          type: "p",
          text: "En particular, se actualizará si se incorporan servicios en línea, almacenamiento en la nube, publicidad, funciones de análisis u otros servicios externos.",
        },
        { type: "p", text: "Se aplicará la versión publicada en esta página." },
      ],
    },
    {
      number: "11",
      slug: "contacto",
      title: "Contacto",
      blocks: [
        {
          type: "p",
          text: "Si tienes preguntas sobre privacidad o el tratamiento de datos personales, puedes contactarnos:",
        },
        { type: "address", lines: ["Julian Böckmann"] },
        { type: "email", label: "Correo electrónico", text: "moin@julianboeckmann.de" },
      ],
    },
  ],
  closingNote:
    "Esta política de privacidad se aplica exclusivamente a la aplicación Android REFOMA Pro. El tratamiento de datos relacionado con las visitas a julianboeckmann.de es independiente y puede describirse en una política de privacidad específica para el sitio web.",
};

const fr: PrivacyDocument = {
  title: "Politique de confidentialité – REFOMA Pro",
  updatedLabel: "Dernière mise à jour",
  updated: "12 novembre 2026",
  sections: [
    {
      number: "1",
      slug: "responsable",
      title: "Responsable du traitement",
      blocks: [
        { type: "p", text: "Le responsable du traitement lié à REFOMA Pro est :" },
        {
          type: "address",
          lines: ["Julian Böckmann", "Zum Ausspann 2a", "22419 Hambourg", "Allemagne"],
        },
        { type: "email", label: "E-mail", text: "moin@julianboeckmann.de" },
      ],
    },
    {
      number: "2",
      slug: "informations-generales",
      title: "Informations générales",
      blocks: [
        {
          type: "p",
          text: "REFOMA Pro est un jeu de simulation de gestion de football utilisable hors ligne.",
        },
        {
          type: "p",
          emphasis: true,
          text: "La protection de votre vie privée est importante pour nous. L'application a été conçue pour limiter autant que possible le traitement des données personnelles.",
        },
        {
          type: "p",
          text: "Une connexion Internet n'est pas nécessaire pour les fonctionnalités du jeu. L'application ne propose ni comptes utilisateurs, ni synchronisation dans le cloud, ni fonctions d'analyse ou de suivi, ni publicité intégrée.",
        },
        {
          type: "p",
          text: "L'application ne transmet aucune donnée de jeu ni aucune donnée utilisateur à nous-mêmes ou à des prestataires externes.",
        },
      ],
    },
    {
      number: "3",
      slug: "donnees-traitees",
      title: "Données traitées par l'application",
      blocks: [
        { type: "h3", text: "3.1 Nom du manager" },
        {
          type: "p",
          text: "Lorsque vous commencez une nouvelle partie, vous pouvez saisir facultativement un nom pour votre manager.",
        },
        {
          type: "ul",
          items: [
            "La saisie est facultative.",
            "Le nom peut comporter 20 caractères maximum.",
            "Vous pouvez laisser le champ vide.",
            "Le nom est enregistré dans votre sauvegarde locale.",
          ],
        },
        {
          type: "p",
          text: "Nous vous recommandons de ne pas saisir votre nom complet réel ni d'autres informations personnelles.",
        },
        { type: "h3", text: "3.2 Sauvegardes de jeu" },
        {
          type: "p",
          text: "L'application enregistre localement sur votre appareil votre progression dans le jeu, notamment :",
        },
        {
          type: "ul",
          items: [
            "Le club et l'équipe",
            "Les joueurs et la composition de l'équipe",
            "Les résultats et les saisons",
            "Les finances et la monnaie virtuelle du jeu",
            "Le nom du manager et d'autres informations liées à la partie",
          ],
        },
        {
          type: "p",
          text: "Ces données sont conservées uniquement pour vous permettre de reprendre votre partie ultérieurement.",
        },
        { type: "h3", text: "3.3 Paramètres" },
        {
          type: "p",
          text: "Vos préférences de jeu sont également enregistrées localement, notamment la langue, l'apparence, les polices, le format de l'écran, les paramètres audio et les options d'affichage.",
        },
        { type: "h3", text: "3.4 Informations techniques d'affichage" },
        {
          type: "p",
          text: "Afin d'adapter l'interface à votre appareil, l'application utilise certaines informations techniques, telles que la taille et l'orientation de l'écran, la zone d'affichage disponible et la hauteur du clavier virtuel.",
        },
        {
          type: "p",
          text: "Ces informations sont utilisées uniquement localement et ne nous sont pas transmises.",
        },
      ],
    },
    {
      number: "4",
      slug: "stockage-et-securite",
      title: "Stockage et sécurité",
      blocks: [
        {
          type: "p",
          text: "Les sauvegardes et les paramètres sont stockés dans l'espace privé de l'application sur votre appareil.",
        },
        {
          type: "p",
          text: "Les autres applications ordinaires ne peuvent généralement pas accéder à cet espace.",
        },
        {
          type: "p",
          text: "Les données du jeu sont enregistrées localement dans des fichiers. L'application ne prévoit actuellement pas de chiffrement supplémentaire des sauvegardes. Leur protection repose principalement sur les mécanismes d'isolation du stockage du système d'exploitation Android.",
        },
        {
          type: "p",
          text: "Aucune donnée de jeu n'est stockée sur nos serveurs ni synchronisée avec un service cloud.",
        },
        {
          type: "p",
          text: "La sauvegarde automatique Android dans le cloud est désactivée dans la configuration d'exportation actuelle.",
        },
      ],
    },
    {
      number: "5",
      slug: "transmission-des-donnees",
      title: "Transmission des données et services tiers",
      blocks: [
        { type: "p", text: "La version actuelle de l'application n'intègre pas :" },
        {
          type: "ul",
          items: [
            "Google Firebase Analytics",
            "Firebase Crashlytics",
            "Firebase Cloud Messaging",
            "Google AdMob",
            "De réseaux publicitaires ou de suivi",
            "De services externes d'analyse ou de statistiques",
          ],
        },
        {
          type: "p",
          text: "Aucun profil utilisateur n'est créé et aucune donnée de jeu ou donnée utilisateur n'est communiquée à des tiers.",
        },
      ],
    },
    {
      number: "6",
      slug: "conservation",
      title: "Conservation et suppression des données",
      blocks: [
        {
          type: "p",
          text: "Vos sauvegardes et paramètres restent sur votre appareil tant que l'application est installée et que vous ne les supprimez pas vous-même.",
        },
        {
          type: "p",
          text: "Vous pouvez supprimer des sauvegardes individuelles à l'aide des fonctions correspondantes du jeu.",
        },
        {
          type: "p",
          text: "Lorsque vous désinstallez l'application, les données locales associées sont supprimées par le système d'exploitation.",
        },
        {
          type: "p",
          text: "Comme nous ne stockons aucune sauvegarde ni donnée utilisateur sur nos propres serveurs, nous ne détenons aucune copie supplémentaire nécessitant une suppression distincte.",
        },
      ],
    },
    {
      number: "7",
      slug: "base-juridique",
      title: "Base juridique",
      blocks: [
        {
          type: "p",
          text: "L'application traite localement sur votre appareil les informations de jeu que vous saisissez afin de fournir les fonctionnalités de jeu que vous demandez.",
        },
        {
          type: "p",
          text: "Ces informations ne nous sont pas transmises. Nous ne recevons donc aucune information concernant votre nom de manager, vos sauvegardes ou votre comportement dans le jeu.",
        },
        {
          type: "p",
          text: "Dans la mesure où nous traitons des données personnelles dans le cadre de la fourniture de l'application, ce traitement est effectué exclusivement conformément aux dispositions applicables en matière de protection des données.",
        },
      ],
    },
    {
      number: "8",
      slug: "google-play",
      title: "Google Play et Android",
      blocks: [
        { type: "p", text: "REFOMA Pro est distribué via Google Play." },
        {
          type: "p",
          text: "Lors du téléchargement, de l'installation et de la mise à jour de l'application, Google et le système d'exploitation Android peuvent traiter indépendamment des données techniques et personnelles. Ce traitement a lieu en dehors des fonctionnalités propres au jeu et est soumis aux politiques de confidentialité respectives de Google.",
        },
        { type: "p", text: "Plus d'informations :" },
        {
          type: "link",
          label: "https://policies.google.com/privacy",
          href: "https://policies.google.com/privacy",
        },
      ],
    },
    {
      number: "9",
      slug: "droits",
      title: "Vos droits en matière de protection des données",
      blocks: [
        {
          type: "p",
          text: "Lorsque le RGPD s'applique, vous disposez notamment des droits d'accès, de rectification, d'effacement, de limitation du traitement, de portabilité et d'opposition, dans les conditions prévues par la loi.",
        },
        {
          type: "p",
          text: "Comme nous ne recevons ni ne stockons sur nos serveurs les sauvegardes ou les données utilisateur par l'intermédiaire de l'application, nous ne pouvons généralement pas fournir, modifier ou supprimer les données de jeu stockées par nos soins.",
        },
        {
          type: "p",
          text: "Vous pouvez supprimer les données présentes sur votre appareil directement dans le jeu ou en désinstallant l'application.",
        },
        {
          type: "p",
          text: "Vous avez également le droit d'introduire une réclamation auprès d'une autorité de contrôle compétente en matière de protection des données.",
        },
      ],
    },
    {
      number: "10",
      slug: "modifications",
      title: "Modifications de cette politique",
      blocks: [
        {
          type: "p",
          text: "Cette politique pourra être mise à jour si les fonctionnalités techniques ou les pratiques de traitement des données de l'application évoluent.",
        },
        {
          type: "p",
          text: "Elle sera notamment actualisée en cas d'intégration de services en ligne, de stockage cloud, de publicité, de fonctions d'analyse ou d'autres services externes.",
        },
        { type: "p", text: "La version publiée sur cette page est la version applicable." },
      ],
    },
    {
      number: "11",
      slug: "contact",
      title: "Contact",
      blocks: [
        {
          type: "p",
          text: "Pour toute question relative à la confidentialité ou au traitement des données personnelles, vous pouvez nous contacter :",
        },
        { type: "address", lines: ["Julian Böckmann"] },
        { type: "email", label: "E-mail", text: "moin@julianboeckmann.de" },
      ],
    },
  ],
  closingNote:
    "La présente politique de confidentialité s'applique exclusivement à l'application Android REFOMA Pro. Le traitement des données lié aux visites de julianboeckmann.de est distinct et peut être décrit dans une politique de confidentialité spécifique au site web.",
};

export const privacyDocuments: Partial<Record<PrivacyLanguageCode, PrivacyDocument>> = {
  de,
  en,
  fr,
  it,
  es,
};

export const fallbackPrivacyLanguage: PrivacyLanguageCode = "de";
