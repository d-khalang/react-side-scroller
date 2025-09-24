import type { Direction } from "../types/common";

export const TILE_SIZE = 32;
export const COLS = 43;
export const ROWS = 13;

export const GAME_WIDTH = TILE_SIZE * COLS - TILE_SIZE*2
export const GAME_HEIGHT = TILE_SIZE * ROWS - TILE_SIZE*2

export const OFFSET_X = TILE_SIZE
export const OFFSET_Y = TILE_SIZE/2

export const DEFAULT_POS_X = TILE_SIZE * 10
export const DEFAULT_POS_Y = TILE_SIZE * 10

export const DIRECTION_KEYS: Record<string, Direction> = {
    KeyW: "UP",
    KeyS: "DOWN",
    KeyA: "LEFT",
    KeyD: "RIGHT",
    ArrowUp: "UP",
    ArrowDown: "DOWN",
    ArrowLeft: "LEFT",
    ArrowRight: "RIGHT",
}

export const MOVE_SPEED = 0.03; // Tiles per frame (adjust as needed)