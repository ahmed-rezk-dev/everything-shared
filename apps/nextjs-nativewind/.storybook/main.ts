import type { StorybookConfig } from '@storybook/react-native-web-vite';

import { resolve, join, dirname } from 'path';
import { InlineConfig, mergeConfig } from 'vite';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../../../packages/components/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],

  viteFinal: async (config) => {
    return mergeConfig(config, {
      optimizeDeps: {
        include: [
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
      },
    } satisfies InlineConfig);
  },

  framework: {
    name: '@storybook/react-native-web-vite',
    options: {
      pluginReactOptions: {
        jsxRuntime: 'automatic',
        jsxImportSource: 'nativewind',
        babel: {
          plugins: [
            // 'react-native-web',
            // '@babel/plugin-proposal-export-namespace-from',
            'react-native-reanimated/plugin',
          ],
        },
      },
    },
  },
  typescript: {
    reactDocgen: 'react-docgen',
  },
};
export default config;
