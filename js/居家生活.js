var swiper = new Swiper('.swiper-container', {
	spaceBetween: 30,
	effect: 'fade',
	loop: "true",
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
window.onscroll = function() {
	var scroll = document.documentElement.scrollTop || document.body.scrollTop;
	var fiexd = document.getElementById("fiexd");
	var logo1 = document.getElementById("logo1");
	var logo2 = document.getElementById("logo2");
	var ipt = document.getElementById("ipt");
	var ipt1 = document.getElementById("ipt1");
	var tabNav = document.getElementsByClassName("yx-cp-m-tabNav ")[0];
	var item1 = document.getElementById("item1");
	var item2 = document.getElementById("item2");
	if (scroll < 200) {
		fiexd.classList.remove("yx-cp-m-funcTab-fixed");
		logo1.style.display = "block"
		logo2.style.display = "none"
		ipt.style.display = "block"
		ipt1.style.display = "block"
		tabNav.style.bottom = "11px"
		item1.style.display = "block"
		item2.style.display = "block"
	} else {
		fiexd.classList.add("yx-cp-m-funcTab-fixed");
		logo1.style.display = "none"
		logo2.style.display = "block"
		ipt.style.display = "none"
		ipt1.style.display = "none"
		tabNav.style.bottom = "18px"
		item1.style.display = "none"
		item2.style.display = "none"
	}
}

$.ajax({
	type: "get",
	url: "json/居家生活.json",
	async: true,
	success: function(data) {
		$.each(data, function(i) {
			$(`
				<li class="item">
					<div class="m-product showScene">
						<div class="hd">
							<a style="color:#333;" class="a_hover">
								<div style="width:100%;height:100%;" class="img_hover1">
									<img src="${data[i].img}" style="width:245px;"/>
								</div>
								<div style="width:100%;height:100%;" class="img_hover2">
									<img src="${data[i].imghover}" style="width:245px;"/>
								</div>
								<img src="${data[i].Topimg}" class="promoLogo" style="width: 48px;height:48px;"/>
								<div class="promBanner promBanner-11" style="background:url(${data[i].background1});display:${data[i].background1display};">
									<div class="promTitle" style="background:url(${data[i].background1});display:${data[i].background1display};">
										<div class="title"><span style="display:${data[i].titledisplay};">${data[i].title}</span></div>
										<div class="subTitle" style="vertical-align:middle;"><span style="display:${data[i].subTitledisplay};">${data[i].subTitle}</span></div>
									</div>
									<div class="promContent" style="display:${data[i].promContentdisplay};">${data[i].promContent}</div>
								</div>
							</a>
						</div>
						<div class="bd">
							<div class="prdtTags">
								<span class="m-itemTag " style="display:${data[i].titledisplay};">${data[i].title}</span>
							</div>
							<h4 class="name">${data[i].name}</h4>
								<p class="price">
									<span class="retailPrice">${data[i].retailPrice}</span>
									<span class="counterPrice" style="display:${data[i].counterPricedisplay};">${data[i].counterPrice}</span>
								</p>
								<div>
									<hr>
									<p class="desc">${data[i].desc}</p>
								</div>
						</div>
					</div>
				</li>
				`).appendTo($(".m-itemList"))
		});
	}
});