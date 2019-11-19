var exports = module.exports={};

exports.makeCell = (state) => {
  return {
    isAlive: state
  }
}

exports.applyRules = (cell) => {
  if (cell.neighborsAlive < 2) {
    return { ...cell, isAlive: false }
  }
  if (cell.neighborsAlive === 2){
    return cell
  }
  if (cell.neighborsAlive === 3) {
    return { ...cell, isAlive: true }
  }
  if (cell.neighborsAlive > 3) {
    return { ...cell, isAlive: false }
  }

}
