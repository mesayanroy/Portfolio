declare module 'react-scroll' {
  import React from 'react'

  interface ScrollProps {
    to: string
    smooth?: boolean | string
    duration?: number
    delay?: number
    offset?: number
    spy?: boolean
    hashSpy?: boolean
    isDynamic?: boolean
    onClick?: (e: React.MouseEvent) => void
    className?: string
    activeClass?: string
    style?: React.CSSProperties
    children?: React.ReactNode
  }

  export const Link: React.FC<ScrollProps>
  export const Element: React.FC<any>
  export const Events: any
  export const scroller: any
  export const animateScroll: any
}
