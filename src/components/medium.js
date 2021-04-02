// https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40manuelduarte077

import React, { useEffect, useState } from "react"

export default () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const data = sessionStorage.getItem("posts")
        if (data) {
            setPosts(JSON.parse(data))
        }

        let myPosts

        async function getMediumPosts() {
            const response = await fetch(
                "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40manuelduarte077"
            )
            sessionStorage.setItem("posts", JSON.stringify(myPosts.items))

            setPosts(myPosts.items)
        }
        getMediumPosts()
    }, [])

    return (

        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto">
                
                </div> 
            </div>
        </section>

    )
}
