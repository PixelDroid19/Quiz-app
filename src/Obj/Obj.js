export class UserData {
  /**
   *
   * @param {string} text The Text of the Question
   * @param {string[]} choices a lis of choices for the question
   * @param {string} answer the answef of the question
   */
  constructor(Name, Pos, Score, Correct, Wrong) {
    this.Name = Name;
    this.Pos = Pos;
    this.Score = Score;
    this.Correct = Correct;
    this.Wrong = Wrong;
  }

  /**
   *
   * @param {string} choice the choice selected
   * @returns {boolean} returns if the choice is correct
   */
}
