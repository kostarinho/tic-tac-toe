import { Action } from '../../libraries/Action';

// const MOVE = 'MOVE';
// const move = payload => ({
//     type: MOVE,
//     payload,
// });
// move.type = MOVE;
const move = Action('MOVE');

// const JUMP_TO = 'JUMP_TO';
// const jumpTo = payload => ({
//     type: JUMP_TO,
//     payload,
// });
// jumpTo.type = JUMP_TO;
const jumpTo = Action('JUMP_TO');

export { move, jumpTo };