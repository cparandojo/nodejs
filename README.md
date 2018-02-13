# nodejs
Repositorio API con nodeJS y mongodb

Para poder ejecutar este servidor debemos seguir los pasos:

1- Realizar un npm install para instalar los paquetes necesarios.
2- Instalar mongodb en nuestra máquina.
3- Arrancar mongodb usando el comando correspondiente, en el caso de windows mongod.exe.
4- Abrir consola en la ruta /src y ejecutar node server.js. Con esta instrucción indicamos que arranque nuestro servidor.
5- El servidor esta arrancado en el puerto 3000. Cualquier petición ira sobre la url base : http://localhost:3000/api/v1/
6- Esta implementado un CRUD con para crear, actualizar, borrar y listar usuarios. Por tanto la url quedaria asi:

    -crear: POST:  http://localhost:3000/api/v1/user cuyo body sera:
        {
            "name":"nombre1",
            "username":"nom1",
            "email":"fffa@bb.com",
            "phone":"123456789"
        }

    - actualizar: PATCH http://localhost:3000/api/v1/users/ID 
        ID: identificador del usuario en base de datos
        body:
            {                
                "name": "modifi",
                "username": "modifi",
                "email": "modifi",
                "phone": "modifi"
            }

    - Borrado: DELETE http://localhost:3000/api/v1/users/ID 
        ID: identificador del usuario en base de datos
		En caso de no especificar id se borran todos los usuarios

    - Listado : GET http://localhost:3000/api/v1/users

    - Busqueda por id: GET http://localhost:3000/api/v1/users/ID
        ID: identificador del usuario en base de datos