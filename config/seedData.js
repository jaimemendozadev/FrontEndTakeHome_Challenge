var stationService = require('../services/stationService');

module.exports = function () {
  stationService.add({
    id: 'badc896e-3e8d-4422-b14a-4609869c45f7',
    name: 'Alice FM',
    imgUrl: 'http://cdn-radiotime-logos.tunein.com/s33778q.png',
    streamUrl: 'http://8343.live.streamtheworld.com/KLLCFM_SC',
    reliability: 34,
    popularity: 3.7,
    tags: ['modern-rock', 'san-francisco', 'music']
  })
    .then(function () {
      return stationService.add({
        id: '773c3068-f3c4-43d6-8699-afb94fe11e20',
        name: 'CBS Sports Radio',
        imgUrl: 'http://cdn-radiotime-logos.tunein.com/s188593q.png',
        streamUrl: 'http://8303.live.streamtheworld.com:443/CBSSPORTS_SC',
        reliability: 72,
        popularity: 2.1,
        tags: ['sports', 'san-francisco', 'talk']
      });
    })
    .then(function () {
      return stationService.add({
        id: '20138b4e-6aa5-4b46-aaa1-3772198b7d68',
        name: 'Smooth Jazz',
        imgUrl: 'http://cdn-radiotime-logos.tunein.com/s249973q.png',
        streamUrl: 'http://tuneinads.moodmedia.com/streams/tunein_smooth_jazz_with_ads.mp3',
        reliability: 93,
        popularity: 4.6,
        tags: ['jazz', 'chicago', 'music', 'top']
      });
    })
    .then(function () {
      return stationService.add({
        id: '476c1ab0-6a8f-47e8-8459-b0eb1fe90064',
        name: 'KRTY Country',
        imgUrl: 'http://cdn-radiotime-logos.tunein.com/s35159q.png',
        streamUrl: 'http://icy3.abacast.com/empirebroadcasting-krtyfmmp3-64',
        reliability: 83,
        popularity: 4.1,
        tags: ['country', 'san-jose', 'music', 'top']
      });
    })

    // er
    .then(function () {
      return stationService.add({
        id: '5bb4f4a6-cd17-4f61-a1bb-d638f950610d',
        name: 'Sounds of the 80s',
        imgUrl: 'http://cdn-radiotime-logos.tunein.com/s235391q.png',
        streamUrl: 'http://tuneinads.moodmedia.com/streams/tunein_sounds_of_the_80s_with_ads.mp3',
        reliability: 99,
        popularity: 4.9,
        tags: ['80s', 'united-states', 'music']
      });
    })

    .then(function () {
      return stationService.add({
        id: 'e5ce59cf-0f02-4d70-9269-55c43a5c7807',
        name: 'Jazz FM',
        imgUrl: 'http://cdn-radiotime-logos.tunein.com/s45300q.png',
        streamUrl: 'http://tx.sharp-stream.com/icecast.php?i=jazzfmmobile.aac',
        reliability: 93,
        popularity: 3.5,
        tags: ['jazz', 'san-jose', 'music', 'soul', 'r&b']
      });
    })

    .then(function () {
      return stationService.add({
        id: '28d05c87-fe3c-4a2b-979e-13801a8ff208',
        name: 'Country Hits',
        imgUrl: 'http://cdn-radiotime-logos.tunein.com/s249981q.png',
        streamUrl: 'http://tuneinads.moodmedia.com/streams/tunein_new_country_hits_with_ads.mp3',
        reliability: 88,
        popularity: 4.8,
        tags: ['country', 'united-states', 'music', 'top']
      });
    })

    .then(function () {
      return stationService.add({
        id: '5a080545-4ebd-484a-bbeb-588977948494',
        name: 'NBC Sports',
        imgUrl: 'http://cdn-radiotime-logos.tunein.com/s179779q.png',
        streamUrl: 'http://icy3.abacast.com/dialglobal-nbcsportsaac-48',
        reliability: 63,
        popularity: 3.1,
        tags: ['sports', 'united-states', 'talk']
      });
    })

    .then(function () {
      return stationService.add({
        id: '432a17fc-c56b-4c8c-88f0-ce7a1312fe3b',
        name: 'China News',
        imgUrl: 'http://cdn-radiotime-logos.tunein.com/s228670q.png',
        streamUrl: 'http://listen.radionomy.com/ChinaNews',
        reliability: 17,
        popularity: 1.8,
        tags: ['china', 'news', 'talk', 'music', 'pop']
      });
    })

    .then(function () {
      return stationService.add({
        id: 'cc5809d3-3e83-4444-b5bc-f414d913d55a',
        name: 'Amsterdam Deep House',
        imgUrl: 'http://cdn-radiotime-logos.tunein.com/s255577q.png',
        streamUrl: 'http://listen.radionomy.com/amsterdamdeephouseradio',
        reliability: 49,
        popularity: 2.0,
        tags: ['house', 'deep-house', 'amsterdam', 'music']
      });
    })

    .then(function () {
      return stationService.add({
        id: '7ebbe4b9-0ba9-451c-9ec9-acc17696ded0',
        name: '关注中国',
        imgUrl: 'http://cdn-radiotime-logos.tunein.com/s25629q.png',
        streamUrl: 'http://telechargement.rfi.fr/rfi/chinois/audio/modules/actu/201406/Special_4_juin_20140606_ITW_Zhang_Boshu.mp3',
        reliability: 63,
        popularity: 2.3,
        tags: ['talk', 'china', 'news']
      });
    })

    .then(function () {
      return stationService.add({
        id: 'b7727047-757d-4781-ad06-4bd13b7d45dd',
        name: 'KRTY Country',
        imgUrl: 'http://cdn-radiotime-logos.tunein.com/s35159q.png',
        streamUrl: 'http://icy3.abacast.com/empirebroadcasting-krtyfmmp3-64',
        reliability: 83,
        popularity: 4.1,
        tags: ['country', 'san-jose', 'music']
      });
    })

    .then(function () {
      return stationService.add({
        id: '14c2e413-9652-404e-89b1-686b1e28c5d5',
        name: 'Jazz FM',
        imgUrl: 'http://cdn-radiotime-logos.tunein.com/s45300q.png',
        streamUrl: 'http://tx.sharp-stream.com/icecast.php?i=jazzfmmobile.aac',
        reliability: 93,
        popularity: 4.6,
        tags: ['jazz', 'san-jose', 'music', 'soul', 'r&b']
      });
    })

    .then(stationService.getAll)
    .then(function (data) {
      console.log('Stations', data);
    });

  console.log('Adding Default Stations');
};
