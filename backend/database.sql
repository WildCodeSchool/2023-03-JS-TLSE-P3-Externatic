-- Table structure for table `admin`

CREATE TABLE `admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(80) NOT NULL,
  `lastname` varchar(80) NOT NULL,
  `email` varchar(100) NOT NULL,
  `hashed_password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- INSERT INTO `admin`

INSERT INTO `admin` VALUES (1,' Marceau ','Robin','marceau.robin@example.com','757575'),(2,'Laura','Colin','laura.colin@example.com','maxwell'),(3,'Aurélien','Pierre','aurelien.pierre@example.com','cessna'),(4,'Maëlyne','Bernard','maelyne.bernard@example.com','tennis'),(5,'Dylan','Le Gall','dylan.legall@example.com','bike'),(6,'Elliot','Jean','elliot.jean@example.com','5252'),(7,'Léonard','Roussel','leonard.roussel@example.com','middle'),(8,'Juliette','Lecomte','juliette.lecomte@example.com','pppppppp');

-- Table structure for table `applicant`

CREATE TABLE `applicant` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title_name` varchar(10) NOT NULL,
  `firstname` varchar(80) NOT NULL,
  `lastname` varchar(80) NOT NULL,
  `email` varchar(100) NOT NULL,
  `hashed_password` varchar(80) NOT NULL,
  `message` varchar(255) DEFAULT NULL,
  `city` varchar(80) DEFAULT NULL,
  `phone` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- INSERT INTO `applicant`

INSERT INTO `applicant` VALUES (11,'Mr','Jonas','Brun','jonas.brun@example.com','pa55word',NULL,'Paris','0694086528'),(12,'Mr','Matéo','Gaillard','mateo.gaillard@example.com','avatar',NULL,'Saint-Étienne','0684184456'),(13,'Mme','Enola','Roger','enola.roger@example.com','guiness',NULL,'Boulogne-Billancourt','0651214139'),(14,'Mme','Valentina','Pierre','valentina.pierre@example.com','1919',NULL,'Rueil-Malmaison','0689394457'),(15,'Mme','Nina','Louis','nina.louis@example.com','hammer',NULL,'Rennes','0677457852'),(16,'Mme','Thibaut','Menard','thibaut.menard@example.com','alatam',NULL,'Toulon','0687499001'),(17,'Mr','Aubin','Martinez','aubin.martinez@example.com','sneakers',NULL,'Le Havre','0670309100'),(18,'Mr','Gabin','Noel','gabin.noel@example.com','coke',NULL,'Colombes','0623280077'),(19,'Mme','Valentine','Michel','valentine.michel@example.com','boating',NULL,'Lyon','0620453229'),(20,'Mr','Titouan','Colin','titouan.colin@example.com','andrews',NULL,'Poitiers','0649437248');

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


-- Table structure for table `category`

CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- INSERT INTO `category`
INSERT INTO `category` VALUES (1,'Design et expérience utilisateur'),(2,'Développement informatique'),(3,'Sécurité informatique'),(4,'Data science et analytique'),(5,'Infrastructure et réseaux'),(6,'Gestion de projets et de produits');

-- Table structure for table `company`
CREATE TABLE `company` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `email` varchar(100) NOT NULL,
  `hashed_password` varchar(80) NOT NULL,
  `city` varchar(80) DEFAULT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `siret` varchar(14) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- INSERT INTO `company`
INSERT INTO `company` VALUES (1,'SwiftTech Solutions','info@swifttechsolutions.com','martini','Toulouse','0500145662','12345678900001'),(2,'TechPro Solutions','techpro@solutions.com','deerhunt','Rennes','0512345678','12345678900010'),(3,'NexusSys','systeme@nexussys.com','frogman','Nantes','0298765432','18345678958641'),(4,'ExcelloMédia','accueil@excllomedia.com','kristen','Brest','0245678901','23456789000020'),(5,'OptimaTrans','optimatrans@info.com','andromed','La Rochelle','0234567890','14561234560001'),(6,'VitesseLogix','vitesselogix@informations.com','puffy','Angers','0287654321','72345678900001');

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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- INSERT INTO `contract_type`
INSERT INTO `contract_type` VALUES (1,'CDI'),(2,'CDD'),(3,'Alternance'),(4,'Freelance'),(5,'Intérim');

-- Table structure for table `offer`

CREATE TABLE `offer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(80) NOT NULL,
  `company_id` int NOT NULL,
  `city` varchar(80) NOT NULL,
  `contract_type_id_offer` int NOT NULL,
  `description` longtext NOT NULL,
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
