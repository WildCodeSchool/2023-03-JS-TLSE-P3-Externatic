-- Table structure for table `admin`

CREATE TABLE `admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(80) NOT NULL,
  `lastname` varchar(80) NOT NULL,
  `email` varchar(100) NOT NULL,
  `hashed_password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- INSERT INTO `admin`

INSERT INTO `admin` (firstname, lastname, email, hashed_password) VALUES ('Marceau', 'Robin', 'marceau.robin@example.com', '$argon2id$v=19$m=65536,t=5,p=1$CgUS/Py/i1t9BcHZd0kEOw$tjp6uEg/Yc+QZ9cvMbGsvp9y4KczDfbfr5T7BIPyywQ'), ('Laura', 'Colin', 'laura.colin@example.com', '$argon2id$v=19$m=65536,t=5,p=1$ckU+lx71A0Y9bQB5uVIFZw$wmxXgetq5i8q8+KaMlVLQnumW7NZ93j9JFXvCN3FipE'), ('Aurélien', 'Pierre', 'aurelien.pierre@example.com','$argon2id$v=19$m=65536,t=5,p=1$r759xA6/8t8BcIQVdR53Mg$I/y/dOdSfufvQJoe6+hDGayfCoinSDre+AHqo81DLc8'), ('Maëlyne','Bernard','maelyne.bernard@example.com','$argon2id$v=19$m=65536,t=5,p=1$GFS4PXuXWrFYRKqZc6KK+Q$DTF+dfY1GGOF6ooHKdJPvSpGrkdwyRmjq4KhMIxt5no'), ('Dylan', 'Le Gall', 'dylan.legall@example.com', '$argon2id$v=19$m=65536,t=5,p=1$OUZ/WPGeTPmTcrH0Y7KQEA$TpHrW+pKSixzA8fe+xyyJKInhQYmoipRlNKRzUG0tDk'), ('Elliot','Jean','elliot.jean@example.com','$argon2id$v=19$m=65536,t=5,p=1$qTomlZClmgIfCI0Q1YBvJA$O4+kl1OTQ0UY/Fmdnfw30b32ALL0TSjQr9yihiAnWIs'), ('Léonard', 'Roussel', 'leonard.roussel@example.com', '$argon2id$v=19$m=65536,t=5,p=1$3SX+4imxrNwHx8EwVv47CA$fteV3/HnXYgLv62bGFfLvA2ZRLDDk58DF51kkoHPXO0'), ('Juliette', 'Lecomte', 'juliette.lecomte@example.com', '$argon2id$v=19$m=65536,t=5,p=1$B223CTgVZsvFVy3f3h9V9g$ei184CYyOOtR50/uyU1K4Yuc3KDjaSdu+MWrAdQE4jU');

-- Table structure for table `applicant`

CREATE TABLE `applicant` (
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- INSERT INTO `applicant`

INSERT INTO `applicant` (title_name, firstname, lastname, email, hashed_password, city, phone) VALUES ('Mr', 'Jonas', 'Brun', 'jonas.brun@example.com', '$argon2id$v=19$m=65536,t=5,p=1$EUV33ASHcPDNfVQLURDANw$ZSSd/agh/TKaFupJSX6ZsRyWQBrLyEFKeW7VuYvmsdU', 'Paris', '0694086528'), ('Mr', 'Matéo', 'Gaillard', 'mateo.gaillard@example.com', '$argon2id$v=19$m=65536,t=5,p=1$708qvAh/EH4ehKS+kaIW1g$ckIozZ5Jmo1oqXImeXhBciQl/26itycpHZq5dgIjd84', 'Saint-Étienne', '0684184456'), ('Mme', 'Enola', 'Roger', 'enola.roger@example.com', '$argon2id$v=19$m=65536,t=5,p=1$Y9oqAvffblPJvTMIBYGfig$VMBQFiBfr/oL2Dwsy4odxwVPmC1RGHqz39wkngmde/g', 'Boulogne-Billancourt', '0651214139'), ('Mme', 'Valentina', 'Pierre', 'valentina.pierre@example.com', '$argon2id$v=19$m=65536,t=5,p=1$rBAYhJiiJryqtmqfog5dNg$3S2kUwlVZM7hO9AOlFSAOiVIMODQtDR8Wh/dd3BSfYg', 'Rueil-Malmaison', '0689394457'), ('Mme', 'Nina', 'Louis', 'nina.louis@example.com', '$argon2id$v=19$m=65536,t=5,p=1$rYXt/EDvaZscrbCSr9jWOA$pfRH5mUEQFFYtlxc2r3/TYarVHxbe4XIWaXEfvUfPhY', 'Rennes', '0677457852'), ('Mr', 'Aubin', 'Martinez', 'aubin.martinez@example.com', '$argon2id$v=19$m=65536,t=5,p=1$Lknk7oaS20HukG94XM6CHQ$4tUClBRFD7cROOJkZGHOiWz5S1RqAcQx63n0Rd3iMVE', 'Le Havre', '0670309100'), ('Mr', 'Gabin', 'Noel', 'gabin.noel@example.com', '$argon2id$v=19$m=65536,t=5,p=1$2UYwB1tIZEWIvgsAV5LKLg$DXQ5Dkqd4wDWCEAR+sf7rVM9sltflV7S1NQEDOBWLbs', 'Colombes', '0623280077');

-- Table structure for table `category`

CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- INSERT INTO `category`
INSERT INTO `category` (name) VALUES ('Design et expérience utilisateur'), ('Développement informatique'), ('Sécurité informatique'), ('Data science et analytique'), ('Infrastructure et réseaux'), ('Gestion de projets et de produits');

-- Table structure for table `company`
CREATE TABLE `company` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `email` varchar(100) NOT NULL,
  `hashed_password` varchar(255) NOT NULL,
  `city` varchar(80) DEFAULT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `siret` varchar(14) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- INSERT INTO `company`
INSERT INTO `company` (name, email, hashed_password, city, phone, siret) VALUES ('SwiftTech Solutions', 'info@swifttechsolutions.com', '$argon2id$v=19$m=65536,t=5,p=1$rOJOFx1AbSv6KBPeQI5DDw$ujD9A3B8xLAFEDIx8xOJFxZG4NYE/ArGP1OrkUbato0', 'Toulouse', '0500145662', '12345678900001'), ('TechPro Solutions', 'techpro@solutions.com', '$argon2id$v=19$m=65536,t=5,p=1$gY+ebySw2UxbmRP8UYSIcw$Cn5FVZHKfWXkZrg0im9VErMrqtIgBSYBlKleaMM2qME', 'Rennes', '0512345678', '12345678900010'), ('NexusSys', 'systeme@nexussys.com', '$argon2id$v=19$m=65536,t=5,p=1$2b3WLO/XfWNALNXjhsiFcg$O58/nhWUmC+Ak6Z7JpMP9ukJDlIJp5s43JEjmSxnPDc', 'Nantes', '0298765432', '18345678958641'), ('ExcelloMédia', 'accueil@excllomedia.com', '$argon2id$v=19$m=65536,t=5,p=1$LQKVM/inRSRYZuDSep2bJQ$XFTtii5xULwtMlHOloquJuD5hY8lz/o3KyxF208SNmU', 'Brest', '0245678901', '23456789000020'), ('OptimaTrans', 'optimatrans@info.com', '$argon2id$v=19$m=65536,t=5,p=1$CulDuVDsf3kEjILEpmyvzg$fc42Et50+oB/P/7ETSbPc4h0nkxz/VgpgaVur+gRZWo', 'La Rochelle', '0234567890', '14561234560001'), ('VitesseLogix', 'vitesselogix@informations.com', '$argon2id$v=19$m=65536,t=5,p=1$0H7sBMX9He3Pf6Hvcz0EBA$P30UJaq3ypDrLPKrqs2SK7+U8aVBfCrB3+Un95YEAok', 'Angers', '0287654321', '72345678900001');

-- Table structure for table `company_applicant`

CREATE TABLE `company_applicant` (
  `id` int NOT NULL AUTO_INCREMENT,
  `company_id_company_applicant` int NOT NULL,
  `applicant_id_company_applicant` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `company_id_company_applicant_idx` (`company_id_company_applicant`),
  KEY `applicant_id_company_applicant_idx` (`applicant_id_company_applicant`),
  CONSTRAINT `applicant_id_company_applicant` FOREIGN KEY (`applicant_id_company_applicant`) REFERENCES `applicant` (`id`),
  CONSTRAINT `company_id_company_applicant` FOREIGN KEY (`company_id_company_applicant`) REFERENCES `company` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table structure for table `contract_type`

CREATE TABLE `contract_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- INSERT INTO `contract_type`
INSERT INTO `contract_type` (name) VALUES ('CDI'),('CDD'),('Alternance'),('Freelance'),('Intérim'),('Stage');

-- Table structure for table `offer`

CREATE TABLE `offer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(80) NOT NULL,
  `company_id` int NOT NULL,
  `city` varchar(80) NOT NULL,
  `contract_type_id_offer` int NOT NULL,
  `job_responsibilities` longtext NOT NULL,
  `technical _environment` longtext NOT NULL,
  `benefits` longtext NOT NULL,
  PRIMARY KEY (`id`),
  KEY `company_id_idx` (`company_id`),
  KEY `id_contract_type_idx` (`contract_type_id_offer`),
  CONSTRAINT `company_id` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`),
  CONSTRAINT `id_contract_type` FOREIGN KEY (`contract_type_id_offer`) REFERENCES `contract_type` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table structure for table `offer_category`

CREATE TABLE `offer_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `offer_id_offer_category` int NOT NULL,
  `category_id_offer_category` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id_idx` (`category_id_offer_category`),
  KEY `offer_id_idx` (`offer_id_offer_category`),
  CONSTRAINT `category_id` FOREIGN KEY (`category_id_offer_category`) REFERENCES `category` (`id`),
  CONSTRAINT `offer_id` FOREIGN KEY (`offer_id_offer_category`) REFERENCES `offer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table structure for table `applicant_offer_application`

CREATE TABLE `applicant_offer_application` (
  `id` int NOT NULL AUTO_INCREMENT,
  `applicant_id_applicant_offer_application` int NOT NULL,
  `offer_id_applicant_offer_application` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `applicant_id_applicant_offer_application_idx` (`applicant_id_applicant_offer_application`),
  KEY `offer_id_applicant_offer_application_idx` (`offer_id_applicant_offer_application`),
  CONSTRAINT `applicant_id_applicant_offer_application` FOREIGN KEY (`applicant_id_applicant_offer_application`) REFERENCES `applicant` (`id`),
  CONSTRAINT `offer_id_applicant_offer_application` FOREIGN KEY (`offer_id_applicant_offer_application`) REFERENCES `offer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table structure for table `applicant_offer_favorites`

CREATE TABLE `applicant_offer_favorites` (
  `id` int NOT NULL AUTO_INCREMENT,
  `applicant_id_applicant_offer_favorites` int NOT NULL,
  `offer_id_applicant_offer_favorites` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `applicant_id_applicant_offer_favorites_idx` (`applicant_id_applicant_offer_favorites`),
  KEY `offer_id_applicant_offer_favorites_idx` (`offer_id_applicant_offer_favorites`),
  CONSTRAINT `applicant_id_applicant_offer_favorites` FOREIGN KEY (`applicant_id_applicant_offer_favorites`) REFERENCES `applicant` (`id`),
  CONSTRAINT `offer_id_applicant_offer_favorites` FOREIGN KEY (`offer_id_applicant_offer_favorites`) REFERENCES `offer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;