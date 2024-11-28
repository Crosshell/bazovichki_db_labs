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
    "revision": "fb1cf1c06455385a891ce050a6e34adb"
  },
  {
    "url": "assets/css/0.styles.5a692546.css",
    "revision": "1c062e0a0f85a95fd3e78f9a16e06d8e"
  },
  {
    "url": "assets/img/content-MediaContentNotFoundException.379cfca9.png",
    "revision": "379cfca969d94200aecce810e5aff609"
  },
  {
    "url": "assets/img/content-RequiredFieldsMissingException.5bd2a051.png",
    "revision": "5bd2a051175ecb9f43cf8b9f31b34e96"
  },
  {
    "url": "assets/img/delete-content.a9411dd3.png",
    "revision": "a9411dd34d5e6cd24831abbb5f1896d5"
  },
  {
    "url": "assets/img/delete-user.e2391d72.png",
    "revision": "e2391d72425bfc058b0dd8bbd0babb81"
  },
  {
    "url": "assets/img/get-content.94edcbc4.png",
    "revision": "94edcbc4fc16262b172dedba81a12b27"
  },
  {
    "url": "assets/img/get-contents.bd81f845.png",
    "revision": "bd81f845ae283655bf8b78c405d58c8c"
  },
  {
    "url": "assets/img/get-user.4e27985e.png",
    "revision": "4e27985e0ff089e015eb421eb994f186"
  },
  {
    "url": "assets/img/get-users.c6c71203.png",
    "revision": "c6c712032d742a03c23795d608d475a9"
  },
  {
    "url": "assets/img/patch-content.326c6bfe.png",
    "revision": "326c6bfef7d3ae4876c2299988a71116"
  },
  {
    "url": "assets/img/patch-user.b7607d88.png",
    "revision": "b7607d8807cd3f102f6ce649ebebacbb"
  },
  {
    "url": "assets/img/post-content.4cedca6a.png",
    "revision": "4cedca6adcb35e76899ad6011507ff15"
  },
  {
    "url": "assets/img/post-user.6df2e23b.png",
    "revision": "6df2e23b4221f9cd7bda86050c40e751"
  },
  {
    "url": "assets/img/relational_schema.ce95178e.png",
    "revision": "ce95178e03036cd4d2d2ffe1a92aaba3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/user-AlreadyRegisteredException.6d0298c5.png",
    "revision": "6d0298c58122b10f6ffc72515ba6a2fe"
  },
  {
    "url": "assets/img/user-DataMissingException.19e35130.png",
    "revision": "19e35130d7bf49dfc711ce869d24a02f"
  },
  {
    "url": "assets/img/user-UserNotFoundException.845acc44.png",
    "revision": "845acc44b5ba0ca214b9e5fcc10e2db9"
  },
  {
    "url": "assets/js/10.6e2d7b26.js",
    "revision": "04a2d21322f5f843593d6d397b254183"
  },
  {
    "url": "assets/js/11.b3c33f10.js",
    "revision": "130644cbd99072a9fb82722d6a65eee6"
  },
  {
    "url": "assets/js/12.a3171245.js",
    "revision": "cc6d83db0072a03f92c1b37982a65479"
  },
  {
    "url": "assets/js/13.2883ff51.js",
    "revision": "52d219c63d51f1d000f8928f9fd29d87"
  },
  {
    "url": "assets/js/14.9d1431a4.js",
    "revision": "7bc0507e413d56e8c97d99ac7d6b552b"
  },
  {
    "url": "assets/js/15.13569df5.js",
    "revision": "b349e9f27aa0637cc8359f51c7843368"
  },
  {
    "url": "assets/js/16.48e8e6d9.js",
    "revision": "b7d84411b4dc8affc392c246c71a074a"
  },
  {
    "url": "assets/js/17.1ac4a0bf.js",
    "revision": "48f74a31236e175b7da374f58a5abc2a"
  },
  {
    "url": "assets/js/18.b53c49c7.js",
    "revision": "2ee5c38a5cbaee684593dfa79bbb3a9e"
  },
  {
    "url": "assets/js/19.1960ae8b.js",
    "revision": "626ce171d7975bbf30b8c120d6986fa3"
  },
  {
    "url": "assets/js/2.2d01c543.js",
    "revision": "7cc14d779a8fd040d0a9db1bd024de1b"
  },
  {
    "url": "assets/js/20.667526aa.js",
    "revision": "b1b8c82e01f789c19ef13f34dcc8f41a"
  },
  {
    "url": "assets/js/21.91b395f3.js",
    "revision": "5db218239802c6e5851cba182f6ffdf0"
  },
  {
    "url": "assets/js/22.657dc4e1.js",
    "revision": "eea602a18cc145aa3147907689265272"
  },
  {
    "url": "assets/js/23.5ce4be60.js",
    "revision": "32dbb3a7d0e8c71c9f6922f48a89518d"
  },
  {
    "url": "assets/js/24.e6590710.js",
    "revision": "24f39cd34a87b9633e99720a26fc7e1c"
  },
  {
    "url": "assets/js/26.d4420a7c.js",
    "revision": "1e186a7439ba927e6e7f5b83eacb8afe"
  },
  {
    "url": "assets/js/3.5b394de9.js",
    "revision": "6953173186c4d519044cac918885f5e7"
  },
  {
    "url": "assets/js/4.f4e3418f.js",
    "revision": "552a2580fd25b4140ef34bd0b282972c"
  },
  {
    "url": "assets/js/5.009de7c3.js",
    "revision": "dc584098e4f29321b75c07a9133a1bde"
  },
  {
    "url": "assets/js/6.8454de80.js",
    "revision": "330235d865342562f3d05c6458734136"
  },
  {
    "url": "assets/js/7.ff940653.js",
    "revision": "ebe7c21363568f0c5c3e9557ba8b3302"
  },
  {
    "url": "assets/js/8.7fa37b39.js",
    "revision": "116b0fa2a0e7b71e38b9cb4fe90d629c"
  },
  {
    "url": "assets/js/9.064b84aa.js",
    "revision": "09fb2259fcb3b4603a71226b7c15866d"
  },
  {
    "url": "assets/js/app.64b5a8d6.js",
    "revision": "7f0084ad4143f87bfaca42630574f46c"
  },
  {
    "url": "conclusion/index.html",
    "revision": "472bd6e5f9720600c71e61d2123ea480"
  },
  {
    "url": "design/index.html",
    "revision": "76b5fac04f4a3808df5525e07cb507fe"
  },
  {
    "url": "index.html",
    "revision": "bd16cf29a637b46efeac5b1b6ea7f27f"
  },
  {
    "url": "intro/index.html",
    "revision": "5a0a325ffc9c15909aeed4330654f81b"
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
    "revision": "b3901e1d7f1534b29ecb44cd9d8d6694"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "0a602859aa743707355271b9ea0bbed8"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "7fa90eb959a1f6eaa4c56fa2339dc9ea"
  },
  {
    "url": "software/index.html",
    "revision": "24195f8ee08b6a477d797fa34b99bdda"
  },
  {
    "url": "test/index.html",
    "revision": "0e58eacb64e8e8256c6d299b5bf38e39"
  },
  {
    "url": "use cases/index.html",
    "revision": "7b263e425dc8f96fe52596d3861289eb"
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
