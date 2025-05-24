
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: 'C:/Program Files/Git/train/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/train"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/train/chekTrains"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/train/returnticket"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/train/cheacktrains"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/train/trains"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/train/iferrorcontactus"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/train/buyticket"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/train/tickettrains"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/train/checkTicket"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/train/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1694, hash: '84ad16142260d8358037636c9a4e6a568d5ef14623d2f9aacd6006f30bf29d2a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2234, hash: '1a948c83421c9fed79f311332126d611b106e4682a269317fcf464d37d48b9c9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}
  },
};
