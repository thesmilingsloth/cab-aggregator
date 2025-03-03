const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

const workspaceRoot = path.resolve(__dirname, '../..');
const projectRoot = __dirname;

// Get the default Metro config
const defaultConfig = getDefaultConfig(projectRoot);

// Create our custom config
const config = {
  watchFolders: [workspaceRoot],
  resolver: {
    // Ensure we can resolve modules from the root workspace and project node_modules
    nodeModulesPaths: [
      path.resolve(projectRoot, 'node_modules'),
      path.resolve(workspaceRoot, 'node_modules'),
    ],
    // Enable symlinks for monorepo support
    unstable_enableSymlinks: true,
    // Additional configurations
    disableHierarchicalLookup: false, // Changed to false to allow hierarchical lookup
    // Enable package exports
    unstable_enablePackageExports: true,
    // Prioritize browser field in package.json
    unstable_conditionNames: ['browser', 'require', 'default'],
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        // This helps with proper Babel transformation
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};

// Merge and export the configuration
module.exports = mergeConfig(defaultConfig, config);
