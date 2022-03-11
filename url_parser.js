const urlFormat = '/:version/api/:collection/:id'
const urlsToParse = ['/6/api/listings/3?sort=desc&limit=10', '/6/listings/3?sort=desc&limit=10']
urlsToParse.forEach(e => console.log(urlParse(e, urlFormat)))

function urlParse(url, urlFormat) {
    let urlHash = {}
    const [pathname, searchParams] = url.split('?')
    const urlFormatSplit = urlFormat.split('/')
    const pathnameSplit = pathname.split('/')
    if (urlFormatSplit.length !== pathnameSplit.length) return 'urlFormat different than url'
    for (let index = 0; index < urlFormatSplit.length; index++) {
        const urlFormatPart = urlFormatSplit[index];
        if (urlFormatPart?.startsWith(':')) {
            const hashKey = urlFormatPart.substring(1)
            const hashValue = pathnameSplit[index]
            urlHash[hashKey] = tryParseNumber(hashValue)
        }
    }
    const urlSearchParams = new URLSearchParams(searchParams)
    for (let [hashKey, hashValue] of urlSearchParams) {
        urlHash[hashKey] = tryParseNumber(hashValue)
    }
    return urlHash
}

function tryParseNumber(str) {
    return Number(str) === Number(str) ? Number(str) : str
}

