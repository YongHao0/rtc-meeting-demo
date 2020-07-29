function initIM(params, callbacks) {
    var appkey = params.appkey;
    var token = params.token;
    var im = RongIMLib.init({
      appkey
    });
    im.watch({
      status: function (event) {
        console.log('status changed', event);
      }
    });
    im.connect({
      token
    }).then(({ id }) => {
      callbacks.connected(im, { id });
    }).catch(({ code }) => {
      callbacks.disconnectd(code);
    });
  }