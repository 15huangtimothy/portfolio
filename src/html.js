import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
    // OG Metadata
    const title = "Tim Huang"
    const description = "Portfolio"
    const url = "https://temhuang.me"
    const image = "/og_icon.png"
    const type = "website"

    return (
        <html {...props.htmlAttributes}>
            <head>
                <title>Tim Huang</title>
                <meta name="description" content={description} />
                <meta name="image" content={url + image} />
                <meta property="og:url" content={url} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={url + image} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="og:type" content={type} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={url + image} />

                {props.headComponents}
            </head>
            <body {...props.bodyAttributes}>
                {props.preBodyComponents}
                <noscript key="noscript" id="gatsby-noscript">
                    This app works best with JavaScript enabled.
                </noscript>
                <div
                    key={`body`}
                    id="___gatsby"
                    dangerouslySetInnerHTML={{ __html: props.body }}
                />
                {props.postBodyComponents}
            </body>
        </html>
    )
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
}
