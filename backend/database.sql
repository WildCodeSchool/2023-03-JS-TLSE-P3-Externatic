-- Table structure for table `admin`

CREATE TABLE
    `admin` (
        `id` int NOT NULL AUTO_INCREMENT,
        `firstname` varchar(80) NOT NULL,
        `lastname` varchar(80) NOT NULL,
        `email` varchar(100) NOT NULL,
        `hashed_password` varchar(255) NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- INSERT INTO `admin`

INSERT INTO
    `admin` (
        firstname,
        lastname,
        email,
        hashed_password
    )
VALUES (
        'Marceau',
        'Robin',
        'marceau.robin@example.com',
        '$argon2id$v=19$m=65536,t=5,p=1$CgUS/Py/i1t9BcHZd0kEOw$tjp6uEg/Yc+QZ9cvMbGsvp9y4KczDfbfr5T7BIPyywQ'
    ), (
        'Laura',
        'Colin',
        'laura.colin@example.com',
        '$argon2id$v=19$m=65536,t=5,p=1$ckU+lx71A0Y9bQB5uVIFZw$wmxXgetq5i8q8+KaMlVLQnumW7NZ93j9JFXvCN3FipE'
    ), (
        'Aurélien',
        'Pierre',
        'aurelien.pierre@example.com',
        '$argon2id$v=19$m=65536,t=5,p=1$r759xA6/8t8BcIQVdR53Mg$I/y/dOdSfufvQJoe6+hDGayfCoinSDre+AHqo81DLc8'
    ), (
        'Maëlyne',
        'Bernard',
        'maelyne.bernard@example.com',
        '$argon2id$v=19$m=65536,t=5,p=1$GFS4PXuXWrFYRKqZc6KK+Q$DTF+dfY1GGOF6ooHKdJPvSpGrkdwyRmjq4KhMIxt5no'
    ), (
        'Dylan',
        'Le Gall',
        'dylan.legall@example.com',
        '$argon2id$v=19$m=65536,t=5,p=1$OUZ/WPGeTPmTcrH0Y7KQEA$TpHrW+pKSixzA8fe+xyyJKInhQYmoipRlNKRzUG0tDk'
    ), (
        'Elliot',
        'Jean',
        'elliot.jean@example.com',
        '$argon2id$v=19$m=65536,t=5,p=1$qTomlZClmgIfCI0Q1YBvJA$O4+kl1OTQ0UY/Fmdnfw30b32ALL0TSjQr9yihiAnWIs'
    ), (
        'Léonard',
        'Roussel',
        'leonard.roussel@example.com',
        '$argon2id$v=19$m=65536,t=5,p=1$3SX+4imxrNwHx8EwVv47CA$fteV3/HnXYgLv62bGFfLvA2ZRLDDk58DF51kkoHPXO0'
    ), (
        'Juliette',
        'Lecomte',
        'juliette.lecomte@example.com',
        '$argon2id$v=19$m=65536,t=5,p=1$B223CTgVZsvFVy3f3h9V9g$ei184CYyOOtR50/uyU1K4Yuc3KDjaSdu+MWrAdQE4jU'
    );

-- Table structure for table `applicant`

CREATE TABLE
    `applicant` (
        `id` int NOT NULL AUTO_INCREMENT,
        `title_name` varchar(10) NOT NULL,
        `firstname` varchar(80) NOT NULL,
        `lastname` varchar(80) NOT NULL,
        `email` varchar(100) NOT NULL,
        `hashed_password` varchar(255) NOT NULL,
        `message` longtext,
        `city` varchar(80) DEFAULT NULL,
        `phone` varchar(10) DEFAULT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- INSERT INTO `applicant`

INSERT INTO
    `applicant` (
        title_name,
        firstname,
        lastname,
        email,
        hashed_password,
        city,
        phone
    )
VALUES (
        'Mr',
        'Jonas',
        'Brun',
        'jonas.brun@example.com',
        '$argon2id$v=19$m=65536,t=5,p=1$EUV33ASHcPDNfVQLURDANw$ZSSd/agh/TKaFupJSX6ZsRyWQBrLyEFKeW7VuYvmsdU',
        'Paris',
        '0694086528'
    ), (
        'Mr',
        'Matéo',
        'Gaillard',
        'mateo.gaillard@example.com',
        '$argon2id$v=19$m=65536,t=5,p=1$708qvAh/EH4ehKS+kaIW1g$ckIozZ5Jmo1oqXImeXhBciQl/26itycpHZq5dgIjd84',
        'Saint-Étienne',
        '0684184456'
    ), (
        'Mme',
        'Enola',
        'Roger',
        'enola.roger@example.com',
        '$argon2id$v=19$m=65536,t=5,p=1$Y9oqAvffblPJvTMIBYGfig$VMBQFiBfr/oL2Dwsy4odxwVPmC1RGHqz39wkngmde/g',
        'Boulogne-Billancourt',
        '0651214139'
    ), (
        'Mme',
        'Valentina',
        'Pierre',
        'valentina.pierre@example.com',
        '$argon2id$v=19$m=65536,t=5,p=1$rBAYhJiiJryqtmqfog5dNg$3S2kUwlVZM7hO9AOlFSAOiVIMODQtDR8Wh/dd3BSfYg',
        'Rueil-Malmaison',
        '0689394457'
    ), (
        'Mme',
        'Nina',
        'Louis',
        'nina.louis@example.com',
        '$argon2id$v=19$m=65536,t=5,p=1$rYXt/EDvaZscrbCSr9jWOA$pfRH5mUEQFFYtlxc2r3/TYarVHxbe4XIWaXEfvUfPhY',
        'Rennes',
        '0677457852'
    ), (
        'Mr',
        'Aubin',
        'Martinez',
        'aubin.martinez@example.com',
        '$argon2id$v=19$m=65536,t=5,p=1$Lknk7oaS20HukG94XM6CHQ$4tUClBRFD7cROOJkZGHOiWz5S1RqAcQx63n0Rd3iMVE',
        'Le Havre',
        '0670309100'
    ), (
        'Mr',
        'Gabin',
        'Noel',
        'gabin.noel@example.com',
        '$argon2id$v=19$m=65536,t=5,p=1$2UYwB1tIZEWIvgsAV5LKLg$DXQ5Dkqd4wDWCEAR+sf7rVM9sltflV7S1NQEDOBWLbs',
        'Colombes',
        '0623280077'
    );

-- Table structure for table `category`

CREATE TABLE
    `category` (
        `id` int NOT NULL AUTO_INCREMENT,
        `category_name` varchar(80) NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- INSERT INTO `category`

INSERT INTO
    `category` (category_name)
VALUES (
        'Design et expérience utilisateur'
    ), ('Développement informatique'), ('Sécurité informatique'), ('Data science et analytique'), ('Infrastructure et réseaux'), (
        'Gestion de projets et de produits'
    );

-- Table structure for table `company`

CREATE TABLE
    `company` (
        `id` int NOT NULL AUTO_INCREMENT,
        `name` varchar(80) NOT NULL,
        `email` varchar(100) NOT NULL,
        `hashed_password` varchar(255) NOT NULL,
        `city` varchar(80) DEFAULT NULL,
        `phone` varchar(10) DEFAULT NULL,
        `siret` varchar(14) NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- INSERT INTO `company`

INSERT INTO
    `company` (
        name,
        email,
        hashed_password,
        city,
        phone,
        siret
    )
VALUES (
        'SwiftTech Solutions',
        'info@swifttechsolutions.com',
        '$argon2id$v=19$m=65536,t=5,p=1$rOJOFx1AbSv6KBPeQI5DDw$ujD9A3B8xLAFEDIx8xOJFxZG4NYE/ArGP1OrkUbato0',
        'Toulouse',
        '0500145662',
        '12345678900001'
    ), (
        'TechPro Solutions',
        'techpro@solutions.com',
        '$argon2id$v=19$m=65536,t=5,p=1$gY+ebySw2UxbmRP8UYSIcw$Cn5FVZHKfWXkZrg0im9VErMrqtIgBSYBlKleaMM2qME',
        'Rennes',
        '0512345678',
        '12345678900010'
    ), (
        'NexusSys',
        'systeme@nexussys.com',
        '$argon2id$v=19$m=65536,t=5,p=1$2b3WLO/XfWNALNXjhsiFcg$O58/nhWUmC+Ak6Z7JpMP9ukJDlIJp5s43JEjmSxnPDc',
        'Nantes',
        '0298765432',
        '18345678958641'
    ), (
        'ExcelloMédia',
        'accueil@excllomedia.com',
        '$argon2id$v=19$m=65536,t=5,p=1$LQKVM/inRSRYZuDSep2bJQ$XFTtii5xULwtMlHOloquJuD5hY8lz/o3KyxF208SNmU',
        'Brest',
        '0245678901',
        '23456789000020'
    ), (
        'OptimaTrans',
        'optimatrans@info.com',
        '$argon2id$v=19$m=65536,t=5,p=1$CulDuVDsf3kEjILEpmyvzg$fc42Et50+oB/P/7ETSbPc4h0nkxz/VgpgaVur+gRZWo',
        'La Rochelle',
        '0234567890',
        '14561234560001'
    ), (
        'VitesseLogix',
        'vitesselogix@informations.com',
        '$argon2id$v=19$m=65536,t=5,p=1$0H7sBMX9He3Pf6Hvcz0EBA$P30UJaq3ypDrLPKrqs2SK7+U8aVBfCrB3+Un95YEAok',
        'Angers',
        '0287654321',
        '72345678900001'
    );

-- Table structure for table `company_applicant`

CREATE TABLE
    `company_applicant` (
        `id` int NOT NULL AUTO_INCREMENT,
        `company_id_company_applicant` int NOT NULL,
        `applicant_id_company_applicant` int NOT NULL,
        PRIMARY KEY (`id`),
        KEY `company_id_company_applicant_idx` (
            `company_id_company_applicant`
        ),
        KEY `applicant_id_company_applicant_idx` (
            `applicant_id_company_applicant`
        ),
        CONSTRAINT `applicant_id_company_applicant` FOREIGN KEY (
            `applicant_id_company_applicant`
        ) REFERENCES `applicant` (`id`),
        CONSTRAINT `company_id_company_applicant` FOREIGN KEY (
            `company_id_company_applicant`
        ) REFERENCES `company` (`id`)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- Table structure for table `contract_type`

CREATE TABLE
    `contract_type` (
        `id` int NOT NULL AUTO_INCREMENT,
        `contract_type_name` varchar(80) NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- INSERT INTO `contract_type`

INSERT INTO
    `contract_type` (contract_type_name)
VALUES ('CDI'), ('CDD'), ('Alternance'), ('Freelance'), ('Intérim'), ('Stage');

-- Table structure for table `offer`

CREATE TABLE
    `offer` (
        `id` int NOT NULL AUTO_INCREMENT,
        `title` varchar(80) NOT NULL,
        `company_id` int NOT NULL,
        `city` varchar(80) NOT NULL,
        `contract_type_id_offer` int NOT NULL,
        `job_responsibilities` longtext NOT NULL,
        `technical_environment` longtext NOT NULL,
        `benefits` longtext NOT NULL,
        `category_id_offer` int NOT NULL,
        PRIMARY KEY (`id`),
        KEY `company_id_idx` (`company_id`),
        KEY `id_contract_type_idx` (`contract_type_id_offer`),
        KEY `id_category_idx` (`category_id_offer`),
        CONSTRAINT `category_id_offer` FOREIGN KEY (`category_id_offer`) REFERENCES `category` (`id`),
        CONSTRAINT `company_id` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`),
        CONSTRAINT `id_contract_type` FOREIGN KEY (`contract_type_id_offer`) REFERENCES `contract_type` (`id`)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- INSERT INTO `offer`

INSERT INTO
    `offer` (
        title,
        company_id,
        city,
        contract_type_id_offer,
        job_responsibilities,
        technical_environment,
        benefits,
        category_id_offer
    )
VALUES (
        'Développeur(se) Full Stack en Technologies Web',
        1,
        'Toulouse',
        1,
        'En tant que développeur(se) Full Stack en Technologies Web au sein de notre entreprise spécialisée dans le domaine du numérique, vous aurez les responsabilités suivantes: Concevoir, développer et maintenir des applications web robustes et performantes, en mettant l''accent sur l''expérience utilisateur. Collaborer avec une équipe multidisciplinaire pour analyser les besoins des utilisateurs, concevoir des solutions techniques adaptées et les implémenter. Participer activement à la phase de test et de débogage des applications pour assurer leur qualité et leur bon fonctionnement Effectuer une veille technologique régulière afin de rester à la pointe des nouvelles tendances et technologies du secteur.',
        'Langages de programmation : JavaScript, HTML5, CSS3. Frameworks : Node.js, Angular, React. Bases de données : MySQL, MongoDB. Outils de développement : Git, JIRA, IntelliJ. Méthodologies agiles : Scrum, Kanban. Environnement de déploiement : AWS, Docker.',
        'Un environnement de travail stimulant et dynamique, au sein d''une entreprise en pleine croissance, favorisant la créativité et l''innovation. Des projets variés et passionnants qui vous permettront de développer vos compétences techniques et votre expertise dans le domaine du numérique. Une équipe de professionnels expérimentés, passionnés par leur travail et prêts à partager leurs connaissances avec vous. Des possibilités d''évolution de carrière au sein de l''entreprise, avec des programmes de formation continue et des perspectives d''avancement. Une rémunération compétitive, incluant des avantages sociaux attrayants tels qu''une assurance santé, un plan d''épargne-retraite et des congés payés. Un équilibre entre vie professionnelle et personnelle, avec des horaires flexibles et la possibilité de travailler à distance selon les projets et les besoins de l''équipe.',
        2
    ), (
        'Designer UX/UI',
        2,
        'Rennes',
        2,
        'En tant que Designer UX/UI, votre rôle sera de créer des expériences utilisateur exceptionnelles en concevant des interfaces intuitives et esthétiquement attrayantes. Vos principales responsabilités seront les suivantes : Effectuer des recherches approfondies sur les besoins des utilisateurs et les tendances du marché pour développer des interfaces conviviales. Concevoir des wireframes, des prototypes interactifs et des maquettes visuelles en utilisant des outils tels que Sketch, Adobe XD ou Figma. Collaborer avec les équipes de développement pour assurer une intégration fluide entre le design et le développement. Effectuer des tests utilisateurs et itérer sur les designs en fonction des feedbacks reçus. Veiller à la cohérence visuelle et à l''accessibilité des interfaces sur différentes plateformes (web, mobile, etc.).',
        'Outils de conception : Sketch, Adobe XD, Figma.  Langages front-end : HTML5, CSS3, JavaScript. Méthodologies de design : Design Thinking, User-Centered Design. Technologies d''animation et d''interaction : CSS, JavaScript, React, Vue.js.',
        'Travailler au sein d''une équipe créative et collaborative, composée de designers talentueux et passionnés. Participer à des projets variés et innovants dans un environnement dynamique et en constante évolution. Accéder à des formations et à des ressources pour vous permettre de développer vos compétences en design et en expérience utilisateur. Bénéficier d''une flexibilité horaire et de la possibilité de travailler à distance. Un package de rémunération compétitif comprenant des avantages sociaux attractifs.',
        1
    ), (
        'Expert(e) en Sécurité Informatique',
        3,
        'Nantes',
        3,
        'En tant qu''Expert(e) en Sécurité Informatique, vous serez responsable de la protection des systèmes et des données de notre entreprise contre les menaces et les attaques. Voici les principales missions du poste : Évaluer et améliorer en permanence la sécurité des infrastructures et des applications en identifiant les vulnérabilités et en proposant des solutions adaptées. Développer et mettre en œuvre des politiques de sécurité, des plans d''urgence et des procédures pour assurer une protection optimale. Surveiller en continu les systèmes et les réseaux pour détecter les incidents de sécurité et réagir rapidement en cas de besoin. Sensibiliser les employés à la sécurité informatique à travers des formations et des campagnes de sensibilisation.',
        'Systèmes d''exploitation : Windows, Linux. Outils de sécurité : Pare-feu, Antivirus, IDS/IPS, SIEM. Langages de script : Python, PowerShell. Normes de sécurité : ISO 27001, NIST, OWASP. Méthodologies de test de pénétration : Kali Linux, Metasploit.',
        'Travailler au sein d''une équipe spécialisée en sécurité informatique. Faire partie d''une entreprise qui investit dans la sécurité et valorise votre expertise. Participer à des projets de sécurité passionnants et variés. Bénéficier de formations et de certifications pour développer vos compétences en sécurité informatique. Un package de rémunération compétitif incluant des avantages sociaux.',
        3
    ), (
        'Data Scientist',
        4,
        'Brest',
        4,
        'En tant que Data Scientist, vous serez responsable de l''analyse des données pour fournir des insights précieux et des solutions basées sur les données. Vos principales responsabilités seront les suivantes : Collecter, nettoyer et préparer les données pour l''analyse. Développer et mettre en œuvre des modèles prédictifs et des algorithmes d''apprentissage automatique pour résoudre des problèmes complexes. Interpréter et communiquer les résultats de l''analyse de données aux parties prenantes et recommander des actions basées sur les insights obtenus. Collaborer avec les équipes métier pour comprendre leurs besoins en matière d''analyse de données et développer des solutions adaptées. Maintenir une veille technologique constante pour rester à jour sur les dernières tendances et techniques en matière de data science.',
        'Langages de programmation : Python, R. Frameworks et bibliothèques : TensorFlow, PyTorch, scikit-learn, NumPy, pandas.',
        'Travailler au sein d''une équipe de data scientists passionnés par l''analyse de données. Participer à des projets variés et innovants, dans des domaines tels que le machine learning, l''analyse prédictive et l''optimisation des processus. Accéder à des formations et à des ressources pour développer vos compétences en data science. Bénéficier d''un environnement de travail stimulant et collaboratif, favorisant l''échange d''idées et l''innovation. Un package de rémunération compétitif comprenant des avantages sociaux attractifs.',
        4
    ), (
        'Ingénieur Réseaux et Infrastructure',
        5,
        'La Rochelle',
        5,
        'En tant qu''Ingénieur Réseaux et Infrastructure, vous serez responsable de la conception, du déploiement et de la maintenance des réseaux et des infrastructures de notre entreprise. Vos principales responsabilités seront les suivantes : Concevoir et mettre en place des architectures réseau robustes, sécurisées et évolutives. Configurer, gérer et optimiser les équipements réseau, tels que les routeurs, les commutateurs et les pare-feu. Assurer la disponibilité et la performance des services réseau en surveillant et en diagnostiquant les problèmes. Collaborer avec les équipes de développement pour garantir l''intégration harmonieuse des applications avec l''infrastructure. Effectuer des sauvegardes régulières des données et mettre en place des plans de reprise après sinistre.',
        'Protocoles réseau : TCP/IP, VLAN, VPN. Équipements réseau : Cisco, Juniper, Palo Alto. Services réseau : DNS, DHCP, Load Balancing. Systèmes d''exploitation : Windows Server, Linux. Virtualisation : VMware, Hyper-V.',
        'Travailler au sein d''une équipe d''experts en réseaux et en infrastructure. Participer à des projets d''envergure, avec des défis techniques stimulants. Accéder à des formations et à des certifications pour développer vos compétences en réseaux et en infrastructure. Bénéficier d''un environnement de travail moderne et d''outils performants pour mener à bien vos missions. Un package de rémunération compétitif comprenant des avantages sociaux attractifs.',
        5
    ), (
        'Chef de Projet',
        6,
        'Angers',
        6,
        'En tant que Chef de Projet, vous serez responsable de la gestion et de la coordination de projets numériques au sein de notre entreprise. Voici les principales missions du poste : Planifier, organiser et superviser les différentes phases des projets, en respectant les délais, le budget et les objectifs fixés. Coordonner les équipes multidisciplinaires (développeurs, designers, experts techniques) et assurer une communication fluide entre les différents acteurs. Évaluer les risques potentiels et mettre en place des mesures d''atténuation appropriées. Suivre et rapporter l''avancement des projets, en identifiant les éventuels écarts par rapport au plan initial et en proposant des ajustements si nécessaire.',
        'Méthodologies de gestion de projet : Agile (Scrum, Kanban), Waterfall. Outils de gestion de projet : JIRA, Trello, Microsoft Project. Collaboration en ligne : Slack, Microsoft Teams.',
        'Travailler dans un environnement dynamique et stimulant, au sein d''une équipe engagée et passionnée par la gestion de projets. Participer à des projets variés et innovants, dans des domaines tels que le développement logiciel, le marketing numérique et la transformation digitale. Accéder à des formations et à des certifications en gestion de projet pour développer vos compétences et évoluer professionnellement. Bénéficier d''une reconnaissance et d''une valorisation de vos compétences en gestion de projet. Un package de rémunération compétitif comprenant des avantages sociaux attractifs.',
        6
    );

-- Table structure for table `offer_category`

CREATE TABLE
    `offer_category` (
        `id` int NOT NULL AUTO_INCREMENT,
        `offer_id_offer_category` int NOT NULL,
        `category_id_offer_category` int NOT NULL,
        PRIMARY KEY (`id`),
        KEY `category_id_idx` (`category_id_offer_category`),
        KEY `offer_id_idx` (`offer_id_offer_category`),
        CONSTRAINT `category_id` FOREIGN KEY (`category_id_offer_category`) REFERENCES `category` (`id`),
        CONSTRAINT `offer_id` FOREIGN KEY (`offer_id_offer_category`) REFERENCES `offer` (`id`)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- Table structure for table `applicant_offer_application`

CREATE TABLE
    `applicant_offer_application` (
        `id` int NOT NULL AUTO_INCREMENT,
        `applicant_id_applicant_offer_application` int NOT NULL,
        `offer_id_applicant_offer_application` int NOT NULL,
        PRIMARY KEY (`id`),
        KEY `applicant_id_applicant_offer_application_idx` (
            `applicant_id_applicant_offer_application`
        ),
        KEY `offer_id_applicant_offer_application_idx` (
            `offer_id_applicant_offer_application`
        ),
        CONSTRAINT `applicant_id_applicant_offer_application` FOREIGN KEY (
            `applicant_id_applicant_offer_application`
        ) REFERENCES `applicant` (`id`),
        CONSTRAINT `offer_id_applicant_offer_application` FOREIGN KEY (
            `offer_id_applicant_offer_application`
        ) REFERENCES `offer` (`id`)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- Table structure for table `applicant_offer_favorites`

CREATE TABLE
    `applicant_offer_favorites` (
        `id` int NOT NULL AUTO_INCREMENT,
        `applicant_id_applicant_offer_favorites` int NOT NULL,
        `offer_id_applicant_offer_favorites` int NOT NULL,
        PRIMARY KEY (`id`),
        KEY `applicant_id_applicant_offer_favorites_idx` (
            `applicant_id_applicant_offer_favorites`
        ),
        KEY `offer_id_applicant_offer_favorites_idx` (
            `offer_id_applicant_offer_favorites`
        ),
        CONSTRAINT `applicant_id_applicant_offer_favorites` FOREIGN KEY (
            `applicant_id_applicant_offer_favorites`
        ) REFERENCES `applicant` (`id`),
        CONSTRAINT `offer_id_applicant_offer_favorites` FOREIGN KEY (
            `offer_id_applicant_offer_favorites`
        ) REFERENCES `offer` (`id`)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;