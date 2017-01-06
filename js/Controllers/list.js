/**
 * Created by Divya Chopra on 1/3/2017.
 */
var app = angular.module("trivia");

app.controller("listCtrl", ListController);

ListController.$inject=['quizMetrics','DataService'];

function ListController(quizMetrics,DataService){
    var vm=this;
    vm.data = DataService.triviaData;
    vm.quizMetrics = quizMetrics;
    vm.activeMonument = {};
    vm.changeActiveMonument = changeActiveMonument;
    vm.search="";
    vm.quizActive=false;
    vm.hideQuiz = function () {
      quizMetrics.changeState(true);
       // vm.quizActive=true;
    };
    function changeActiveMonument(index) {
        vm.activeMonument=index;
    }

}

