$(document).ready(function(){
   var qNum = 0;
   var questions = [". Question1", ". Question2", ". Question3"];
   //var q1Op = ["Question1_Option1", "Question1_Option2", "Question1_Option3"];
   //var q2Op = ["Question2_Option1", "Question2_Option2", "Question2_Option3"];
   //var q3Op = ["Question3_Option1", "Question3_Option2", "Question3_Option3"];
   var answersOptions = [["Question1_Option1", "Question1_Option2", "Question1_Option3"],
                         ["Question2_Option1", "Question2_Option2", "Question2_Option3"],
                         ["Question3_Option1", "Question3_Option2", "Question3_Option3"]];

   var correctAnswers = [];
   var qCount = -1;
   var opCount = 0;
   var opNum = 0;
  
  //$('#question').hide();
/*
  for(i=0; i<answersOptions.length; i++){
  	for(j=0; j<answersOptions[i].length;j++){
  		alert(answersOptions[i][j]);
  	}
  }*/
  
  $("#quiz").click(function(){
	$('#startQuizz').hide();
    $('.game').show();
    
	showQuizzPane(++qNum, questions, ++qCount, opNum, answersOptions[opCount]);

  });

  $('#guessButton').click(function(){
  	//alert('Clicked!');
  	rmOldQuestion();

  	++opCount;
  	if(opCount<answersOptions.length){
  		showQuizzPane(++qNum, questions, ++qCount, opNum, answersOptions[opCount]);
  	} else {
  		alert("Done");
  	}

  });


   $(document).on("click",".answer", function() {

   		var optionValue = answersOptions[opCount];

    	checkAnswer(optionValue);

	});

  
  function showQuizzPane(questionNum,allQuestions,curQuestion,optionNumber,options){ 	

    $('#question').append(questionNum + allQuestions[curQuestion]);

     for(i=0; i<options.length; i++){
     	$('#answers').append('<div class="answer">'+ ++optionNumber +'. ' + options[i]+'</div>');
     }
  }

  function rmOldQuestion(){
  	$('#question').val("");
  	$('#question').empty();
  	$('#answers').val("");
  	$('#answers').empty();
  }

  function checkAnswer(index){
  	alert("answer " + index + " Clicked");
  }

});