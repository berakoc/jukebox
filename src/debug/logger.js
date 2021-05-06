const log = (tag, color, message) => {
    console.log('%c%s%c %s', `color: white; background-color: ${color}; padding: 2px 6px; border-radius: 2px; font-weight: bold;`, tag, '', message)
}

const logger = [['info', '#118ab2'], ['debug', '#06d6a0'], ['warn', '#ffd166'], ['error', '#ef476f']].reduce((logger, [type, color]) => ({
    ...logger,
    [type](message) {
        log(type, color, message)
    }
}), {})

export default logger