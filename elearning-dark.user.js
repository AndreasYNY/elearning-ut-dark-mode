// ==UserScript==
// @name        Universitas Terbuka Elearning Website Dark Mode
// @description Dark Mode untuk website Elearning universitas terbuka
// @match       *://elearning.ut.ac.id/*
// @author      AndreasYNY
// @grant       none
// @version     0.1
// @license		Apache License 2.0
// @namespace   https://github.com/AndreasYNY/elearning-ut-dark-mode
// ==/UserScript==

// https://greasyfork.org/en/scripts/386303-modern-design-and-dark-theme-for-soundcloud
function addCss(cssString) {
  var head = document.getElementsByTagName("head")[0];
  var newCss = document.createElement("style");
  newCss.type = "text/css";
  newCss.innerHTML = cssString;
  head.appendChild(newCss);
}

addCss(`
:root{
--blue: #89b4fa !important;
--indigo: #74c7ec !important;
--purple: #cba6f7 !important;
--pink: #eba0ac !important;
--red: #f38ba8 !important;
--orange: #fab387 !important;
--yellow: #f9e2af !important;
--green: #a6e3a1 !important;
--teal: #94e2d5 !important;
--cyan: #89dceb !important;
--white: #cdd6f4 !important;
--gray: #7f849c !important;
--gray-dark: #585b70 !important;
--primary: #89b4fa !important;
--secondary: #a6adc8 !important;
--success: #a6e3a1 !important;
--info: #89dceb !important;
--warning: #f9e2af !important;
--danger: #f38ba8 !important;
--light: #cdd6f4 !important;
--dark: #11111b !important;
}
`);

addCss(`

body{
	color: #cdd6f4 !important;
}
.breadcrumb a{
	color: #cdd6f4 !important;
}
.main-menu li > a{
	background-color: #1e1e2e !important;
	color: #cdd6f4 !important;
}
#site-menu{
	background-color: #313244 !important;
}

#page-header{
	background-color: #313244 !important;
}

#main-header{
    background-color: #1e1e2e !important;
}
#subheader{
    background-color: #1e1e2e !important;
	background-image: none !important;
}
.header-tools .theme-plugins .popover-region .nav-link{
	background-color: #585b70 !important;
}

#main-content, #region-main{
	background-color:#313244 !important;
}

.card-body{
	background-color:#313244 !important;
	color: #cdd6f4 !important;
}
.list-group > .list-group-item{
	background-color:#313244 !important;
	color: #cdd6f4 !important;
}
div.p-1:nth-child(2){
	background-color:#313244 !important;
}

.bg-white{
	background-color:#313244 !important;
	color: #cdd6f4 !important;
}
.bg-light{
	background-color:#313244 !important;
	color: #cdd6f4 !important;
}

.message{
	background-color:#313244 !important;
	color: #cdd6f4 !important;
}
.list-group{
	background-color:#313244 !important;
	color: #cdd6f4 !important;
}
.card-text{
	background-color:#313244 !important;
	color: #cdd6f4 !important;
}
.card-header{
	background-color:#313244 !important;
	color: #cdd6f4 !important;
	border: solid 1px #fff;
}

.card-title{
	color: #cdd6f4 !important;
}

.card-footer{
	background-color:#313244 !important;
	color: #cdd6f4 !important;
}

.dropdown-item{
	background-color: #313244 !important;
	color: #cdd6f4 !important;
}

.dropdown-menu{
	background-color: #313244 !important;
	color: #cdd6f4 !important;
}

a{
	color: #cdd6f4 !important;
}

#footer , #bottom-info{
	background-color:#313244 !important;
	color: #cdd6f4 !important;
}

.section-navigation{
	background-color:#313244 !important;
}

#bottom-info > .bar{
	background-color:#313244 !important;
	color: #cdd6f4 !important;
}

`);

addCss(`
.panel-link{
	background-color: #45475a !important;
	color: #cdd6f4 !important;
}

.block_completion_progress .progressBarCell{
	border-left: solid 1px #45475a !important;
	border-top: solid 1px #45475a !important;
}

.activity{
	background-color: #585b70 !important;
	border-radius: 5px;
	margin: 50px;
}
.contentafterlink{
	color: #cdd6f4 !important;
}

.nav{
	background-color: #45475a !important;
	color: #cdd6f4 !important;
	border-radius: 5px;
}
.activity-navigation{
	background-color: #45475a !important;
	color: #cdd6f4 !important;
	border-radius: 5px;
}


.nav > .nav-item .active{
	background-color: #585b70 !important;
	color: #fff !important;
}

.moodle-tabs{
	border-radius: 5px;
}

#jump-to-activity{
	background-color: #6c7086 !important;
	color: #cdd6f4 !important;
	border: nonde !important;
}
.singleselect{
	background-color: #6c7086 !important;
	color: #cdd6f4 !important;
	border: nonde !important;
}

.summary{
	background-color: #585b70 !important;
	color: #181825 !important;
	border-radius: 5px;
}

.sliding-panel{
	background-color:#313244 !important;
}

.forumpost{
	background-color: #585b70 !important;
	color: #181825 !important;
	border-radius: 5px;
}

.post-content-container{
	background-color: #585b70 !important;
	color: #cdd6f4 !important;
	border: none !important;
}

.message-app{
	background-color: #313244 !important;
	border-left: solid 1px #fff;
}
.drawer-top{
	background-color: #313244 !important;
	border-left: solid 1px #fff;
}

`);

addCss(`
h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6{
	color: #cdd6f4 !important;
}

.main-logo > a:nth-child(1) > img:nth-child(1){
	background-color: #cdd6f4;
	padding: 10px;
	border-radius: 5px;
}

`);
