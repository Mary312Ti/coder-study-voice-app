// const {getDefaultConfig} = require('metro-config');

// module.exports = async () => {
//     const defaultConfig = await getDefaultConfig(__dirname)
//     return {
//         ...defaultConfig,
//         resolver: {
//             ...defaultConfig.resolver,
//             assetExts: [...defaultConfig.resolver.assetExts, 'png', 'jpg', 'jpeg', 'gif', 'svg']
//         }
//     }
// };

const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

const { assetExts, sourceExts } = defaultConfig.resolver;

const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  },
};

module.exports = config;
