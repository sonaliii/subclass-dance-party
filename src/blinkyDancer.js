// var makeBlinkyDancer = function(top, left, timeBetweenSteps){
//   var blinkyDancer =  new Dancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function
//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function(){
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep.apply(this);

//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };

var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  window.dancers.push(this);
  console.log(window.infectMe);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
//BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
   Dancer.prototype.step.apply(this);
   this.$node.toggle();
};

BlinkyDancer.prototype.lineup = function(){
  this.$node.animate({
    left: "50"
  });
};

BlinkyDancer.prototype.infect = function(){
  this.$node.animate({
    background: "green"
  });
};