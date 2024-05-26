import { createVuetify } from 'vuetify';
import { components, directives } from 'vuetify/dist/vuetify.js';

import 'vuetify/dist/vuetify.min.css';
// import '@mdi/font/css/materialdesignicons.css';

import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { mdiAccount } from '@mdi/js'

const vuetifyPlugin = createVuetify({
  components,
  directives,
  theme: {
      defaultTheme: 'dark',
  },
  icons: {
      defaultSet: 'mdi',
      aliases: {
        ...aliases,
        account: mdiAccount,
      },
      sets: {
        mdi,
      },
    },
  defaults: {},
});

export default vuetifyPlugin;
