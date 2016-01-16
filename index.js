var factor = require('./lib/factor');
var movimiento = require('./lib/movimiento');
var unidadTiempo = require('./lib/unidadTiempo');
var evaluationState = require('./lib/evaluationState');

function getElementByKey (container, key) {
  var index = container.indexOf(key);
  if (index > -1) {
    return container[index];
  }
  return null;
}

module.exports = {
  /** Método encargado de la obtención del tipo de factor de interés **/
  getTipoFactor: function getFactorByKey (key) {
    return factor[key] || null;
  },
  /** Método encargado de la obtención del tipo de movimiento **/
  getTipoMovimiento: function getMovimientoByKey (key) {
    return movimiento[key] || null;
  },
  /** Método encargado de la obtención del tipo de unidad de tiempo **/
  getUnidadTiempo: function getUnidadByKey (key) {
    return unidadTiempo[key] || null;
  },
  /** Método encargado de la obtención del objeto referente al estado de
   *  una evaluación
   **/
  getEstadoEvaluacion: function getEstadoByKey (key) {
    return evaluationState[key] || null;
  }
};
