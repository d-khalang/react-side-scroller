import { Rectangle ,Texture } from "@pixi/core"
import { Sprite } from "pixi.js"
import { useRef, useState } from "react"
import { TILE_SIZE } from "../../constants/game-world"
import type { Direction } from "../../types/common"

interface IUseHeroAnimationProps {
    texture: Texture
    frameWidth: number
    frameHeight: number
    totalFrames: number
    animationSpeed: number
}

export const useHeroAnimation = ({texture, frameWidth, frameHeight, totalFrames, animationSpeed }:IUseHeroAnimationProps) => {
    const [sprite, seSprite] = useState<Sprite | null>(null)
    const frameRef = useRef(0)
    const elapsedTimeRef = useRef(0)

    

    const createSprite = (row: number, column: number) => {
        const frame = new Texture(texture.baseTexture, new Rectangle(column * frameWidth, row * frameHeight, frameWidth, frameHeight))

        const newSprite = new Sprite(frame)
        newSprite.width = TILE_SIZE
        newSprite.height = TILE_SIZE

        return
    }

    const updateSprite = (direction:Direction|null, isMoving:boolean) => {
        const row = getRowByDirection(direction)
    }

    return {sprite, updateSprite}
}