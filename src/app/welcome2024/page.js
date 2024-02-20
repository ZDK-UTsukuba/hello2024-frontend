'use client'
import { useEffect, useState } from "react"
import { testRequestsImpl } from "../api/lib"
import { ArticleCard } from "./components/articleCard"
const welcome2024 = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        ; (async () => {
            const articles = await testRequestsImpl.Get()
            setArticles(articles)
        })()
    }, [])
    return (
        <>
            <p>インデックスページ</p>
            {articles ? articles.map((article, key) => {
                return <ArticleCard props={article} key={key} />
            }) : ""}
        </>
    )
}
export default welcome2024