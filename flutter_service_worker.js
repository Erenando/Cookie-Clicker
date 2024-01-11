'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9f4cef0421f84345fc6ebac7032b2493",
"assets/AssetManifest.bin.json": "aebe2cdff304d9335c65140b0c0eac66",
"assets/AssetManifest.json": "ad3c8bc9ebccd73f62d2964cc1164026",
"assets/assets/Cookie.png": "9d99d56d5d1657e93d57706a0eb34594",
"assets/assets/Cookie_Clicker_BG.jpeg": "150d2ce15a21369c5e205a941987f829",
"assets/assets/Dark_Noise_BG.png": "84523653dc3a32856c4ff4522675a4f9",
"assets/assets/list_of_shop_items.csv": "7156ebf2811d253ab8f1ebd14038f620",
"assets/assets/list_of_upgrade_items.csv": "a10f8acf9b956f63abd4f834733875df",
"assets/assets/read_me_assets/game_screen.png": "8d6ad72a72eff6183e286c6b4fe79159",
"assets/assets/read_me_assets/game_screen_cheat.png": "8733bd36b495dc7a2a213d4051c3e3dd",
"assets/assets/read_me_assets/infos_screen.png": "5135280a05766e3ef99e62029dfc4d51",
"assets/assets/read_me_assets/options_screen.png": "1a58d40dff4ce89ce9d7d78a6b9ad315",
"assets/assets/read_me_assets/resources_screen.png": "215eda2596386be5484726c379331021",
"assets/assets/read_me_assets/screen.png": "7370050c5c0ba3555c61ed71713b2309",
"assets/assets/read_me_assets/shop_screen.png": "bc6277e70e6a9695506252b966671e34",
"assets/assets/read_me_assets/statistics_screen.png": "f9be7bc8e78bcccff0668a9e36a9e8b0",
"assets/assets/read_me_assets/upgrade_screen.png": "795d875b091b846ad06a4689e2cd160f",
"assets/assets/shop_item_icons/shop_asset_0.png": "68001db290c5b5c61cf9d0255a6daa91",
"assets/assets/shop_item_icons/shop_asset_1.png": "f25a59a3053665e55bc53f681e1035e4",
"assets/assets/shop_item_icons/shop_asset_2.png": "853c26ab5036b3d8fa43738c07b3b957",
"assets/assets/shop_item_icons/shop_asset_3.png": "192b4c65025b6c707ef9a8ceb3a719b6",
"assets/assets/shop_item_icons/shop_asset_4.png": "9652323256988e5446d3672d15d75484",
"assets/assets/shop_item_icons/shop_asset_5.png": "e324268297051e830f110f4c29f119db",
"assets/assets/shop_item_icons/shop_asset_6.png": "6fe85994fc135ae601f4d2afba8e5d3f",
"assets/assets/shop_item_icons/shop_asset_7.png": "b276fad81c3ae5d6d1b5fdd7535b3011",
"assets/assets/shop_item_icons/shop_asset_8.png": "c127cc80221788b345b820c5cb98baa6",
"assets/assets/shop_item_icons/shop_asset_9.png": "2b5e3301377b352bacfcfed5fadf53f9",
"assets/assets/upgrade_icons/upgrade_0.png": "c27c3e419900676ff8b5ef11d3088293",
"assets/assets/upgrade_icons/upgrade_1.png": "1589b56aa082453f5e4b4a4dd03c1775",
"assets/assets/upgrade_icons/upgrade_10.png": "318ce6f30b7f97af8ecb6a05ada88c8a",
"assets/assets/upgrade_icons/upgrade_11.png": "ff82dc8dbbefcc6789bd75c8bd57f07a",
"assets/assets/upgrade_icons/upgrade_12.png": "38053b76a7932eefb67bc4595f6c29f5",
"assets/assets/upgrade_icons/upgrade_13.png": "568b32821a365439e4488d4e83c8ba78",
"assets/assets/upgrade_icons/upgrade_14.png": "01e1504d913d94d8099893625961fd67",
"assets/assets/upgrade_icons/upgrade_15.png": "ab122191ee7506d5a14d70acb70bcfae",
"assets/assets/upgrade_icons/upgrade_16.png": "108b74c6978eb6a022cd64cddfd5424e",
"assets/assets/upgrade_icons/upgrade_17.png": "b4256517de05d93f849bc453e1a78d5c",
"assets/assets/upgrade_icons/upgrade_18.png": "74f70ae970539fe921748bd38037b654",
"assets/assets/upgrade_icons/upgrade_19.png": "35c3d74c377265ddca40a3cc788ce9cb",
"assets/assets/upgrade_icons/upgrade_2.png": "185d167e7a5afe313a4fa98228f931b8",
"assets/assets/upgrade_icons/upgrade_20.png": "ec3f49338a537c7bbc21866ae6fd0a4e",
"assets/assets/upgrade_icons/upgrade_21.png": "b67e6f7d6ae9776a287e8ba70fd42d09",
"assets/assets/upgrade_icons/upgrade_22.png": "8d999034b213e9f296e662b41904a287",
"assets/assets/upgrade_icons/upgrade_23.png": "36e1505de9e2f9c575566ba7dc43ad7a",
"assets/assets/upgrade_icons/upgrade_24.png": "bf8b72c828246d693c88323d12f7af83",
"assets/assets/upgrade_icons/upgrade_25.png": "68d8829d46e1566a38556d41e50d039b",
"assets/assets/upgrade_icons/upgrade_26.png": "162dd0cb6e33f905eaa2da89089da2c3",
"assets/assets/upgrade_icons/upgrade_27.png": "6abbdf89e9d4f54118a60a8e39901b69",
"assets/assets/upgrade_icons/upgrade_28.png": "a4969e09173a8dda53c6727625b115f7",
"assets/assets/upgrade_icons/upgrade_29.png": "6d0fcf82ba07963d28871044f00e3376",
"assets/assets/upgrade_icons/upgrade_3.png": "b4fe183273554f3ab5df97cc05c1aa4d",
"assets/assets/upgrade_icons/upgrade_30.png": "85578433c37465438f40fc943b5ab031",
"assets/assets/upgrade_icons/upgrade_31.png": "c1c9f0f84321bbb5c75fa71554602893",
"assets/assets/upgrade_icons/upgrade_32.png": "8889a3e184505d43882baa38d319632c",
"assets/assets/upgrade_icons/upgrade_4.png": "d70b69bea3de653bee5725886a07c70d",
"assets/assets/upgrade_icons/upgrade_5.png": "b2c7f4c75aeb3b1ffd27592a55a265bb",
"assets/assets/upgrade_icons/upgrade_6.png": "e924f52bde32778ce70e2537b12e6bb7",
"assets/assets/upgrade_icons/upgrade_7.png": "8b9d38b30c024bc94e1a090019bc240b",
"assets/assets/upgrade_icons/upgrade_8.png": "41e4f14b057f4dfc5f70464419942fe0",
"assets/assets/upgrade_icons/upgrade_9.png": "0d466101ae2fb81ea7ba3940d9946c34",
"assets/assets%255C%255CCookie.png": "9d99d56d5d1657e93d57706a0eb34594",
"assets/assets%255C%255CCookie_Clicker_BG.jpeg": "150d2ce15a21369c5e205a941987f829",
"assets/assets%255C%255CDark_Noise_BG.png": "84523653dc3a32856c4ff4522675a4f9",
"assets/assets%255C%255Clist_of_shop_items.csv": "7156ebf2811d253ab8f1ebd14038f620",
"assets/assets%255C%255Clist_of_upgrade_items.csv": "a10f8acf9b956f63abd4f834733875df",
"assets/assets%255C%255Cread_me_assets%255C%255Cgame_screen.png": "8d6ad72a72eff6183e286c6b4fe79159",
"assets/assets%255C%255Cread_me_assets%255C%255Cgame_screen_cheat.png": "8733bd36b495dc7a2a213d4051c3e3dd",
"assets/assets%255C%255Cread_me_assets%255C%255Cinfos_screen.png": "5135280a05766e3ef99e62029dfc4d51",
"assets/assets%255C%255Cread_me_assets%255C%255Coptions_screen.png": "1a58d40dff4ce89ce9d7d78a6b9ad315",
"assets/assets%255C%255Cread_me_assets%255C%255Cresources_screen.png": "215eda2596386be5484726c379331021",
"assets/assets%255C%255Cread_me_assets%255C%255Cscreen.png": "7370050c5c0ba3555c61ed71713b2309",
"assets/assets%255C%255Cread_me_assets%255C%255Cshop_screen.png": "bc6277e70e6a9695506252b966671e34",
"assets/assets%255C%255Cread_me_assets%255C%255Cstatistics_screen.png": "f9be7bc8e78bcccff0668a9e36a9e8b0",
"assets/assets%255C%255Cread_me_assets%255C%255Cupgrade_screen.png": "795d875b091b846ad06a4689e2cd160f",
"assets/assets%255C%255Cshop_item_icons%255C%255Cshop_asset_0.png": "68001db290c5b5c61cf9d0255a6daa91",
"assets/assets%255C%255Cshop_item_icons%255C%255Cshop_asset_1.png": "f25a59a3053665e55bc53f681e1035e4",
"assets/assets%255C%255Cshop_item_icons%255C%255Cshop_asset_2.png": "853c26ab5036b3d8fa43738c07b3b957",
"assets/assets%255C%255Cshop_item_icons%255C%255Cshop_asset_3.png": "192b4c65025b6c707ef9a8ceb3a719b6",
"assets/assets%255C%255Cshop_item_icons%255C%255Cshop_asset_4.png": "9652323256988e5446d3672d15d75484",
"assets/assets%255C%255Cshop_item_icons%255C%255Cshop_asset_5.png": "e324268297051e830f110f4c29f119db",
"assets/assets%255C%255Cshop_item_icons%255C%255Cshop_asset_6.png": "6fe85994fc135ae601f4d2afba8e5d3f",
"assets/assets%255C%255Cshop_item_icons%255C%255Cshop_asset_7.png": "b276fad81c3ae5d6d1b5fdd7535b3011",
"assets/assets%255C%255Cshop_item_icons%255C%255Cshop_asset_8.png": "c127cc80221788b345b820c5cb98baa6",
"assets/assets%255C%255Cshop_item_icons%255C%255Cshop_asset_9.png": "2b5e3301377b352bacfcfed5fadf53f9",
"assets/assets%255C%255Cupgrade_icons%255C%255Cupgrade_0.png": "c27c3e419900676ff8b5ef11d3088293",
"assets/assets%255C%255Cupgrade_icons%255C%255Cupgrade_1.png": "1589b56aa082453f5e4b4a4dd03c1775",
"assets/assets%255C%255Cupgrade_icons%255C%255Cupgrade_10.png": "318ce6f30b7f97af8ecb6a05ada88c8a",
"assets/assets%255C%255Cupgrade_icons%255C%255Cupgrade_11.png": "ff82dc8dbbefcc6789bd75c8bd57f07a",
"assets/assets%255C%255Cupgrade_icons%255C%255Cupgrade_12.png": "38053b76a7932eefb67bc4595f6c29f5",
"assets/assets%255C%255Cupgrade_icons%255C%255Cupgrade_13.png": "568b32821a365439e4488d4e83c8ba78",
"assets/assets%255C%255Cupgrade_icons%255C%255Cupgrade_14.png": "01e1504d913d94d8099893625961fd67",
"assets/assets%255C%255Cupgrade_icons%255C%255Cupgrade_15.png": "ab122191ee7506d5a14d70acb70bcfae",
"assets/assets%255C%255Cupgrade_icons%255C%255Cupgrade_16.png": "108b74c6978eb6a022cd64cddfd5424e",
"assets/assets%255C%255Cupgrade_icons%255C%255Cupgrade_17.png": "b4256517de05d93f849bc453e1a78d5c",
"assets/assets%255C%255Cupgrade_icons%255C%255Cupgrade_18.png": "74f70ae970539fe921748bd38037b654",
"assets/assets%255C%255Cupgrade_icons%255C%255Cupgrade_19.png": "35c3d74c377265ddca40a3cc788ce9cb",
"assets/assets%255C%255Cupgrade_icons%255C%255Cupgrade_2.png": "185d167e7a5afe313a4fa98228f931b8",
"assets/assets%255C%255Cupgrade_icons%255C%255Cupgrade_20.png": "ec3f49338a537c7bbc21866ae6fd0a4e",
"assets/assets%255C%255Cupgrade_icons%255C%255Cupgrade_21.png": "b67e6f7d6ae9776a287e8ba70fd42d09",
"assets/assets%255C%255Cupgrade_icons%255C%255Cupgrade_22.png": "8d999034b213e9f296e662b41904a287",
"assets/assets%255C%255Cupgrade_icons%255C%255Cupgrade_23.png": "36e1505de9e2f9c575566ba7dc43ad7a",
"assets/assets%255C%255Cupgrade_icons%255C%255Cupgrade_24.png": "bf8b72c828246d693c88323d12f7af83",
"assets/assets%255C%255Cupgrade_icons%255C%255Cupgrade_25.png": "68d8829d46e1566a38556d41e50d039b",
"assets/assets%255C%255Cupgrade_icons%255C%255Cupgrade_26.png": "162dd0cb6e33f905eaa2da89089da2c3",
"assets/assets%255C%255Cupgrade_icons%255C%255Cupgrade_27.png": "6abbdf89e9d4f54118a60a8e39901b69",
"assets/assets%255C%255Cupgrade_icons%255C%255Cupgrade_28.png": "a4969e09173a8dda53c6727625b115f7",
"assets/assets%255C%255Cupgrade_icons%255C%255Cupgrade_29.png": "6d0fcf82ba07963d28871044f00e3376",
"assets/assets%255C%255Cupgrade_icons%255C%255Cupgrade_3.png": "b4fe183273554f3ab5df97cc05c1aa4d",
"assets/assets%255C%255Cupgrade_icons%255C%255Cupgrade_30.png": "85578433c37465438f40fc943b5ab031",
"assets/assets%255C%255Cupgrade_icons%255C%255Cupgrade_31.png": "c1c9f0f84321bbb5c75fa71554602893",
"assets/assets%255C%255Cupgrade_icons%255C%255Cupgrade_32.png": "8889a3e184505d43882baa38d319632c",
"assets/assets%255C%255Cupgrade_icons%255C%255Cupgrade_4.png": "d70b69bea3de653bee5725886a07c70d",
"assets/assets%255C%255Cupgrade_icons%255C%255Cupgrade_5.png": "b2c7f4c75aeb3b1ffd27592a55a265bb",
"assets/assets%255C%255Cupgrade_icons%255C%255Cupgrade_6.png": "e924f52bde32778ce70e2537b12e6bb7",
"assets/assets%255C%255Cupgrade_icons%255C%255Cupgrade_7.png": "8b9d38b30c024bc94e1a090019bc240b",
"assets/assets%255C%255Cupgrade_icons%255C%255Cupgrade_8.png": "41e4f14b057f4dfc5f70464419942fe0",
"assets/assets%255C%255Cupgrade_icons%255C%255Cupgrade_9.png": "0d466101ae2fb81ea7ba3940d9946c34",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "a9cf8b5247fa92e979859b873460687e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "71cc05554de6f4660b28dfdadb46519d",
"/": "71cc05554de6f4660b28dfdadb46519d",
"main.dart.js": "c15ead50d5f51555d85c34e2e4874400",
"manifest.json": "929a6d589a5a2da178cf90d145fdf5e3",
"version.json": "09d2e68c92896faa470d30b073b47187"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
