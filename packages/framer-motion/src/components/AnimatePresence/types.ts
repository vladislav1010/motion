/**
 * @public
 */
// $5.7
// "An API might need to provide complete and accurate reference information for any users of that API"
export interface AnimatePresenceProps {
  // $5.2  
  // Software engineering at Google -> Documentation
    /**
     * // The purpose of the prop
     * By passing `initial={false}`, `AnimatePresence` will disable any initial animations on children
     * that are present when the component is first rendered.
     *
     * ```jsx
     * <AnimatePresence initial={false}>
     *   {isVisible && (
     *     <motion.div
     *       key="modal"
     *       initial={{ opacity: 0 }}
     *       animate={{ opacity: 1 }}
     *       exit={{ opacity: 0 }}
     *     />
     *   )}
     * </AnimatePresence>
     * ```
     *
     * @public
     */
    // /$5
    initial?: boolean

    /**
     * When a component is removed, there's no longer a chance to update its props. So if a component's `exit`
     * prop is defined as a dynamic variant and you want to pass a new `custom` prop, you can do so via `AnimatePresence`.
     * This will ensure all leaving components animate using the latest data.
     *
     * @public
     */
    custom?: any

    /**
     * Fires when all exiting nodes have completed animating out.
     *
     * @public
     */
    onExitComplete?: () => void

    /**
     * If set to `true`, `AnimatePresence` will only render one component at a time. The exiting component
     * will finish its exit animation before the entering component is rendered.
     *
     * ```jsx
     * const MyComponent = ({ currentItem }) => (
     *   <AnimatePresence exitBeforeEnter>
     *     <motion.div key={currentItem} exit={{ opacity: 0 }} />
     *   </AnimatePresence>
     * )
     * ```
     *
     * @deprecated
     *
     * Replace with `mode="wait"`
     */
    exitBeforeEnter?: boolean

    /**
     * Determines how to handle entering and exiting elements.
     *
     * - `"sync"`: Default. Elements animate in and out as soon as they're added/removed.
     * - `"popLayout"`: Exiting elements are "popped" from the page layout, allowing sibling
     *      elements to immediately occupy their new layouts.
     * - `"wait"`: Only renders one component at a time. Wait for the exiting component to animate out
     *      before animating the next component in.
     *
     * @public
     */
    mode?: "sync" | "popLayout" | "wait"

    // $5.3
    /**
     * Internal. Used in Framer to flag that sibling children *shouldn't* re-render as a result of a
     * child being removed.
     */
    // /$5
    presenceAffectsLayout?: boolean
}
