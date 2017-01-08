/**
 * Created by Divya Chopra on 1/5/2017.
 */
var fac = angular.module('trivia');

fac.factory('quizMetrics', QuizMetrics);

QuizMetrics.$inject = ['DataService'];
function QuizMetrics(DataService){

    var quizObj = {
        quizActive: false,
        changeState: changeState,
        resultActive:false,
        correctAnswers:[],
        markQuiz:markQuiz,
        numCorrect:0
    };

    return quizObj;

    function  changeState(metric,state) {
        console.log("before func quiz: "+ state+"results: " +state);
        if(metric=== "quiz")
        {
            quizObj.quizActive = state;
        }
        else if(metric==="results")
        {
            quizObj.resultActive=state;
        }
        else{
            return false;
        }
        console.log("after quiz: "+ state+"results: " +state);
    }

    function markQuiz(){
        quizObj.correctAnswers=DataService.correctAnswers;
        for(var i=0; i< DataService.quizQuestions.length;i++)
        {
            if(DataService.quizQuestions[i].selected===correctAnswers[i])
            {
                DataService.quizQuestions[i].correct=true;
                quizObj.numCorrect++;
            }
            else
            {
                DataService.quizQuestions[i].correct=false;
            }
        }
        console.log(quizObj.numCorrect);
    }
}
