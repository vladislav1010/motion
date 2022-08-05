import { createElement, useMemo } from "react"
import { ThreeMotionProps, ThreeRenderState } from "../types"
import {
    filterProps,
    isMotionValue,
    RenderComponent,
    resolveMotionValue,
} from "framer-motion"
import { MeshProps, Object3DNode } from "@react-three/fiber"
import { useHover } from "./gestures/use-hover"
import { useTap } from "./gestures/use-tap"

export const useRender: RenderComponent<
    Object3DNode<any, any>,
    ThreeRenderState
> = (
    Component,
    props: ThreeMotionProps & MeshProps,
    _projectionId,
    ref,
    _state,
    isStatic,
    visualElement
) => {
    const visualProps = useVisualProps(props)

    /**
     * If isStatic, render motion values as props
     * If !isStatic, render motion values as props on initial render
     */

    // Использовать createElement<any>
    // тип элемента - в переменной Component
    // props:

    /*
    {
        ref,
        ...filterProps(props, false, false),
        ...visualProps,
        onUpdate: props.onInstanceUpdate,
        ...useHover(isStatic, props, visualElement),
        ...useTap(isStatic, props, visualElement),
    } as any
    */
    // Вернуть это выражение
    return
}
// Кратко просмотри код, перейди по вызовам функций useTap, /packages/framer-motion/src/render/dom/utils/filter-props.ts:40

function useVisualProps(props: ThreeMotionProps & MeshProps) {
    return useMemo(() => {
        const visualProps: ThreeMotionProps & MeshProps = {}

        for (const key in props) {
            const prop = props[key]

            if (isMotionValue(prop)) {
                visualProps[key] = prop.get()
            } else if (Array.isArray(prop) && prop.includes(isMotionValue)) {
                visualProps[key] = prop.map(resolveMotionValue)
            }
        }

        return visualProps
    }, [])
}
