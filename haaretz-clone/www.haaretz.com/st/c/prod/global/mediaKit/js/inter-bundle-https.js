/**
 * Created by guyg on 28/06/2017.
 */
/**
 * Created by elijahu.malka on 24/09/2015.
 */

/*--------------------------------------------------------------*/
//  Video embed - YouTube APIReady Functions
/*--------------------------------------------------------------*/

var playerFlag = false,
		playersCount = 0,
		shareCounter = 1,
		currentPlayer = {},
		players = players || {},
		lastST = 0,
		dir = '',
		videoReady = null;

function onYouTubeIframeAPIReady() {
	console.log('youtube API Ready!!')
	$('.inter-video').each(function(){
		
		var tempSrc = $(this).attr('src');
		tempSrc = /[^/]*$/.exec(tempSrc)[0];
		var tempLoop = $(this).attr('vloop');
		tempLoop = /[^/]*$/.exec(tempLoop)[0];
		var tempStart = $(this).attr('startat');
		tempStart = /[^/]*$/.exec(tempStart)[0];
		var tempEnd = $(this).attr('endat');
		tempEnd = /[^/]*$/.exec(tempEnd)[0];
		var tempauto = $(this).attr('vautoplay');
		tempauto = /[^/]*$/.exec(tempauto)[0];
		
		var chkVars = function(autop,src,loop,start,end){
			var resObj = {
				autoplay: '0',
				loop: '0',
				playlist: '',
				start: parseInt(start),
				end: parseInt(end),
				
			};
			if (autop == 'true') {
				resObj.autoplay = '1'
			} else {
				resObj.autoplay = '0'
			}
			if (loop == 'true') {
				resObj.loop = '1';
				resObj.playlist = src
			} else {
				resObj.loop = '0';
				resObj.playlist = '';
			}
			return resObj;
		};
		
		result = chkVars(tempauto,tempSrc,tempLoop,tempStart,tempEnd);
		
		currentID = $(this)[0].id;
		players[currentID] = new YT.Player(currentID, {
			videoId: tempSrc,
			playerVars: {
				//autoplay: result.autoplay,
				start: result.start,
				end: result.end,
				loop: result.loop,
				playlist: result.playlist,
				showinfo: '0',
				controls: '0',
				enablejsapi: '1',
				modestbranding: '1',
				playsinline: '1',
				autohide: '1'
			},
			events: {
				"onReady": function(){
					playersCount++;
				}
			}
		});
	});
	
	playersL = Object.keys(players).length;
	if (playersCount == playersL) {
		playerFlag = true;
	}
	if (videoReady && typeof(videoReady) == "function") {
		videoReady();
	}
	
}

/*--------------------------------------------------------------*/
//  QueryString
/*--------------------------------------------------------------*/

qs = function () {
	// This function is anonymous, is executed immediately and
	// the return value is assigned to QueryString!
	var query_string = {};
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		// If first entry with this name
		if (typeof query_string[pair[0]] === "undefined") {
			query_string[pair[0]] = pair[1];
			// If second entry with this name
		} else if (typeof query_string[pair[0]] === "string") {
			var arr = [query_string[pair[0]], pair[1]];
			query_string[pair[0]] = arr;
			// If third or later entry with this name
		} else {
			query_string[pair[0]].push(pair[1]);
		}
	}
	return query_string;
}();

/*--------------------------------------------------------------*/
//  Query checks:
//  * top bar
/*--------------------------------------------------------------*/

if (qs.hasOwnProperty("",undefined)) {
	qs = {top:true}
} else if (qs.top == 'true') {
	qs = {top:true}
} else if (qs.top == 'false') {
	qs = {top:false}
} else {
	qs = {top:true}
}


/*--------------------------------------------------------------*/
//  Main Engine
/*--------------------------------------------------------------*/

function interEngine(defaults,settings,switches) {
	var that = this;
	this.data = {};
	this.defaults = {
		loc: "",
		staticUrl: "//" + document.domain + "/st/c/static/",
		bundleUrl: "//" + document.domain + "/st/c/work/bundle/3/0/",
		dataUrl: "//" + document.domain + "/st/inter/DB/projects",
		resoUrl: "//" + document.domain + "/st/c/static/resources/",
		domains: [
			{alias:"htzheb",name:"www.haaretz.co.il",appID:"110687712359084",trkrJs:"htz_co_il.js",fontsFile:"fonts.css",spinimg:"htz-spinner.svg",logoimg:"Haaretz_hebrew.png",cssload:false,trackersload:false,fontsload:false,styleheader:"_heb"},
			{alias:"htzhebpre",name:"pre.haaretz.co.il",appID:"110687712359084",trkrJs:"htz_co_il.js",fontsFile:"fonts.css",spinimg:"htz-spinner.svg",logoimg:"Haaretz_hebrew.png",cssload:false,trackersload:false,fontsload:false,styleheader:"_heb"},
			{alias:"htzhebpolo",name:"172.21.1.80",appID:"110687712359084",trkrJs:"htz_co_il.js",fontsFile:"fonts.css",spinimg:"htz-spinner.svg",logoimg:"Haaretz_hebrew.png",cssload:false,trackersload:false,fontsload:false,styleheader:"_heb"},
			{alias:"htzeng",name:"www.haaretz.com",appID:"287530407927859",trkrJs:"htz_com.js",fontsFile:"fontsCom.css",spinimg:"htz-spinner.svg",logoimg:"htzeng_new_logo_1.png",cssload:false,trackersload:false,fontsload:false,styleheader:"_eng"},
			{alias:"htzengpre",name:"pre.haaretz.com",appID:"287530407927859",trkrJs:"htz_com.js",fontsFile:"fontsCom.css",spinimg:"htz-spinner.svg",logoimg:"htzeng_new_logo_1.png",cssload:false,trackersload:false,fontsload:false,styleheader:"_eng"},
			{alias:"htzengpolo",name:"172.21.1.140",appID:"287530407927859",trkrJs:"htz_com.js",fontsFile:"fontsCom.css",spinimg:"htz-spinner.svg",logoimg:"htzeng_new_logo_1.png",cssload:false,trackersload:false,fontsload:false,styleheader:"_eng"},
			{alias:"tm",name:"www.themarker.com",appID:"52929925921",trkrJs:"tm.js",fontsFile:"fontsTm-https.css",spinimg:"tm-spinner.svg",logoimg:"themarker.png",cssload:false,trackersload:false,fontsload:false,styleheader:"_tm"},
			{alias:"tmpre",name:"tmtest.themarker.com",appID:"52929925921",trkrJs:"tm.js",fontsFile:"fontsTm-https.css",spinimg:"tm-spinner.svg",logoimg:"themarker.png",cssload:false,trackersload:false,fontsload:false,styleheader:"_tm"}
		
		]
	};
	$.extend(true,that.defaults,defaults);
	this.settings = {
		dataPath: that.defaults.dataUrl + "/" + that.defaults.loc + "/",
		dataFiles: [
		],
		settingsPath: that.defaults.dataUrl + "/" + that.defaults.loc + "/settings.xlsx",
		trackerFolder: that.defaults.resoUrl + "js/trackers/",
		fontsFolder: that.defaults.resoUrl + "css/",
		stylesPath: that.defaults.bundleUrl + "stylesheets/styles",
		breakPoints: [600, 768, 1024, 1280],
		jsCommons: [
		]
	};
	$.extend(true,that.settings,settings);
	this.switches = {
		external: true,
		videoTag: true,
		isLoad: {
			trackers: false,
			fonts: false,
			css: false
		},
		loadXls: true,
		trkr: true,
		topbar: qs.top
	};
	$.extend(true,that.switches,switches);
	this.vars = {
		current: {
			domain: ""
		},
		checkClass: ".w-check",
		isMobile : {
			Android: function() {
				return navigator.userAgent.match(/Android/i);
			},
			BlackBerry: function() {
				return navigator.userAgent.match(/BlackBerry/i);
			},
			iOS: function() {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i);
			},
			iPhone: function() {
				return navigator.userAgent.match(/iPhone/i);
			},
			iPad: function() {
				return navigator.userAgent.match(/iPad/i);
			},
			Opera: function() {
				return navigator.userAgent.match(/Opera Mini/i);
			},
			Windows: function() {
				return navigator.userAgent.match(/IEMobile/i);
			},
			any: function() {
				return (this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows());
			}
		}
	};
	this.defFunc = {
		dataReady: function(){
			that.func.wCheck();
			
			mobChk = that.vars.isMobile.any();
			if (mobChk == null) {
				console.log('checking once');
				console.log($('.inter-video'))
				that.func.inView.vid('down');
			}
			
			$(window).smartresize(function () {
				that.func.wCheck();
				that.check.dfp();
			});
			$(window).scroll(function () {
				var st = $(this).scrollTop();
				if (st > lastST){
					dir = 'up'
				} else {
					dir = 'down'
				}
				lastST = st;
				//console.log(dir);
				mobChk = that.vars.isMobile.any();
				if (mobChk == null) {
					that.func.inView.vid(dir);
				}
			});
			if (that.switches.videoTag) {
				that.defFunc.video.init();
			}
			this.register.shareEvents();
			//that.build.dfp();
			
			
			(function () {
				$('body').on('click','a.scrollease',function (event) {
					var $anchor = $(this);
					$('html, body').stop().animate({
						scrollTop: $($anchor.attr('href')).offset().top
					}, 500, 'easeInOutQuint');
					event.preventDefault();
				});
			})();
			(function () {
				$('body').on('click','a.scrollease.off50',function (event) {
					var $anchor = $(this);
					$('html, body').stop().animate({
						scrollTop: $($anchor.attr('href')).offset().top -50
					}, 500, 'easeInOutQuint');
					event.preventDefault();
				});
			})();
			
			
			
			// fire domReady event similar to document ready.
			if (that.func.projReady && typeof(that.func.projReady) == "function") {
				that.func.projReady();
			}
		},
		register: {
			shareEvents: function() {
				$(document).on('click','.inter-f, .inter-t , .inter-m , .inter-w',function(e){
					$currentF = $(e.target).parent();
					tempId = $(e.target)[0].className;
					sType = $(e.target).attr("s-type");
					if (sType == 'main') {
						header = that.data['settings'].share[0].content;
						cap = that.data['settings'].share[2].content;
						desc = that.data['settings'].share[1].content;
						img = that.data['settings'].share[3].content;
						linkto = that.data['settings'].share[4].content;
					} else {
						header = $currentF.attr("s-header");
						cap = $currentF.attr("s-text");
						desc = $currentF.attr("s-desc");
						img = $currentF.attr("s-img");
						linkto = $currentF.attr("s-link");
						if (linkto == undefined) {
							linkto = data.share[4].content;
						}
					}
					if (tempId.indexOf("inter-f") > -1) {
						that.defFunc.share.f(header, desc, cap, img, linkto)
					} else if (tempId.indexOf("inter-t") > -1) {
						that.defFunc.share.t(linkto,header)
					} else if (tempId.indexOf("inter-m") > -1) {
						that.defFunc.share.m(header,desc + " | " + linkto)
					} else if (tempId.indexOf("inter-w") > -1) {
						that.defFunc.share.w(header + " | " +linkto);
					}
				})
			}
		},
		facebook: {
			init: function (appid) {
				window.fbAsyncInit = function () {
					FB.init({
						appId: appid,
						status: true,
						xfbml: true
					});
				};
				
				(function (d, s, id) {
					var js, fjs = d.getElementsByTagName(s)[0];
					if (d.getElementById(id)) {
						return;
					}
					js = d.createElement(s);
					js.id = id;
					js.src = "//connect.facebook.net/en_US/all.js";
					fjs.parentNode.insertBefore(js, fjs);
				}(document, 'script', 'facebook-jssdk'));
			}
		},
		/*--------------------------------------------------------------*/
		// Load Js/Css with callback
		/*--------------------------------------------------------------*/
		load: function(type,url,callback) {
			
		
			var head = document.getElementsByTagName('head')[0];
			var fileref;
			if (type == 'js') {
				fileref = document.createElement('script');
				fileref.type = 'text/javascript';
				fileref.src = url;
			} else if (type =='css') {
				fileref = document.createElement("link");
				fileref.setAttribute("rel", "stylesheet");
				fileref.setAttribute("type", "text/css");
				fileref.setAttribute("href", url);
			}
			fileref.onreadystatechange = function () {
				if (this.readyState == 'complete' || this.readyState == 'loaded') {
					callback
				}
			};
			fileref.onload = callback;
			head.appendChild(fileref);
		
		},
		/*--------------------------------------------------------------*/
		// Share Functions
		/*--------------------------------------------------------------*/
		share: {
			/*--------------------------------------------------------------*/
			// share to facebook via social login
			/*--------------------------------------------------------------*/
			f: function(header,cap,desc,pic,link) {
				FB.ui(
						{
							method: 'feed',
							name: header,
							link: link,
							picture: pic,
							caption: cap,
							description: desc
						},
						function (response) {
							if (response && response.post_id) {
							} else {
							}
						}
				);
			},
			/*--------------------------------------------------------------*/
			// share to twitter via url
			/*--------------------------------------------------------------*/
			t: function(link,text) {
				window.open("//twitter.com/intent/tweet?url="+link+"&text="+text, target = "_blank");
			},
			/*--------------------------------------------------------------*/
			// share to email via default client
			/*--------------------------------------------------------------*/
			m: function(subject,body_message) {
				window.location.href = 'mailto:' + "" + '?subject=' + subject + '&body=' + body_message;
				//win = window.open(mailto_link, 'emailWindow');
			},
			/*--------------------------------------------------------------*/
			// share to whatsapp
			/*--------------------------------------------------------------*/
			w: function(header){
				window.open("whatsapp://send?text="+header)
			},
			/*--------------------------------------------------------------*/
			// Counts Shares from a url returns value
			/*--------------------------------------------------------------*/
			fCount: function(url) {
				$.getJSON("//graph.facebook.com/?id=" + url, function (data) {
					var shares = data.shares;
					return shares;
				})
			},
			/*--------------------------------------------------------------*/
			// Counts tweets and returns a value
			/*--------------------------------------------------------------*/
			tCount: function(url) {
				var tweets;
				$.getJSON('//urls.api.twitter.com/1/urls/count.json?url=' + url + '&callback=?', function(data){
					tweets = data.count;
					return tweets;
				});
			}
		},
		video: {
			init: function () {
				var tag = document.createElement('script');
				tag.src = "//www.youtube.com/player_api";
				var firstScriptTag = document.getElementsByTagName('script')[0];
				firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
			}
		}
	};
	this.func = {
		projReady: null,
		loadXls: function() {
			if (that.switches.loadXls) {
				var tempData = {}, chkLoadXl = 0 ;
				if (that.settings.dataFiles.length !== 0) {
					that.settings.dataFiles.forEach(function (DB) {
						var tempUrl = that.settings.dataPath + DB + '.xlsx';
						xl(tempUrl, function (tempData) {
							that.data[DB] = tempData;
							//console.log("file: " + DB + " : loaded!")
							chkLoadXl++;
							if (chkLoadXl == that.settings.dataFiles.length) {
								//console.log('all external xl files loaded!')
								that.defFunc.dataReady();
							}
						})
					})
				} else { that.defFunc.dataReady();}
			} else {
				that.defFunc.dataReady();
			}
		},
		genRnD: function() {
			
		},
		getUNIXdate: function() {
			return Date.now();
		},
		wCheck: function() {
			that.check.width($('.inter-mc').width());
		},
		inView: {
			vid: function() {
				$('.inter-video').each(function(){
					//console.log("dir: " + dir);
					//console.log(players[$(this).attr('id')]);
					var currentIDX = $(this).attr('id'),
							docViewTop = $(window).scrollTop(),
							docViewBottom = docViewTop + $(window).height(),
							elemTop = $(this).offset().top,
							elemBottom = elemTop + $(this).height(),
							currentPlayer = players[currentIDX],
							prePlay = (currentPlayer == undefined) ? undefined : $(currentPlayer.f).attr("prePlay"),
							viewPlay  = (currentPlayer == undefined) ? undefined : $(currentPlayer.f).attr("viewPlay");
					console.log('-----------------------------------------------');
					console.log('id :' + currentIDX);
					console.log('preplay: '+ prePlay);
					console.log('viewplay: '+ viewPlay);
					
					if (prePlay) {
						currentPlayer.mute();
						if (elemTop == 0) {
							currentPlayer.playVideo();
						}
						if ((elemTop > docViewBottom) && (elemTop > docViewTop)) {
							currentPlayer.pauseVideo();
						}
						if (((elemTop - docViewBottom) < 1000) && (elemTop > docViewTop) && (dir == 'up')) {
							currentPlayer.playVideo();
						}
						if ((elemTop < docViewBottom) && (elemTop > docViewTop)) {
							currentPlayer.playVideo();
						}
						if ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)) {
							currentPlayer.playVideo();
						}
						if ((elemBottom < docViewTop) && (elemBottom < docViewBottom)) {
							currentPlayer.pauseVideo();
						}
						if ((elemBottom > docViewTop) && (elemBottom < docViewBottom)) {
							currentPlayer.playVideo();
						}
					} else if (viewPlay) {
						if ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)) {
							currentPlayer.playVideo();
						} else {
							currentPlayer.pauseVideo();
						}
					}
					
					
					//if ((elemBottom  <= docViewBottom) && (elemTop >= docViewTop)) {
					//    //console.log(currentIDX + " is in view")
					//    if ((isPlay) == "true") {
					//        currentPlayer.playVideo();
					//        console.log("inview: " + currentIDX);
					//    }
					//} else {
					//    //console.log(currentIDX + " is NOT in view")
					//    //console.log(currentPlayer);
					//    //console.log(isPlay);
					//    if ((isPlay) == "true") {
					//        currentPlayer.pauseVideo();
					//        console.log("outview: " + currentIDX)
					//    }
					//}
					
				});
			}
		}
	}
	this.start = {
		streetView: function(element,lat,lng) {
			var newPlace = new google.maps.LatLng(lat, lng);
			var panoramaOptions = {
				position: newPlace,
				pov: {
					heading: 165,
					pitch: 0
				},
				zoom: 1
			};
			var myPano = new google.maps.StreetViewPanorama(
					document.getElementById(element),
					panoramaOptions);
			myPano.setVisible(true);
		}
	};
	this.build = {
		bar: function (data) {
			var menu_str = '',
					menu_items_str = '',
					bar_str = "";
			if (data.menu !== undefined) {
				for (var i = 0; i < data.menu.length; i++) {
					templink = data.menu[i].linkto;
					if (templink.indexOf("//") > -1) {
						menu_items_str += '<li class="outerlink"><a href="' + templink + '">' + data.menu[i].menuitems + '</a></li>';
					} else {
						menu_items_str += '<li><a class="scrollease" href="#' + templink + '">' + data.menu[i].menuitems + '</a></li>';
					}
				}
				menu_str = '' +
						'<div class="menu_button">' +
						'<button class="inter-menu_button cmn-toggle-switch cmn-toggle-switch__htx">' +
						'<span>ï¿½ï¿½ï¿½ï¿½ï¿½</span>' +
						'</button>' +
						'</div>' +
						'<ul class="menu_list">' +
						menu_items_str +
						'</ul>';
			}
			
			bar_str = '' +
					'<div class="inter-bar w-check">' +
					menu_str +
					'<a href="#" target="_blank">' +
					'<div class="inter-bar_logo">' +
					'<img src="#"/>' +
					'</div>' +
					'</a>' +
					'<div class="inter-bar_shares">' +
					'<button class="inter-f" s-type="main">f</button>' +
					'<button class="inter-t" s-type="main">t</button>' +
					'</div>' +
					'</div>';
			
			/*--------------------------------------------------------------*/
			//  Inject and append before main container
			/*--------------------------------------------------------------*/
			
			$(".inter-mc").before(bar_str);
			//$(".inter-mc").addClass("bar-margin");
			
			
			/*--------------------------------------------------------------*/
			//  draw current domain logo and apply matching url to href
			/*--------------------------------------------------------------*/
			
			$('.inter-bar > a').attr("href", "//" + document.domain);
			$('.inter-bar_logo > img').attr("src", "//" + document.domain + "/st/c/static/resources/img/logos/" + that.vars.current.domain.logoimg);
			
			// check width
			that.func.wCheck();
			
			//menu open event
			$('.inter-menu_button').on('click', function () {
				$('.menu_list').toggleClass('active');
				$('.menu_list > li').toggleClass('active_menu');
			});
			
			/*--------------------------------------------------------------*/
			// Toggle Handler for Navigation Hamburger
			/*--------------------------------------------------------------*/
			(function () {
				"use strict";
				var toggles = document.querySelectorAll(".cmn-toggle-switch");
				for (var i = toggles.length - 1; i >= 0; i--) {
					var toggle = toggles[i];
					toggleHandler(toggle);
				}
				function toggleHandler(toggle) {
					toggle.addEventListener("click", function (e) {
						e.preventDefault();
						(this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
					});
				}
			})();
		},
		dfp: function() {
			($('.inter-ad').get()).forEach(function(ad){
				//console.log(ad.id);
				googletag.cmd.push(function() {
					googletag.display(ad.id);//'htz-inter-ad-1');
				});
			});
		},
		streetView: function() {
			var tempArr = $('.inter-sv');
			//console.log(tempArr)
			for (var i = 0, len = tempArr.length; i < len; i++) {
				tempid = tempArr[i].id;
				
				templat = $(tempArr[i]).attr('data-lat');
				templng = $(tempArr[i]).attr('data-lan');
				//console.log(tempid + " : " + templat + " : " + templng)
				that.start.streetView(tempid,templat,templng);
			}
		}
	};
	this.check = {
		urlExist: function(url) {
			// var http = new XMLHttpRequest();
			// http.open('HEAD', url, false);
			// http.send();
			// return http.status!=404;
		},
		width: function(ww){
			parseInt(ww);
			if (ww < that.settings.breakPoints[0]) {
				//console.log(that.settings.breakPoints[0]);
				$(that.vars.checkClass)
						.addClass('t')
						.removeClass('s m l x')
			} else if ((ww > that.settings.breakPoints[0]) && (ww < that.settings.breakPoints[1])) {
				//console.log(that.settings.breakPoints[1]);
				$(that.vars.checkClass)
						.addClass('s')
						.removeClass('t m l x')
			} else if ((ww > that.settings.breakPoints[1]) && (ww < that.settings.breakPoints[2])) {
				//console.log(that.settings.breakPoints[2]);
				$(that.vars.checkClass)
						.addClass('m')
						.removeClass('t s l x')
				
			} else if ((ww > that.settings.breakPoints[2]) && (ww < that.settings.breakPoints[3])) {
				//console.log(that.settings.breakPoints[3]);
				$(that.vars.checkClass)
						.addClass('l')
						.removeClass('t s m x')
				
			} else if (ww > that.settings.breakPoints[3]) {
				//console.log(that.settings.breakPoints[3] + '+');
				$(that.vars.checkClass)
						.addClass('x')
						.removeClass('t s m l')
				
			}
		},
		dfp: function() {
			HTZgptAdSlots.forEach(function(adslot){
				//console.log(adslot)
				googletag.pubads().refresh([adslot]);
			})
			TMgptAdSlots.forEach(function(adslot){
				//console.log(adslot)
				googletag.pubads().refresh([adslot]);
			})
		}
	};
	this.init = function() {
		
		/*--------------------------------------------------------------*/
		// Load Domain Specifics
		/*--------------------------------------------------------------*/
		this.defaults.domains.forEach(function(domain){
			if (domain.name == document.domain) {
				that.vars.current.domain = domain;
			}
		});
		
		
		// load common css files from bundle
		//css_url = that.settings.stylesPath + that.vars.current.domain.styleheader + ".css?ver=" + that.func.getUNIXdate();
		var tempjs = 0
		css_url = that.settings.stylesPath + that.vars.current.domain.styleheader + ".css";
		that.defFunc.load('css',css_url,function(){
			//console.log("styles" + that.vars.current.domain.styleheader + ".css");
			that.settings.jsCommons.forEach(function (js) {
				js_url = that.defaults.resoUrl + "js/" + js;
				that.defFunc.load('js', js_url, function () {
					//console.log(js + " : loaded!")
					tempjs++;
					if (tempjs == that.settings.jsCommons.length) {
						//console.log('all js loaded!')
					goOn();
					}
				});
			})
		});
		// load common js files
		function goOn() {
			if (that.switches.external) {
				// init facebook with current appid
				that.defFunc.facebook.init(that.vars.current.domain.appID);
				// load fonts
				fonts_url = that.settings.fontsFolder + that.vars.current.domain.fontsFile;
				that.defFunc.load('css', fonts_url, function () {
					//console.log(that.vars.current.domain.fontsFile);
				});
				// load trackers for current domain
				if (that.switches.trkr) {
					trkr_url = that.settings.trackerFolder + that.vars.current.domain.trkrJs;
					that.defFunc.load('js', trkr_url, function () {
						//console.log(that.vars.current.domain.trkrJs);
					})
				}
			} else {
				that.switches.topbar = false;
			}
			
			if (that.check.urlExist(that.settings.settingsPath)) {
				if (that.switches.topbar) {
					xl(that.settings.settingsPath, function (data) {
						that.build.bar(data);
						that.data['settings'] = data;
						that.func.loadXls();
					});
				} else {
					that.func.loadXls();
				}
			} else {
				console.log('%c NOTICE: the last 404 error is due to a file check', 'background: #222; color: #bada55');
				that.func.loadXls();
			}
			
		} // end of goOn
	};// end of init
}