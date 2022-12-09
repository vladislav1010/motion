import * as React from "react"
import { useId, useMemo } from "react"
import {
    PresenceContext,
    PresenceContextProps,
} from "../../context/PresenceContext"
import { VariantLabels } from "../../motion/types"
import { useConstant } from "../../utils/use-constant"
import { PopChild } from "./PopChild"

interface PresenceChildProps {
    children: React.ReactElement
    isPresent: boolean
    onExitComplete?: () => void
    initial?: false | VariantLabels
    custom?: any
    presenceAffectsLayout: boolean
    mode: "sync" | "popLayout" | "wait"
}

export const PresenceChild = ({
    children,
    initial,
    isPresent,
    onExitComplete,
    custom,
    presenceAffectsLayout,
    mode,
}: PresenceChildProps) => {
    const presenceChildren = useConstant(newChildrenMap)
    const id = useId()

    const context = useMemo(
        (): PresenceContextProps => ({
            id,
            initial,
            isPresent,
            custom,
            onExitComplete: (childId: string) => {
                presenceChildren.set(childId, true)

                for (const isComplete of presenceChildren.values()) {
                    if (!isComplete) return // can stop searching when any is incomplete
                }

                onExitComplete && onExitComplete()
            },
            register: (childId: string) => {
                presenceChildren.set(childId, false)
                return () => presenceChildren.delete(childId)
            },
        }),
        // $5.4
        // SEAG -> Documentation
        // Reader must know the domain
        /**
         * If the presence of a child affects the layout of the components around it,
         * we want to make a new context value to ensure they get re-rendered
         * so they can detect that layout change.
         */
        presenceAffectsLayout ? undefined : [isPresent]
    )

    useMemo(() => {
        presenceChildren.forEach((_, key) => presenceChildren.set(key, false))
    }, [isPresent])

    /**
     * If there's no `motion` components to fire exit animations, we want to remove this
     * component immediately.
     */
    React.useEffect(() => {
        !isPresent &&
            !presenceChildren.size &&
            onExitComplete &&
            onExitComplete()
    }, [isPresent])

    if (mode === "popLayout") {
        children = <PopChild isPresent={isPresent}>{children}</PopChild>
    }

    return (
        <PresenceContext.Provider value={context}>
            {children}
        </PresenceContext.Provider>
    )
}

function newChildrenMap(): Map<string, boolean> {
    return new Map()
}
