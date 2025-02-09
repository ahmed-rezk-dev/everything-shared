/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    'react-native',
    'react-native-web',
    'expo',
    'nativewind',
    'react-native-css-interop',
    'react-native-reanimated',
    '@everything-shared/accordion',
    '@everything-shared/alert-dialog',
    '@everything-shared/aspect-ratio',
    '@everything-shared/avatar',
    '@everything-shared/checkbox',
    '@everything-shared/collapsible',
    '@everything-shared/context-menu',
    '@everything-shared/dialog',
    '@everything-shared/dropdown-menu',
    '@everything-shared/hover-card',
    '@everything-shared/label',
    '@everything-shared/menubar',
    '@everything-shared/navigation-menu',
    '@everything-shared/popover',
    '@everything-shared/portal',
    '@everything-shared/progress',
    '@everything-shared/radio-group',
    '@everything-shared/select',
    '@everything-shared/separator',
    '@everything-shared/slider',
    '@everything-shared/slot',
    '@everything-shared/switch',
    '@everything-shared/table',
    '@everything-shared/tabs',
    '@everything-shared/toast',
    '@everything-shared/toggle',
    '@everything-shared/toggle-group',
    '@everything-shared/toolbar',
    '@everything-shared/tooltip',
    '@everything-shared/types',
  ],

  experimental: {
    forceSwcTransforms: true,
  },
};

export default withExpo(nextConfig);

// https://github.com/expo/expo-webpack-integrations/blob/main/packages/next-adapter/src/index.ts
function withExpo(nextConfig) {
  return {
    ...nextConfig,
    webpack(config, options) {
      // Mix in aliases
      if (!config.resolve) {
        config.resolve = {};
      }

      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        // Alias direct react-native imports to react-native-web
        'react-native$': 'react-native-web',
        // Alias internal react-native modules to react-native-web
        'react-native/Libraries/EventEmitter/RCTDeviceEventEmitter$':
          'react-native-web/dist/vendor/react-native/NativeEventEmitter/RCTDeviceEventEmitter',
        'react-native/Libraries/vendor/emitter/EventEmitter$':
          'react-native-web/dist/vendor/react-native/emitter/EventEmitter',
        'react-native/Libraries/EventEmitter/NativeEventEmitter$':
          'react-native-web/dist/vendor/react-native/NativeEventEmitter',
      };

      config.resolve.extensions = [
        '.web.js',
        '.web.jsx',
        '.web.ts',
        '.web.tsx',
        ...(config.resolve?.extensions ?? []),
      ];

      if (!config.plugins) {
        config.plugins = [];
      }

      // Expose __DEV__ from Metro.
      config.plugins.push(
        new options.webpack.DefinePlugin({
          __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
        })
      );

      // Execute the user-defined webpack config.
      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  };
}
