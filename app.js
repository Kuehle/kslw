var app = angular.module('app',[]);

app.controller('mapCtrl', function(){
  var vm = this;


    vm.result = '';


  // vm.maps = [
  //   {id: 0, name: "Luigis Piste", state: "none"},
  //   {id: 1, name: "Peach Beach", state: "none"},
  //   {id: 2, name: "Baby Park", state: "none"},
  //   {id: 3, name: "Staubtrockene Piste", state: "none"},
  //   {id: 4, name: "Pilzbrücke", state: "none"},
  //   {id: 5, name: "Marios Piste", state: "none"},
  //   {id: 6, name: "Daisys Dampfer", state: "none"},
  //   {id: 7, name: "DK Bergland", state: "none"},
  //   {id: 8, name: "Waluigi Arena", state: "none"},
  //   {id: 9, name: "Sorbet Land", state: "none"},
  //   {id: 10, name: "Pilz-City", state: "none"},
  //   {id: 11, name: "DK Bergland", state: "none"},
  //   {id: 12, name: "Wario Colosseum", state: "none"},
  //   {id: 13, name: "Dinodino-Dschungel", state: "none"},
  //   {id: 14, name: "Bowsers Festung", state: "none"},
  //   {id: 15, name: "Regenbogen-Boulevard", state: "none"}
  // ];

  vm.cup0 = [
    {id: 0, name: "Luigis Piste", state: "none", pic: {'background-image':'url(img/1.jpg)'}},
    {id: 1, name: "Peach Beach", state: "none", pic: {'background-image':'url(img/2.jpg)'}},
    {id: 2, name: "Baby Park", state: "none", pic: {'background-image':'url(img/3.jpg)'}},
    {id: 3, name: "Staubtrockene Wüste", state: "none", pic: {'background-image':'url(img/4.jpg)'}}
  ];

  vm.cup1 = [
    {id: 4, name: "Pilzbrücke", state: "none", pic: {'background-image':'url(img/5.jpg)'}},
    {id: 5, name: "Marios Piste", state: "none", pic: {'background-image':'url(img/6.jpg)'}},
    {id: 6, name: "Daisys Dampfer", state: "none", pic: {'background-image':'url(img/7.jpg)'}},
    {id: 7, name: "Waluigi Arena", state: "none", pic: {'background-image':'url(img/8.jpg)'}}
  ];

  vm.cup2 = [
    {id: 8, name: "Sorbet Land", state: "none", pic: {'background-image':'url(img/9.jpg)'}},
    {id: 9, name: "Pilz-City", state: "none", pic: {'background-image':'url(img/10.jpg)'}},
    {id: 10, name: "Yoshis Piste", state: "none", pic: {'background-image':'url(img/11.jpg)'}},
    {id: 11, name: "DK Bergland", state: "none", pic: {'background-image':'url(img/12.jpg)'}}
  ];

  vm.cup3 = [
    {id: 12, name: "Wario Colosseum", state: "none", pic: {'background-image':'url(img/13.jpg)'}},
    {id: 13, name: "Dinodino-Dschungel", state: "none", pic: {'background-image':'url(img/14.jpg)'}},
    {id: 14, name: "Bowsers Festung", state: "none", pic: {'background-image':'url(img/15.jpg)'}},
    {id: 15, name: "Regenbogen-Boulevard", state: "none", pic: {'background-image':'url(img/16.jpg)'}}
  ];

  vm.concatMaps = function(){
    var maps2 = vm.cup0.concat(vm.cup1, vm.cup2, vm.cup3);

    console.log(maps2);

    return maps2;

  }

  vm.nextState = function(oldState) {
  var newState = 'test';  
  if(oldState === 'none'){
     newState = 'ban';
   } else if (oldState === 'ban'){
     newState = 'pick';
   } else {newState = 'none';}

   return newState;
  }

  vm.choseMap = function(){
    var maps = vm.concatMaps();

    var pool = [];

    for(i = 0; i < maps.length; ++i){
      if (maps[i].state === "pick") {
        pool.push(maps[i]);
      }
    };

    var resultId = Math.floor((Math.random() * pool.length));

    if(pool[resultId]){


      vm.result = pool[resultId].name;
    }
  };

  vm.clearAll = function(){

    for(i = 0; i < vm.cup0.length; ++i){
      vm.cup0[i].state = "none";
    };
    for(i = 0; i < vm.cup1.length; ++i){
      vm.cup1[i].state = "none";
    };
    for(i = 0; i < vm.cup2.length; ++i){
      vm.cup2[i].state = "none";
    };
    for(i = 0; i < vm.cup3.length; ++i){
      vm.cup3[i].state = "none";
    };
    vm.result = '';
  }

})
