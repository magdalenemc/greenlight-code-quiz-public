/* global _ */

const names = _.shuffle(['Maddy', 'Selina', 'John', 'Max', 'Ali', 'Harvey']);

const main = function(){
  for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
};
