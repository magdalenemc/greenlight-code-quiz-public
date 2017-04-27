/* global _ */

const names = _.shuffle(['Maddy', 'Selina', 'John', 'Max', 'Ali', 'Harvey']);

const main = function(){
  for (var i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
  }
};
