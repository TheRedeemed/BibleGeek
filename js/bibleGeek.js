$(document).ready(function(){
   var qNum = 0;
   var questions = [". How Many men wrote the Bible", ". How many books are they in the old and new testament ", 
                    ". According to the Bible what should we do to be saved"];
   var answersOptions = [["About 50", "About 100", "About 40"],
                         ["Old Testament: 39 and New Testament: 27", "Old Testament: 30 and New Testament: 25", "Old Testament: 40 and New Testament: 27"],
                         ["You have to be a Jew", "Repent from our sins and acknowledge Jesus as Lord and savior", "Nothing God loves everybody"]];


   var qCount = -1;
   var opCount = 0;
   var correctAnswers = 0;
  
  
  $("#quiz").click(function(){
  $('#startQuizz').hide();
    $('.game').show();
    
  showQuizzPane(++qNum, questions, ++qCount, answersOptions[opCount]);

  });

/*
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
*/

   $(document).on("click",".answer", function() {

      var optionValue = $(this).text();
      var index = $(".answer").index(this);

      ++index;

      if(qNum == 1){

        if(index == 3){
            $('#guessList').append('<li>' + qNum + ': correct</li>');
            ++correctAnswers;

          }else {
            $('#guessList').append('<li>' + qNum + ': Incorrect</li>');
            
          }

      } else if(qNum == 2) {

        if(index == 1){
            $('#guessList').append('<li>' + qNum + ': correct</li>');
            ++correctAnswers;

          }else {
            $('#guessList').append('<li>' + qNum + ': Incorrect</li>');
            
          }

      } else if(qNum == 3) {

        if(index == 2){
            $('#guessList').append('<li>' + qNum + ': correct</li>');
            ++correctAnswers;

          }else {
            $('#guessList').append('<li>' + qNum + ': Incorrect</li>');
            
          }

      } 

    rmOldQuestion();

    ++opCount;
    if(opCount<answersOptions.length){
      showQuizzPane(++qNum, questions, ++qCount, answersOptions[opCount]);
    } else {
       $('#question').append('Thank you');
       $('#answers').append('You score: ' + correctAnswers + ' out of ' + questions.length);

    }

  });

  
  function showQuizzPane(questionNum,allQuestions,curQuestion,options){  

    $('#question').append(questionNum + allQuestions[curQuestion]);

     $('#answers').append('<h3>Please select the correct answer</h3>');

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