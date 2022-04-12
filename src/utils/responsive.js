const breakpoints = {
    xs: 320,
    sm: 576,
    md: 768,
    lg: 1024,
    xl: 1440,
}

function respondToBreakpoint(maxWidth) {
    return `@media screen and (max-width: ${maxWidth-1}px)`
}

export const respondTo = {
    xs: respondToBreakpoint(breakpoints.xs),
    sm: respondToBreakpoint(breakpoints.sm),
    md: respondToBreakpoint(breakpoints.md),
    lg: respondToBreakpoint(breakpoints.lg),
    xl: respondToBreakpoint(breakpoints.md),
}