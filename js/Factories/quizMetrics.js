/**
 * Created by Divya Chopra on 1/5/2017.
 */
var fac = angular.module('trivia');

fac.factory('quizMetrics', function(){

    var quizObj = {
        quizActive: false,
        changeState: changeState
    };

    return quizObj;

    function  changeState(state) {
        quizObj.quizActive = state;
    }
});
