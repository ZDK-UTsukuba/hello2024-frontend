'use client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const ItemPage = () => {
    const params = useParams({})

    // Route -> /shop/[tag]/[item]
    // URL -> /shop/shoes/nike-air-max-97
    // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
    console.log(params)
    return (
        <>
            <h2>記事ページ</h2>
            <div>
                年:{params.year}
                <br />
                月:{params.month}
                <br />
                日:{params.day}
                <br />
                記事名:{decodeURI(params.article)}
            </div>
        </>
    )
}
export default ItemPage
