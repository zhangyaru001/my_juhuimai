
function r_nav(){
	
	//右侧栏效果
	$(".mods .mod").mouseover(function(){	
		
		$(".mods .mod .dropdown").css("display","none");
		$(this).find(".dropdown").css("display","block");
		$(this).find("tr").eq(0).css("display","none");
	})
	$(".mods .mod").mouseout(function(){	
		
		$(this).find("tr").eq(0).css("display","block");

	})
	$(".dropdown").mouseout(function(){	
		
		$(this).css("display","none");
	})
	
	//回到顶部
	$(".bottom-items .btn").click(function(){
		
		$(document).scrollTop("0");
	})
	
	//登录验证
				$("#loginsubmit").click(function(){

					var ID = $('#r_name').val();
					var password = $('#r_password').val();
					
					//登录验证
					$.ajax({
						url:"http://datainfo.duapp.com/shopdata/userinfo.php",
						type:"POST",
						data:{
							status:"login",
							userID:ID,
							password:password
						},
						success:function(res){
			
							switch(res){
								case "0":alert('用户名不存在');break;
								case "2":alert('用户名密码不符');break;
								default:
										$.cookie("UserName",ID);
										alert('恭喜你，登录成功');
										window.location.href="index.html";
										break;
							}
						}
	
					})
					
				})
}