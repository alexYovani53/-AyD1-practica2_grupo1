
create database ayd1_p2;

use ayd1_p2;

CREATE TABLE USUARIO 
(
 id_usuario INTEGER NOT NULL  primary key, 
 nombre VARCHAR (100) NOT NULL , 
 contrasena VARCHAR (75) NOT NULL , 
 foto mediumtext, 
 usuario VARCHAR (50) NOT NULL
);
    
CREATE TABLE amistad 
    (
		id_amigo INTEGER NOT NULL auto_increment primary key, 
		id_usuario1 INTEGER NOT NULL , 
		id_usuario2 INTEGER NOT NULL ,
        aceptar integer not null,
		FOREIGN KEY   ( id_usuario1 ) REFERENCES USUARIO  ( id_usuario ),	
		FOREIGN KEY   ( id_usuario2 ) REFERENCES USUARIO  ( id_usuario ) 
    );

CREATE TABLE publicacion 
    (
		 id_publicacion INTEGER NOT NULL auto_increment primary key, 
		 publicacion VARCHAR (250) NOT NULL , 
		 imagen mediumtext NOT NULL , 
		 id_usuario INTEGER NOT NULL,
         fecha datetime,
		 
		FOREIGN KEY   ( id_usuario ) REFERENCES USUARIO  ( id_usuario ) 
    );

	