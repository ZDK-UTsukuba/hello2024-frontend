'use client'
import { useSearchParams } from "next/navigation";

const search = () => {
    const searchParams = useSearchParams();
    const page = searchParams.get("s");

    return (
        <>
            検索ページ
            <br />
            キーワード: {page}
        </>
    )
}

export default search