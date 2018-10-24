import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'mycomponent',
  globalStyle: 'src/components/my-component/my-component.css',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
