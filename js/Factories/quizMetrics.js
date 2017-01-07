/**
 * Created by Divya Chopra on 1/5/2017.
 */
var fac = angular.module('trivia');

fac.factory('quizMetrics', function(){

    var quizObj = {
        quizActive: false,
        changeState: changeState,
        resultActive:false
    };

    return quizObj;

    function  changeState(metric,state) {
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
    }
});
