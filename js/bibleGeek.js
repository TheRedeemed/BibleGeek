$(document).ready(function(){
   var qNum = 0;
   var questions = [". Question1", ". Question2", ". Question3"];
   //var q1Op = ["Question1_Option1", "Question1_Option2", "Question1_Option3"];
   //var q2Op = ["Question2_Option1", "Question2_Option2", "Question2_Option3"];
   //var q3Op = ["Question3_Option1", "Question3_Option2", "Question3_Option3"];
   var answersOptions = [["Question1_Option1", "Question1_Option2", "Question1_Option3"],
                         ["Question2_Option1", "Question2_Option2", "Question2_Option3"],
                         ["Question3_Option1", "Question3_Option2", "Question3_Option3"]];
   var qCount = -1;
   var opCount = 0;
  
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
    
	showQuizzPane(++qNum,questions,++qCount,answersOptions[0]);

  });

  $('#guessButton').click(function(){
  	//alert('Clicked!');
  	rmOldQuestion();
  	 for(j=1; j<answersOptions.length; j++){
  		showQuizzPane(++qNum,questions,++qCount,answersOptions[j]);
  	}
  });
  
  function showQuizzPane(questionNum,allQuestions,curQuestion,options){ 	

    $('#question').append(questionNum + allQuestions[curQuestion]);

     for(i=0; i<options.length; i++){
     	$('#answers').append('<div class="answer">'+ options[i]+'</div>');
     }
  }

  function rmOldQuestion(){
  	$('#question').val("");
  	$('#question').empty();
  	$('#answers').val("");
  	$('#answers').empty();
  }

});