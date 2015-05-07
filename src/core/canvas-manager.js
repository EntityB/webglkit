/**
 * @extends EB
 * @type @exp;EB@call;extend
 */
var WebGLManager = EB.extend({
    /**
     * @constructor
     * @returns {undefined}
     */
    ctor: function () {
        this.canvas = document.createElement("canvas");
    },
    init: function () {
        this.setSize(300, 200);
        this.setResolution(300, 200);
        this._setWGL();
    },
    _setWGL: function () {
        this.wgl = this.canvas.getContext("webgl");
    },
    getWGL: function () {
        return this.wgl;
    },
    /**
     *
     * @param {Number} width size in pixels
     * @param {Number} height size in pixels
     * @returns {undefined}
     */
    setSize: function (width, height) {
        this.canvas.style.width = width;
        this.canvas.style.height = height;
    },
    /**
     *
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    setResolution: function (x, y) {
        this.canvas.width = x;
        this.canvas.height = y;
    }
});