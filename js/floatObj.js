'use strict';

(function () {
  'use strict';
  var FloatObj;

  FloatObj = (function () {
    function FloatObj(options) {
      if (options == null) {
        options = {};
      }
      this._images = options.images || [];
      this._duration = options.duration || 5000;
      this._dom = options.target ? $(options.target) : $('#wrap');
      this._num = options.num || 0;
      this._width = this._dom.width();
      this._height = this._dom.outerHeight();
      this.FfloatObj = [];
      this.init();
    }

    FloatObj.prototype.init = function () {
      var i, j, ref;
      for (i = j = 0, ref = this._num; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
        this.FfloatObj[i] = this.create();
      }
      return this.insert();
    };

    var img_cnt = 0;
    FloatObj.prototype.create = function () {
      var elem;
      var img_num;
      var left_set = this._width / 0;
      elem = document.createElement('div');
      elem.className = 'FloatObj';
      elem.style.width = '150px';
      elem.style.height = '150px';
      elem.style.position = 'absolute';
      if(img_cnt == 0){
        img_num = img_cnt;
        elem.style.left = Math.random() * (left_set*2 - left_set) + left_set + 'px';
        img_cnt++;
      }else if(img_cnt == 1){
        img_num = img_cnt;
        elem.style.left = Math.random() * left_set + 'px';
        img_cnt++;
      }else if(img_cnt == 2){
        img_num = img_cnt;
        elem.style.left = Math.random() * (left_set*2 - left_set*2) + left_set*2 + 'px';
        img_cnt++;
      }else if(img_cnt == 3){
        img_num = img_cnt;
        elem.style.left = Math.random() * (left_set*4 - left_set*3) + left_set*3 + 'px';
        img_cnt++;
      }else{
        img_num = ~ ~(Math.random() * this._images.length);
        elem.style.left = Math.random() * this._width + 'px';
      }
      elem.style.top = Math.random() * this._height - 150 + 'px';
      elem.style.transform = 'rotate(' + ~ ~(Math.random() * 90) + 'deg) ' + 'translateY(0px)';
      elem.style.background = 'url(' + this._images[img_num] + ') no-repeat center center';
      return elem;
    };

    FloatObj.prototype.move = function (target) {
      var _this, rotate, spd;
      _this = this;
      spd = Math.random() * 1.5 + .25;
      rotate = 180 * 0.25 * (this._height / 200);
      rotate = Math.random() * 2 > 1 ? rotate : -rotate;

      if (Modernizr.csstransforms) {
        return $(target).velocity({
          translateY: -1000,
          rotateZ: rotate
        }, (spd + .5) * _this._duration, 'linear', function () {
          return $(this).velocity({
            translateY: _this._height + 100,
            rotateZ: 0
          }, 0, function () {
            return _this.move(target);
          });
        });
      } else {
        return $(target).velocity({
          top: -1000,
          rotateZ: rotate
        }, (spd + .5) * _this._duration, 'linear', function () {
          return $(this).velocity({
            top: _this._height + 100,
            rotateZ: 0
          }, 0, function () {
            return _this.move(target);
          });
        });
      }
    };

    FloatObj.prototype.insert = function () {
      var elems, key, ref, val;
      elems = document.createDocumentFragment();
      ref = this.FfloatObj;
      for (key in ref) {
        val = ref[key];
        elems.appendChild(val);
      }
      return this._dom.append(elems);
    };

    FloatObj.prototype.start = function () {
      var i, j, ref, results;
      results = [];
      for (i = j = 0, ref = this._num; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
        results.push(this.move(this.FfloatObj[i]));
      }
      return results;
    };

    FloatObj.prototype.stop = function () {
      var i, j, ref, results;
      results = [];
      for (i = j = 0, ref = this._num; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
        results.push(this.move(this.FfloatObj[i]));
      }
      return results;
    };

    return FloatObj;
  })();

  window.demichan || (window.demichan = {});

  window.demichan.FloatObj = FloatObj || (FloatObj = {});
}).call(undefined);