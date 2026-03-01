'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'

type ModalContextType = {
  activeModalId: string | null
  openModal: (id: string) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [activeModalId, setActiveModalId] = useState<string | null>(null)

  const openModal = useCallback((id: string) => setActiveModalId(id), [])
  const closeModal = useCallback(() => setActiveModalId(null), [])

  return (
    <ModalContext.Provider value={{ activeModalId, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModals() {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error('useModals must be used within a ModalProvider')
  }
  return context
}
