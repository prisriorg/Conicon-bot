'use client'
import { createContext, useContext, useState } from 'react'


export type TabType = 'home' | 'earn' | 'value' | 'wallet' | 'refer';
type TabContextType = {
    activeTab: TabType
    setActiveTab: (tab: TabType) => void
}


const TabContext = createContext<TabContextType | undefined>(undefined)

export function TabProvider({ children }: { children: React.ReactNode }) {
    const [activeTab, setActiveTab] = useState<TabType>('home')

    return (
        <TabContext.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </TabContext.Provider>
    )
}

export function useTab() {
    const context = useContext(TabContext)
    if (context === undefined) {
        throw new Error('useTab must be used within a TabProvider')
    }
    return context
}