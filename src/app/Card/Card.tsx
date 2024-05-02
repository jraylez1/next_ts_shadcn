'use client'
import { useState } from 'react'
import './card.css'
import clsx from 'clsx'
import custom from './custom.module.css'

export default function Card (){
    const [expanding, setExpanding] = useState(false)

    // return <div className={ expanding ? 'p-10 bg-slate-200' : 'p-20 bg-slate-200' }>Card</div>

    return <div className={clsx("card roboto-thin",{
        [custom.card]: expanding
    })}>Card</div>

}