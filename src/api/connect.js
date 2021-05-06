import logger from '../debug/logger.js'

const connect = (() => {
    SC.initialize({
        clientId: 'cd9be64eeb32d1741c17cb39e41d254d'
    })
    logger.debug('Connected to SoundCloud API')
})

export default connect