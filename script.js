var myApp = angular.module('taskList', []);

myApp.controller('taskListController', function($scope){

    $scope.tasks = ['Purchase bike gloves', 'Invest in USB front/rear bike lights',
    'Get a cut-out seat', 'Measure your head circumference and purchase a MIPS-enabled helmet',
  'Carry a portable bike pump and spare innertube', 'Make sure you have baby wipes on hand',
'Ensure that your feet cannot comfortably touch the ground when you stop', 'Keep bike lube and a rag on hand',
'Remember to stretch after every ride!'];


  $scope.addTask = function(newTask){
    $scope.tasks.push(newTask);
    clearForm();
  };
  console.log($scope.tasks);
  /*document.querySelector("input[ng-model='formToDo']").focus();*/

  function clearForm() {
        $scope.addNewListItem =  null;
  }
//sets input to null when called in the newTask function

  /*function needTask() {
    if (addNewListItem === null);
    alert("You Must Enter A Task!");
  }*/


  });
