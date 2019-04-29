let headerTemplate = '<div id="header" class="header">\
	<div class="HBBox"><i class="HB fas fa-bars"></i></div>\
		<div class="mobileMenu">\
			<ul class="mobileMenuBox">\
				<a href="index.html"><li class="mobileMenuList">HOME</li></a>\
				<a href="AUTOBIOGRAPHY.html"><li class="mobileMenuList">AUTOBIOGRAPHY</li></a>\
				<a href="PORTFOLIO.html"><li class="mobileMenuList">PORTFOLIO</li></a>\
			</ul>\
		</div>\
		<div class="topPicture"></div>\
		<div class="mainHeader">\
			<div class="logo">\
				<a href="index.html"><h1>HSU YA WEN</h1></a>\
			</div>\
			<div class="menuBox">\
				<div class="menu"><a href="index.html">HOME</a></div>\
				<div class="menu"><a href="AUTOBIOGRAPHY.html">AUTOBIOGRAPHY</a></div>\
				<div class="menu"><a href="PORTFOLIO.html">PORTFOLIO</a></div>\
			</div>\
		</div>\
	</div >';

Vue.component('comp-header', {
	template: headerTemplate,

});
