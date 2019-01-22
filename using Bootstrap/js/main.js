// Getting images from instagram using instafeed.min.js (plugin)
var userFeed = new Instafeed({
        get: 'user',
        userId: '1276117597',
        accessToken: '1276117597.1677ed0.80301981c428447bbdc2fb5b39c8c7fe',
        resolution: 'low_resolution'
    });
    userFeed.run();
