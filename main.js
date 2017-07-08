(function () {

    window.onload = function () {
        objectFitImages();

        var images = document.querySelectorAll('.gallery__img');

        for (var i = 0; i < images.length; i++) {
            images[i].addEventListener('click', function () {
                modal.show(this);
            });
        }

        document.querySelector('.full-size').addEventListener('click', function (e) {
            modal.hide();
        });
    };

    var modal = {
        body: document.querySelector('body'),
        fullSize: document.querySelector('.full-size'),

        show: function (__this) {
            var clientWidth = document.documentElement.clientWidth,
                pixelRatio = window.devicePixelRatio,
                imageSize = clientWidth <= 550 ? pixelRatio === 1 ? '550' : '1100' :
                    clientWidth <= 800 ? pixelRatio === 1 ? '800' : '1600' :
                    clientWidth <= 1100 ? pixelRatio === 1 ? '1100': 'full-size' : 'full-size';
            document.querySelector('.full-size__img').src = 'images/'+ imageSize + '/' +  __this.getAttribute('file-name');
            document.querySelector('.full-size__img').alt = __this.getAttribute('alt');
            if (this.fullSize.className.indexOf('show') === -1) {
                this.fullSize.className += ' show';
            }
            if (this.body.className.indexOf('no-scroll') === -1) {
                this.body.className = 'no-scroll';
            }
        },

        hide: function () {
            this.fullSize.className = 'full-size';
            this.body.className = '';
            this.fullSize.querySelector('.full-size__img').src = '';
        }
    };

})();