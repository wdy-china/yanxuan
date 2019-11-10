var left = document.getElementById("left");
var right = document.getElementById("right");

var slickTrack = document.getElementsByClassName("slick-track")[0];

var slicklist = document.getElementsByClassName("slick-list ")[0];
var index = 0;
var width = slicklist.offsetWidth;
var open = true
var timer = null
right.onclick = function() {
	if (open) {
		open = false
		if (index < 7) {
			index++
		}
		let target = -width * index
		animate(slickTrack, target)
		timer = setTimeout(() => {
			open = true
		}, 1000)
	}

}
left.onclick = function() {
	if (open) {
		open = false

		if (index <= 7 && index > 0) {
			index--
		}
		let target = -width * index
		animate(slickTrack, target)
		timer = setTimeout(() => {
			open = true
		}, 1000)
	}
}

function animate(obj, target) {
	clearInterval(obj.tiemr)
	obj.tiemr = setInterval(function() {
		var leader = obj.offsetLeft;
		var steep = (target - leader) / 10;
		steep = steep > 0 ? Math.ceil(steep) : Math.floor(steep);
		//				console.log(target+"---"+leader+"---"+steep)
		leader = leader + steep;
		obj.style.left = leader + "px";
		if (leader === target) {
			clearInterval(obj.tiemr)
		}
	}, 15)
}



var items = document.getElementsByClassName("items");
var showContainer = document.getElementsByClassName("showContainer");
function xuanxiangka(obj1,obj2,a,b,c,d){
	for(var i = 0;i < obj1.length;i ++){
	(function(i) {
		obj1[i].onclick = function() {
			for (var y = 0; y < obj1.length; y++) {
				obj1[y].className = a;
				obj2[y].className = b;
			}
			this.className = a+" "+ c;
			obj2[i].className = b+" "+ d;
		}
	    })(i)
    }
}
xuanxiangka(items,showContainer,"items","showContainer","active","show")
//for(var i = 0;i < items.length;i ++){
//	(function(i) {
//		items[i].onclick = function() {
//			for (var y = 0; y < items.length; y++) {
//				items[y].className = "items";
//				showContainer[y].className = "showContainer";
//			}
//			this.className = "items active";
//			showContainer[i].className = "showContainer show";
//		}
//	})(i)
//}
var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      effect: 'fade',
      loop:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });


$.ajax({
	type:"get",
	url:"json/m-indexCates1.json",
	async:true,
	success:function(data){
		
		$.each(data, function(i) {
			var data1 = data[i].contre
//			console.log(data1[0].title[2])
			$(`
				<div class="f-left lh1">
					<a>
						<h3 class="name">${data[i].left}</h3>
					</a>
				</div>
			`).appendTo($(".m-commonHeader1").eq(i))
			$(`
				<div class="f-right lh1">
					<div class="subCateList">
						<span><a href="javascript:;">${data1[0].title[0]}</a><b class="spilt">/</b></span>
						<span><a href="javascript:;">${data1[0].title[1]}</a><b class="spilt">/</b></span>
						<span><a href="javascript:;">${data1[0].title[2]}</a><b class="spilt">/</b></span>
						<span><a href="javascript:;">${data1[0].title[3]}</a><b class="spilt">/</b></span>
						<span><a href="javascript:;">${data1[0].title[4]}</a><b class="spilt">/</b></span>
						<span><a href="javascript:;">${data1[0].title[5]}</a><b class="spilt">/</b></span>
						<span><a href="javascript:;">${data1[0].title[6]}</a></span>
					</div>
					<a class="moreItems f-fz14">${data[i].right}</a>
				</div>
			`).appendTo($(".m-commonHeader1").eq(i))
		});
	}
})


//$.ajax({
//	type:"get",
//	url:"json/m-indexCates2.json",
//	async:true,
//	success:function(data){
//		$.each(data, function(i) {
//			var data1 = data[i].banner
////			console.log(data1[0].bannerImg[0])
//			$(`
//				<button class="btnLeft btn1" type="button">${"<"}</button>
//				<div class="bannerDiv"><img src="${data1[0].bannerImg[0]}"/></div>	
//				<div class="bannerDiv"><img src="${data1[0].bannerImg[1]}"/></div>
//				<div class="bannerDiv"><img src="${data1[0].bannerImg[2]}"/></div>
//				<div class="bannerDiv"><img src="${data1[0].bannerImg[3]}"/></div>
//				<div class="bannerDiv"><img src="${data1[0].bannerImg[4]}"/></div>
//				<button class="btnRight btn1" type="button">${">"}</button>
//			`).appendTo($(".banner").eq(i))
//		});
//	}
//});
//
//var btn1 = document.getElementsByClassName("btn1")
//for (let x =0;x < btn1.length;x ++) {
//	btn1[x].onclick = function(){
//		console.log(123)
//	}
//}

$.ajax({
	type:"get",
	url:"json/m-indexCates3.json",
	async:true,
	success:function(data){
		$.each(data, function(i) {
			$(`
				<li class="item">
					<div class="m-product showScene">
						<div class="hd">
							<a style="color:#333;" class="a_hover">
								<div style="width:100%;height:100%;" class="img_hover1">
									<img src="${data[i].list1[0].img}"/>
								</div>
								<div style="width:100%;height:100%;" class="img_hover2">
									<img src="${data[i].list1[0].imghover}">
								</div>
								<img src="${data[i].list1[0].Topimg}" class="promoLogo" style="width: 48px;height:48px;"/>
								<div class="promBanner promBanner-11" style="background:url(${data[i].list1[0].background1});display:${data[i].list1[0].background1display};">
									<div class="promTitle" style="background:url(${data[i].list1[0].background1});display:${data[i].list1[0].background1display};">
										<div class="title"><span style="display:${data[i].list1[0].titledisplay};">${data[i].list1[0].title}</span></div>
										<div class="subTitle" style="vertical-align:middle;"><span style="display:${data[i].list1[0].subTitledisplay};">${data[i].list1[0].subTitle}</span></div>
									</div>
									<div class="promContent" style="display:${data[i].list1[0].promContentdisplay};">${data[i].list1[0].promContent}</div>
								</div>
							</a>
						</div>
						<div class="bd">
							<div class="prdtTags">
								<span class="m-itemTag " style="display:${data[i].list1[0].titledisplay};">${data[i].list1[0].title}</span>
							</div>
							<h4 class="name">${data[i].list1[0].name}</h4>
								<p class="price">
									<span class="retailPrice">${data[i].list1[0].retailPrice}</span>
									<span class="counterPrice" style="display:${data[i].list1[0].counterPricedisplay};">${data[i].list1[0].counterPrice}</span>
								</p>
						</div>
					</div>
				</li>
				<li class="item">
					<div class="m-product showScene">
						<div class="hd">
							<a style="color:#333;" class="a_hover">
								<div style="width:100%;height:100%;" class="img_hover1">
									<img src="${data[i].list2[0].img}"/>
								</div>
								<div style="width:100%;height:100%;" class="img_hover2">
									<img src="${data[i].list2[0].imghover}">
								</div>
								<img src="${data[i].list2[0].Topimg}" class="promoLogo" style="width: 48px;height:48px;"/>
								<div class="promBanner promBanner-11" style="background:url(${data[i].list2[0].background1});display:${data[i].list2[0].background1display};">
									<div class="promTitle" style="background:url(${data[i].list2[0].background1});display:${data[i].list2[0].background1display};">
										<div class="title"><span style="display:${data[i].list2[0].titledisplay};">${data[i].list2[0].title}</span></div>
										<div class="subTitle" style="vertical-align:middle;"><span style="display:${data[i].list2[0].subTitledisplay};">${data[i].list2[0].subTitle}</span></div>
									</div>
									<div class="promContent" style="display:${data[i].list2[0].promContentdisplay};">${data[i].list2[0].promContent}</div>
								</div>
							</a>
						</div>
						<div class="bd">
							<div class="prdtTags">
								<span class="m-itemTag " style="display:${data[i].list2[0].titledisplay};">${data[i].list2[0].title}</span>
							</div>
							<h4 class="name">${data[i].list2[0].name}</h4>
								<p class="price">
									<span class="retailPrice">${data[i].list2[0].retailPrice}</span>
									<span class="counterPrice" style="display:${data[i].list2[0].counterPricedisplay};">${data[i].list2[0].counterPrice}</span>
								</p>
						</div>
					</div>
				</li>
				<li class="item">
					<div class="m-product showScene">
						<div class="hd">
							<a style="color:#333;" class="a_hover">
								<div style="width:100%;height:100%;" class="img_hover1">
									<img src="${data[i].list3[0].img}"/>
								</div>
								<div style="width:100%;height:100%;" class="img_hover2">
									<img src="${data[i].list3[0].imghover}">
								</div>
								<img src="${data[i].list3[0].Topimg}" class="promoLogo" style="width: 48px;height:48px;"/>
								<div class="promBanner promBanner-11" style="background:url(${data[i].list3[0].background1});display:${data[i].list3[0].background1display};">
									<div class="promTitle" style="background:url(${data[i].list3[0].background1});display:${data[i].list3[0].background1display};">
										<div class="title"><span style="display:${data[i].list3[0].titledisplay};">${data[i].list3[0].title}</span></div>
										<div class="subTitle" style="vertical-align:middle;"><span style="display:${data[i].list3[0].subTitledisplay};">${data[i].list3[0].subTitle}</span></div>
									</div>
									<div class="promContent" style="display:${data[i].list3[0].promContentdisplay};">${data[i].list3[0].promContent}</div>
								</div>
							</a>
						</div>
						<div class="bd">
							<div class="prdtTags">
								<span class="m-itemTag " style="display:${data[i].list3[0].titledisplay};">${data[i].list3[0].title}</span>
							</div>
							<h4 class="name">${data[i].list3[0].name}</h4>
								<p class="price">
									<span class="retailPrice">${data[i].list3[0].retailPrice}</span>
									<span class="counterPrice" style="display:${data[i].list3[0].counterPricedisplay};">${data[i].list3[0].counterPrice}</span>
								</p>
						</div>
					</div>
				</li>
				<li class="item">
					<div class="m-product showScene">
						<div class="hd">
							<a style="color:#333;" class="a_hover">
								<div style="width:100%;height:100%;" class="img_hover1">
									<img src="${data[i].list4[0].img}"/>
								</div>
								<div style="width:100%;height:100%;" class="img_hover2">
									<img src="${data[i].list4[0].imghover}">
								</div>
								<img src="${data[i].list4[0].Topimg}" class="promoLogo" style="width: 48px;height:48px;"/>
								<div class="promBanner promBanner-11" style="background:url(${data[i].list4[0].background1});display:${data[i].list4[0].background1display};">
									<div class="promTitle" style="background:url(${data[i].list4[0].background1});display:${data[i].list4[0].background1display};">
										<div class="title"><span style="display:${data[i].list4[0].titledisplay};">${data[i].list4[0].title}</span></div>
										<div class="subTitle" style="vertical-align:middle;"><span style="display:${data[i].list4[0].subTitledisplay};">${data[i].list4[0].subTitle}</span></div>
									</div>
									<div class="promContent" style="display:${data[i].list4[0].promContentdisplay};">${data[i].list4[0].promContent}</div>
								</div>
							</a>
						</div>
						<div class="bd">
							<div class="prdtTags">
								<span class="m-itemTag " style="display:${data[i].list4[0].titledisplay};">${data[i].list4[0].title}</span>
							</div>
							<h4 class="name">${data[i].list4[0].name}</h4>
								<p class="price">
									<span class="retailPrice">${data[i].list4[0].retailPrice}</span>
									<span class="counterPrice" style="display:${data[i].list4[0].counterPricedisplay};">${data[i].list4[0].counterPrice}</span>
								</p>
						</div>
					</div>
				</li>
			`).appendTo($(".itemList").eq(i))
		});
	}
});







    var swiper = new Swiper('.swiper-container1', {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,
      loop:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });


























