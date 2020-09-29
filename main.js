// sort by height in non descending order , people sitting between fix trees of equal length

items = [-1, 150, 190, 170, -1, -1, 160, 180];
const sortByHeight = (arr) => {
  indArr = [];
  itemArr = [];

  items.forEach((item, index) => {
    if (item === -1) {
      indArr.push(index);
    } else {
      itemArr.push(item);
    }
  });

  sortedItem = itemArr.sort((a, b) => a - b);

  indArr.forEach((tIndex) => sortedItem.splice(tIndex, 0, -1));

  return sortedItem;
};

console.log(sortByHeight(items))