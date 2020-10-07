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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

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
    "revision": "9c615258714251a15152c3083c95435d"
  },
  {
    "url": "about.html",
    "revision": "2216030be3374242b78987cd49b2a322"
  },
  {
    "url": "assets/css/0.styles.20bcdaac.css",
    "revision": "5e0bdb77d57aa815882ee97dd9c821a0"
  },
  {
    "url": "assets/img/1.021fd2f0.svg",
    "revision": "021fd2f0cd05c98a6ad02bbb0cbd9afa"
  },
  {
    "url": "assets/img/1.9714328b.png",
    "revision": "9714328b3234822c5a180bcd5bbc146a"
  },
  {
    "url": "assets/img/11.305727db.svg",
    "revision": "305727db985a6489f9bf59183c378b58"
  },
  {
    "url": "assets/img/2.18965506.svg",
    "revision": "189655060548dbc26cf40ee26e2e3c5d"
  },
  {
    "url": "assets/img/2.5a493adb.jpeg",
    "revision": "5a493adbad990c4cb35d110cbbb9149c"
  },
  {
    "url": "assets/img/2.84bdf8e6.jpeg",
    "revision": "84bdf8e691bd403e0c0fe84868a79f5b"
  },
  {
    "url": "assets/img/3.0fd92ccf.svg",
    "revision": "0fd92ccf4088a7c439c83cbce99a1f19"
  },
  {
    "url": "assets/img/3.eaed9d1e.jpeg",
    "revision": "eaed9d1e262741e211ece970181ed20d"
  },
  {
    "url": "assets/img/4.4c996b17.jpeg",
    "revision": "4c996b17bdef99e089b5bdbad31d963a"
  },
  {
    "url": "assets/img/4.6f30c900.svg",
    "revision": "6f30c90046b6e08d77eaf72b1e99d310"
  },
  {
    "url": "assets/img/5.0b71b7a7.svg",
    "revision": "0b71b7a7bf94e5921d83903f3a2ba906"
  },
  {
    "url": "assets/img/5.ec3af9d6.jpeg",
    "revision": "ec3af9d6714bce3057fe6b0d71d1efd2"
  },
  {
    "url": "assets/img/6.a49b1da1.jpeg",
    "revision": "a49b1da11c1d62f651b5b54181184ba4"
  },
  {
    "url": "assets/img/7.55a23f0b.svg",
    "revision": "55a23f0ba589def11d722a76b4672052"
  },
  {
    "url": "assets/img/7.666a0b6c.jpeg",
    "revision": "666a0b6c4ef82d8a3d2e3d5119c64d71"
  },
  {
    "url": "assets/img/8.f9490d9b.jpeg",
    "revision": "f9490d9bcea796c88df7d8846de8338b"
  },
  {
    "url": "assets/img/9.689d1811.svg",
    "revision": "689d1811ccce36a5a25636190c9b6c86"
  },
  {
    "url": "assets/img/add1.3b0eb6fd.png",
    "revision": "3b0eb6fd1e19998ae07b2fdda0d18b47"
  },
  {
    "url": "assets/img/add2.48f229d5.png",
    "revision": "48f229d5b0bd038dfbece7976c43dedd"
  },
  {
    "url": "assets/img/add3.16924c71.png",
    "revision": "16924c71bf4b945a9112a3ba55f30f99"
  },
  {
    "url": "assets/img/apply.28a537cd.png",
    "revision": "28a537cd708e65a5d834b9e37c4747ec"
  },
  {
    "url": "assets/img/bb-due-gcal.e5c077e0.png",
    "revision": "e5c077e040e029439b4683b77e1f269c"
  },
  {
    "url": "assets/img/bb-due-macos.1528a39b.png",
    "revision": "1528a39b7e152972bd7d6efcb733fa91"
  },
  {
    "url": "assets/img/busline2.789d29f5.png",
    "revision": "789d29f569ececb82f4d260ac0b0726b"
  },
  {
    "url": "assets/img/cas-login.dfbae961.png",
    "revision": "dfbae961438fb4f789ee70f463722b1e"
  },
  {
    "url": "assets/img/CC-BY-SA_icon.af17d52a.svg",
    "revision": "af17d52ad72e6d1015d183d060e68046"
  },
  {
    "url": "assets/img/chrome-browser-desktop.e1f4ef5c.png",
    "revision": "e1f4ef5cf06ca958ec117aca49c74b98"
  },
  {
    "url": "assets/img/copy-1.d1179d13.jpeg",
    "revision": "d1179d13dadd129e538969f331d12c19"
  },
  {
    "url": "assets/img/copy-2.93c70e3c.jpeg",
    "revision": "93c70e3ce5a88a41be3bc48fbb8fd1a8"
  },
  {
    "url": "assets/img/copy-3.f2a2463b.jpeg",
    "revision": "f2a2463b987942bb98f2c494193d7662"
  },
  {
    "url": "assets/img/copy-4.75679705.jpeg",
    "revision": "75679705724e0880efb6619a40b5e799"
  },
  {
    "url": "assets/img/copy-5.d09dcb21.jpeg",
    "revision": "d09dcb21d3fb931a2835def7933d4a28"
  },
  {
    "url": "assets/img/database.ff3c4edf.png",
    "revision": "ff3c4edfbf324af9136e6ea8d0df7ed2"
  },
  {
    "url": "assets/img/discount.8bc3f011.png",
    "revision": "8bc3f0114babaeb594603c8d41908a76"
  },
  {
    "url": "assets/img/english-vocabulary-daka.be106d43.png",
    "revision": "be106d43bcc04ec57a0c2a30f2d3d96f"
  },
  {
    "url": "assets/img/get-link.1b5d1f7e.png",
    "revision": "1b5d1f7ebe1db58a46500502648b0b38"
  },
  {
    "url": "assets/img/ics-url.d32d371c.png",
    "revision": "d32d371c2de86a4f5d528421cb2cb09a"
  },
  {
    "url": "assets/img/interior.e8186b41.jpg",
    "revision": "e8186b41f73e27f8554f9988ead92470"
  },
  {
    "url": "assets/img/ios.6e324d40.png",
    "revision": "6e324d4040e2d29fcc549444a2add317"
  },
  {
    "url": "assets/img/major-overview.69f3f2bd.png",
    "revision": "69f3f2bd127892b13703668e936b73aa"
  },
  {
    "url": "assets/img/matlab.6a9a3ca4.png",
    "revision": "6a9a3ca471ac2e10c6f3d350d1bd8e8d"
  },
  {
    "url": "assets/img/matlab1.018a0124.png",
    "revision": "018a0124c9d67f0fe8c543dda354a7f7"
  },
  {
    "url": "assets/img/matlab2.85b35081.png",
    "revision": "85b350811cd6417c96ee3d74c78998fa"
  },
  {
    "url": "assets/img/print-1.8902bf97.jpeg",
    "revision": "8902bf97cbc83b9f2a3158d11b1eda0e"
  },
  {
    "url": "assets/img/print-2.e9461c36.jpeg",
    "revision": "e9461c36834331858f4b0a2ad3c4a700"
  },
  {
    "url": "assets/img/print-3.9838ff94.jpeg",
    "revision": "9838ff941e662f46b79806025aa25b7b"
  },
  {
    "url": "assets/img/print-4.5c5882e8.jpeg",
    "revision": "5c5882e8656470e0dbd8d53f638a964b"
  },
  {
    "url": "assets/img/print-5.b5a75bea.jpeg",
    "revision": "b5a75bea7870bd0f6aec19c11de265f0"
  },
  {
    "url": "assets/img/print.ed9d4bc4.png",
    "revision": "ed9d4bc42a8226325e3849a683d8a984"
  },
  {
    "url": "assets/img/reader-service.0c0368aa.png",
    "revision": "0c0368aaf3a1423f0441e1f2728d0d9d"
  },
  {
    "url": "assets/img/sakai-1.9434888c.png",
    "revision": "9434888c9903637674a80eb1acd56248"
  },
  {
    "url": "assets/img/sakai-2.b1ee0463.png",
    "revision": "b1ee04633413694907cfd5ddd1b8061a"
  },
  {
    "url": "assets/img/sakai-3.675e389c.png",
    "revision": "675e389c8d6a658aca6f0e363ce88557"
  },
  {
    "url": "assets/img/sakai-4.000dd574.png",
    "revision": "000dd5749f386829df97c37217d9ce86"
  },
  {
    "url": "assets/img/sakai-5.f244a3a4.png",
    "revision": "f244a3a419620ac52ea8a1e63e14ff8f"
  },
  {
    "url": "assets/img/scan-2-0.1bf9e6b7.jpeg",
    "revision": "1bf9e6b7f13351ecb87300c17f04ced5"
  },
  {
    "url": "assets/img/scan-2-1.303453b4.jpeg",
    "revision": "303453b48a1feb7e2d35ed91e191d23e"
  },
  {
    "url": "assets/img/scan-2-2.bf12b859.jpeg",
    "revision": "bf12b8599e3e0d18b56878b2891c067d"
  },
  {
    "url": "assets/img/scan-2-3.e9ebc852.jpeg",
    "revision": "e9ebc852daaaac202876b7e0d86c1941"
  },
  {
    "url": "assets/img/scan-2-4.712fafef.jpeg",
    "revision": "712fafef765953fb853a0cbd450576a5"
  },
  {
    "url": "assets/img/schedule.abad98f6.png",
    "revision": "abad98f699a0ee9a82c7c5eff0d3ac6f"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/img/unifound-1.4fc26bc0.jpeg",
    "revision": "4fc26bc067ff1b178e7c9f6d0e9fd22f"
  },
  {
    "url": "assets/img/unifound-10.06ec06f8.png",
    "revision": "06ec06f80c28ba2c7a086c3bb9d56b01"
  },
  {
    "url": "assets/img/unifound-2.f8330e27.jpeg",
    "revision": "f8330e2761ddaa20d77c26dec687c213"
  },
  {
    "url": "assets/img/unifound-3.e57013fa.jpeg",
    "revision": "e57013fa465673457e84fd49f63b9b9d"
  },
  {
    "url": "assets/img/unifound-4.d7973763.png",
    "revision": "d79737638f38b299730b23da98c57a1b"
  },
  {
    "url": "assets/img/unifound-5.aae7e2e8.jpeg",
    "revision": "aae7e2e80661c5e94c074a86a74994bb"
  },
  {
    "url": "assets/img/unifound-6.ef5f24ab.jpeg",
    "revision": "ef5f24ab859fb25b31843238882bb53d"
  },
  {
    "url": "assets/img/unifound-7.22b69a1f.jpeg",
    "revision": "22b69a1fae5b8174bcd3da791b61ba4f"
  },
  {
    "url": "assets/img/unifound-8.3855edb9.jpeg",
    "revision": "3855edb91e2079cc340263fdbfeeebc5"
  },
  {
    "url": "assets/img/unifound-home.0e1673b8.png",
    "revision": "0e1673b82b15322a2296223af80247f4"
  },
  {
    "url": "assets/js/10.8cd5ee25.js",
    "revision": "afbd231fa53000a5df33b561b7ad2efa"
  },
  {
    "url": "assets/js/11.126c843e.js",
    "revision": "3f8bb7b71f710a25a8efe2887bc8f6a2"
  },
  {
    "url": "assets/js/12.070a40ac.js",
    "revision": "5c2429e82ab8203fdf27c5f79fdd1e9b"
  },
  {
    "url": "assets/js/13.ff66d191.js",
    "revision": "5ba500d3faa942abb69e959879851836"
  },
  {
    "url": "assets/js/14.bbd806bf.js",
    "revision": "98167453041388f832f82e93101d7350"
  },
  {
    "url": "assets/js/15.1e6e931c.js",
    "revision": "d55f8eadeba4d428d7467940f49c33bd"
  },
  {
    "url": "assets/js/16.bb30daf5.js",
    "revision": "dbaf05a7b8281bd78ad53a13ba7b1c18"
  },
  {
    "url": "assets/js/17.4262ece4.js",
    "revision": "478a9975042bcae15cf72d9f0850ed49"
  },
  {
    "url": "assets/js/18.078532c2.js",
    "revision": "1d54fa7e023f7f4b12e2573f51728232"
  },
  {
    "url": "assets/js/19.1d07d8c5.js",
    "revision": "c7a3a558c19267d8e1ba86c21262d193"
  },
  {
    "url": "assets/js/2.7054e16e.js",
    "revision": "76193f859b653aa79a7ba44d31a0d67e"
  },
  {
    "url": "assets/js/20.f4afca89.js",
    "revision": "5867543a6f89b815a631c9ffc2fddc6a"
  },
  {
    "url": "assets/js/21.d3bc1fd6.js",
    "revision": "3d16b27581417020b9558c8bd035c887"
  },
  {
    "url": "assets/js/22.940e6ade.js",
    "revision": "4b149c57ae9276d325249eae26324821"
  },
  {
    "url": "assets/js/23.7fc558a1.js",
    "revision": "76705dbe417203320bc45e0b119dce08"
  },
  {
    "url": "assets/js/24.1dd608de.js",
    "revision": "5563f61cf569656dd14fcad84ea8c734"
  },
  {
    "url": "assets/js/25.5bc8f125.js",
    "revision": "3ceb0aea41f282109a07709f420a26b8"
  },
  {
    "url": "assets/js/26.79e11ab7.js",
    "revision": "b416b7d7915a9868a2752dd02ecd14e8"
  },
  {
    "url": "assets/js/27.3712d4bb.js",
    "revision": "3e8379b25957f0f111fdcdba921f52ae"
  },
  {
    "url": "assets/js/28.771a1710.js",
    "revision": "acc0d8218671a496a8044fae29b4062c"
  },
  {
    "url": "assets/js/29.f43d0e8d.js",
    "revision": "dcb6c1a1975d7cf1f4779279c62b31da"
  },
  {
    "url": "assets/js/3.cc06bf64.js",
    "revision": "b49b4c75d307dea898b06cb5f766ebc3"
  },
  {
    "url": "assets/js/30.160cda1d.js",
    "revision": "7ed8010f7571d9aaa53fcacb4fd914b4"
  },
  {
    "url": "assets/js/31.9a9908e5.js",
    "revision": "83f289a9c78f9931103b85a51337eea3"
  },
  {
    "url": "assets/js/32.5b02e8cb.js",
    "revision": "d4fab62fa99e46eba20569978827e659"
  },
  {
    "url": "assets/js/33.19e7e06e.js",
    "revision": "c79a0705e13fb4c328eb0b4880a02864"
  },
  {
    "url": "assets/js/34.907a6293.js",
    "revision": "d9a7fabc9715c5f63c34b3fe0a19c23c"
  },
  {
    "url": "assets/js/35.35ea0142.js",
    "revision": "17a5bb105e8f9ba066672ac082c17ccc"
  },
  {
    "url": "assets/js/36.ea01eede.js",
    "revision": "77e10356935d1e9d9eca8edc1a462745"
  },
  {
    "url": "assets/js/37.b517f04d.js",
    "revision": "af227090a7ab50f1fca40eb23e27ae44"
  },
  {
    "url": "assets/js/38.6a9b7046.js",
    "revision": "89d93749517975c3c668b547ffb725ee"
  },
  {
    "url": "assets/js/39.30d1673e.js",
    "revision": "4ac206f9ddba9c2ad4e6fe249f463695"
  },
  {
    "url": "assets/js/4.76921e62.js",
    "revision": "58460159d4bb6bf1653de09ef164ecbf"
  },
  {
    "url": "assets/js/40.304c3ea8.js",
    "revision": "1528064674700861dedeea04a01712df"
  },
  {
    "url": "assets/js/41.f6cab999.js",
    "revision": "712453b44c182adf84939b3967d65102"
  },
  {
    "url": "assets/js/42.be9e9e84.js",
    "revision": "f477c9d7ef6938450d96e8eb06c3b5e0"
  },
  {
    "url": "assets/js/43.47bd57d7.js",
    "revision": "09aee81fa84537ddc7e8a9e36d04c52c"
  },
  {
    "url": "assets/js/44.d81e2a27.js",
    "revision": "c54201dbdae386492ff5d2b9cf1d0163"
  },
  {
    "url": "assets/js/45.8587c3ca.js",
    "revision": "6468d13fd82a728ed365847ad668adba"
  },
  {
    "url": "assets/js/46.de86b7b0.js",
    "revision": "6c8c59fa55d831d55a9f69ab2ab9e9b2"
  },
  {
    "url": "assets/js/47.f1cdd714.js",
    "revision": "4d9847f554052270b401394e6bf0bed6"
  },
  {
    "url": "assets/js/48.38cedcec.js",
    "revision": "87f8fad5e560a6be973956dd3ee91acb"
  },
  {
    "url": "assets/js/49.335d8c8c.js",
    "revision": "baddebf1cb936926f2f34f137a6b2e1c"
  },
  {
    "url": "assets/js/5.92a5f5bf.js",
    "revision": "86d79a9d94e8a92ad46fb06c4da0fcdd"
  },
  {
    "url": "assets/js/50.800683b8.js",
    "revision": "87899df3b459548a892691aca26608ac"
  },
  {
    "url": "assets/js/51.bade5a55.js",
    "revision": "94abe806b1c0c8f32abd86632db8624b"
  },
  {
    "url": "assets/js/52.a7305737.js",
    "revision": "60390c464943c4b2d0c37febfb702430"
  },
  {
    "url": "assets/js/6.561b754e.js",
    "revision": "18f48b5bed0e99879e1ac9d0e1e7e3fb"
  },
  {
    "url": "assets/js/7.3c23b132.js",
    "revision": "62dc67c0bf06558ad32396873f347ba0"
  },
  {
    "url": "assets/js/8.d8a9296e.js",
    "revision": "b348cf3196a61fac84018cf42697c6b3"
  },
  {
    "url": "assets/js/9.a1392ff8.js",
    "revision": "9ed262dfeee689ac7ad09fb7037544c8"
  },
  {
    "url": "assets/js/app.42e2433e.js",
    "revision": "710e134762e8e596cab32f8e5b7c935e"
  },
  {
    "url": "baidu_verify_yQSeRkHJla.html",
    "revision": "e34a6f863c56b8f0ccc227edb4e462b0"
  },
  {
    "url": "calendar/2018-2019.html",
    "revision": "56fd104bfab452e035526732c950eec9"
  },
  {
    "url": "calendar/2019-2020.html",
    "revision": "ca22e21106bcc35f86497cca1f30442e"
  },
  {
    "url": "calendar/2020-2021.html",
    "revision": "40b8f7b3e6889297786c785b0d73f2a9"
  },
  {
    "url": "calendar/index.html",
    "revision": "d6829eed7c44526d9c58538c4a300a4d"
  },
  {
    "url": "catering/index.html",
    "revision": "606f6b539d87ec8c2c0285d8595c8c27"
  },
  {
    "url": "contact/index.html",
    "revision": "07980c312bc363795288408aacf7834c"
  },
  {
    "url": "facility/index.html",
    "revision": "11fcf7653e80cd8037a7cbcdd073b29f"
  },
  {
    "url": "facility/panolens.html",
    "revision": "f4cbae8146beff49be85dfcea90079ea"
  },
  {
    "url": "if-you-are-a-freshman.html",
    "revision": "51af79c6a1387b590ae65d62f4e13fa9"
  },
  {
    "url": "index.html",
    "revision": "7429bf6eced930f8c67348f3ee07eca9"
  },
  {
    "url": "life/dormitory/index.html",
    "revision": "de77a904f3337116a6ad909026532ac6"
  },
  {
    "url": "life/freshman-register/index.html",
    "revision": "3daf5f71527a28a576353ba4f1c31a77"
  },
  {
    "url": "life/index.html",
    "revision": "7155bf1b39baf6e77f1917132672e00a"
  },
  {
    "url": "life/sports-facility/index.html",
    "revision": "1ec0c3ec5cbd4831ce5fdea1a7ded266"
  },
  {
    "url": "logo-assets/touch/homescreen144.png",
    "revision": "51742628b96a4d2c587eab560373962b"
  },
  {
    "url": "logo-assets/touch/homescreen168.png",
    "revision": "741edd656b98963d2ef2881ff00a7610"
  },
  {
    "url": "logo-assets/touch/homescreen192.png",
    "revision": "7182aab7d4c78e800943f2c59e57e5a0"
  },
  {
    "url": "logo-assets/touch/homescreen48.png",
    "revision": "34bcad7cabc11efd8a6859f4cc6d2526"
  },
  {
    "url": "logo-assets/touch/homescreen512.png",
    "revision": "0206c3548fcda8dd59055f45eb2f3f35"
  },
  {
    "url": "logo-assets/touch/homescreen72.png",
    "revision": "e93cd5bbf2dc0ad83e2e37938d0120ee"
  },
  {
    "url": "logo-assets/touch/homescreen96.png",
    "revision": "cd04040f900f20c8a4e2e204218a1c57"
  },
  {
    "url": "media/index.html",
    "revision": "cc2502365b145f223904823cde7416d7"
  },
  {
    "url": "organizations/index.html",
    "revision": "90d244b15e21ab3685a61bae505f6981"
  },
  {
    "url": "organizations/registered-organization.html",
    "revision": "990ad3b74eacbeb236a4cd75bebf40d0"
  },
  {
    "url": "service/blackboard/retrive-ics-url/index.html",
    "revision": "efa6125c04d4a740c1f5e2e4472f89d2"
  },
  {
    "url": "service/campus-card/index.html",
    "revision": "e7a1dafe477333e620786384c227c1d1"
  },
  {
    "url": "service/email/index.html",
    "revision": "b6999154980e1244e24be8953050c323"
  },
  {
    "url": "service/index.html",
    "revision": "5be903475dc853dde79a16d76486d5ed"
  },
  {
    "url": "service/mail-and-express/index.html",
    "revision": "7bede1fea9361b3361d566a0d757f69a"
  },
  {
    "url": "service/matlab/index.html",
    "revision": "46f2391f1f487a3930630e1da99feaa6"
  },
  {
    "url": "service/medical-treatment/index.html",
    "revision": "eaefdf6a202b0fa9a5a8968e87d60695"
  },
  {
    "url": "service/network/apply-for-vpn/index.html",
    "revision": "b1109d7135c11cbf91dd708544bf5f6c"
  },
  {
    "url": "service/network/choose-a-pad/index.html",
    "revision": "89c8cc20f067124ea5a92d54d56bd9c3"
  },
  {
    "url": "service/network/choose-a-router/index.html",
    "revision": "d35d878150544a0d67ba96dc0077fa5b"
  },
  {
    "url": "service/network/index.html",
    "revision": "e2faaa07d00a384c8e935fc43c782c79"
  },
  {
    "url": "service/sakai/index.html",
    "revision": "575a4f5c4c3b77c0ac3ff5312a9b3943"
  },
  {
    "url": "service/sid/index.html",
    "revision": "0452522611932daba3ea847722344513"
  },
  {
    "url": "service/ssc/index.html",
    "revision": "5bae00132e64986a99cff318ac0b9192"
  },
  {
    "url": "service/unifound/index.html",
    "revision": "2a64b547b98f6c81d86c93767441898c"
  },
  {
    "url": "service/work-wechat/index.html",
    "revision": "ed2403596361693d42fd166e124cf63b"
  },
  {
    "url": "site-help/index.html",
    "revision": "5e1e4a649393b7ad7dd30f7fcaf9fe3f"
  },
  {
    "url": "study/book-list-by-prof-yuan/2018/index.html",
    "revision": "d8ee2d1e018f4a331405045e2ae2d3e1"
  },
  {
    "url": "study/borrow-books/index.html",
    "revision": "ad570978b28bca7b127bdd769e82d547"
  },
  {
    "url": "study/by-shude-college/advice-on-study.html",
    "revision": "767425c4ff2fe214adb784a58c22b32c"
  },
  {
    "url": "study/by-shude-college/info-on-study.html",
    "revision": "77f36e31296c319a37e9c906730b6811"
  },
  {
    "url": "study/index.html",
    "revision": "cb6885f9a32992bc9ca4422328320193"
  },
  {
    "url": "surroundings/index.html",
    "revision": "3c7e4e2fac08bfac129210cce17d08ac"
  },
  {
    "url": "transport/holiday.html",
    "revision": "bd4e6379aec50a1b543b9ee4ec30348e"
  },
  {
    "url": "transport/index.html",
    "revision": "2dfaa76c8ee6396f8dcd62ee672fe431"
  },
  {
    "url": "transport/workday.html",
    "revision": "69eaf84f199f1b992fcfa4dc88906946"
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
