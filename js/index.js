$(function(){
				var L=true;
				// if(L==true){
				// 	$("#header .nav").click(function(){
				// 		$("#header .ce").animate({"left":"0px"},200);
				// 		$("#header .top .nav li").html("x");
				// 	});
				// 	L=false;
				// 	console.log(L);
				// }else if(L==false){
				// 	$("#header .nav").click(function(){
				// 		$("#header .ce").animate({"left":"-190px"},200);
				// 		$("#header .top .nav li").html("☰");
				// 	});

				// 	L=true;
				// 	console.log(L);
				// }
			$(".nav").click(function(){
				if(L==true){
					$("#header .ce").animate({"left":"0px"},200);
					$(".nav li").html("x");
					L=false;
				}else{
					$("#header .ce").animate({"left":"-"+$("#header .ce").width()},200);
					$(".nav li").html("☰");
					L=true;
				}
			})


			var sec=59;
			var min=59;
			var $sec=$(".clock .sec").html;
			setInterval(function(){
				$(".clock .sec").html(sec--);
				if(sec==0){
					sec=60;
					$(".clock .min").html(min--);
				}
			},1000);

			var picwidth=290;
			var num=0;
			$("#content2 .xia .Lunbo .btn div").click(function(){
				var num=$(this).index()*picwidth;
				$("#content2 .xia .Lunbo .name").animate({"margin-left":-num+"px"},400);
				$("#content2 .xia .Lunbo .btn div").removeClass("click");
				$(this).addClass("click");
			});
			
		});

$(document).ready(function(){

	$(".img_gallery").hover(function(){
		$("#btn_prev,#btn_next").fadeIn()
	},function(){
		$("#btn_prev,#btn_next").fadeOut()
	});
	
	$dragBln = false;
	
	$(".main_img").touchSlider({
		flexible : true,
		speed : 200,
		btn_prev : $("#btn_prev"),
		btn_next : $("#btn_next"),
		paging : $(".point a"),
		counter : function (e){
			$(".point a").removeClass("on").eq(e.current-1).addClass("on");//图片顺序点切换
			$(".img_font span").hide().eq(e.current-1).show();//图片文字切换
		}
	});
	
	$(".main_img").bind("mousedown", function() {
		$dragBln = false;
	});
	
	$(".main_img").bind("dragstart", function() {
		$dragBln = true;
	});
	
	$(".main_img a").click(function(){
		if($dragBln) {
			return false;
		}
	});
	
	timer = setInterval(function(){
		$("#btn_next").click();
	}, 5000);
	
	$(".img_gallery").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(function(){
			$("#btn_next").click();
		},5000);
	});
	
	$(".main_img").bind("touchstart",function(){
		clearInterval(timer);
	}).bind("touchend", function(){
		timer = setInterval(function(){
			$("#btn_next").click();
		}, 5000);
	});
	$("#content4 .top .you").click(function(){
				$(this).addClass("girlhover").removeClass("girl");				
				$("#content4 .top .boyhover").addClass("boy").removeClass("boyhover");			
			});
			$("#content4 .top .zuo").click(function(){
				$(this).addClass("boyhover").removeClass("boy");			
				$("#content4 .top .girlhover").addClass("girl").removeClass("girlhover");	
			});
	for(var i=0; i<=$("#content5 .photo .Btn span").length; i++){
		$("#content5 .photo .Btn span").eq(i).click(function(){
			$(this).addClass("curr").siblings().removeClass("curr");
			var cc=$(this).index();
			console.log(cc);
			$("#content5 #Big").fadeOut();
			$("#content5 #Big").eq(cc).fadeIn();

		});
	};
});