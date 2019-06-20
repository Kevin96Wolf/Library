# Library project Laravel 5.7 + Angular 6 | Del Campo Campa Kevin Daniel
## Descripción
Proyecto Library con operaciones básicas http y requisitos de diseño especificos, desarrollado en Laravel  `Backend` + `MysSql` `utilizando ELOQUENT ORM`
y Angular `BackEnd`.`
> NOTA: Si se descarga el repositorio la carpeta dentro del rar renombrarla como `Library` o bien si se descarga via git asegurarse que la carpeta que contiene los archivos sea llamada `Library`.

## Contenido
- [Instalacion](#instalacion)
- [FrontEnd](#frontEnd)
- [BackEnd](#BackEnd)

## Instalacion
### Laravel

Copia / recupera la carpeta `Library` del repositorio dentro de un servidor(de preferencia local) que soporte php en su version actual y Laravel 5.7,la carpeta `Library` representa el proyecto  Laravel , situala en la carpeta `htdocs` (si se esta trabajando en XAMPP  ) o en su correspondiente herramienta.

`La configuración e importación del esquema de base de datos se encuentra en el apartado BackEnd`
> NOTA: Para comprobar que laravel esta funcionando correctamente en el servidor, la ruta correspondiente debe ser `http://localhost/Library/public/  ` o apuntar a `Library/public`

> NOTA: Si la ruta al servidor apunta a otra dirección revisa el apartado de Angular para su configuración `

### Angular requisitos
- Angular version 6
- Angular material , ngbBoostrap

> NOTA: El repositorio incluye estas librerias , si existiera un error favor de instalarlos.


 > Para Angular material , situado en /Library/Client en linea de     comando   ejecuta npm install --save @angular/material @angular/cdk y el  comando
    npm install --save @angular/animations

> para ngb-Boostrap npm install --save @ng-bootstrap/ng-bootstrap
### Angular instalación proyecto
Situado en `/Library/client` ejecute en linea de comandos `npm install` posteriormente `ng serve`
> Para comprobar su funcionamiento acceda a `http://localhost:4200` al no mostrar nada checar el estatus de la linea de comandos o el navegador correspondiente

# BackEnd

Dentro de la carpeta `Library` situarse en el archivo `.env`
configuralo al ambiente de desarrollo correspondiente.
```html
DB_CONNECTION=mysql
DB_HOST=127.0.0.1  /Cambia a tu servivor asi apunta a localHost
DB_PORT=3306      /Cambia a tu puerto
DB_DATABASE=library /Nombre del esquema de base de datos
DB_USERNAME=root    /Usuario correspondiente  al entorno
DB_PASSWORD=        /password entorno
```
Dentro del gestor de base de datos(PHPMYADMIN) crea un esquema llamado
`library` el archivo de importacion se encuetra en en la raiz de `Library` con el nombre `library.sql` , crea el esquema y posteriormente importa el archivo , debe general las tablas y tuplas correspondientes
### Datos de interes

El esquema fue creado a traves de comandos `php artisan ...` los cuales se encuentran situados dentro de `Library`

Las tablas o migraciones se encuentran definidas en `/Library/database/migrations`

Los modelos se encuentran definidos en `/Library/app`

Los controladores se encuentran en  `/Library/app/Http/Controllers`

La relación entre modelo vista y controlador , esta definida en `/Library/routes/api.php` dentro del archivo se especifican las rutas al servidor ej:
> http://localhost/Library/public/api/get-user

### Problemas con inserción o eliminación de imagenes

Si el servidor no concuerda con la ruta "http://localhost/Library" en el controlador  BookCategoryController situado en `/Library/app/Http/Controllers/BookController.php` cambia la ruta correspondiente  localhost por otra ej: localhost:8080/Library <--Tu servidor
```php
 56  $path = "http://localhost/Library/storage/app/" . $request->image->store('public');
 108 Storage::delete('public/'. ltrim($request->urlImage, 'http://localhost/Library/storage/app/public/')  );
```
# FrontEnd
Dentro de `/Library/Client` se encuentran los archivos correspondientes al proyecto en angular.
## Service (Importante)
El servicio encargado de realizar las peticiones al servidor Laravel se encuentra definido en `/Library/client/app/services/services.service.ts` cambia la ruta si se esta utilizando un servidor diferente ej:
http://localhost:8080/Library/public
```javascritp
     url="http://localhost/Library/public";
```
Cualquier duda o detalle quedo a sus ordenes 0446182216437 kevindcisc@gmail.com
# Por el momento es todo, les agradezco esta oportunidad y espero continuemos en contacto GRACIAS!
