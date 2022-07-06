1. Se realiza la creacion de la aplicacion angular NewshoreAir

2. Se crean los diferentes archivos y modulos de la aplicacion angular 
   en la carpeta (app) explicados a continuacion :

    a) assets : la carpeta assets contine las siguientes subcarpetas
        error
        footer
        index
        navbar : Muestra en pantalla los enlaces las Rutas

                buscar-ruta = Listado vuelos 
                obtener-ruta = Obtener ruta vuelo 
                moneda = Moneda

    b) modelos : flitht.ts
                 journey.ts
                 trasnport.tr

                 adicionales : index.ts, rutas.ts 

    c) modulos : con su respectivos : routing-module.ts y module.ts
                 se crea el modulo get para cada servicio, dentro de los cuales
                 estan sus componentes: get.component.ts y get.component.html

                 modulos: buscar-ruta 
                          obtener-ruta 
                          Moneda

    d) services : se crean los archivos services de cada modulo: 

                services : buscar-ruta.service.ts
                           obtener-ruta.service.ts 
                           moned.service.ts 
    
    e) Se realiza el adecuado enrutamiento de cada modulo y en el modulo ppal (app-routing.module.ts)en el cual
       se direccion los loadChildren

    f) Se realiza el segundo ejercicio en el modulo (buscar-ruta (component - html - service - modelo (flights))) 
       realizando el mapeo de la bd, mostrando en pantalla la lista de Rutas
    
    g) Se reliace el tercer ejercicio en el modulo (obtner-ruta (component - html - service)) se crean adicionalmente
       dos nuevas carpetas:pipes (filter.pipe.ts) y main pipe(main-pipe.module.ts) / se realiza un nuevo mapeo de la 
       bd asignada obteniendo un nuevo resultado de los datos, que se muestran en dos inputs en pantalla, en el archivo 
       filter.pipe se transforma la respuesta recibiendo exitosamente los datos. Se creo el modulo main.pipe para exportar 
       el archivo filter.pipe para ser aplicado en el app.module.ts, pdte de mostrar en pantalla mensajes de alerta, se realiza un alert en 
       filter.pipe pero cuando se ejecuta se dispara y no muestra los resultados de la busqueda, se realiza la parte del ejercicio 4 de una lista para 
       escoger la moneda en (COP USD EUR) en la vista de obtener-ruta, pdte de realizar la transformacion de la moneda a otra

    h) Ejercio 4 (#TODO)

    i) Se realiza el test copiando en el arhivo angular.json en la linea test : "codeCoverage": true,
   
       Se realiza un ng test con resultado 6 positivos de 7 mostrando un error el app.component.spec.ts
       en la linea expect(compiled.querySelector('.content span')?.textContent).toContain('NewshoreAir app is running!');

       error : "should render title"

   *************************************************************************************
   
   Observaciones 05 julio 2022

   a) Se crean comentarios en la aplicacion

   b) Se intenta modificar los datos de las carpetas que estan en español, no permite realizar el cambio

   c) El componente moneda se trata de implementar en el componente obtener-ruta
      la clase journey y transport: cuando se realiza la llamada a la bd la genera de la siguiente manera :

      [
    {
        "departureStation": "MZL",
        "arrivalStation": "MDE",
        "flightCarrier": "CO",
        "flightNumber": "8001",
        "price": 200
    },
    {
        "departureStation": "MZL",
        "arrivalStation": "CTG",
        "flightCarrier": "CO",
        "flightNumber": "8002",
        "price": 200
    },
    {
        "departureStation": "PEI",
        "arrivalStation": "BOG",
        "flightCarrier": "CO",
        "flightNumber": "8003",
        "price": 200
    }etc]

    no encuentro la forma de llamar ambos modelos ya que el JSON que me resulta no obtiene estos resultados y solo me muestra lo descrito anteriormente

    d ) se intenta implementar el metodo para filtrar por los dos input y que no coincidan

