---
tags: Ayd1, USAC, 1S2022, Practica2
---

# Practica 2
> ### Integrantes
> |No.|Carné| Nombre |
> |---|---|---|
> |1|201602912| Alex Yovani Jerónimo Tomás|
> |2|201800722| José Daniel Velásquez Orozco |
> |3|201314808| Leslie Fabiola Morales González|
> |4|201503906| Gerson Gabriel Reyes Melgar|
> |5|201806838| Elian Saúl Estrada Urbina|


## Planificación

<details><summary>Planificación(+)</summary>

<p>
    
Se realizaron reuniones virtuales por medio de google meet, en las cuales se utilizó el proceso SCRUM, siguiendo los pasos planning, implementation, review y retrospect. Partiendo del sprint backlog y llegando a la definición de lo que fue completado. 
    
Las reuniones se encuentran en el siguiente enlace: [Reuniones](https://drive.google.com/drive/folders/1liC52_LGLXCAkWQ5dOln00NB_zzdqN5q)
    
![](https://i.imgur.com/1GIp6ER.png)

Los requisitos sobre los cuales trabajamos se desglosan de la siguiente manera:    
    
Funcionales:
    
ACCESO
* Para registrarse los datos a ingresar son Usuario, Nombre Completo, Contraseña e imagien de foto de perfil.
* Para registrarse en la página, el usuario debe confirmar su contraseña al ingresarla dos veces y el sistema verificará que sea correcta.
* Para que un usuario pueda acceder, debe ingresar su nombre de usuario y contraseña. 
    
PUBLICACIONES
* El usuario podrá crear publicaciones que serán visibles para otros usuarios que hayan aceptado amistad y para el mismo. 
* Las publicaciones se mostrarán en una pantalla de inicio y serán ordenadas de la mas reciente a la mas antigua.
    
AMISTADES
* El usuario tendrá la posibilidad de agregar a otros usuarios como amigos en una sección donde tendrá acceso a las personas que no han aceptado o solicitado su amistad. 
* El usuario podrá aceptar o rechazar las solicitudes de amistad que reciba en su perfil. 
    
PERFIL
* El usuario debe podr observar sus datos, conformados por: Nombre completo, Nombre de usuario y Foto de perfil.
* El usuario podrá modificar los datos anteriores solamente cuando ingrese la contraseña correcta y anteriormente registrada. 
    
No funcionales:
    
* Los permisos de acceso solamente podrán ser manejados por el administrador.
* Unicamente el usuario que es dueño de un perfil podrá aceptar o denegar solicitudes de amistad.
* El usuario podra crear publicaciones unicamente bajo su perfil y no bajo el de algún otro usuario. 
* Unicamente el propietario de la cuenta podrá observar los datos de su perfil y no tendrá acceso a las contraseñas del resto de los usuarios. 

</p>

</details>

## Codificación

<details><summary>Codificación(+)</summary>
<p>
    
Para la codificación se trabajo con Node.js y el framework para aplicaciones web, Angular.
    
![](https://i.imgur.com/gFBHQS2.png)
    
Por otra parte, para el versionamiento se utilizó un repositorio en gitlab, en el cual se trabajó un arbol de versionamiento con diferentes ramas, asignadas de acuerdo a los modulos y features a lanzar. Dicho repositorio se encuentra en la siguiente dirección: 
    
[Repositorio Grupo 1](https://gitlab.com/usacreyes/practica2_grupo1.git)
    
![](https://i.imgur.com/oEtJ1cc.png)

    
Las ramas utilizadas se desglozan de la siguiente manera: 

![](https://i.imgur.com/Z2newL5.png)

    
</p>
    
 </details>

## Compilación

<details><summary>Compilación(+)</summary>
<p>
    
Para el entorno de la aplicación durante el desarrollo trabajamos de modo local. El frontend fue trabajado en el puerto 4200 y el backend en el puerto 1337. El manejo de la base de datos fue realizado por medio de MySQL y AWS. 
    
![](https://i.imgur.com/x9nyG07.png)

    
</p>
</details>
 
## Prueba

<details><summary>Prueba(+)</summary>
Para las pruebas se utilizó Chai y C8 de code coverage. De esta manera nos fue posible realizar pruebas unitarias sobre los procesos establecidos en backend. 
    
![](https://i.imgur.com/bKWSNi8.png)
</details>


## Puesta en marcha

<details><summary>Puesta en marcha(+)</summary>
<p>
        
El seguimiento y la gestión de modulos se realizó por medio de un tablero en la herramienta Trello del cual se adjunta una visualización a continuación: 
    
![](https://i.imgur.com/OyZ0FYt.jpg)
    
</p>  
</details>
 
 
## Funcionamiento

<details><summary>Funcionamiento(+)</summary>
<p>
    
Pruebas Unitarias
    
### Get User

Prueba realizada para la función que devuelve un usuario por medio del ingreso de sus credenciales.
    
![](https://i.imgur.com/0bZBPm3.png)

### Get Post

 Esta prueba fue realizada sobre la función que obtiene las publicaciones previamente realizadas que son visibles para el usuario en cuestión. 
    
![](https://i.imgur.com/X5uk85C.png)

### Agree Request
    
Prueba realizada sobre el método que permite aceptar una amistad ya antes solicitada. 
    
![](https://i.imgur.com/1jmB6eO.png)

### Show Friends

Esta prueba fue realizada sobre el método que devuelve los nombres de todos las personas con quienes ya se ha aceptado una amistad. 

![](https://i.imgur.com/p7e2TFX.png)

    
### addPost

Prueba realizada para la función que crea una publicación, esta es almacedada en la base de datos junto con los valores que la referencian hacia el usuario que la realizó. 
    
![Image text](https://i.imgur.com/yvsU0sy.png) 
    
### Login

Prueba realizada sobre el método que permite verificar que el usuario y la contraseña son validos y coinciden para poder ingresar al perfil en cuestión. 

![](https://i.imgur.com/7iZkkjh.png)

### Actualizar Perfil

Actualizar perfil, permite cambiar las propiedades de un usuario registrado. 
    
![](https://i.imgur.com/65AMzmF.png)

    
### Enviar Solicitud

Esta funcionalidad, envia una solicitud de amistad de la persona que esta, actualmente logueada en el sistema, hacia otra persona registrada.

![](https://i.imgur.com/9EPfAWW.png)
    
</p>
</details>
 
  
## Supervisión

<details><summary>Supervisión(+)</summary>
<p>
    
Una vez que cada integrante completó sus tareas asignadas, y se realizaron las pruebas unitarias, se trabajaron los bugfix para realizar cualquier arreglo necesario que permitiera el funcionamiento correcto de la aplicación.
    
![](https://i.imgur.com/0YoopBD.png)   
</p>
</details>