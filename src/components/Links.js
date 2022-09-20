import React from "react"

function Links(posts) {
    return (
        <div>
        <h3>Links
            <a href = 'https://github.com/liza'>{posts.github}</a>
            <a href = 'https://www.linkedin.com/in/liza/'>{posts.linkedin}</a>
        </h3>
        </div>
    )
}
export default Links 