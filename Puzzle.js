class Puzzle {
  constructor(puzzleObject) {
    this.category = puzzleObject.category//will this come from a method on our game class? iterate through data to populate properties?
    this.answer = puzzleObject.correct_answer//same as above
    this.totalNumLetters = puzzleObject.total_number_of_letters//same as above
    this.totalNumWords = puzzleObject.number_of_words//same as above
    this.numLettersInFirstWord = puzzleObject.first_word//same
  }



}


if (typeof module !== 'undefined'){
  module.exports = Puzzle;
}