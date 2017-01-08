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
    vm.activeQuestion=0;
    vm.getAnswerClass=getAnswerClass;
    vm.setActiveQuestion = setActiveQuestion;
    vm.calculatePercentage = calculatePercentage;
    
    function calculatePercentage() {

        return (quizMetrics.numCorrect/DataService.quizQuestions.length) *100;
    }

    function setActiveQuestion(index){
        vm.activeQuestion=index;
    }

    function getAnswerClass(index) {

        if(index===quizMetrics.correctAnswers[vm.activeQuestion])
        {
            return "bg-success";
        }
        else if(index===DataService.quizQuestions[vm.activeQuestion].selected)
        {
            return "bg-danger";
        }

    }
}