/**
 * ui-switch开关插件
 * 基于jQuery
 */
; + function($) {
    "use strict";
    // 默认实例化配置
    var defaults = {
        skin: '',
        dataKey: 'ui-switch', //实例化后的data键值，方便后续通过data('ui-switch')取出；
        change: null, //switch开关状态改变时的回调；
        click: null //switch元素点击时的回调，diabled时不发生。
    };

    /**
     * ui-switch插件
     */
    $.fn.ui_switch = function(options) {
        var _this = $(this),
            _num = _this.length;
        // 当要实例的对象只有一个时，直接实例化返回对象；
        if (_num === 1) {
            return new UI_switch(_this, options);
        };
        // 当要实例的对象有多个时，循环实例化，不返回对象；
        if (_num > 1) {
            _this.each(function(index, el) {
                new UI_switch($(el), options);
            })
        }
        // 当元素个数为0时，不执行实例化。
    };

    /**
     * UI_switch对象
     * @param {[jQuery]} el  [jQuery选择后的对象，此处传入的为单个元素]
     * @param {[object]} opt [设置的参数]
     */
    function UI_switch(el, opt) {
        this.el = el;
        this.disabled = this.el.prop('disabled');
        this.status = this.el.prop('checked') ? 'on' : 'off';
        this._opt = $.extend({}, defaults, opt);
        return this._init();
    }

    // UI_choose 原型链扩展。
    UI_switch.prototype = {

        // init初始化;
        _init: function() {
            var _data = this.el.data(this._opt.dataKey);
            // 如果已经实例化了，则直接返回
            if (_data)
                return _data;
            else
                this.el.data(this._opt.dataKey, this);

            // 判断是否为IE8
            var _ie = navigator.userAgent.toLocaleLowerCase().match(/msie ([\d.]+)/);
            if (_ie && _ie[1] <= 8.0) {
                this._lowIE = true;
            }
            // 组建dom,绑定事件
            this._setHtml()._bindEvent();
        },

        // 组建并获取相关的dom元素-ul;
        _setHtml: function() {
            var _html = $('<span>').addClass('ui-switch');
            this.el.after(_html).hide();
            this._wrap = this.el.next('span.ui-switch');
            this._wrap.addClass(this._opt.skin);
            if(this._lowIE){
                this[this.status]();
                this.disabled ?  this.disable() : null;
                this._wrap.removeClass(this.status == 'off' ? 'on':'off').addClass(this.status);
            }
            return this;
        },

        // 绑定事件；
        _bindEvent: function() {
            var _this = this;
            _this._wrap.on('click', function() {
                var _self = $(this);
                if (_this.disabled) {
                    return;
                }
                _this.toggle();
                _this._triggerClick();
            });
            return _this;
        },

        // change 触发
        _triggerChange: function() {
            this.change(this.status, this.el);
            if (typeof this._opt.change == 'function')
                this._opt.change.call(this.status, this.el);
        },

        // click 触发
        _triggerClick: function() {
            this.click(this.status, this.el);
            if (typeof this._opt.click == 'function')
                this._opt.click.call(this.status, this.el);
        },


        // 获取值；
        val: function() {
            return this.el.val();
        },

        // 开关状态改变事件；
        change: function(status, el) {},

        // 开关点击事件；
        click: function(status, el) {},



        // 禁用
        disable: function() {
            this.disabled = true;
            this.el.prop('disabled', true);
            this._lowIE ? this._wrap.addClass('disabled') : null;
            return this;
        },
        // 启用
        enable: function() {
            this.disabled = false;
            this.el.prop('disabled', false);
            this._lowIE ? this._wrap.removeClass('disabled') : null;
            return this;
        },

        // 开
        on: function() {
            var oStatus = this.status;
            if (!this.disabled) {
                this.status = 'on';
                this.el.prop('checked', true);
                this._lowIE ? this._wrap.removeClass('off').addClass('on') : null;
                oStatus !== this.status ? this._triggerChange(this.status, this.el) : null;
            }
            return this;
        },

        // 关
        off: function() {
            var oStatus = this.status;
            if (!this.disabled) {
                this.status = 'off';
                this.el.prop('checked', false);
                this._lowIE ? this._wrap.removeClass('on').addClass('off') : null;
                oStatus !== this.status ? this._triggerChange(this.status, this.el) : null;
            }
            return this;
        },

        // 获取开关状态
        getStatus: function() {
            return this.status;
        },

        // 开关来回切换
        toggle: function() {
            return this.getStatus() === 'on' ? this.off() : this.on();
        }
    };
}(jQuery);
