import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Layout(props) {
    return (
        <>
            <div>
                <div>                    
                    <ul>
                        <li>
                            <Link legacyBehavior href="/">
                                <a> Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link legacyBehavior href="/about">
                                <a> About</a>
                            </Link>
                        </li>
                        <li>
                            <Link legacyBehavior href="/contact">
                                <a> Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>

                {props.children}

            </div>
        </>
    )
}
