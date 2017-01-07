/**
 * Created by Divya Chopra on 1/4/2017.
 */
var quizapp = angular.module('trivia');

quizapp.controller('quizCtrl', QuizController);
QuizController.$inject=['quizMetrics','DataService'];

 function QuizController(quizMetrics,DataService){
   var vm=this;
   vm.quizMetrics = quizMetrics;
     vm.DataService = DataService;
     vm.questionAnswered=questionAnswered;
     vm.activeQuestion=0;
     vm.selectAnswer=selectAnswer;
     vm.setActiveQuestion= setActiveQuestion;
     var numQuestionsAnswered=0;

     function selectAnswer(index) {
         DataService.quizQuestions[vm.activeQuestion].selected=index;

     }
     function setActiveQuestion(index){
      var breakOut=false;
      var quizLength = DataService.quizQuestions.length-1;
      if(index===undefined) {
          while (!breakOut) {
              vm.activeQuestion = vm.activeQuestion < quizLength ? ++vm.activeQuestion : 0;

              if (DataService.quizQuestions[vm.activeQuestion].selected === null) {
                  breakOut = true;
              }
          }
      }
      else
      {
            vm.activeQuestion=index;
      }
     }



     function questionAnswered() {
         console.log("here");
         var quizLength = DataService.quizQuestions.length;
         console.log("here " + quizLength +" : "+ vm.activeQuestion.selected );
         if(DataService.quizQuestions[vm.activeQuestion].selected!== null) {
             numQuestionsAnswered++;

             if (numQuestionsAnswered >= quizLength) {

             }
         }
             vm.setActiveQuestion();

     }
}
