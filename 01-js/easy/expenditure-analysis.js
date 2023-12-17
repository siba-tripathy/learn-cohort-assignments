/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let categoryExpenditures = new Map();
  for (let spend of transactions) {
	if (categoryExpenditures.get(spend['category']) === undefined) {
		categoryExpenditures.set(spend['category'], spend['price']);
	} else {
		categoryExpenditures.set(spend['category'], categoryExpenditures.get(spend['category']) + spend['price']);
	}
  }

  let categorySpends = [];
  for (let [category, spend] of categoryExpenditures ) {
	categorySpends.push({
		'category': category,
		'totalSpent': spend
	});
  }
  return categorySpends;
}

module.exports = calculateTotalSpentByCategory;
