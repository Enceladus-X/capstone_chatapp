const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);

  const { assetExts, sourceExts } = config.resolver;

  return {
    transformer: {
      // 기본 transformer 설정 유지
      ...config.transformer,
      babelTransformerPath: require.resolve('react-native-svg-transformer'), // svg 파일 변환기 추가
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'), // svg 파일 변환에서 제외
      sourceExts: [...sourceExts, 'svg'], // sourceExts에 svg 추가
    },
  };
})();
