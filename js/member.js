$(function (){
	// 会员中心
	var w=$(window).width();
	var h=$(window).height();
	$('.mc_head').height(w*0.34375);
	$('.mc_person').css('paddingTop',(w*0.34375-$('.mc_person').height())/2+'px');
	$('.mc_mabg').css({height:(w-36)*0.4548+'px'});
	// 弹出层
	$('.maskLayer,.maskLayer2').css({'height':h});
	// 立即加入
	$('.joinbox').css({'height':w*0.25+'px'});
	// 支付成功
	$('.ps_c_top').css({'height':(w-30)*0.469});
	$('.ps_c_bottom').css({'height':(w-30)*0.7});
	// 返回按钮
	$('.aa_top i').on('click',function (){
		history.go(-1);
	});
	// 加入弹层
	$('.joinbox .join_mesg').css('marginTop',-$('.joinbox .join_mesg').height()/2);
})
