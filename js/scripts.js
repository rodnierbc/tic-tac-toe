//Constants
const BOARD_EMPTY = 'Empty';
const BOARD_IN_USE = 'In Use';
const BOARD_COMPLETED = 'Completed';
const VALUE_X = 'X';
const VALUE_0 = '0';
const VALUE_EMPTY = ' ';
const PLAYER_1 = 'Player 1';
const PLAYER_2 = 'Player 2';

//variables
var player2;
var player1;
var currentSelectedValue;

function User(userFirstName, userLastName){
  this.userFirstName = userFirstName;
  this.userLastName = userLastName;
  this.userActiveTurn = false;
  this.userId = userId;
}

function Board(){
  this.boardSpaces = [];
  this.boardStatus = BOARD_EMPTY;

}
Board.prototype.boardInitialize = function() {
  for(i = 0; i<3; i++){
    for(j= 0; j<3; j++){
      this.boardSpaces[i][j]= VALUE_EMPTY;
    }
  }
}
function playerActive(user1, user2){
  if(user1.userActiveTurn){
    return user1;
  }
  else if(user2.userActiveTurn){
    return user2;
  }
  else {
    return -1;
  }
}

function winCases(board){
  if(board.boardStatus !== BOARD_EMPTY){
    var referenceValue;//will be all pairs (i,j) where i is equals j
    var flat = false;
    var row = true;
    var column = true;
    // var diagonal1 = true;
    // var diagonal2 = true;
    for(i = 0; i<board.length; i++){
      for(j= 0; j<board.length; j++){
        if(i===j){
          referenceValue = board[i][j];
          flat = true;
        }
        if(flat){
          if(referenceValue !== board.boardSpaces[i][j-i]){ //branch rows
            row = false;
          }
          else if(referenceValue !== board.boardSpaces[j-i][i])//branch columns
            column = false;
          }
        }
      flat = false;
    }
    // for(i = 0; i<board.length; i++){
    //   if(i<(board.length-1) && board.boardSpaces[i][i] !== board.boardSpaces[i+1][i+1]){//diagonal1
    //     diagonal1 = false;
    //   }
    //   if(i<(board.length-1) && board.boardSpaces[i][(board.length-1)-i] !== board.boardSpaces[i+1][(board.length-2)-i]){//diagonal2
    //     diagonal2 = false;
    //   }
    // }
    return row || column //|| diagonal1 || diagonal2;
  }
  else {
    return false;
  }
}

//-----------------------frontend-----------------------//
$(function(){

  var board = new Board();
  board.boardSpaces = [['0','x','0'],['0','x','0'],['x','0','x']];
  board.boardStatus = BOARD_IN_USE;
  alert(winCases(board));
  //event.preventDefault();
//  var player1 = $("input#player1").val();
//  var player1 = $("input#player2").val();
  $("#sqOne").on('click', function() {
    event.preventDefault();
    $(this).text("X");
    console.log("click");

  });
  $("#sqTwo").on('click', function() {
    event.preventDefault();
    $(this).text("X");
    console.log("click");

  });
  $("#sqThree").on('click', function() {
    event.preventDefault();
    $(this).text("X");
    console.log("click");

  });
  $("#sqFour").on('click', function() {
    event.preventDefault();
    $(this).text("X");
    console.log("click");

  });
  $("#sqFive").on('click', function() {
    event.preventDefault();
    $(this).text("X");
    console.log("click");

  });
  $("#sqSix").on('click', function() {
    event.preventDefault();
    $(this).text("X");
    console.log("click");

  });
  $("#sqSeven").on('click', function() {
    event.preventDefault();
    $(this).text("X");
    console.log("click");

  });
  $("#sqEight").on('click', function() {
    event.preventDefault();
    $(this).text("X");
    console.log("click");

  });
  $("#sqNine").on('click', function() {
    event.preventDefault();
    $(this).text("X");
    console.log("click");

  });
});
