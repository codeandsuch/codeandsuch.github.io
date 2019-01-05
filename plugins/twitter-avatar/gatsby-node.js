const axios = require('axios')

exports.onCreateNode = ({ node, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators
    const nodeField = {
        node,
        name: 'twitterAvatarUrl',
        value: ''
    }

    if (node.internal.type !== 'MarkdownRemark') {
        createNodeField(nodeField)
        return
    }


    return new Promise((resolve, reject) => {
        const url = `https://api.twitter.com/1.1/users/show.json?screen_name=${node.frontmatter.twitterHandle.slice(1)}`

        axios.get(url, {
            headers: {
                Authorization: 'Bearer ' + process.env.TWITTER_API_TOKEN
            }
        }).then(res => {
            nodeField.value = res.data.profile_image_url_https
            createNodeField(nodeField)

            resolve()
        }).catch(err => {
            createNodeField(nodeField)

            reject(err)
        })
    })
}
