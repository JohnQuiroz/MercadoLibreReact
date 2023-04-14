import Link from 'next/link'
import React from 'react'

const Banner = () => {
    return (
        <div className="slider-container">
            <ul className="banner-list">
                <li><Link href="/"><img src="media/banner.webp" alt="banner" /></Link></li>
            </ul>
            <ul className="unordered">
                <li><Link href="/"></Link></li>
                <li><Link href="/"></Link></li>
                <li><Link href="/"></Link></li>
                <li><Link href="/"></Link></li>
                <li><Link href="/"></Link></li>
                <li><Link href="/"></Link></li>
            </ul>
        </div>
    )
}

export {Banner}