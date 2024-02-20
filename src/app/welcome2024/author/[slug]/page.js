'use client'
import { useParams } from 'next/navigation'


const ItemPage = () => {
    const params = useParams({})

    // Route -> /shop/[tag]/[item]
    // URL -> /shop/shoes/nike-air-max-97
    // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
    console.log(params)
    return (
        <>
            <h2>オーサーページ</h2>
            <div>
                著者:{params.slug}
            </div>
        </>
    )
}
export default ItemPage
