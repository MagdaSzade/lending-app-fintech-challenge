const path = require('path');

module.exports = {
    components: 'src/Components/**/**/*.tsx',
    propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json', []).parse,
    styleguideComponents: {
        Wrapper: path.join(__dirname, 'src/styleguide/Wrapper'),
    },
};
