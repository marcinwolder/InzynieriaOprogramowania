import React from 'react'
import clsx from 'clsx'
import useCounter from './useCounter';

const Counter = ({counter, className}) => {
  return (
    <span className={clsx("countdown font-mono text-4xl", className)}>
      <span style={{"--value": counter}}></span>
    </span>
  )
}

export {Counter, useCounter};