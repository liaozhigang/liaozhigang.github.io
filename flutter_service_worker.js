'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "0b453c1f702411e86aae26ea5e0391cf",
"/main.dart.js": "d2628ca2eff5e994ea100e8ba956ad1c",
"/assets/LICENSE": "8100c3c3dcbca896aaba26537a6fe06b",
"/assets/AssetManifest.json": "35a99624aa678f80ec9ddcff6ab0f847",
"/assets/FontManifest.json": "92f8fe616884b539a8c9a6b2ae33b130",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/packages/line_awesome_icons/assets/fonts/icon_font.ttf": "4d42f5f0c62a8f51e876c14575354a6e",
"/assets/packages/progress_dialog/assets/double_ring_loading_io.gif": "e5b006904226dc824fdb6b8027f7d930",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/icomi_logo.png": "2c67604a9d4c0bb6a40ffd259fe0701c",
"/assets/assets/30_zh.png": "79b2fb735a22773868e274a6813df7d8",
"/assets/assets/defaultvideo1.mp4": "fc58bc23048e90d102eb17b05508ec03",
"/assets/assets/weather_icons/xiaoxue.png": "7993da6248d070304f89b7983e7be03b",
"/assets/assets/weather_icons/zhongxue.png": "0248ffdf5346284d60a11da92a002e49",
"/assets/assets/weather_icons/qing.png": "68310a71626bdcd4f98efab99d09cb2d",
"/assets/assets/weather_icons/daxue.png": "0636abe4306f0d89a56d56a5fc03b79a",
"/assets/assets/weather_icons/duoyun.png": "7dc8ed28170fa2346711bbed92e33541",
"/assets/assets/weather_icons/zhongyu.png": "275bcabb8d667bace21d0a0c2ce73eea",
"/assets/assets/weather_icons/dayu.png": "1dd1b8e20efdaef9edb8565126bf1ed2",
"/assets/assets/weather_icons/xiaoyu.png": "de44b70e511ae750a9867b2f3caea91d",
"/assets/assets/weather_icons/mai.png": "dad47665cec6510b19cefd2d9411a9c3",
"/assets/assets/weather_icons/yin.png": "7084915229494751836a85aa92b9d29d",
"/assets/assets/weather_icons/wu.png": "a4b575f9486077899f806a1c45d1444c",
"/assets/assets/defaultpdf.pdf": "8bd6509aba6eafe623392995b08c7047",
"/assets/assets/0center.png": "4ba0d35dafcbb0f7ffca9b753a9d299f",
"/assets/assets/dash_border.png": "79252521e3a4e906a687dea0a3a23a29",
"/assets/assets/new_meeting_handle.png": "7a06713ff152c762883655d58f9bb3fc",
"/assets/assets/pointer.jpg": "fd089031b017811948e2d6c8ea7e5588",
"/assets/assets/30_en.png": "5e370ac332dae4a4963329a581595527",
"/assets/assets/wendu.png": "8d0a4e1d015cb0cce97637f20a25290f",
"/assets/assets/quick_en.png": "4d08799a65d86f056948aeda413f1cb3",
"/assets/assets/60_en.png": "dec0ad02314c76366c1e0e6dd253e74e",
"/assets/assets/room_booking.png": "1582e5ba827c44c4989411dfdcb43d78",
"/assets/assets/shidu.png": "0fd8933d3472223b9505c6e6cb43834e",
"/assets/assets/pm2.5.png": "9dd3582a33bc69fb5ca7c7f49131c67f",
"/assets/assets/icomi_app_logo.jpg": "dcc54c4e3d53dc7846dbea1accff23d6",
"/assets/assets/quick_zh.png": "f063dfb687fdf7470041e01d622dad8f",
"/assets/assets/player_bg.png": "992b815f0263db9f6b5e1d517ab36ee4",
"/assets/assets/defaultVideo.mp4": "831ff53b1a31bb651f22f0e6d7e8c45f",
"/assets/assets/defaultaudio.mp3": "45fa5a4d28b3b1a9da9e2834379b119b",
"/assets/assets/full_book_back.png": "0a9349f89d13e8df7d54f2de5a792a89",
"/assets/assets/60_zh.png": "eab010c72c12a632b39766bbce1c775e"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
