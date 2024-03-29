// ==UserScript==
// @name        Universitas Terbuka Elearning Website Dark Mode
// @description Dark Mode untuk website Elearning universitas terbuka
// @match       *://elearning.ut.ac.id/*
// @author      AndreasYNY
// @grant       none
// @version     0.2
// @namespace   https://github.com/AndreasYNY/elearning-ut-dark-mode
// @updateURL	https://raw.githubusercontent.com/AndreasYNY/elearning-ut-dark-mode/main/elearning-dark.user.js
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

#main-header, #subheader, .main-menu li > a{
	background-color: #1e1e2e !important;
	color: #cdd6f4 !important;
	background-image: none !important;
}

.header-tools .theme-plugins .popover-region .nav-link{
	background-color: #585b70 !important;
}

.forumpost, body, #login, .fcontainer, .popover-region-footer-container, .popover-region-header-container, .popover-region-content-container,.dropdown-menu, .dropdown-item, #page-header, #site-menu, .section-inner, #main-content, #region-main, .sliding-panel, #bottom-info > .bar, .section-navigation, #footer , #bottom-info, .card-footer, .box-contacts, .boxlist, .course-panel-content, .student-panel-b, student-panel-a, .card-header, .card-text, .list-group, .message, .bg-light, .bg-white, div.p-1:nth-child(2), .list-group > .list-group-item, .card-body{
	background-color: #313244 !important;
	color: #cdd6f4 !important;
}

.fcontainervg  4{
	border: none !important;
}

.card, .card-header{
	background-color:#313244 !important;
	color: #cdd6f4 !important;
	border: solid 1px #fff;
}

.modal-header{
	background-color:#181825 !important;
	color: #cdd6f4 !important;
	background-image: none !important;
}

.block_completion_progress .progressBarCell{
	border-left: solid 1px #45475a !important;
	border-top: solid 1px #45475a !important;
}

.activity-navigation, .nav, .panel-link{
	background-color: #45475a !important;
	color: #cdd6f4 !important;
	border-radius: 5px;
}

.btn-microsoft{
	border: none !important;
	background: transparent !important;
}

.btn-microsoft, p{
	color: #cdd6f4 !important;
	background: transparent !important;
}

.moodle-tabs{
	border-radius: 5px;
}

.singleselect, #jump-to-activity{
	background-color: #6c7086 !important;
	color: #cdd6f4 !important;
	border: none !important;
}

.activity, .nav > .nav-item .active, .forumpost, .post-content-container, .summary, #main-content .theme-table-wrap.wider, #main-content .theme-table-wrap{
	background-color: inherit !important;
	color: #cdd6f4 !important;
	border-radius: 5px;
}

.drawer-top, .message-app{
	background-color: #313244 !important;
	border-left: solid 1px #fff;
}

h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6, a, .card-title, .contentafterlink, body, .breadcrumb, .btn .icon{
	color: #cdd6f4 !important;
}

.main-logo > a:nth-child(1) > img:nth-child(1){
	background-color: #cdd6f4;
	padding: 10px;
	border-radius: 5px;
}

#main-content .theme-table-wrap.wider table, #main-content .theme-table-wrap table{
	background-color: #313244 !important;
	color: #cdd6f4 !important;
	border: none;
	border-radius: 5px;
}

td{
	padding: 5px;
}

.btn.btn-icon:hover, .btn.btn-icon:focus{
	background-color: #34434d !important;
}
`);
