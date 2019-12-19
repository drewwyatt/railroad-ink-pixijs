import { BOARD_WIDTH } from '../../constants'

export const toIdx = (x: number, y: number) => BOARD_WIDTH * y + x
