import { useContext, useEffect, useState } from "react"
import { motionValue, MotionValue } from "."
import { MotionConfigContext } from "../context/MotionConfigContext"
import { useConstant } from "../utils/use-constant"

/**
 * // ?.1 what is state, velocity?
 * Creates a `MotionValue` to track the state and velocity of a value.
 *
 * // $1 How to use it with example scenario
 * Usually, these are created automatically. For advanced use-cases, like use with `useTransform`, you can create `MotionValue`s externally and pass them into the animated component via the `style` prop.
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const scale = useMotionValue(1)
 *
 *   return <motion.div style={{ scale }} />
 * }
 * ```
 *
 * // ?.1 state - state of value?
 * @param initial - The initial state.
 *
 * @public
 */
export function useMotionValue<T>(initial: T): MotionValue<T> {
    const value = useConstant(() => motionValue(initial))

    /**
     * // $3 "static mode" - код не здесь, и не поясняется.
     * If this motion value is being used in static mode, like on
     * // ?.4 "force components to rerender" - теперь ясно, зачем setLatest
     * // $4=?.5 "motion value is updated" - соответствует `value.onChange`
     * the Framer canvas, force components to rerender when the motion
     * value is updated.
     */
    const { isStatic } = useContext(MotionConfigContext)
    if (isStatic) {
        const [, setLatest] = useState(initial)
        useEffect(() => value.onChange(setLatest), [])
    }

    return value
}
