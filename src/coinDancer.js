var CoinDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node = $('<span class="coin"></span>');
  this.setPosition(top, left);
  window.dancers.push(this);
};

CoinDancer.prototype = Object.create(Dancer.prototype);
//BlinkyDancer.prototype.constructor = BlinkyDancer;

CoinDancer.prototype.step = function(){
  Dancer.prototype.step.apply(this);
  // this.move();
};

// CoinDancer.prototype.move = function(){
//   this.$node.animate({
//     left: '+=25'
//   });
// };
CoinDancer.prototype.lineup = function(){
  this.$node.animate({
    left: '80'
  });
};