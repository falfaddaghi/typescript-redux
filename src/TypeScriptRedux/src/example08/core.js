/// <reference path='../../typings/tsd.d.ts'/>
/// <reference path='../../typings/react-redux/react-redux.d.ts'/>
System.register(['react-redux'], function(exports_1) {
    var react_redux_1;
    function reduxify(mapStateToProps, mapDispatchToProps) {
        return function (target) { return react_redux_1.connect(mapStateToProps, mapDispatchToProps)(target); };
    }
    exports_1("reduxify", reduxify);
    function listenTo(store) {
        return function (target) {
            var didMount = target.prototype.componentDidMount;
            target.prototype.componentDidMount = function () {
                var _this = this;
                if (didMount != null)
                    didMount.call(this);
                this.unsubscribe = store.subscribe(function () { return _this.forceUpdate(); });
            };
            var willUnmount = target.prototype.componentWillUnmount;
            target.prototype.componentWillUnmount = function () {
                if (willUnmount != null)
                    willUnmount.call(this);
                this.unsubscribe();
            };
        };
    }
    exports_1("listenTo", listenTo);
    return {
        setters:[
            function (react_redux_1_1) {
                react_redux_1 = react_redux_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=core.js.map