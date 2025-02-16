export const classNames = (className: string, mods: Record<string, boolean | string>, additional: string[]): string => {

    return [ 
        className, 
        ...additional, 
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className)
        ].join(' ')

}