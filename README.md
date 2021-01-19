## Getting started

1. install dependencies (Built with Node.js)

```sh
npm install
```

2. run migrations and seeders

```sh
node_modules/.bin/sequelize db:migrate
node_modules/.bin/sequelize db:seed:all
```

4. run unit tests

```sh
npm test
```

4. start express server

```
npm start
```

## Endpoints description

samples of API's requests via Postman is attached.

###1:
Get Coffee Machines [http://localhost:3000/coffee/machine](http://localhost:3000/coffee/machine).
it filter and get coffee machines by productType and water line, possible values are:
 - productType: 
   - COFFEE_MACHINE_LARGE
   - COFFEE_MACHINE_SMALL
   - ESPRESSO_MACHINE
 - waterLine: 
   - true 
   - false
  
###2:
Get Coffee Pods [http://localhost:3000/coffee/pod](http://localhost:3000/coffee/pod).
it filter and get coffee pofs by productType, size and flavor, possible values are:
 - productType: 
   - COFFEE_POD_LARGE 
   - OFFEE_POD_SMALL 
   - ESPRESSO_POD
 - size: 
   - 1_dozen 
   - 3_dozen 
   - 5_dozen 
   - 7_dozen
 - flavor: 
   - COFFEE_FLAVOR_VANILLA
   - COFFEE_FLAVOR_CARAMEL
   - COFFEE_FLAVOR_PSL
   - COFFEE_FLAVOR_MOCHA
   - COFFEE_FLAVOR_HAZELNUT

## DDD and Clean Architecture

The application follows the Uncle Bob "[Clean Architecture](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html)" principles and project structure :

### Clean Architecture layers

![Schema of flow of Clean Architecture](/doc/Uncle_Bob_Clean_Architecture.jpg)

### Project anatomy

```
app
 └ lib                              → Application sources
    └ application_business_rules    → Application services layer
       └ repositories               → Data access objects interfaces (unfortunately, there is no Interface pattern in JavaScript)
      └ security                   → Security tools interfaces (ex: AccessTokenManager.js, to generate and decode OAuth access token)
       └ use_cases                  → Application business rules
    └ enterprise_business_rules     → Enterprise core business layer
       └ models                     → Domain model objects such as Entities, Aggregates, Value Objects, Business Events, etc.
       └ services                   → Domain services, e.g. business objects that manipulate multiple and different Domain Models
    └ frameworks_drivers            → Frameworks, drivers and tools such as Database, the Web Framework, mailing/logging/glue code etc.
       └ database                   → ORM and database connection objects
       └ webserver                  → Hapi.js Web server configuration (server, routes, plugins, etc.)
          └ server.js               → Hapi.js server definition
    └ interface_adapters            → Adapters and formatters for use cases and entities to external agency such as Database or the Web
       └ controllers                → Hapi.js route handlers
       └ security                   → Security tools implementations (ex: JwtAccessTokenManager)
       └ serializers                → Converter objects that transform outside objects (ex: HTTP request payload) to inside objects (ex: Use Case request object)
       └ storage                    → Repository implementations
 └ node_modules (generated)         → NPM dependencies
 └ test                             → Source folder for unit or functional tests
 └ index.js                         → Main application entry point
```

### Flow of Control

![Schema of flow of Control](/doc/Hapijs_Clean_Architecture.svg)

### Controllers (a.k.a Route Handlers)

Controllers are the entry points to the application context.

They have 3 main responsibilities :

1. Extract the parameters (query or body) from the request
2. Call the good Use Case (application layer)
3. Return an HTTP response (with status code and serialized data)

### Use Cases

A use case is a business logic unit.

It is a class that must have an `execute` method which will be called by controllers.

It may have a constructor to define its dependencies (concrete implementations - a.k.a. _adapters_ - of the _port_ objects) or its execution context.

**Be careful! A use case must have only one precise business responsibility!**

A use case can call objects in the same layer (such as data repositories) or in the domain layer.
