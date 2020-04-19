var GAMEWEB1 = GAMEWEB1 || {};

GAMEWEB1.Game = function()
{	
	questions = [
	 ['So sánh hai số: 870 & 807 ',['lớn hơn','bằng nhau','nhỏ hơn',] ,'lớn hơn'],
	 ['So sánh hai số: 510 & 409 ',['lớn hơn','bằng nhau','nhỏ hơn',] ,'lớn hơn'],
	 ['So sánh hai số: 323 & 332 ',['lớn hơn','bằng nhau','nhỏ hơn',] ,'nhỏ hơn'],
	 ['So sánh hai số: 906 & 609 ',['lớn hơn','bằng nhau','nhỏ hơn',] ,'lớn hơn'],
	 ['So sánh hai số: 780 & 806 ',['lớn hơn','bằng nhau','nhỏ hơn',] ,'nhỏ hơn'],
	 ['So sánh hai số: 396 & 639 ',['lớn hơn','bằng nhau','nhỏ hơn',] ,'nhỏ hơn'],
	];
	var correctAnswer;
	var questionBox = $('.question');
	var questionNumber = $('.question-number');
	var answers = $('.answers');
	var restart = $('.restart');
	Qnum = -1;
	function init()
	{	
		nextQuestion();
		restart.click(reStart);
	}	
	function nextQuestion() {
		Qnum = Qnum + 1;
		console.log("qnum is " + Qnum)
		var total = questions.length;
		if(Qnum < total) {
			askQuestion(Qnum);	
		}
		
		else {		
			questionBox.html("Bạn đã chiến thắng !");
			answers.hide();
			restart.show();
			questionNumber.hide();
			
		}
				
	}
	function askQuestion(counterNum) {
		questionBox.html(questions[counterNum][0]);
		questionNumber.html('Question number ' + (counterNum + 1));
		$('.answers').empty();
		answers.append('<li data-answer=' + questions[counterNum][1][0].replace(/ /g,'') + '>' + questions[counterNum][1][0] + '</li>');
		answers.append('<li data-answer=' + questions[counterNum][1][1].replace(/ /g,'') + '>' + questions[counterNum][1][1] + '</li>');
		answers.append('<li data-answer=' + questions[counterNum][1][2].replace(/ /g,'') + '>' + questions[counterNum][1][2] + '</li>');
		correctAnswer = questions[counterNum][2];
		console.log("Answer is " + correctAnswer);
		correctAnswer = correctAnswer.replace(/ /g,'').toLowerCase();
		$('.answers li').on('click', answerQuestion);
	}
	function answerQuestion() {
		$('.answers li').off();
		var UserAnswer = $(this).data('answer').replace(/ /g,'').toLowerCase();
		if (UserAnswer == correctAnswer) {
			nextQuestion();	
		}
		else {
			questionBox.html("Rất tiếc bạn đã thua !");
			answers.hide();
			restart.show();
			questionNumber.hide();
		}
				
	}
	function reStart() {
		
		Qnum = -1;
		nextQuestion();
		answers.show();
		restart.hide();
		questionNumber.show();
	}
	init();
};

$(function()
{	
	new GAMEWEB1.Game();
	
});

