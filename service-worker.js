/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["F:/hexo/hexo/public/2019/05/16/filename/index.html","d678d300f2d8d8271e809e67ea4035b3"],["F:/hexo/hexo/public/2019/06/13/filename-C++/index.html","8cb8251d6adc23a853d0f8de2e6b6b04"],["F:/hexo/hexo/public/2019/12/05/认识HTML/index.html","935c7e1dac421be6d29e9a01dcd16490"],["F:/hexo/hexo/public/2019/12/14/通讯录管理系统/index.html","951a015eaa70c3c68fd7adc4bd901c6e"],["F:/hexo/hexo/public/2020/06/07/HTML CSS 整理笔记/index.html","0bb08bcb77e3f03fafd9cbcf75077614"],["F:/hexo/hexo/public/2020/06/16/Ubuntu安装VMware15.0教程/index.html","1d93aee01f2b4294bc85eea93741d9b6"],["F:/hexo/hexo/public/2020/06/17/You-Get安装/index.html","6f1e21617420bd095b889027d6caa796"],["F:/hexo/hexo/public/404.html","dbcfca5c0fd34507e6fd178710fefe37"],["F:/hexo/hexo/public/about/index.html","7953daa2b34ab62b692fef57fabd5b5d"],["F:/hexo/hexo/public/archives/2019/05/index.html","8c46a4192829c5d2612641912b9fd4c3"],["F:/hexo/hexo/public/archives/2019/06/index.html","e6995b9437af707b4ee16f77bc9769c2"],["F:/hexo/hexo/public/archives/2019/12/index.html","6768a1a34cec0c1ceeb765aec48a3197"],["F:/hexo/hexo/public/archives/2019/index.html","4f56d859fefff08749304b483dc93a1a"],["F:/hexo/hexo/public/archives/2020/06/index.html","5de8e3fe4826ba386dc316da6838913f"],["F:/hexo/hexo/public/archives/2020/index.html","aa9f4b30b03fc64e685aeac256fee4d9"],["F:/hexo/hexo/public/archives/index.html","27011226ead911078671f6097e65b202"],["F:/hexo/hexo/public/baidu_verify_dn86tgnuj7.html","82bfa37a6dc9747c56a0ce9fd1ce81ac"],["F:/hexo/hexo/public/categories/index.html","90358388792eadb57f6865a0b4a96e17"],["F:/hexo/hexo/public/categories/下载神器/index.html","01d5c3940c74e5c13bd25c1aa9def3fe"],["F:/hexo/hexo/public/categories/学习之路/index.html","c9eedcc608afcd32c3568fb5595047da"],["F:/hexo/hexo/public/categories/技术/index.html","29ac1275517f7c88f9ae4fc88f13a50e"],["F:/hexo/hexo/public/categories/技术/工具/index.html","c828ef03529c881928cf18aaae8884fa"],["F:/hexo/hexo/public/categories/编程/index.html","cd2b67e483f9ed38165b26f5df943d55"],["F:/hexo/hexo/public/categories/编程/技术/index.html","df5c4dc8f77f01c7638a70c31a51e13f"],["F:/hexo/hexo/public/contact/index.html","ad8cf10e2c3e433bd13e84b332961e50"],["F:/hexo/hexo/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/hexo/hexo/public/css/index.css","faafc9ca8d443a23eb92c2b8db30f00c"],["F:/hexo/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/hexo/hexo/public/data/index.html","dd3c968cbb9cff0c33f201b013e4db4f"],["F:/hexo/hexo/public/friends/index.html","287e2d8193e4ead62d77c304d21f1b06"],["F:/hexo/hexo/public/galleries/index.html","03cb99d5f7be74da0da916284cc65b35"],["F:/hexo/hexo/public/googleef7ca859c080e6cd.html","522ea2d80d438776a0ae2cedd3b99802"],["F:/hexo/hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["F:/hexo/hexo/public/img/a.png","d0d95e72a6735de36dedc56edcf4fe81"],["F:/hexo/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["F:/hexo/hexo/public/img/article/1.jpg","f751cba3a4cd6381611bb4ec97d35e77"],["F:/hexo/hexo/public/img/article/2.jpg","12bc84f908b52460fce2c31fe2cb6aec"],["F:/hexo/hexo/public/img/article/3.jpg","7d255070209bc34e2a36e725ff6adc60"],["F:/hexo/hexo/public/img/article/4.jpg","c29587d1bdcde5530e3db0ea0ed06d6e"],["F:/hexo/hexo/public/img/article/HTML.jpg","fab68efa89f8aeae48df8f5c0dc72959"],["F:/hexo/hexo/public/img/favicon.png","ebd5df8e95c70edc10e254ffe9667ce1"],["F:/hexo/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["F:/hexo/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["F:/hexo/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/hexo/hexo/public/img/nav.png","ad816b7b2153208c2030673ec85d5261"],["F:/hexo/hexo/public/img/picture/about.jpg","7e9cb32b6146140aaaed3e780fcbe5e2"],["F:/hexo/hexo/public/img/picture/category.jpg","4afca7a751f3d86e8a3b703e3e3da3a3"],["F:/hexo/hexo/public/img/picture/index.jpg","3cf1acc3d317690beae0520a1e606b30"],["F:/hexo/hexo/public/img/picture/music.jpg","bc83cb1031c4fe81d9064a4327629846"],["F:/hexo/hexo/public/img/picture/tag.jpg","806de87c5ff8ffae84eca7feb99091dd"],["F:/hexo/hexo/public/img/picture/tag1.jpg","904458b0054d7f54e5cf393e6f4a7604"],["F:/hexo/hexo/public/img/picture/timg.jpg","38fda8174cfab6a94d96044182b062a0"],["F:/hexo/hexo/public/img/reward/alipay.jpg","f873bae7d9abd9919044309b5b2c296a"],["F:/hexo/hexo/public/img/reward/wechat.png","695e829c8974bcbaa1fa429804e0e3e2"],["F:/hexo/hexo/public/index.html","3c1a746d1753108da779f4196bf1951c"],["F:/hexo/hexo/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/hexo/hexo/public/js/FunnyTitle.js","3655f8f4eca53477433daca832904713"],["F:/hexo/hexo/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/hexo/hexo/public/js/calendar.js","e2af33b509cf06bb04c2020f2b0d0a66"],["F:/hexo/hexo/public/js/cursor.js","27343eec730d8dc904e90c898ee84824"],["F:/hexo/hexo/public/js/languages.js","538b160f8ccb8f13c5b1dd467dfd847c"],["F:/hexo/hexo/public/js/main.js","9ae2856869433ab1770b105c639b7710"],["F:/hexo/hexo/public/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["F:/hexo/hexo/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["F:/hexo/hexo/public/js/search/search.json.js","c36ccb08dc487ab21258122580cdc223"],["F:/hexo/hexo/public/js/self_busuanzi.pure.mini.js","47b834ede528a5d1b1e71d0ddd250970"],["F:/hexo/hexo/public/js/snow.js","0c7ce51b942e50560520914734cc5469"],["F:/hexo/hexo/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["F:/hexo/hexo/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["F:/hexo/hexo/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["F:/hexo/hexo/public/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["F:/hexo/hexo/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["F:/hexo/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["F:/hexo/hexo/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["F:/hexo/hexo/public/js/third-party/switch_comments.js","ba925a3831cf86a0f855d2c7820c6bc1"],["F:/hexo/hexo/public/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["F:/hexo/hexo/public/js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["F:/hexo/hexo/public/link/index.html","ee5d8ee4c825754cbc4f0a8bac1fbca9"],["F:/hexo/hexo/public/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["F:/hexo/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["F:/hexo/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["F:/hexo/hexo/public/music/index.html","9c43f53280947ad7d2dfd0a89305952c"],["F:/hexo/hexo/public/playlist/index.html","0780b30e6ae3517fd15a0cb5e605669c"],["F:/hexo/hexo/public/tags/C/index.html","7d8b92f73c960f2cd46943b43db129d8"],["F:/hexo/hexo/public/tags/C语言/index.html","eea5b0729ac6d36c0de767c843ec6b92"],["F:/hexo/hexo/public/tags/Html/index.html","9d6bdbcef1f175d76a396bafe34e6f8f"],["F:/hexo/hexo/public/tags/Python/index.html","9431e6ed9c7022caec15d2677b52beaf"],["F:/hexo/hexo/public/tags/Ubuntu/index.html","0d71d527b65c014c990c2ad45e9f8710"],["F:/hexo/hexo/public/tags/VMware/index.html","f07a1ac86c020031ae3a57d057a5141c"],["F:/hexo/hexo/public/tags/You-Get/index.html","94d5bcf270734aeb0ab5e15582782028"],["F:/hexo/hexo/public/tags/css/index.html","70c95124d07708bdc35fec2e6007b0b6"],["F:/hexo/hexo/public/tags/index.html","aaccc2dcc6ea590e63f0b27e6e08997e"],["F:/hexo/hexo/public/tags/友元/index.html","8fefe95e790e1d2c3b1080ac04fa39d4"],["F:/hexo/hexo/public/tags/学生通讯录管理系统/index.html","80ab2efff620c3e1d57b29cbc95b74cb"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







