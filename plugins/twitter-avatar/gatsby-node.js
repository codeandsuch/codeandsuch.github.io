const axios = require('axios')

let TWITTER_API_TOKEN = null

exports.onPreBootstrap = async (_, pluginOptions) => {
    const { twitterApiKey, twitterApiSecret } = pluginOptions;
    if (!twitterApiKey || !twitterApiSecret) {
        throw new Error('Missing environment variables twitterApiKey or twitterApiSecret');
    }

    try {
        const authorization = Buffer.from(`${twitterApiKey}:${twitterApiSecret}`).toString('base64')
        const response = await axios({
            method: 'POST',
            url: 'https://api.twitter.com/oauth2/token',
            headers: {
                'Authorization': `Basic ${authorization}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: 'grant_type=client_credentials'
        })

        TWITTER_API_TOKEN = response.data.access_token || null
    } catch (err) {
        throw new Error(`Failed to get Twitter API token. ${err.response.status} ${err.response.statusText}`)
    }
}

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
                Authorization: 'Bearer ' + TWITTER_API_TOKEN
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
