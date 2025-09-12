module.exports = api => {
  console.log({ from: 'babel.config.js', env: api.env() });
  api.cache(() => process.env.NODE_ENV);

  //
  const presets = ['module:@react-native/babel-preset'];
  const plugins = [];

  //
  const moduleResolverOptions = {
    root: ['./'],
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@': './js',
      '@utils': './js/utils',
      '@screens': './js/screens',
    },
  };
  plugins.push(['module-resolver', moduleResolverOptions]);

  // remove console.log in production
  // api.env() == 'development' || 'production'
  if (api.env() === 'production') {
    plugins.push(['transform-remove-console']);
  }

  return {
    presets,
    plugins,
  };
};
