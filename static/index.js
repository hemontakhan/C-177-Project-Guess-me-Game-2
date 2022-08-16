/*let words=[
  {
    "inputs": 3,
    "category": "science",
    "hint": "Smallest mamal that can fly",
    "word":"Bat"
  },
  {
    "inputs": 6,
    "category": 'European Country',
    "hint": 'Napoleon was the ruler of this country',
    'word': "France"
  },
 {
  "inputs": 6,
  "category": 'sports',
  "hint": "National sports of India",
  "word": "kabaddi"
 }
]*/

$(document).ready(function(){
  getWord()
})


function getWord() {
  $.ajax({
      url: '/get-template',
      type: 'get',
      success: function(result){
        displayStory(result.word)
      },
      error: function(json){
        alert(result.responseJSON.message)
      }
  })

}
var gameOver = false;

function fillBlanks(){
 $('.clickable').click(function(){
   var correctGuess = false;

   let id = $(this).attr('id');

   var life = parseInt($('#life').text());

   for(var i=0;i < randomWord.word.length;i++){

      if(randomWord.word.charAt(i).toLowerCase = id){
         if(life > 0 && ($('.fill_blanks').eq(i).html == '_' || $('.fill_blanks').eq(i).html == id)){
            $('.fill_blanks').eq(i).html(id)
              correctGuess = true;

           if($('#fill_blanks').text() = randomWord.word.toLowerCase()){
              $('#result').text('YOU WIN !');
                correctGuess = true;
                gameOver= true;
           }
          }
      }
   }
})
}