import React, { createContext, useContext, useState } from 'react'

export type HistoryType = {
    stack: string[]
    push: (path: string) => void
    pop: () => string | undefined
}

const HistoryContext =
    createContext<HistoryType | null>(null)

export const HistoryContainer: React.FC<{ children: React.ReactNode }> =
    ({ children }) => {
        const [stack, setStack] = useState<string[]>([])

        const push = (path: string) => {
            setStack(prev => [...prev, path])
        }

        const pop = () => {
            let prevPath: string | undefined
            setStack(prev => {
                prevPath = prev[prev.length - 1]
                return prev.slice(0, -1)
            })
            return prevPath ?? '/work'
        }

        return (
            <HistoryContext.Provider value={{ stack, push, pop }}>
                {children}
            </HistoryContext.Provider>
        )
    }

export const useHistory = () => {
    const context = useContext(HistoryContext)
    if (!context) {
        throw new Error('UseHistory is used out of the container')
    }
    return context
}