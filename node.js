// Define an object to hold inventory records
const inventory = {
    pen: 10,
    pencil: 15,
    eraser: 5,
    scale: 8,
    books: 20,
  };
  
  // Function to check inventory status
  function checkInventory(item) {
    if (inventory[item]) {
      console.log(`We have ${inventory[item]} ${item}(s) in stock.`);
    } else {
      console.log(`We don't have ${item} in stock.`);
    }
  }
  
  // Function to update inventory count
  function updateInventory(item, count) {
    if (inventory[item]) {
      inventory[item] += count;
    } else {
      inventory[item] = count;
    }
    console.log(`${count} ${item}(s) have been added to inventory.`);
  }
  
  // Function to remove items from inventory
  function removeInventory(item, count) {
    if (inventory[item]) {
      inventory[item] -= count;
      console.log(`${count} ${item}(s) have been removed from inventory.`);
    } else {
      console.log(`${item} is not in stock.`);
    }
  }
  
  // Example usage
  checkInventory('pen'); // Output: We have 10 pen(s) in stock.
  updateInventory('pen', 5); // Output: 5 pen(s) have been added to inventory.
  removeInventory('books', 10); // Output: 10 books(s) have been removed from inventory.
  