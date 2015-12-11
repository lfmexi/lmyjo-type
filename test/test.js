var assert = require('assert');
var lmyjoType = require('../index');
var factor = require('../lib/factor');
var movimiento = require('../lib/movimiento');
var unidadTiempo = require('../lib/unidadTiempo');
var evaluationState = require('../lib/evaluationState');

describe('lmyjo-type module', function testType () {

  describe('#getTipoFactor()', function testTipoFactor () {
    it('should return the right value for the key specified', function () {
      assert.equal(factor.simple, lmyjoType.getTipoFactor('simple'));
      assert.equal(factor.periodico, lmyjoType.getTipoFactor('periodico'));
      assert.equal(factor.gradiente, lmyjoType.getTipoFactor('gradiente'));
    });

    it('should return null when the key is not present in the catalog', function () {
      assert.equal(null, lmyjoType.getTipoFactor('holaMundo'));
      assert.equal(null, lmyjoType.getTipoFactor(null));
      assert.equal(null, lmyjoType.getTipoFactor());
    });
  });

  describe('#getTipoMovimiento()', function testTipoMovimiento () {
    it('should return the right value for the key', function () {
      assert.equal(movimiento[1], lmyjoType.getTipoMovimiento('ingreso'));
      assert.equal(movimiento[0], lmyjoType.getTipoMovimiento('egreso'));
    });

    it('should return null when the key is not present in the array', function () {
      assert.equal(null, lmyjoType.getTipoMovimiento('holaMundo'));
      assert.equal(null, lmyjoType.getTipoMovimiento(null));
      assert.equal(null, lmyjoType.getTipoMovimiento());
    });
  });

  describe('#getUnidadTiempo()', function testTipoMovimiento () {
    it('should return the right value for the key', function () {
      assert.equal(unidadTiempo[0], lmyjoType.getUnidadTiempo('dia'));
      assert.equal(unidadTiempo[1], lmyjoType.getUnidadTiempo('mes'));
      assert.equal(unidadTiempo[2], lmyjoType.getUnidadTiempo('bimestre'));
      assert.equal(unidadTiempo[3], lmyjoType.getUnidadTiempo('trimestre'));
      assert.equal(unidadTiempo[4], lmyjoType.getUnidadTiempo('semestre'));
      assert.equal(unidadTiempo[5], lmyjoType.getUnidadTiempo('año'));
    });

    it('should return null when the key is not present in the array', function () {
      assert.equal(null, lmyjoType.getUnidadTiempo('holaMundo'));
      assert.equal(null, lmyjoType.getUnidadTiempo(null));
      assert.equal(null, lmyjoType.getUnidadTiempo());
    });
  });

  describe('#getEstadoEvaluacion()', function testEstadoEvaluacion () {
    it('should return the right value for the key', function () {
      assert.equal(evaluationState.evaluation_pending, lmyjoType.getEstadoEvaluacion('evaluation_pending'));
      assert.equal(evaluationState.evaluation_complete, lmyjoType.getEstadoEvaluacion('evaluation_complete'));
    });

    it('should return null when the key is not present in the array', function () {
      assert.equal(null, lmyjoType.getEstadoEvaluacion('holaMundo'));
      assert.equal(null, lmyjoType.getEstadoEvaluacion(null));
      assert.equal(null, lmyjoType.getEstadoEvaluacion());
    });
  });
});
