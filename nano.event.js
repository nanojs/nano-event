/*
 *  nano Event plugin v1.0
 *  http://nanojs.org/plugins/event
 *
 *  Copyright (c) 2008-2015 James Watts
 *  https://github.com/jameswatts
 *
 *  This is FREE software, licensed under the GPL
 *  http://www.gnu.org/licenses/gpl.html
 */

if (nano) {
	nano.plugin({
		on: function _on(type, fn, mode) {
			nano.event.add(this.node, type, fn, mode);
			return this;
		},
		fire: function _fire(type) {
			if (document.createEventObject) {
				var evt = document.createEventObject();
				return obj.fireEvent('on' + type, evt);
			}
			var evt = document.createEvent('HTMLEvents');
			evt.initEvent(type, true, true);
			return !obj.dispatchEvent(evt);
		}
	},
	function() {
		this.reg({
			on: function(obj) {
				if (nano.type(obj) === 'object') {
					for (var evt in obj) nano.event.add(this, evt, obj[evt], false);
					return this;
				}
				return false;
			}
		});
		this.event = {
			add: function _add(obj, evt, fn, mode) {
				if (obj.nano) obj = obj.node;
				if (obj.addEventListener) {
					obj.addEventListener(evt, fn, mode);
				} else if (obj.attachEvent) {
					obj.attachEvent('on' + evt, fn);
				} else {
					obj['on' + evt] = fn;
				}
				return obj;
			},
			del: function _del(obj, evt, fn, mode) {
				if (obj.nano) obj = obj.node;
				if (obj.removeEventListener) {
					obj.removeEventListener(evt, fn, mode);
				} else if (obj.detachEvent) {
					obj.detachEvent('on' + evt, fn);
				} else {
					obj['on' + evt] = null;
				}
				return obj;
			},
			stop: function _stop(e) {
				if (e && e.stopPropagation) {
					e.stopPropagation();
					return true;
				} else if (window.event && window.event.cancelBubble) {
					window.event.cancelBubble = true;
					return true;
				}
				return false;
			},
			prevent: function _prevent(e) {
				if (e && e.preventDefault) {
					e.preventDefault();
					return true;
				} else if (window.event && window.event.returnValue) {
					window.eventReturnValue = false;
					return true;
				}
				return false;
			}
		};
	});
}
