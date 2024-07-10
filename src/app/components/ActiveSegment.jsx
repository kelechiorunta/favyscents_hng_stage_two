'use client'
import React from 'react'
import { useSelectedLayoutSegments } from 'next/navigation'
import store from '../redux/store'
import { Provider } from 'react-redux'

export default function ActiveSegment({children}) {
    const active = useSelectedLayoutSegments()
  return (
    <div>
        {/* <p>
         The Current Page or Segment is: {active? active: 'Home'}
        </p> */}
        <Provider store={store}>
          {children}
        </Provider>
    </div>
  )
}
