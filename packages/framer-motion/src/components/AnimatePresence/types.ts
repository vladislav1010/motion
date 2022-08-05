/**
 * @public
 */
export interface AnimatePresenceProps {
    /**
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
     * @beta
     */
    exitBeforeEnter?: boolean

    /**
     * Internal. Used in Framer to flag that sibling children *shouldn't* re-render as a result of a
     * child being removed.
     */
    presenceAffectsLayout?: boolean
}

// Extra 1.
// Детально solidbook стр. 136 - 137. с "Ask: What does my code do?"

// Попробовать понять поведение useRender, *читая* только код и комментарии
// Начать с useRender и опускаться вглубь по вызовам функций.
// И обратить внимание на то, что помогает понять, что код делает.
// 1. types.ts
// 2. index.tsx
// …

// Это не должно отнять много времени сейчас, но за малый срок ты не достигнешь полной отдачи от этого упражнения.
// Нужно продолжать читать эту базу кода
// именно на понимание и перенимать принципы и техники:
// Develop our own principles through practice
// We figure out the principles guiding their success.

// Когда будет понимание какой-нибудь области кода, не обязательно большой, будут еще 2 упражнения:
// 1. Find the code that needs to be changed
// 2. Change this code without introducing bugs
