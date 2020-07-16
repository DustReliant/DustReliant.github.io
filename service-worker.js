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

var precacheConfig = [["F:/hexo/hexo/public/2019/05/16/filename/index.html","15f6e793e27d6d46dca45f3c9cf0d947"],["F:/hexo/hexo/public/2019/06/13/filename-C++/index.html","ef7bf4a97c462f077184fbe85940538c"],["F:/hexo/hexo/public/2019/12/05/认识HTML/index.html","8476f1e7a5ec7bf0ac3cfb9e18f8fed0"],["F:/hexo/hexo/public/2019/12/14/通讯录管理系统/index.html","ca9b6550699912cee234c7b774e1a80d"],["F:/hexo/hexo/public/2020/06/07/HTML CSS 整理笔记/index.html","1f6b5435693e5868a8147d268af8ea0c"],["F:/hexo/hexo/public/2020/06/16/Ubuntu安装VMware15.0教程/index.html","621fe73a76fdb8ecbb2211d54842ad5a"],["F:/hexo/hexo/public/2020/06/17/You-Get安装/index.html","9cd30a008b95e2d507043a4e70aa5a2c"],["F:/hexo/hexo/public/2020/06/21/Ubuntu安装QQ/index.html","932b96f2b6f2d86604837a1d20b47f15"],["F:/hexo/hexo/public/404.html","0d040321a15bacf70b49842431cfd8f0"],["F:/hexo/hexo/public/about/index.html","661a95b8fb3a955464b2f4013128405d"],["F:/hexo/hexo/public/archives/2019/05/index.html","cbc177418ff6fa889c78ee9146a2ab3d"],["F:/hexo/hexo/public/archives/2019/06/index.html","df57823e016799ff93e6cf29d62a82a7"],["F:/hexo/hexo/public/archives/2019/12/index.html","858d1ecd9d7aa9732179de1e62ecf1e2"],["F:/hexo/hexo/public/archives/2019/index.html","486ba3d924fc65ff3a0777309a8ff9fa"],["F:/hexo/hexo/public/archives/2020/06/index.html","a3d21e9cf0c694d2158ea89e2cc5e5cc"],["F:/hexo/hexo/public/archives/2020/index.html","7efeab572237ae16c022a4226dd0f9ee"],["F:/hexo/hexo/public/archives/index.html","e97f4cf071204970f36dad54581ca89a"],["F:/hexo/hexo/public/baidu_verify_dn86tgnuj7.html","694d79a55aba24b47c6b1862d61a0067"],["F:/hexo/hexo/public/categories/Ubuntu/index.html","49833d73f00a1cd0072c31a5f6168957"],["F:/hexo/hexo/public/categories/index.html","96b76732f828041d079786d7ff128b57"],["F:/hexo/hexo/public/categories/下载神器/index.html","5dd9e3f5d7ebcaf0d2add7faa1544be6"],["F:/hexo/hexo/public/categories/学习之路/index.html","cddf3921e88587c4fefe74f26480385e"],["F:/hexo/hexo/public/categories/技术/index.html","e3fc4dfe47dda0b825d17ef596861c43"],["F:/hexo/hexo/public/categories/技术/工具/index.html","47cd31d4e044bfe6768dab1722b4cf23"],["F:/hexo/hexo/public/categories/编程/index.html","d48684b76798877b8f6d2a85c4aeec38"],["F:/hexo/hexo/public/categories/编程/技术/index.html","be498781c6188b50379aeef7b1bee9d7"],["F:/hexo/hexo/public/contact/index.html","09d430aea07cb7daa97452efe85518ef"],["F:/hexo/hexo/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/hexo/hexo/public/css/index.css","57b53f11c9f0e054dd7ae1c7c63e6032"],["F:/hexo/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/hexo/hexo/public/data/index.html","4154d921f96ad3ae1f64f09c0ca1f137"],["F:/hexo/hexo/public/friends/index.html","191206174563326a2049619974a12d5f"],["F:/hexo/hexo/public/galleries/index.html","37e3e13cd34eb0256f6d5aa08b060066"],["F:/hexo/hexo/public/googleef7ca859c080e6cd.html","8fb9deb39513a0b6876bf0f3446d7865"],["F:/hexo/hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["F:/hexo/hexo/public/img/a.png","d0d95e72a6735de36dedc56edcf4fe81"],["F:/hexo/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["F:/hexo/hexo/public/img/article/1.jpg","f751cba3a4cd6381611bb4ec97d35e77"],["F:/hexo/hexo/public/img/article/2.jpg","12bc84f908b52460fce2c31fe2cb6aec"],["F:/hexo/hexo/public/img/article/3.jpg","7d255070209bc34e2a36e725ff6adc60"],["F:/hexo/hexo/public/img/article/4.jpg","c29587d1bdcde5530e3db0ea0ed06d6e"],["F:/hexo/hexo/public/img/article/HTML.jpg","fab68efa89f8aeae48df8f5c0dc72959"],["F:/hexo/hexo/public/img/favicon.png","ebd5df8e95c70edc10e254ffe9667ce1"],["F:/hexo/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["F:/hexo/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["F:/hexo/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/hexo/hexo/public/img/nav.png","ad816b7b2153208c2030673ec85d5261"],["F:/hexo/hexo/public/img/picture/about.jpg","7e9cb32b6146140aaaed3e780fcbe5e2"],["F:/hexo/hexo/public/img/picture/category.jpg","4afca7a751f3d86e8a3b703e3e3da3a3"],["F:/hexo/hexo/public/img/picture/index.jpg","3cf1acc3d317690beae0520a1e606b30"],["F:/hexo/hexo/public/img/picture/music.jpg","bc83cb1031c4fe81d9064a4327629846"],["F:/hexo/hexo/public/img/picture/tag.jpg","806de87c5ff8ffae84eca7feb99091dd"],["F:/hexo/hexo/public/img/picture/tag1.jpg","904458b0054d7f54e5cf393e6f4a7604"],["F:/hexo/hexo/public/img/picture/timg.jpg","38fda8174cfab6a94d96044182b062a0"],["F:/hexo/hexo/public/img/reward/alipay.jpg","f873bae7d9abd9919044309b5b2c296a"],["F:/hexo/hexo/public/img/reward/wechat.png","695e829c8974bcbaa1fa429804e0e3e2"],["F:/hexo/hexo/public/index.html","5572b527825548c51837fe6b748d3e0e"],["F:/hexo/hexo/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/hexo/hexo/public/js/FunnyTitle.js","3655f8f4eca53477433daca832904713"],["F:/hexo/hexo/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/hexo/hexo/public/js/calendar.js","e2af33b509cf06bb04c2020f2b0d0a66"],["F:/hexo/hexo/public/js/cursor.js","27343eec730d8dc904e90c898ee84824"],["F:/hexo/hexo/public/js/languages.js","538b160f8ccb8f13c5b1dd467dfd847c"],["F:/hexo/hexo/public/js/main.js","9ae2856869433ab1770b105c639b7710"],["F:/hexo/hexo/public/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["F:/hexo/hexo/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["F:/hexo/hexo/public/js/self_busuanzi.pure.mini.js","47b834ede528a5d1b1e71d0ddd250970"],["F:/hexo/hexo/public/js/snow.js","0c7ce51b942e50560520914734cc5469"],["F:/hexo/hexo/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["F:/hexo/hexo/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["F:/hexo/hexo/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["F:/hexo/hexo/public/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["F:/hexo/hexo/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["F:/hexo/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["F:/hexo/hexo/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["F:/hexo/hexo/public/js/third-party/switch_comments.js","ba925a3831cf86a0f855d2c7820c6bc1"],["F:/hexo/hexo/public/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["F:/hexo/hexo/public/js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["F:/hexo/hexo/public/link/index.html","36a977086a98b7ea76e22d0f36675865"],["F:/hexo/hexo/public/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["F:/hexo/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["F:/hexo/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["F:/hexo/hexo/public/me/CV_files/astyle(1).css","a657ddab7972d99f68a7b8a736b032f2"],["F:/hexo/hexo/public/me/CV_files/astyle.css","a657ddab7972d99f68a7b8a736b032f2"],["F:/hexo/hexo/public/me/CV_files/bappy.jpg","8685902768b4a499e3ecb55b92ed89f3"],["F:/hexo/hexo/public/me/CV_files/bootstrap.min.css","7f6e2c83c2dd725db10772589d9df4d1"],["F:/hexo/hexo/public/me/CV_files/font-awesome.min.css","cc74aca313c0306f4689dee934580214"],["F:/hexo/hexo/public/me/CV_files/responsive.css","07ca6d32104c3d8007e1e71950640d63"],["F:/hexo/hexo/public/me/CV_files/style.css","80a9b003165796088a4f935a91ec3014"],["F:/hexo/hexo/public/me/CV_files/translateelement.css","5b73f55c60594d97eebf47162bf5a526"],["F:/hexo/hexo/public/me/index.html","76203d40a787adae6480a153c65e2f52"],["F:/hexo/hexo/public/music/index.html","5037904e4e4ad18f3fb67e7ba17bfb40"],["F:/hexo/hexo/public/playlist/index.html","45b0ea3ed6924f143fd7f08f9c4e96f7"],["F:/hexo/hexo/public/tags/C/index.html","35afbac837babd3ee30ede0cbaa98f0f"],["F:/hexo/hexo/public/tags/C语言/index.html","4379cdd8ac8b2970a3fdbb806c9a8526"],["F:/hexo/hexo/public/tags/Html/index.html","0341adce9913aa1abbad7cb0aebf5088"],["F:/hexo/hexo/public/tags/Python/index.html","c9e41b7a2786d03069347e415439ca56"],["F:/hexo/hexo/public/tags/QQ-for-Linux/index.html","7f64da599f71141b634a1dcfd3d152ee"],["F:/hexo/hexo/public/tags/Ubuntu/index.html","80ae77f07dacc77f80c5e10dc61519bd"],["F:/hexo/hexo/public/tags/VMware/index.html","3ff068b4a60115e8a40d1c501c8a7025"],["F:/hexo/hexo/public/tags/Wine-QQ/index.html","34006564cb1ea8cba8853d3ac68835da"],["F:/hexo/hexo/public/tags/You-Get/index.html","a6b847ccc3b24a68832059ca210cb290"],["F:/hexo/hexo/public/tags/css/index.html","345cf20e4b0ec51c68cc0653057ccadf"],["F:/hexo/hexo/public/tags/index.html","f6ebdc9e498f97de6beca20714b6d514"],["F:/hexo/hexo/public/tags/友元/index.html","19f13f421b4a6d842be84d500c7fa8c3"],["F:/hexo/hexo/public/tags/学生通讯录管理系统/index.html","450c401a931c9a393770d03da7a81c82"]];
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







