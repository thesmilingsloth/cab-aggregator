import 'i18next';

import auth from '../translations/en/auth.json';
import common from '../translations/en/common.json';

/**
 * Define the structure of your translation resources
 */
interface AppResources {
  common: typeof common;
  auth: typeof auth;
}

/**
 * Extend i18next's type system to use your resource structure
 */
declare module 'i18next' {
  interface CustomTypeOptions {
    // Define resources for all namespaces
    resources: AppResources;
  }
}
