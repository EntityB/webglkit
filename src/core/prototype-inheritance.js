/**
 * Prototype inheritance is not like any other.
 * Entity Black
 */

/**
 * EB is empty singleton object and prototype object for all other
 * prototype objects. It can be only extended. Any descendant can access
 * this._super which is its parent prototype object which contains also
 * correct constructor property. this._super is accessible in constructors too.
 *
 * @returns {undefined}
 */
var EB = {};

/**
 * Accept one parameter used to extend prototype object it is called on.
 *
 * @type @exp;_extend@call;bind|Function
 */
EB.extend = (function () {

    var _extend = function (_parent, extension) {

        debugger;
        var _property, _super, _newObject, _desc;

        _super = _parent.prototype;

        _newObject = extension.ctor || _parent;

        _newObject.prototype = Object.create(_parent.prototype);

        for (_property in extension) {
            _newObject.prototype[_property] = extension[_property];
        }

        _desc = {writable: true, enumerable: false, configurable: true, value: _newObject};
        Object.defineProperty(_newObject.prototype, 'constructor', _desc);

        _desc = {writable: true, enumerable: false, configurable: true, value: _super};
        Object.defineProperty(_newObject.prototype, '_super', _desc);

        _newObject.extend = _extend.bind(null, _newObject);

        return _newObject;
    };

    return _extend.bind(null, function() {});
})();