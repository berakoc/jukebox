import connect from '/src/api/connect.js'
import logger from '/src/debug/logger.js'

const main = async () => {
    connect()
    logger.debug('App is initialized')
}

main()