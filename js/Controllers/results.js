/**
 * Created by Divya Chopra on 1/7/2017.
 */
var resApp= angular.module('trivia');

resApp.controller('resultCtrl', ResultController);

ResultController.$inject = ['quizMetrics','DataService'];
function ResultController(quizMetrics,DataService){
    var vm = this;
    vm.quizMetrics = quizMetrics;
    vm.DataService = DataService;
    vm.activeQuestion=0
}