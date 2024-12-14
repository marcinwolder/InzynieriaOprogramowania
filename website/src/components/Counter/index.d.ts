import React from 'react';

const Counter: React.FC<React.PropsWithChildren<{
    counter: number
    className?: string
}>>;

export {Counter, useCounter};