import Player from './player';

export default class Person extends Player {
  private dice_num: number;
  private position: number;
  private positions: number[];

  constructor(name: string, dice_num: number) {
    super();
    this.name = name;
    this.dice_num = dice_num;
    this.position = 0
    this.positions = [0, 0]
  }

  throw_dice() {
    let dice_vals = []
    if (this.dice_num > 0) {
      for (let i = 0; i < this.dice_num; i++) {
        dice_vals.push(Math.floor(Math.random() * Math.floor(6)) + 1)
      }
      this.position += dice_vals.reduce((a,x) => a += x, 0);
      this.positions.push(this.position)
      this.dice_num -= 1
    }
    return dice_vals;
  }

  getPastTwoPos() {
    return this.positions.slice(-2)
  }

  stay() {}

  askForTeaming() {}

  get_player_summary() {
    return {
      name: this.name,
      dice_num: this.get_dice_num(),
      position: this.get_position(),
      is_gameover: this.is_gameover()
    }
  }

  receive_dice(dice_num) {
    this.dice_num += dice_num
  }

  pass_dice() {
    this.dice_num -= 1
    return 1
  }

  is_gameover() {
    return this.dice_num <= 0;
  }

  toString() {
    return `name: ${this.name}\n dice_num: ${this.dice_num}\n position: ${this.position}`
  }

  get_position() {
    return this.position;
  }

  get_dice_num() {
    return this.dice_num;
  }
}