/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "45957348f231b332f10130bcbf39ea9a"
  },
  {
    "url": "assets/css/0.styles.ca62e06e.css",
    "revision": "924df88eba2bcb9251ddff4689a242fe"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ad781c78.js",
    "revision": "899ef58f3f92b85d021edba26afd2097"
  },
  {
    "url": "assets/js/11.32ba2003.js",
    "revision": "b012f550c9920cce59792eeb20924fd7"
  },
  {
    "url": "assets/js/12.f4d805b2.js",
    "revision": "45a0f424731485e8513dbf3f52453817"
  },
  {
    "url": "assets/js/13.b369ab95.js",
    "revision": "ff30346a2ae0704d1a7791e2ab06f152"
  },
  {
    "url": "assets/js/14.4fd45c58.js",
    "revision": "2826a1bfcbbdf9810af87b4f633a8390"
  },
  {
    "url": "assets/js/15.22a67889.js",
    "revision": "61004e745907f6cfcfe338fa7a7ebf40"
  },
  {
    "url": "assets/js/16.6a73ab67.js",
    "revision": "039a459ce7877806245e67226e4a6dcc"
  },
  {
    "url": "assets/js/17.a9f3a62d.js",
    "revision": "d051bc2276ede0597d831397f1145a63"
  },
  {
    "url": "assets/js/18.9d184e0f.js",
    "revision": "e3d4d55cb4a9ecf01810311944d9cd22"
  },
  {
    "url": "assets/js/19.fd6b4550.js",
    "revision": "245e60444d74c2f47bbe71d32fa154bb"
  },
  {
    "url": "assets/js/2.60a6413d.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.d359abc5.js",
    "revision": "426cc3dd3817b2835bc049c686fad700"
  },
  {
    "url": "assets/js/21.145d1a5c.js",
    "revision": "c86f2c41158f2e6bd8eb0e0b720aecc5"
  },
  {
    "url": "assets/js/22.8ccf43fb.js",
    "revision": "e44241768de2e77635ecca88a60d3c0a"
  },
  {
    "url": "assets/js/23.cfbcd02f.js",
    "revision": "5d8a91984f168c720144cb740919330b"
  },
  {
    "url": "assets/js/24.0ac3806b.js",
    "revision": "173ad1f47cd7307bab0121da791165e6"
  },
  {
    "url": "assets/js/26.2b7d224e.js",
    "revision": "d09140fd6d4af5d21412c1e04e0338bb"
  },
  {
    "url": "assets/js/3.4ed45971.js",
    "revision": "b16159aab039353619946e13967d38e4"
  },
  {
    "url": "assets/js/4.5d00dd71.js",
    "revision": "354b2b53903cf28623245afa41ac130d"
  },
  {
    "url": "assets/js/5.4b8fb81c.js",
    "revision": "b865b25b78848b369ebb4f7a7684bf5b"
  },
  {
    "url": "assets/js/6.37f402c4.js",
    "revision": "43bdcf1e529c99fca1e216d96833b9ee"
  },
  {
    "url": "assets/js/7.a2994458.js",
    "revision": "817c1a9fc1e6f84583934d814a9ab3f5"
  },
  {
    "url": "assets/js/8.e8761b22.js",
    "revision": "df02b8b825d5757e125dbe170d1555c1"
  },
  {
    "url": "assets/js/9.c0a843c2.js",
    "revision": "6fdef7e064583d735d435c9c7be58314"
  },
  {
    "url": "assets/js/app.50018799.js",
    "revision": "05d042a5a3cf03235930465fd1a6824c"
  },
  {
    "url": "conclusion/index.html",
    "revision": "f0d25dc89df0e20489c8029823ac3fae"
  },
  {
    "url": "design/index.html",
    "revision": "7715e30877235962f6f4affa277c37db"
  },
  {
    "url": "index.html",
    "revision": "218326c3e43481f0cfc55fd11922e0c5"
  },
  {
    "url": "intro/index.html",
    "revision": "a556dc4630357b313cc768b2a2b3bed0"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "d82722317343c8dff119414abfa30f39"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "f0d30447a73262527697ef9ba7268bb1"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "9e1c81cbc63a434b50dc4c04c37b3f7e"
  },
  {
    "url": "software/index.html",
    "revision": "d438b845cadc742d5605e640ee3f3363"
  },
  {
    "url": "test/index.html",
    "revision": "390a17dc20a6ff146bebcad55bbf2e38"
  },
  {
    "url": "use cases/index.html",
    "revision": "0f90494ee1b5b17df47606e15b425207"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
