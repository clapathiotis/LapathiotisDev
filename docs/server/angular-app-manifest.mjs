
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/LapathiotisDev/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/LapathiotisDev"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 513, hash: '205ff9e865b93c53d73db2122536fdbcb043449b1efe7123077f0f7f3bd379f5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1026, hash: 'f5fc2ad62f78ecde3c5dbce6062073d80205a9b3f758960ef36b6ac27189fdb0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20859, hash: 'e0840555fe038222bbfb7708d6cf96ccca0538325fe5f532bc77ed0ad39e34ab', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
