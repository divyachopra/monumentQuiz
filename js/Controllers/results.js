/**
 * Created by Divya Chopra on 1/7/2017.
 */
var resApp= angular.module('trivia');

resApp.controller('resultCtrl', ResultController);

ResultController.$inject = ['quizMetrics'];
function ResultController(quizMetrics){
    var vm = this;
    vm.quizMetrics = quizMetrics;
}