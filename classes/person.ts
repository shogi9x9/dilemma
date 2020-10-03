import { PassThrough } from 'stream';
import Player from './player';

export default class Person extends Player {
  private dice_num: Number;
  private name: String;
  private position: Number;

  constructor(name: String, dice_num: Number) {
    super();
    this.name = name;
    this.dice_num = dice_num;
    this.position = 0
  }

  throw_dice() {
    let dice_vals = []
    if (this.dice_num > 0) {
      for (let i = 0; i < this.dice_num; i++) {
        dice_vals.push(Math.floor(Math.random() * Math.floor(6)) + 1)
      }
      this.position += dice_vals.reduce((a,x) => a += x, 0);
      this.dice_num -= 1
    }
    return dice_vals;
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

  toString() {
    return `name: ${this.name}\n dice_num: ${this.dice_num}\n position: ${this.position}`
  }

  private get_position() {
    return this.position;
  }

  private get_dice_num() {
    return this.dice_num;
  }

  private is_gameover() {
    return this.dice_num <= 0;
  }
}