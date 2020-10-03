export default abstract class Player {
  constructor() {};
  abstract throw_dice();
  abstract get_position();
  abstract is_gameover();
  abstract get_dice_num();
  abstract get_player_summary();
}