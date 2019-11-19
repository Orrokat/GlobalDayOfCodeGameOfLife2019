var assert = require('assert');
var Cell = require('../lib/gameoflife');

describe('Cell property', () => {
  it('return true when cell is alive', () => {
    var cell = Cell.makeCell(true);
    
    assert.deepStrictEqual(cell.isAlive, true);
  });

  it('return false when cell is not alive', () => {
    var cell = Cell.makeCell(false);

    assert.deepStrictEqual(cell.isAlive, false);
  });
});

describe('Cell rules for life', () => {
  it('cell returns false when its neighbors is less than 2', () => {
    var cell = {
      isAlive: true,
      neighborsAlive: 1
    }
    var updatedCell = Cell.applyRules(cell);
    var expectedObject = {
      isAlive: false,
      neighborsAlive: 1
    }

    assert.deepEqual(updatedCell, expectedObject)
  });

  it('isAlive remains the same when neghbors equals 2', () => {
    var cell = {
      isAlive: false,
      neighborsAlive: 2
    }
    var updatedCell = Cell.applyRules(cell)
    var expectedObject = {
      isAlive: false,
      neighborsAlive: 2
    }

    assert.deepEqual(updatedCell, expectedObject)
  })

  it('isAlive remains the same when neghbors equals 2', () => {
    var cell = {
      isAlive: false,
      neighborsAlive: 2
    }
    var updatedCell = Cell.applyRules(cell)
    var expectedObject = {
      isAlive: false,
      neighborsAlive: 2
    }

    assert.deepEqual(updatedCell, expectedObject)

    var cell = {
      isAlive: true,
      neighborsAlive: 2
    }
    var updatedCell = Cell.applyRules(cell)
    var expectedObject = {
      isAlive: true,
      neighborsAlive: 2
    }

    assert.deepEqual(updatedCell, expectedObject)
  })

  it('returns isAlive true if neighbors equal 3', () => {
    var cell = {
      isAlive: false,
      neighborsAlive: 3
    }
    var updatedCell = Cell.applyRules(cell)
    var expectedObject = {
      isAlive: true,
      neighborsAlive: 3
    }

    assert.deepEqual(updatedCell, expectedObject)

    var cell = {
      isAlive: true,
      neighborsAlive: 3
    }
    var updatedCell = Cell.applyRules(cell)
    var expectedObject = {
      isAlive: true,
      neighborsAlive: 3
    }

    assert.deepStrictEqual(updatedCell, expectedObject)
  })

  it ('returns isAlive false when neighborsAlive is greater than 3', () => {
    var cell = {
      isAlive: true,
      neighborsAlive: 4
    }
    var updatedCell = Cell.applyRules(cell)
    var expectedObject = {
      isAlive: false,
      neighborsAlive: 4
    }
  
    assert.deepStrictEqual(updatedCell, expectedObject)
  })
});