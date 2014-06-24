$(document).ready(function(){
   var qNum = 0;
   var questions = [". Question1", ". Question2", ". Question3"];
   var q1Op = ["Q1_Option1", "Q1_Option2", "Q1_Option3"];
   var q2Op = ["Q2_Option1", "Q2_Option2", "Q2_Option3"];
   var q3Op = ["Q3_Option1", "Q3_Option2", "Q3_Option3"];
   var qCount = -1;
   var opCount = 0;
  
  //$('#question').hide();
  
  $("#quiz").click(function(){
      //alert("Clicked");
      //$('#question').show();
      //$('#question').append(++qNum + questions[0]);
      //alert("Clicked");
	$('#startQuizz').hide();
    $('.game').show();
    
    ++opCount;
	showQuizzPane(++qNum,questions,++qCount,q1Op);
  });
  
  function showQuizzPane(questionNum,allQuestions,questionCt,options){ 	

     $('#question').append(questionNum + allQuestions[questionCt]);

     for(i=0; i<options.length; i++){
     	$('#answers').append('<div class="answer">'+ options[i]+'</div>');
     }
     /*
     $('#answers').append('<div class="answer">I have a bike</div>');
     $('#answers').append('<div class="answer">I have a bycicle</div>');
     $('#answers').append('<div class="answer">I have a car</div>');*/
  }
});