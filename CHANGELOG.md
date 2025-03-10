# Changelog

Framer Motion adheres to [Semantic Versioning](http://semver.org/).

Undocumented APIs should be considered internal and may change without warning.

## [7.5.0] 2022-09-27

### Added

-   `useAnimationFrame` now passes `delta` to provided callbacks as the second argument.

## [7.4.0] 2022-09-26

### Added

-   Added internal `values` prop that allows the provision of motion values to use exclusively for performing animations on.

## [7.3.6] 2022-09-20

### Fixed

-   Increasing threshold for what's considered a similar aspect ratio in `"preserve-ratio"` layout animations.

## [7.3.5] 2022-09-14

### Fixed

-   `isMotionValue` no longer crashing when provided `null`.

## [7.3.4] 2022-09-13

### Fixed

-   Run feature detection based on rendered props.

## [7.3.3] 2022-09-13

### Fixed

-   Ensuring children dynamic components re-render when context changes.

## [7.3.2] 2022-09-07

### Added

-   `isMotionComponent` returns true if the provided component is a `motion` component.
-   `unwrapMotionComponent` returns the rendered component.

## [7.3.1] 2022-09-07

### Fixed

-   Fixing application of `rotateZ`.

## [7.3.0] 2022-09-06

### Added

-   `layout="preserve-ratio"` performs a position-only transition if the aspect ratio has changed.

### Fixed

-   `layout="position"` now works with shared element transitions.

## [7.2.1] 2022-08-23

### Added

-   Various filesize reductions.

## [7.2.0] 2022-08-14

### Added

-   `AnimatePresence`'s new `mode="popLayout"` prop will "pop" exiting elements from the document layout flow, allowing sibling `layout` elements to animate to their new layout as soon as exiting starts.

### Deprecated

-   `exitBeforeEnter` - replace with `mode="wait"`.

## [7.1.2] 2022-08-16

### Fixed

-   Fixing `useWillChange` export.

## [7.1.1] 2022-08-15

### Changed

-   Upping TypeScript output `target` to `"ES6"`.

### Updated

-   `typescript@4.7`

## [7.1.0] 2022-08-11

### Added

-   `useWillChange` for automatically managing the `will-change` style.

## [7.0.3] 2022-08-11

### Fixed

-   Trimming CSS vars.

## [7.0.2] 2022-08-11

### Fixed

-   Correctly parsing slash-delimited opacities within colors.
-   Exporting types correctly for Typescript 4.7.

## [7.0.1] 2022-08-10

### Changed

-   Replacing internal `useId` with React 18's `useId`.

## [7.0.0] 2022-08-04

### Updated

-   `react@18`
-   `react-three-fiber@8`

### Fixed

-   Drag to reorder items no longer jumping in React 18.

## [6.5.2] 2022-07-27

### Fixed

-   Fix types for `mixer` option in `useTransform`.

### Update

-   `style-value-types@5.1.0`

## [6.5.1] 2022-07-14

### Fixed

-   Adding `onChange` handlers in `useTransform` on `useLayoutEffect`.

## [6.5.0] 2022-07-13

### Added

-   `useScroll` for creating scroll-linked animations.

### Deprecated

-   `useViewportScroll` and `useElementScroll`.

## [6.4.3] 2022-07-08

### Fixed

-   Split module to improve ability to code-split and tree-shake `<m>` and `domMax`.

## [6.4.2] 2022-07-06

### Added

-   `useInView` now automatically respects `rootMargin` within an iframe.

## [6.4.1] 2022-07-05

### Added

-   Renaming `useAnimation` to `useAnimationControls`. `useAnimation` will stay as backwards compatible alias.

## [6.4.0] 2022-07-05

### Added

-   `useInView`.

## [6.3.16] 2022-06-27

### Fixed

-   Fixing layout animations within `position: fixed` elements. Provide `position: fixed` elements the `layoutScroll` prop to fix.

## [6.3.15] 2022-06-24

### Fixed

-   Explicitly declaring `children` prop for components.

## [6.3.14] 2022-06-24

### Fixed

-   Exposing more internal types.

## [6.3.13] 2022-06-22

### Fixed

-   Fix some missing types by replacing `@internalRemarks` comment with `@privateRemarks`.

## [6.3.12] 2022-06-21

### Changed

-   Rolling up published type definitions.

## [6.3.11] 2022-06-08

### Fixed

-   Fixed scale correction during rotation & layout animations.

## [6.3.10] 2022-06-03

### Fixed

-   Fixing version mismatch warning.

## [6.3.9] 2022-06-03

### Fixed

-   Providing path to types via `package.json`'s `exports` field to fix types in TypeScript 4.7.
-   Safer `process.env.NODE_ENV` check.

## [6.3.8] 2022-06-03

### Fixed

-   Restore scroll position after measuring `height` when doing unit conversion animation.

## [6.3.7] 2022-06-03

### Fixed

-   Will display a warning if different versions of Framer Motion are mixed.

## [6.3.6] 2022-05-31

### Fixed

-   All events are now passive unless a user provides an explicit event listener.

## [6.3.5] 2022-05-30

### Fixed

-   Added `initial` prop to Framer Motion 3D types.

## [6.3.4] 2022-05-25

### Fixed

-   Updating `reducedMotion` prop in `MotionConfig` now correctly updates throughout the tree.

## [6.3.3] 2022-04-28

### Fixed

-   Re-enabling layout animations on `svg` elements.

## [6.3.2] 2022-04-26

### Fixed

-   Fixing internal type errors in React 18.
-   Adding deprecation notice to `AnimateSharedLayout`.

## [6.3.1] 2022-04-22

### Fixed

-   SSR in Deno.

## [6.3.0] 2022-04-14

### Added

-   Adding `layout` prop to `Reorder.Item`.
-   `onLayoutAnimationStart`.

### Fixed

-   Ensure `cycle` is properly memoised.

## [6.2.10] 2022-04-12

### Fixed

-   Fixed `useSpring` dependencies if properties change between renders.
-   Fixed `children` types of `AnimatePresence` and `LayoutGroup`.

## [6.2.9] 2022-04-06

### Fixed

-   Fixing `process` in ESM environments.

## [6.2.8] 2022-02-23

### Changed

-   Fixing race conditions for variants changed by state vs by gesture.

## [6.2.7] 2022-02-21

### Changed

-   Replaced undocumented `LayoutGroup` prop `inheritId` with `inherit`.

## [6.2.6] 2022-02-10

### Fixed

-   Remove `useId` from React 18.

## [6.2.5] 2022-02-08

### Fixed

-   Improving compatibility with React 18.

## [6.2.4] 2022-02-03

### Fixed

-   Fixed layout animations with Framer's `Stack` gap Safari polyfill.

## [6.2.3] 2022-01-25

### Added

-   Adding `useReducedMotionConfig` for internal Framer use.

## [6.2.2] 2022-01-21

### Fixed

-   Fixing `onBeforeLayoutMeasure`.

## [6.2.1] 2022-01-21

### Added

-   Ensure `useReducedMotion` detects reduced motion on load.

## [6.2.0] 2022-01-21

### Added

-   `reducedMotion` option to `MotionConfig`.

## [6.1.0] 2022-01-20

### Added

-   Added `viewport.fallback` option to disable `IntersectionObserver` polyfill.

## [6.0.0] 2022-01-19

### Changed

-   `framer-motion/three` is now `framer-motion-3d`.

## [5.6.0] 2022-01-12

### Added

-   `isValidProp` prop to `MotionConfig` that allows the injection of custom detection of valid React props.

## [5.5.8] 2022-01-12

### Fixed

-   Removing `transformTemplate` prop correctly rerenders element.

## [5.5.7] 2022-01-11

### Fixed

-   Fixing crossfade for % or px unit border radius. [Issue](https://github.com/framer/motion/issues/1413)

## [5.5.6] 2022-01-07

### Fixed

-   `MotionConfig` propagates changes to transition.

## [5.5.5] 2021-12-17

### Fixed

-   Using `dpr` prop in layout animation calculations.

## [5.5.4] 2021-12-16

### Fixed

-   Improving performance of `LayoutCamera`.
-   Removing `data-projection-id` in static mode.

## [5.5.3] 2021-12-15

### Fixed

-   Improving performance of `LayoutCamera` and fixing final flash.

## [5.5.2] 2021-12-15

### Fixed

-   Reimplemented dynamic resolution scaling for `LayoutCamera`.

## [5.5.1] 2021-12-14

### Fixed

-   Removed dynamic resolution scaling from `LayoutCamera` to fix crash in iOS.

## [5.5.0] 2021-12-14

### Added

-   `LayoutCamera` and `LayoutOrthographicCamera`.

## [5.4.5] 2021-12-09

### Fixed

-   Passing `MotionConfigContext` through from DOM into 3D.

## [5.4.4] 2021-12-08

### Fixed

-   Fixing variant animations across DOM and 3D boundaries via `MotionCanvas`.

## [5.4.3] 2021-12-07

### Fixed

-   Fixing export paths. [PR by @edoardolincetto](https://github.com/framer/motion/pull/1385).

## [5.4.2] 2021-12-07

### Fixed

-   Sharing `MotionContext` across Framer Motion and Framer Motion 3D environments in CommonJS environments.

## [5.4.1] 2021-12-06

### Fixed

-   3D entry point overwriting ES modules with dropped exports.

## [5.4.0] 2021-12-06

### Added

-   `useAnimationFrame`

## [5.3.3] 2021-11-24

### Fixed

-   Fixing animating to CSS variables with `SVGElement`. [Issue](https://github.com/framer/motion/issues/1334)
-   Unsetting `z-index` for resting `Reorder.Item` components. [Issue](https://github.com/framer/motion/issues/1313)
-   Forward native drag listeners to `draggable` elements. [Issue](https://github.com/framer/motion/issues/1248)
-   Authors can now support browsers without `Proxy` by using `motion("div")` syntax. [Issue](https://github.com/framer/motion/issues/1178)

## [5.3.2] 2021-11-23

### Fixed

-   Ensuring forced renders are batched so sibling `AnimatePresence` renders are triggered together. [Issue](https://github.com/framer/motion/issues/1358)
-   Viewport enter/leave event handlers are passed `IntersectionObserverEntry` or `null` if `IntersectionObserver` is not supported on the device. [Issue](https://github.com/framer/motion/issues/1364)
-   No longer applying touch scroll-disabling styles if `dragListener` is set to `false`. [Issue](https://github.com/framer/motion/issues/1341)

## [5.3.1] 2021-11-19

### Added

-   `useInstantTransition` hook for internal use.

### Fixed

-   Removing `layoutDependency` from forwarded props. [Issue](https://github.com/framer/motion/issues/1350)
-   `Reorder.Item` correctly fires `onDrag`. [Issue](https://github.com/framer/motion/issues/1348)
-   Fires `onPressStart` and `onHoverStart` **after** triggering animations.
-   Replay keyframes when variant changes. [Issue](https://github.com/framer/motion/issues/1346)
-   Correctly SSR final keyframe when `initial` is `false`.

## [5.3.0] 2021-11-11

### Added

-   `whileInView`, `onViewportEnter` and `onViewportLeave` props.

## [5.2.1] 2021-11-05

### Fixed

-   Fixing unit conversion for `x` and `y` styles. [Issue](https://github.com/framer/motion/issues/1336)

## [5.2.0] 2021-11-04

### Added

-   Enable animation between hsla and rgba/hex.

### Fixed

-   Fixing HSLA color interpolation. [Issue](https://github.com/framer/motion/issues/1324)

## [5.1.0] 2021-11-02

### Added

-   Adding path drawing support for `circle`, `ellipse`, `line`, `path`, `polygon`, `polyline` and `rect` components.
-   Add SSR support for `pathLength`.

### Fixed

-   Fixed SSR for `pathLength`.
-   Downgrading `whileFocus` to lowest gesture priority. [Issue](https://github.com/framer/motion/issues/1221)
-   Fixed path length for elements with `vectorEffect="non-scaling-stroke"` [Issue](https://github.com/framer/motion/issues/521)
-   Stripping `dragSnapToOrigin` from DOM output. [PR by @Evalon](https://github.com/framer/motion/pull/1326)

## [5.0.2] 2021-11-02

### Fixed

-   Convert x/y from percent to pixels before drag. [Issue](https://github.com/framer/motion/issues/424)
-   Dynamic functions passed to `controls.start()` can now return variant names. [Issue](https://github.com/framer/motion/issues/503)
-   Factors in padding when measuring elements for `width`/`height` unit conversion. [Issue](https://github.com/framer/motion/issues/368)

## [5.0.1] 2021-11-01

### Added

-   `onAnimationStart` is now called with the definition of the triggering animation.

### Fixed

-   Removing context memoisation to ensure removed values are correctly animated to.
-   Adding unmount check to `AnimatePresence` before updating state. [PR by @ctrlplusb](https://github.com/framer/motion/pull/796)
-   Fixing types for multi-input `useTransform`. [PR by @kena0ki](https://github.com/framer/motion/pull/843)
-   Fixing `staggerChildren` for value-specific transitions. [Issue](https://github.com/framer/motion/issues/1081)
-   Fixes animation between `0` and non-number/pixel keyframe array. [Issue](https://github.com/framer/motion/issues/1308)

## [5.0.0] 2021-10-27

### Added

-   `Reorder` components to create drag-to-reorder interfaces.
-   `LayoutGroup` allows namespacing `layoutId` and group elements that may affect each-other's layout on re-render.
-   `layoutDependency` prop to restrict when components are measured.
-   `layoutScroll` prop to hint to layout animations when a element is scrollable.
-   Layout animations are auto-completed when the viewport resizes.
-   `layout="size"` for size-only animations [PR by @bhollis](https://github.com/framer/motion/pull/1154).

### Fixed

-   Various layout projection improvements.

### Changed

-   `AnimateSharedLayout` is deprecated.

## [4.1.17] 2021-05-17

### Fixed

-   Fixing SVG `gradientTransform`.
-   Removing hover event suspension during layout measurements.

## [4.1.16] 2021-05-12

### Fixed

-   Use with changing external refs.

## [4.1.15] 2021-05-11

### Fixed

-   Correctly firing `onAnimationComplete` when a spring animation defined by `bounce` and no `duration` is completed.

## [4.1.14] 2021-05-11

### Fixed

-   Narrowing the edge cases within which drag could lock the projection viewport box.
-   Comparing prev scale to correct axis.

## [4.1.13] 2021-05-07

### Fixed

-   Call function ref if it changes between renders.

## [4.1.12] 2021-05-07

### Fixed

-   Layout measurements for drag gesture don't happen until the gesture is confirmed to start.
-   Prevent occasional flash when projection hasn't yet been hydrated.
-   Unifying layout batcher between drag and layout animations.
-   Suspending hover events globally during layout measurements.

## [4.1.11] 2021-04-28

### Fixed

-   Layout projection fix.

## [4.1.10] 2021-04-26

### Fixed

-   Allow a component to have `transform` reset before measuring child layout.

## [4.1.9] 2021-04-23

### Fixed

-   Further nested drag improvements for external motion values.

## [4.1.8] 2021-04-22

### Fixed

-   Nested drag improvements for external motion values.

## [4.1.7] 2021-04-21

### Fixed

-   Nested drag improvements.

## [4.1.6] 2021-04-20

### Fixed

-   Nested drag improvements.

## [4.1.5] 2021-04-19

### Fixed

-   Layout projection improvements.

## [4.1.4] 2021-04-19

### Fixed

-   Disabling hover events when a drag is active.

## [4.1.3] 2021-04-07

### Fixed

-   Animating to/between `0rem` and other non-specifically handled unit types.

## [4.1.2] 2021-04-01

### Fixed

-   Clamping `borderRadius` to `0` and above during crossfade.

## [4.1.1] 2021-04-01

### Fixed

-   Animating from `undefined` to number (including units) now animates from `0`.

## [4.1.0] 2021-03-31

### Added

-   Relative layout animations
-   Adding `transition.crossfade` and `transition.layout` for crossfade and layout-specific transitions.

### Fixed

-   Various layout projection improvements.

## [4.0.3] 2021-03-24

### Fixed

-   Replaced layout animation tree traversal with flat array traversal of **just** projecting elements.

## [4.0.2] 2021-03-19

### Fixed

-   Various layout animation bugfixes.

### Upgraded

-   Upgraded `popmotion`, `framesync`, `style-value-types` and `tslib` to `latest`.

## [4.0.1] 2021-03-23

### Fixed

-   Adding `package.json` to `exports` so it can be imported by Node.

## [4.0.0] 2021-03-18

### Added

-   Added the new `LazyMotion` component to defer the loading of animations and gestures.

### Removed

-   The deprecated `motion.custom()`. Use `motion()` instead.

## [3.10.6] 2021-03-18

### Fixed

-   Various variant bugs.

## [3.10.5] 2021-03-15

### Fixed

-   Added specific `default` and `require` fields to the `exports` field for CJS compatibility.

## [3.10.4] 2021-03-15

### Added

-   `exports` field to `package.json`.

### Fixed

-   `useMotionValue` now forces re-render on the Framer canvas when the underlying `MotionValue` updates.

## [3.10.3] 2021-03-10

### Fixed

-   Reduced memory consumption in static mode by not loading `VisualElement`.

## [3.10.2] 2021-03-09

### Fixed

-   Improved memory consumption of `SubscriptionManager`.

## [3.10.1] 2021-03-09

### Fixed

-   New layout animations now only trigger when the target viewport box has changed.

## [3.10.0] 2021-03-03

### Added

-   `useVelocity`.

## [3.9.3] 2021-03-03

### Fixed

-   Exporting `AnimationPlaybackControls` and `AnimationOptions` for `animate()`.
-   Fixed passing dynamic function to `controls.start()`.

## [3.9.2] 2021-03-02

### Fixed

-   Crossfader now only returns values for the lead and follow components.

## [3.9.1] 2021-03-02

### Fixed

-   Drag now passing velocity to `useSpring` correctly.

## [3.9.0] 2021-03-02

### Added

-   `dragElastic` now accepts per-axis elastic settings.

## [3.8.2] 2021-03-01

### Fixed

-   `perspective` now correctly set as its own `style`. `transformPerspective` still builds into `transform`.

## [3.8.1] 2021-03-01

### Changed

-   Refactoring `AnimationType` is improve bundle-splitting.

## [3.8.0] 2021-03-01

### Fixed

-   Code-splitting for Webpack.

## [3.7.0] 2021-02-23

### Added

-   `motion()` creates custom `motion` components.
-   `forwardMotionProps` boolean to optionally forward `MotionProps` to custom components.

### Changed

-   Custom `motion` components no longer forward `MotionProps` by default.

### Deprecated

-   `motion.custom`

### Fixed

-   Listing React 17 as a `peerDependency`.

## [3.6.7] 2021-02-22

### Fixed

-   More permissive check for previously-unencountered values.

## [3.6.6] 2021-02-22

### Fixed

-   Safer `hasOwnProperty` check for `null` values.

## [3.6.5] 2021-02-22

### Fixed

-   Only fire `onPanEnd` if `onPanStart` has triggered.

## [3.6.4] 2021-02-22

### Fixed

-   Adding polyfill `performance.now` in `framesync`.

## [3.6.3] 2021-02-22

### Fixed

-   Only crossfading defined `borderRadius` borders during shared element transitions.

## [3.6.2] 2021-02-20

### Fixed

-   `AnimatePresence` now correctly unmounts children if it contains no `motion` components.

## [3.6.1] 2021-02-19

### Fixed

-   `onAnimationComplete` on child variant components now fire as expected.

## [3.6.0] 2021-02-19

### Added

-   `onAnimationComplete` now provides the definition of the triggering animation.

## [3.5.3] 2021-02-19

### Fixed

-   Fixing bug with `afterChildren` and `exit` animations.

## [3.5.2] 2021-02-18

### Added

-   Setting `sideEffects: false` in `package.json` to help code splitting in Webpack.

## [3.5.1] 2021-02-18

### Fixed

-   `onTapCancel` is now being correctly cleaned up.

## [3.5.0] 2021-02-18

### Added

-   Adding `transition` prop to `MotionConfig` to set a default `transition` for an entire tree.

## [3.4.2] 2021-02-18

### Added

-   `onBeforeLayoutMeasure` prop, currently a Framer internal.

## [3.4.1] 2021-02-18

### Fixed

-   De-duplicating features in nested `MotionConfig`s to avoid key error.

## [3.4.0] 2021-02-18

### Changed

-   Main `motion` component concurrent-safe.

### Fixed

-   Crossfading elements can now never fall out of positional/style sync due to mismatched animations or framelag.
-   Fixing SVG double translation transform (props + transform style).
-   `animate` `onComplete` now firing correctly.
-   Only firing keyframe animation when all values have changed.
-   Removing forced re-renders for variant trees.
-   Variant stagger order now determined by DOM APIs.
-   Fixed default spring for `scale`, `opacity` etc from being overdamped to being critically damped when animating to `0`.

## [3.3.0] 2020-02-03

-   Fixing errant publish.

## [3.2.1] 2020-01-11

### Added

-   Exporting `useVariantContext` for internal Framer use.

## [3.2.0] 2020-01-08

### Added

-   Support for hex `alpha`, ie `#FFF0` and `#FFFFFF00`.
-   Support for default `filter` values. For example, when animating from `brightness(50%)`, the animation will start from `brightness(100%)`rather than`brightness(0%)`.

## [3.1.5] 2020-01-08

### Fixed

-   Hover events are now blocked while layout is being measured.

## [3.1.4] 2020-01-05

### Fixed

-   Blocking layout animations to/from zero bounding boxes.
-   `onTapCancel` now fires correctly on touch screens.
-   `createDomMotionComponent` types.

## [3.1.3] 2020-01-04

### Fixed

-   Fixed types for `pathSpacing` and `pathOffset`.

## [3.1.2] 2020-01-04

### Fixed

-   `snapToCursor` respects drag axis.

## [3.1.1] 2020-12-18

### Updated

-   Updated dependencies.

## [3.1.0] 2020-12-18

### Added

-   `whileFocus`

## [3.0.1] 2020-12-18

### Fixed

-   Error when mixing `initial={false}` and `animate={controls}`.

## [3.0.0] 2020-12-16

### Added

-   `whileDrag`
-   Adding Safari-prefixed `userSelect` css to draggable elements.
-   `whileHover`, `whileTap` and `exit` all now accept variant lists.

### Changed

-   New behaviour for when values are removed from animation props (`animate`, `whileHover`, `exit` etc). The value will be searched for in active props of a lower priority running (`style` <- `animate` <- `whileHover` <- `whileTap` <- `whileDrag` <- `exit`). This may introduce subtle behavioural changes, hence the major.

### Removed

-   The deprecated `useInvertedScale` hook. Use the `layout` prop instead.
-   The deprecated `yoyo`, `flip` and `loop` options. Use `repeat` and `repeatType` options instead.

### Fixed

-   Correctly applying `transform` on SVG elements.
-   Lazy-initialising viewport scroll, VisualElement.axisProgress, and reduced motion `MotionValue`s, for increased startup performance.
-   Improved measurement scheduling for `drag` components and nested `AnimateSharedLayout` trees.
-   Robust calculation of `treeScale`.

## [2.9.5] 2020-11-16

### Added

-   Updating `package.json` to be compatible with React 17.

## [2.9.4] 2020-10-21

### Added

-   Exporting internal API `startVisualElementAnimation` for use in Framer.

## [2.9.3] 2020-10-19

### Added

-   Exporting `Target` type.

## [2.9.2] 2020-10-19

### Fixed

-   Over-eager variant propagation.

## [2.9.1] 2020-10-12

### Fixed

-   Reverting `matchMedia` listener to legacy `addListener` to fix in Safari.

## [2.9.0] 2020-10-12

### Added

-   Refactor has reduced complete bundle size to 27kb and `m` component bundle size to 12.5kb.

### Fixed

-   Removing whitespace from resolved CSS variables.

## [2.8.0] 2020-10-09

### Added

-   `animate` function for low-level single `MotionValue` or arbitrary value animations.

## [2.7.8] 2020-10-07

### Changed

-   Reverting previous behaviour to allow manual triggering of updating drag constraints via `useDragControls`.

## [2.7.8] 2020-10-07

### Changed

-   If `dragConstraints` is set to a ref on a non-draggable component, we resolve the constraints on mount in order to pass them to `onMeasureDragConstraints`.

## [2.7.7] 2020-10-01

### Fixed

-   `duration` and `bounce` are now overridden by `damping`, `stiffness`, and `mass`. This fixes an issue in Framer where legacy transitions were breaking.

## [2.7.6] 2020-09-29

### Fixed

-   When a `transform` is provided to `style` as a `MotionValue` and then replaced with a number on a subsequent render, we create a new `MotionValue` for it.

## [2.7.5] 2020-09-26

### Fixed

-   Manually setting a `from` in `transition`.

## [2.7.4] 2020-09-26

### Fixed

-   Blocks propagation of variants from parent if a component's `animate` prop is set to `AnimationControls`. `inherit` can be used to force inheritence `true` or `false`.

## [2.7.3] 2020-09-25

### Fixed

-   Blocks touch viewport scrolling from draggable components on a per-axis basis.
-   Reinstating `sideEffects: false` now that the `blockViewportScroll` method has been removed.

## [2.7.2] 2020-09-24

### Added

-   `createDomMotionComponent` for legacy browser support.

## [2.7.1] 2020-09-23

### Fixed

-   Reverting `sideEffects: false`, as viewport touch scroll blocking is a side effect.

## [2.7.0] 2020-09-23

### Added

-   Duration-based springs.

## [2.6.15] 2020-09-18

### Fix

-   Fixing dynamic type imports in generated types.

## [2.6.14] 2020-09-18

### Fix

-   No longer unsetting transform motion values from `style` if their current value is `0`.
-   Correct `useDomEvent` types to allow any `EventTarget`.
-   Fix memory leak error in `AnimatePresence`.

### Change

-   Added `sideEffects: false` to `package.json`.
-   Added `bundlesize` bundle budgeting.

## [2.6.13] 2020-09-12

### Fix

-   `drag` + `layout` components no longer reset position to center.

## [2.6.12] 2020-09-11

### Change

-   Reduced full bundle size by 0.8kb by replacing `import * from "popmotion"` with a named map of specifically just the easing functions.

## [2.6.11] 2020-09-11

### Fixed

-   Reinstating default keyframes duration of `0.8` seconds.

## [2.6.10] 2020-09-10

### Fixed

-   `dragElastic={0}` gesture end animations now work correctly.

## [2.6.9] 2020-09-09

### Fixed

-   Ensure `AnimatePresence` children re-render when children exit.

## [2.6.8] 2020-09-08

### Fixed

-   Ensure useTransform uses the latest handler.

## [2.6.7] 2020-09-08

### Added

-   Scale correction for `borderRadius` and `boxShadow` found in `style`.
-   Fixed conflict between `initial` and `style`. `initial` will now take precedence on initial render.
-   Support for CSS variables in scale-corrected `boxShadow` styles.

## [2.6.6] 2020-09-03

### Fixed

-   Correctly mapping `times` option to Popmotion's `offset`.

## [2.6.5] 2020-08-28

### Changed

-   Tweaked `restSpeed` defaults for smoother halting of physical (px) springs.

### Fixed

-   Critical-damped spring equations in Popmotion.

## [2.6.4] 2020-08-28

### Fixed

-   Forcing array targets to use keyframes animations.

## [2.6.3] 2020-08-27

### Fixed

-   Coercion to type `auto`.

## [2.6.2] 2020-08-26

### Fixed

-   Fixing detection of transition definitions and application of default transitions.
-   When animating to/from `0` and a unit type, `0` will be coerced to that unit type rather than needing unit conversion via DOM measurement.

## [2.6.1] 2020-08-26

### Fixed

-   Updating `useDragControls` documentation to reflect that triggering events should be `usePointerDown`, as mouse events work differently on touch screens.
-   `AnimatePresence.custom` is passed throughout the tree for all exit variants.
-   Animating the `viewBox` attribute of `svg` elements now correctly sets the `viewBox` attribute instead of `view-box`.

### Upgrade

-   Typescript 4.

## [2.6.0] 2020-08-24

### Fixed

-   Reverting relative `dragConstraints` resolution that was erroneously changed in `2.1.3`.

## [2.5.5] 2020-08-20

### Fixed

-   Tweaked `restDelta` in `popmotion@9.0.0-rc.7` for smoother `opacity` transitions.

## [2.5.4] 2020-08-20

### Fixed

-   Fixed jumpy drag transitions resulting from existing animations not being correctly stopped.

## [2.5.3] 2020-08-20

### Fixed

-   Improved velocity check for underdamped springs.

## [2.5.2] 2020-08-20

### Fixed

-   Drag transitionEnd conflicting with layout animations.

## [2.5.1] 2020-08-18

### Fixed

-   Occasional glitchy movement with `type: "spring"` and `repeatType: "mirror"`

## [2.5.0] 2020-08-18

### Added

-   New repeat syntax
-   Support for repeated springs

### Fixed

-   Fixed support for `null` in keyframes animations.
-   Fixed `delay` propagation.

## [2.4.3] 2020-08-18

### Changed

-   Upgrading to Popmotion 9 RC.

## [2.4.1] 2020-08-12

### Fixed

-   Adding defensive check for `visualElement.box` in `MeasureLayout`.

## [2.4.0] 2020-08-12

### Added

-   Upgraded `useTransform` to accept multiple `MotionValue`s.
-   Support for `transformPerspective` style.
-   Internal: `_dragX` and `_dragY` external `MotionValue` targets for drag gesture.
-   Internal: Support for rotate in `AnimateSharedLayout` within Framer.
-   Internal: `onViewportBoxUpdate`, `onLayoutMeasure` and `onLayoutUpdate` event handlers added to `HTMLVisualElement`.

### Fixed

-   Fixed `AnimateSharedLayout` within React `17.0.0-rc.0`.
-   Drag now works directly on `x` and `y` transforms unless `layout` or `layoutId` are also set.

### Changed

-   Marked `useInvertedScale` as deprecated.

## [2.3.0] 2020-07-28

### Added

-   `useMotionTemplate`, a hook for combining MotionValues using a string template literal.

## [2.2.0] 2020-07-27

### Added

-   `m` component is a lightweight, featureless version of the `motion` component.
-   `MotionConfig` is used to dynamically provide features to `m` components via context.

## [2.1.4] 2020-07-24

### Added

-   Drag Cypress test suite.

### Fixed

-   Application of relative drag constraints.
-   User-set transforms were only updating when layout transforms updated.
-   Fixing drag on SVG components.

## [2.1.3] 2020-07-23

### Fixed

-   HSLA interpolation when either HSLA contains a decimal.
-   Whitespace-syntax color support.
-   `onLayoutAnimationComplete` now firing correctly.

## [2.1.2] 2020-07-22

### Fixed

-   Respecting `transformTemplate` for layout animations.
-   Fixed `this.box is undefined` errors.

### Changed

-   Internal refactoring to improve tree-shaking and allow for dynamic feature injection.

## [2.1.1] 2020-07-20

### Fixed

-   Performance improvements to layout delta calculations.

## [2.1.0] 2020-07-17

### Added

-   `layout="position"` for position-only layout animations.

## [2.0.1] 2020-07-16

### Fixed

-   Fixed issue with draggable components staying stuck when they're getting render-thrashed.

## [2.0.0] 2020-07-15

### Added

-   `layout` prop for automatic layout animations.
-   `AnimateSharedLayout` and `layoutId` for shared layout animations.
-   `onMeasureDragConstraints` prop that fires when `dragConstraints` are measured.
-   `useIsPresent`, a read-only version of `usePresence`.
-   Allow `dragConstraints` to be a ref that is smaller than the draggable element.

### Removed

-   `positionTransition` and `layoutTransition` props (use `layout={true}` instead).
-   `Point` type in favour of `Point2D`.
-   `useAnimatedState`: Moved to Framer library.
-   `dragOriginX`, `dragOriginY` props.
-   `stylefire` as a dependency.

### Fixed

-   Removing a `MotionValue` from `style` now correctly unsets it from the element.

### Changed

-   Using `Proxy` to generate `motion` components. This saves ~0.5kb from the bundle size and ensures compatibility with all DOM elements and Web Components.
-   `x` and `y` transform values won't change as a result of a drag gesture as this now works via layout projection.
-   Drag events now report `point` as the pointer relative to the viewport, in line with other pointer events.
-   Changed build process and using Terser for uglification. Reduces bundle size by ~1.2kb. ([@stokesman](https://github.com/stokesman) in [#596](https://github.com/framer/motion/pull/596))

## [1.11.1] 2020-06-16

### Fixed

-   Using `useIsomorphicEffect` for `useElementScroll` and `useViewportScroll`.([@thebuilder](https://github.com/thebuilder) in [#592](https://github.com/framer/motion/pull/592))

## [1.11.0] 2020-05-15

### Added

-   Added a `useElementScroll` hook that allows the creation of scroll motion values for HTML elements. ([@souporserious](https://github.com/souporserious) in [#195](https://github.com/framer/motion/pull/195))

## [1.10.3] 2020-03-23

### Fix

-   Replacing the functionality of `DragControls` `e.preventDefault()` with CSS and HTML attributes. ([@inventingwithmonster](https://github.com/inventingwithmonster) in [#495](https://github.com/framer/motion/pull/495))

## [1.10.2] 2020-03-23

### Fix

-   Fixing `PresenceChild` losing correct count of exiting children if it re-renders. ([@inventingwithmonster](https://github.com/inventingwithmonster) in [#490](https://github.com/framer/motion/pull/490))

### Changed

-   Removed developer warning when using `usePresence` outside of an `AnimatePresence` block.

## [1.10.1] 2020-03-23

### Fix

-   Fixing `AnimatePresence` children not re-rendering when their exiting siblings have been removed from the tree (which broke siblings `positionTransition` and `layoutTransition`). ([@inventingwithmonster](https://github.com/inventingwithmonster) in [#489](https://github.com/framer/motion/pull/489))
-   Adding `null` check for `getTranslateFromMatrix` ([@JoyalJoyMadeckal](https://github.com/JoyalJoyMadeckal) in [#482](https://github.com/framer/motion/pull/482))

## [1.10.0] 2020-03-19

### Added

-   `AnimatePresence` now supports multiple `usePresence` children within a given sub-tree.

## [1.9.1] 2020-03-06

### Fixed

-   Ensuring drag momentum animations happen on `_dragValueX` and `_dragValueY` if provided. ([@inventingwithmonster](https://github.com/inventingwithmonster) in [#473](https://github.com/framer/motion/pull/473))

## [1.9.0] 2020-03-02

### Added

-   `usePresence` hook. ([@inventingwithmonster](https://github.com/inventingwithmonster) in [#473](https://github.com/framer/motion/pull/473))
-   `repository` field in `package.json`. ([@iamstarkov](https://github.com/iamstarkov) in [#469](https://github.com/framer/motion/pull/469))

## [1.8.4] 2020-02-05

### Added

-   `dragListener` prop to disable drag event listeners.

## [1.8.3] 2020-01-28

### Added

-   Updated documentation for `DragControls.start`.

## [1.8.2] 2020-01-28

### Downgrade

-   Downgraded `api-extractor` to `@7.3` as `7.7.7` broke `Method` name indexing.

## [1.8.1] 2020-01-28

### Added

-   Updated documentation for `useDragControls`.

## [1.8.0] 2020-01-27

### Added

-   `useDragControls` allows imperative initiation of a drag gesture.

## [1.7.3] 2020-01-24

### Fixed

-   Updated `transformTemplate` to provide an empty string if all transform values are default.

## [1.7.2] 2020-01-20

### Fixed

-   Changed definition of `staggerDirection` from `1 | -1` to `number` to reduce the need for casting externally-defined types.

## [1.7.1] 2020-01-20

### Added

-   Added support for `TargetResolver` in `exit` types.

### Fixed

-   Filtering `onAnimationStart` from forwarded props.

## [1.7.0] 2019-12-12

### Added

-   Support for `prefers-reduced-motion` via the `useReducedMotion` hook.

## [1.6.18] 2019-12-10

### Fixed

-   Various `StrictMode`-related bugs including `layoutTransition` origin calculation.
-   Only applying drag constraints during a `useEffect` to allow render-triggered animations a chance to start (thereby blocking the application of constraints).

## [1.6.17] 2019-11-21

### Added

-   `controls.set` can now accept a function that will resolve once for each child.

## [1.6.16] 2019-11-21

### Fixes

-   Fixing `ref` hydration in `useLayoutEffect`. (Note: This release effectively reverts `1.6.10`. Each child of `AnimatePresence` with a unique `key` should be given a unique `ref`).
-   Moving callback ref mutation in `use-drag` and `use-pan-gesture` to a `useEffect`.

## [1.6.15] 2019-10-24

### Added

-   Quick start section to README.

## [1.6.14] 2019-10-14

### Fix

-   Making position change detection more intelligent.

## [1.6.13] 2019-10-14

### Fix

-   Fixing undefined `this.props` error for `AnimatePresence.exitBeforeEnter`.

## [1.6.12] 2019-10-10

### Fix

-   Support strings in `motion.custom` for Web Component support.

## [1.6.11] 2019-10-09

### Fix

-   Inconsistency in handling `x`/`y` between SVG and HTML. Now always a shorthand for `translateX` and `translateY`.

## [1.6.10] 2019-10-09

### Fix

-   Fixing the use of externally-provided `ref`s with single-child `AnimatePresence` components.

## [1.6.9] 2019-10-08

### Fix

-   Exit variant propagation.
-   Cancelling exit animations.

## [1.6.8] 2019-10-02

### Fix

-   Fixed exit animation when `animate={useAnimation()}`.
-   Fixed exit animations when another animation is playing concurrently and finishes first.
-   Upgrade `stylefire@6.0.11` to fix `clipPath` in Webkit.
-   Allow `motion.custom` to accept custom prop types.
-   Support clicks within draggable components on iOS Safari.
-   Making `inherit` public API.

## [1.6.7] 2019-08-30

### Fix

-   Restoring React-style behaviour for transform `style` properties when a component `isStatic`.

## [1.6.6] 2019-08-29

### Fix

-   Adding `@emotion/is-prop-valid` as an optional dependency to ensure we filter out arbitrary props passed along by Emotion and Styled Components.

## [1.6.5] 2019-08-27

### Fix

-   Value-specific `delay`.

## [1.6.4] 2019-08-27

### Upgrade

-   `stylefire@6.0.10`

## [1.6.3] 2019-08-19

### Fixed

-   Ensuring `onDragEnd` always fires after if `onDragStart` fired.

## [1.6.2] 2019-08-14

### Fixed

-   Invalid property in SVGs.

## [1.6.1] 2019-08-12

### Fixed

-   Making `useInvertedScale` public and changing const to function.

## [1.6.0] 2019-08-12

### Added

-   `layoutTransition`
-   `EventInfo` now passed as second argument to `onHoverStart` and `onHoverEnd`.
-   `useDomEvent` hook for attaching events directly to an `Element`.

### Fixed

-   Simplifying event system.
-   Applying values in `animate.transitionEnd` if not initial animation.
-   Made drag constraints only apply if a value isn't animating.
-   Don't throw error if `useInvertedScale` is provided arguments.

## [1.5.0] 2019-08-02

### Added

-   `useInvertedScale` for inverting parent scales.

## [1.4.2] 2019-07-31

### Fixed

-   `positionTransition` on exiting components within `AnimatePresence`.

## [1.4.1] 2019-07-30

### Fixed

-   Pan and drag gestures with `PointerEvent`.

## [1.4.0] 2019-07-29

### Added

-   `AnimatePresence.exitBeforeEnter`.
-   Added explicit support for custom components as children of `AnimatePresence`.

### Fixed

-   Fixing issue with drag constraints (ref-based) being reset, while dragging, on unrelated parent component updates.
-   Updated rollup config to list `tslib` as an external dependency.
-   Ensuring unmounting components don't call `onAnimationComplete`.
-   Adding error message when no initial value is set, or can be read or inferred.
-   Ensuring color alpha is always within bounds.
-   Ensuring variants propagate on unmount.

## [1.3.0] 2019-07-24

-   Added `onAnimationStart`.

### Fixed

## [1.2.6] 2019-07-23

### Fixed

-   Make sure `select`, `input`, `textarea` loose focus when blocking default behaviour in a draggable element.

## [1.2.5] 2019-07-23

### Fixed

-   Value type conversion for currently-hidden elements.
-   Fixing unit type conversions when non-positional transforms are applied.
-   Fixing variant propagation via `useAnimation()` when the parent component has no `variants` prop set.
-   Fixing unsetting `whileHover` and `whileTap` if they contain `transitionEnd` values.
-   Child components within variant trees now animate to `animate` as set by their parent.
-   Checking animation props for array variants as well as strings.
-   If unencountered value is animated, first attempt to extract an initial value from keyframes definition. Also upgrading `stylefire` to gracefully handle transform requests.

## [1.2.4] 2019-07-15

### Added

-   `isValidMotionProp` function.

### Fixed

-   Improving types for `SVGTextElement` components.

## [1.2.3] 2019-07-11

### Fixed

-   Don't load `positionTransition` functionality component server-side.
-   In development mode, ensuring all child keys are unique.

## [1.2.2] 2019-07-11

### Upgrade

-   Typescript to `3.5`.

## [1.2.1] 2019-07-10

### Fixed

-   Removing re-entering children from exiting list in `AnimatePresence`.

## [1.2.0] 2019-07-09

### Added

-   Supporting `positionTransition` as a function that resolves when the component has moved.
-   Adding `dragOriginX` and `dragOriginY` props.

### Fixed

-   Excluding `positionTransition` from SVG type.

## [1.1.4] 2019-07-08

### Updated

-   Exporting `AnimatePresenceProps`.

## [1.1.3] 2019-07-08

### Fixed

-   Fixing `positionTransition` on server-side.

## [1.1.2] 2019-07-08

### Fixed

-   Upgrade to `AnimatePresence` algo.

## [1.1.1] 2019-07-05

### Changed

-   Moving UMD global from `FramerMotion` to `Motion`.
-   Removed `@emotion/is-valid-prop`, saving ~1.9kb from bundle.
-   Using a slimmed-down version of Popmotion, saving ~3kb from bundle.
-   Removing `async` markers, saving ~0.7kb from bundle.

### Fixed

-   Cancelling `drag` and `pan` gestures on component unmount.
-   Previously unseen props in `animate` animate correctly.
-   Fixing reading SVG attributes from DOM.
-   Fixed unit type conversion not working with previously-undefined values.
-   Calling `onAnimationComplete` when `while` overrides are unset.
-   Preventing initial animation if `animate` is a map of props and `initial={false}`. This went previously unseen as both values were equivalent, but `onAnimationComplete` would fire on mount.

## [1.1.0] 2019-07-03

### Added

-   `AnimatePresence` component for controlling mount/unmount animations.
-   `positionTransition` prop for animating when the layout of a component changes.

## [1.0.5] 2019-07-02

### Fixed

-   Fixing SVG path props.

## [1.0.4] 2019-07-01

### Fixed

-   Moving SVG path props to `MotionStyle` type.
-   Changing `MakeMotion` to accept either `MotionValue<string>` OR `MotionValue<number>`.

## [1.0.3] 2019-07-01

### Fixed

-   Moving `dragConstraints` to a ref if a component re-renders mid gesture.
-   Only applying `dragConstraints` on render if component isn't currently dragging.

## [1.0.2] 2019-06-28

### Fixed

-   Making `when` type more permissive for passing in implicitly typed, pre-defined `variants`.
-   Not blocking default browser behaviour when dragging is initiated on draggable element's `select`, `input`, `textarea` elements.

## [1.0.1] 2019-06-27

### Fixed

-   Fixing `useSpring` unsubscriptions.

## [1.0.0] 2019-06-26

### Added

-   Improved SVG support.

## [0.20.2] 2019-06-20

### Fixed

-   Ensuring each `MotionValue` receives one `MotionValuesMap` update subscriber.

## [0.20.1] 2019-06-20

### Fixed

-   Adding `x`/`y` `MotionValue`s to the `useDrag` dependency list.
-   Ensure hover events only fire as a result of mouse interactions.

## [0.20.0] 2019-06-18

### Feature

-   Allowing SVG `motion` components to accept `MotionValue`s via attributes.
-   Adding SVG attribute types to `Target`.

## [0.19.2] 2019-06-13

### Fixed

-   Detecting `originZ` as a `transform-origin` value.

## [0.19.1] 2019-06-13

### Added

-   `initial={false}` to shadow contents of `animate` thereby disabling on mount animation.
-   `AnimationControls.set` for imperative setting of values.

### Fixed

-   Resolve animations only after a defined `delay` to ensure `velocity` is only resolved as an animation begins on a value.

## [0.19.0] 2019-06-13

### Upgraded

-   `stylefire@5.0.0` - Changes `originX`/`Y` default to `"50%"`.

## [0.18.6] 2019-06-13

### Added

-   Production and prototype environment-specific tsdocs.

## [0.18.5] 2019-06-07

### Fixed

-   Properly cleaning up event listeners in tap gesture.
-   Only starting pan gesture when pointer has moved more than one point.
-   Applying `transformPagePoint` to `dragConstraints` when it's a `RefObject<Element>` to ensure it works in scaled environments.
-   Fixing `dragElastic` behaviour when `dragMomentum={false}`.

## [0.18.4] 2019-05-30

### Fixed

-   Preventing default browser behaviours on draggable elements.

## [0.18.3] 2019-05-30

### Fixed

-   Fixing drag when a multitouch gesture starts.

## [0.18.2] 2019-05-22

### Fixed

-   Application of `delay`.

## [0.18.1] 2019-05-21

### Fixed

-   Fixed regex detection for fallbacks containing a decimal.

## [0.18.0] 2019-05-21

### Added

-   `dragConstraints` can now be set as a `React.RefObject`.

### Fixed

-   Support CSS variables with metadata
-   Fixing circular CSS dependencies

## [0.17.2] 2019-05-15

### Fixed

-   Even if a `motion` component **wasn't** inheriting variant changes, it'd still register with its parent, meaning it'd be considered during stagger duration calculations.
-   Only firing `onDragEnd` if dragging has actually happened.

## [0.17.1] 2019-05-13

### Fixed

-   `dragTransition` now listed as a `useDraggable` dependency.

## [0.17.0] 2019-05-09

### Added

-   Experimental `useAnimatedState` Hook for animating arbitrary values.

## [0.16.11] 2019-05-08

### Fixed

-   Disabling the animation of `zIndex`.
-   Making components without variants or animation-controlling props invisible to `staggerChildren`.

## [0.16.10] 2019-05-07

### Updated

-   API

### Fixed

-   Variant propagation when rerendering children

## [0.16.9] 2019-05-07

### Fixed

-   Using `transition` and `transitionEnd` as direct values on the `animate` prop on subsequent renders.
-   Rounding `zIndex`.
-   `AnimationControls.start` now accepts the same `AnimationDefinition` as `ValueAnimationControls.start`.

## [0.16.8] 2019-05-06

### Fixed

-   Cancelling pan gesture when the move events have no mouse button.

## [0.16.7] 2019-05-06

### Fixed

-   Fixing propagation of unsetting variant overrides.
-   Making variant inheritance more permissive.

## [0.16.6] 2019-05-02

### Fixed

-   Improved handling of attempting to animate between non-animatable and animatable values.

## [0.16.5] 2019-05-01

### Added

-   Adds array and object support to `transform`.

### Fixed

-   Makes boxShadow and other complex value type support more robust.
-   Fixing overwriting `transform`.

## [0.16.4] 2019-04-30

-   Updating deps.

## [0.16.3] 2019-04-30

### Added

-   `shadow` to `CustomValueTypes`.

## [0.16.2] 2019-04-30

### Fixed

-   Fixed propagation of `initial` in `static` mode.
-   Fixing animations from values that are read as "none".

## [0.16.1] 2019-04-25

### Fixed

-   Filtering pointer events not from the primary pointer (ie non-left clicks for mouse).
-   Fixing drag in Android devices by adding aggressive viewport scroll blocking. This will need dialling back down when it comes to open sourcing Framer Motion so, for instance, a horizontal carousel doesn't block vertical scrolling.

## [0.16.0] 2019-04-19

### Added

-   `custom` prop for dynamic variants.

### Removed

-   `useAnimation` no longer takes `variants` or `defaultTransition` arguments (provide these to the component).

### Fixed

-   Improving comparison for `animate` prop to account for keyframe arrays.
-   Adding drag point in `onDragStart` and `onDragEnd` callbacks.

## [0.15.2] 2019-04-17

### Added

-   Support for CSS variables.

### Fixed

-   `onDragEnd` not returning transformed point.
-   Fixing use of `variants` prop with `useAnimation`.

## [0.15.1] 2019-04-16

### Added

-   `HTMLMotionProps` and `SVGMotionProps`.

## [0.15.0] 2019-04-16

### Added

-   `onPanSessionStart` event handler.

### Changed

-   `useViewportScrollValues` => `useViewportScroll`.

### Added

-   `ease` can now be an array for keyframes animations.

### Removed

-   `easings` prop.

## [0.14.3] 2019-04-12

### Fixed

-   Only firing `value.onChange` when value actually changes.

## [0.14.2] 2019-04-11

### Fixed

-   Updating `hey-listen`.

## [0.14.1] 2019-04-11

### Added

-   Explicit support for the `radius` value.

## [0.14.0] 2019-04-10

### Changed

-   Making special value support configurable

## [0.13.0] 2019-04-08

### Changed

-   `useTransformedValue` => `useTransform`

### Added

-   `transform(value, input, output, options)` overload.

## [0.12.2] 2019-04-08

### Changed

-   Added new methods to `safeWindow` SSR window mocking.

### Fixed

-   Deleting unused props from `style` object rather than setting to `undefined`. [#99](https://github.com/framer/motion/pull/99)

## [0.12.1] 2019-04-03

### Fixed

-   `size` works with `while` gestures.

## [0.12.0] 2019-04-03

### Changed

-   `useCycle([...args])` -> `useCycle(...args)`

### Added

-   `static` components reflect changes in `initial`.

### Fixed

-   Dragging doesn't break during re-renders.
-   `useCycle` setter is independent from render cycle.

### Removed

-   `useCycle` no longer has the ability to start at a different index.

## [0.11.1] 2019-04-02

### Added

-   `onDragTransitionEnd`

### Upgraded

-   Popmotion libraries.

## [0.11.0] 2019-04-01

### Changed

-   `value.addUpdateSubscription` => `value.onChange`
-   `value.addRenderSubscription` => `value.onRenderRequest` (and made internal)

### Upgraded

-   `popmotion@8.6.5`

### Fixed

-   Variants propagate to children even if not present on parent.

## [0.10.2] 2019-03-27

### Changed

-   Updating docs to avoid single-letter `event` vars.

## [0.10.1] 2019-03-27

### Fixed

-   Fixing `TargetAndTransform` type to omit CSS-native `rotate` property.

## [0.10.0] 2019-03-26

### Changed

-   `press` -> `whileTap`
-   `hover` -> `whileHover`

## [0.9.4] 2019-03-26

### Fixed

-   Fixing HTML types.

## [0.9.3] 2019-03-25

### Added

-   Exporting `MotionTransform` type.

## [0.9.2] 2019-03-22

### Added

-   Added support for `CustomValueType` in `unwrapMotionValue`.

## [0.9.0] 2019-03-22

### Added

-   Added `dragDirectionLock` prop.

### Removed

-   `"lockDirection"` from `dragEnabled`.

### Changed

-   Renamed `dragEnabled` to `drag`.

## [0.8.8] 2019-03-20

## [0.8.7] 2019-03-20

### Added

-   Adding `transition` argument to `animation.start()`.

### Fixed

-   No longer fire tap gesture if parent is dragging.
-   Adjusting default `inertia` settings to more naturally incorporate velocity.
-   Killing drag momentum on subsequent `pressDown`.
-   Preventing pan velocity from adjusting draggable parents that have not received `dragPropagation`.
-   Updating of `dragConstraints` repositions the draggable element to adhere to the new values

## [0.8.6] 2019-03-19

### Added

-   `Point.relativeTo`
-   `transform`

### Fixed

-   Statefull style bug.
-   Fixing `Promise` resolution with `animate.start()` when fired pre-mount.

## [0.8.5] 2019-03-15

### Fix

-   Blocking extra gesture props from being passed to DOM.
-   Upgrading `@popmotion/popcorn` to fix Jest bug.

## [0.8.4] 2019-03-15

### Fix

-   Fixing `style` set as `null`.

## [0.8.3] 2019-03-14

### Update

-   Adding support for custom values.

## [0.8.2] 2019-03-14

### Update

-   Updating tsdocs for `MotionValue`.

## [0.8.1] 2019-03-12

### Update

-   Updating dependencies.

## [0.8.0] 2019-03-12

### Changed

-   `originX`, `originY`, `pathLength`, `pathOffset` changed from percent to progress value types.

## [0.7.5] 2019-03-11

### Added

-   Exporting `AnimationControls`.

## [0.7.4] 2019-03-11

### Added

-   Exporting `animationControls` and `motionValue` for internal use.

## [0.7.3] 2019-03-08

### Added

-   Passing `panInfo` through to `onDragStart` and `onDragEnd`.

## [0.7.2] 2019-03-07

### Fixed

-   `easings` property on `keyframes` now maps correctly to easing functions.

## [0.7.1] 2019-03-07

### Fixed

-   Enforcing keyframes animation if target is array.
-   Orchestration props in `transition` prop weren't being respected by variants with no `transition` of their own.

## [0.7.0] 2019-03-07

### Added

-   Animation targets can be set as `keyframes`.

## [0.6.8] 2019-03-05

### Fixed

-   Updating `dragConstraints` when they change.

## [0.6.7] 2019-03-04

### Updated

-   Removing GPU-acceleration for `static` components.
-   Adding `customStyles` plugin.

## [0.6.6] 2019-02-29

### Updated

-   `stylefire@2.4.3`

## [0.6.4] 2019-02-22

### Added

-   Exporting `MotionContext`.

### Update

-   Updated `popmotion@8.6.3` to improve synchronisation across tweens when yoyoing.

## [0.6.3] 2019-02-21

### Fixed

-   If `transformPagePoint` is present, transforming initial point.

## [0.6.2] 2019-02-21

### Fixed

-   Recognising `press` when it's the lone gesture.

## [0.6.1] 2019-02-20

### Fixed

-   Fixed an issue where values set to `style` would overwrite `animate` values even if they hadn't changed.

## [0.6.0] 2019-02-20

### Added

-   `static` prop. Set `static` on a motion component to prevent animation and interaction.

### Removed

-   `render`

## [0.5.2] 2019-02-20

### Fixed

-   Animating unit-converting values on mount.

## [0.5.1] 2019-02-19

### Added

-   Exporting `MotionComponents`, `CustomMotionComponent`, `HTMLMotionComponents` and `SVGMotionComponents` types.
-   Exporting `safeWindow`.

## [0.5.0] 2019-02-19

### Added

-   `onDrag` event listener
-   Exporting `MotionStyles` type.

### Changed

-   `tap` -> `press`

## [0.4.5] 2019-02-15

### Fixed

-   Fixing `originX` and `originY` SSR.
-   Updating `style` props to overwrite CSS `rotate`, `scale` and `perspective`.

## [0.4.3] 2019-02-14

### Fixed

-   Rendering `initial` properties via Stylefire when component mounts to ensure its in-sync with all transform values set in `initial` that might not later be rendered.
-   Exporting `htmlElements`, `svgElements` and `createMotionComponent` as their exclusion was causing errors with the output declaration file.

## [0.4.2] 2019-02-14

### Changed

-   Exporting `useExternalRef`.

## [0.4.1] 2019-02-13

### Changed

-   Simplifying inline tsdocs.

## [0.4.0] 2019-02-12

### Changed

-   Standardizing `(event, pointInfo)` as signature for gesture callbacks.

### Fixed

-   Gesture priority bugs

## [0.3.2] 2019-02-08

### Changed

-   Added TSDocs for `useCycle`

## [0.3.0] 2019-02-05

### Changed

-   `duration` and `delay` are now defined as seconds.
-   `tapActive` -> `tap`
-   `hoverActive` -> `hover`
-   `drag` -> `dragEnabled`
