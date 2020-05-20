const flawedItemMessage = 'Your item has a flawed structure. Make sure it has name, durability, and enhancement properties'
module.exports = {
  succeed,
  fail,
  repair,
  get,
  flawedItemMessage
}

function succeed(item) {
  
  return { ...item }
}

function fail(item) {
  return { ...item }
}

// restores item durability to 100
function repair(item) {
  if (EnsureValidItem(item)) {
    return { ...item, durability: 100 }
  } else {
    return flawedItemMessage
  }
  
}

function get(item) {
  return { ...item }
}

// used typeof === number for durability and enhancement in case value is 0 which is a 'falsey' value
function EnsureValidItem(item) {
  return item && item.name && typeof(item.durability) === 'number' && typeof(item.enhancement) === 'number'
}