export default abstract class Player {
  name: string
  constructor() {};
  abstract throw_dice();
  abstract get_position();
  abstract is_gameover();
  abstract get_dice_num();
  abstract get_player_summary();
  abstract receive_dice(dice_num);
  abstract pass_dice();
  abstract askForTeaming();
  abstract stay();
  abstract getPastTwoPos();
}