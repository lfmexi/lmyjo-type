lmyjo-type
=============

Módulo encargado de proveer un catálogo para los tipos de operaciones a
la InvestmentAPI.


Instalación
----
De forma local en el proyecto:

`npm install --save git+https://github.com/lmyjo/lmyjo-type.git`

Uso
----
El módulo expone 3 métodos:

### getTipoFactor (key)

Con base en la clave enviada, obtendrá la descripción del tipo de factor de interés compuesto.

```js
var types = require('lmyjo-type');

var simple = types.getTipoFactor('simple');
//obtendrá la descripción del factor simple
```

### getTipoMovimiento (key)

Dada la clave, asegura que el tipo de movimiento está dentro del catálogo.

```js
var types = require('lmyjo-type');

var movement = types.getTipoMovimiento('ingreso');
//obtendrá la descripción del factor simple
```
### getUnidadTiempo (key)

Dada la clave, asegura que el tipo de movimiento está dentro del catálogo.

```js
var types = require('lmyjo-type');

var unit = types.getUnidadTiempo('año');
//obtendrá la descripción del factor simple
```
