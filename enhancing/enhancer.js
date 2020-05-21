const flawedItemMessage = 'Your item has a flawed structure. Make sure it has name, durability, and enhancement properties'

module.exports = {
  succeed,
  fail,
  repair,
  get,
  flawedItemMessage
}

function succeed(item) {
  if (EnsureValidItem(item)) {
    const newEnhancement = item.enhancement === 20 ? 20 : item.enhancement + 1
    return { ...item, enhancement: newEnhancement }
  }
  return flawedItemMessage
}

function fail(item) {
  if (EnsureValidItem(item)) {
    item.enhancement = item.enhancement > 16 ? item.enhancement - 1 : item.enhancement
    item.durability = item.enhancement >= 15 ? item.durability - 10 : item.durability - 5
    // make sure we don't have negative values
    item.enhancement = item.enhancement < 0 ? 0 : item.enhancement
    item.durability = item.durability < 0 ? 0 : item.durability
    return item
  }
  return flawedItemMessage
}

// restores item durability to 100
function repair(item) {
  if (EnsureValidItem(item)) {
    return { ...item, durability: 100 }
  }
  return flawedItemMessage
}

function get(item) {
  return { ...item }
}

// used typeof === number for durability and enhancement in case value is 0 which is a 'falsey' value
function EnsureValidItem(item) {
  return item && item.name && typeof(item.durability) === 'number' && typeof(item.enhancement) === 'number' && item.enhancement >= 0 && item.enhancement <= 20 && item.durability >= 0 && item.durability <= 100
}