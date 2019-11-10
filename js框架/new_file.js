//兼容
function test(ele) {
	if (window.getComputedStyle) {
		return window.getComputedStyle(ele)
	} else {
		return ele.currentStyle
	}
}
//轮播图
function banner(win, right, left, ul, list) {
	var width = win.offsetWidth,
		index = 0,
		time,
		num;
	// 点击右边
	right.onclick = function() {
			test()
		}
		// 右
	function test() {
		if (index == list.length) {
			index = 1;
			ul.style.left = "0px";
		} else {
			index++
		}
		anim()
	}
	// 点击左边
	left.onclick = function() {
			if (index == 0) {
				index = list.length - 1;
				ul.style.left = -(width * list.length) + "px";
			} else {
				index--
			}
			anim()
		}
		// 运动方式
	function anim() {
		var speed;
		clearInterval(time);
		time = setInterval(function() {
			//运动一个图的距离
			speed = (-index * width - ul.offsetLeft) / 10;
			if (speed > 0) {
				speed = Math.ceil(speed);
			} else {
				speed = Math.floor(speed);
			}
			ul.style.left = ul.offsetLeft + speed + "px";
		}, 30);
		num = index;
		if (num == list.length) {
			num = 0
		}
		for (var x = 0; x < list.length; x++) {
			list[x].className = "";
		}
		list[num].className = "active";
	}
	// 点
	for (var x = 0; x < list.length; x++) {
		(function(x) {
			list[x].onmouseover = function() {
				for (var y = 0; y < list.length; y++) {
					list[y].className = "";
				}
				this.className = "active";
				index = x;
				anim()
			}
		})(x)
	}

	// 自动播放
	var t;

	function zidong() {
		t = setInterval(function() {
			test()
		}, 1000);
	}
	zidong()
		// 划入
	win.onmouseover = function() {
			clearInterval(t);
		}
		// 滑出
	win.onmouseout = function() {
		zidong()
	}
}