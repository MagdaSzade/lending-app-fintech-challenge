const path = require('path');

module.exports = {
    propsParser: require('react-docgen-typescript').withDefaultConfig([]).parse,
    components: 'src/Components/**/*.tsx',
    styleguideComponents: {
        Wrapper: path.join(__dirname, 'src/styleguide/Wrapper'),
    },
};
