create database racos;
 
use racos;
 
CREATE TABLE FaceID (

    id INT PRIMARY KEY AUTO_INCREMENT, 

    nome VARCHAR(255) NOT NULL,

    codigo text NOT NULL

);
 
CREATE TABLE Materiais (

    id INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(255) NOT NULL,

    foto VARCHAR(255) NOT NULL,

    peso DECIMAL(10, 2) NOT NULL

);
 
CREATE TABLE Kit (

    id INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(255) NOT NULL,

    foto VARCHAR(255) NOT NULL,

    peso DECIMAL(10, 2) NOT NULL      

);
 
CREATE TABLE Salas (

    id INT PRIMARY KEY AUTO_INCREMENT,

    sala VARCHAR(255) NOT NULL,

    faceid_id INT,                

    FOREIGN KEY (faceid_id) REFERENCES FaceID(id)

);
 
CREATE TABLE Historicos (

    id INT PRIMARY KEY AUTO_INCREMENT,

    kit_id INT,               

    material_id INT,              

    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (kit_id) REFERENCES Kit(id),       

    FOREIGN KEY (material_id) REFERENCES Materiais(id)

);
 
CREATE TABLE Perdidos (

    id INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(255) NOT NULL,

    material_id INT,             

    FOREIGN KEY (material_id) REFERENCES Materiais(id)

);
 
 
 