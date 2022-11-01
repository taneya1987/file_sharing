const { createHash } = require('crypto')

module.exports = async function ({ options, resolveVariable }) {
    const account = await resolveVariable('aws:accountId')
    const region = await resolveVariable('aws:region')
    const stage = await resolveVariable('sls:stage')
    const input = `filesharing-${account}-${region}-${stage}`
    const bucketName = 'filesharing-' + createHash('md5').update(input).digest('hex')
    return {
        bucketName
    }
}