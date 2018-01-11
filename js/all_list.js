
	
	//全部产品分类
//	all_cat();
	function all_cat(){
		$(".w0 .all_cat .list").mouseover(function(){
		//$(this).find(".hideMap").toggle();
			$(this).find(".hideMap").css("display","block");
		})
		$(".w0 .all_cat .list").mouseout(function(){
			$(this).find(".hideMap").css("display","none");
		})
	}
	
	
 $(function(){	
	//轮播图效果
	lunbo();
		function lunbo(){
	 		var index = 0;
            var timer = setInterval(fn1,2000);
            function fn1(){
            	
                if(index == $(".full-screen-slides li").length-1){
                    index = 0;
                }else{
                    index++;
                }
                
            	$(".full-screen-slides-pagination li").find("a").css("background","");
                $(".full-screen-slides-pagination li").eq(index).find("a").css("background","#e4393C");
                
                $(".full-screen-slides li").eq(index).fadeIn().siblings().fadeOut();
            }

            $(".full-screen-slides-pagination li").click(function(){

                //console.log($(this).index())
                index = $(this).index();
                
                 $(".full-screen-slides-pagination li").find("a").css("background","");
                $(".full-screen-slides-pagination li").eq(index).find("a").css("background","#e4393C");
           
               
                $(".full-screen-slides li").eq(index).fadeIn().siblings().fadeOut();

            })

            $(".full-screen-slides-pagination li").mouseover(function(){

                clearInterval(timer);
            })
            
           $(".full-screen-slides-pagination li").children().mouseout(function(){
                timer = setInterval(fn1,2000);
            })	
		}
		
		//banner图右侧公告栏
		proclamation();
		function proclamation(){
			$(".proclamation .tabs-nav li").mouseover(function(){
				
				$(this).attr("class","tabs-selected").siblings().attr("class","");  //设置class属性
				//console.log($(this).index());
				
				//显示公告内容
				$(".proclamation .tabs-panel").css("display","none");
				$(".proclamation .tabs-panel").eq($(this).index()).css("display","block");
			  
			})
		}
		
		//品牌商标
		pinpai();
		function pinpai(){
			
			$(".loadFourth .contentThree .titieBox ul li").mouseover(function(){
				$(this).addClass("on").siblings().attr("class","");
				//console.log($(this).index()*105)
				$(".Lay_2 .titleSlider").eq(0).css("left",$(this).index()*105);   //标题的下边框
				$(".logoBox .logoAll").css("display","none");
				$(".logoBox .logoAll").eq($(this).index()).css("display","block"); //商标显示
				
				$(".logoBox .optionsID").css("display","none");  //左右按钮
				if($(this).index()==0){
					$(".logoBox .optionsID").css("display","block");
				}
			})
				
			
			if($(".logoAll .logoFirstbd").css("marginLeft")==0+"px"){
				$(".logoBox .nextPage").click(function(){
					//alert(1)
					$(".logoAll .logoFirstbd").stop().animate({
						
						"margin-left":-1185
					})
					
					$(".logoBox .prevPage").click(function(){
							//alert(1)
						$(".logoAll .logoFirstbd").stop().animate({
						
							"margin-left":0
						})
					})
					
				})
			}	
		}
		
		//楼梯1F
		
		louti_1f();
		function louti_1f(){
			
			var index1 = 0;
			var $tab1 = $(".flootList .floor").eq(0).find(".tabs-panel").eq(0);
			ajax1("data/f1.json",8);
			
			$(".flootList .floor").eq(0).find(".mid_floor .tabs-nav li").mouseover(function(){
				//alert(1)         cs ww
				$(this).attr("class","tabs-selected").siblings().attr("class",""); //设置class属性
				//console.log($(this).index())  //cs ww
				$tab1 = $(this).parent().siblings(".tabs-panel").eq(0);//设置要显示的标签
				index1 = $(this).index();
				//alert(index1)
				ajax1("data/f1.json",8);	
				
			})
			function ajax1(json1,num1){
				
					$.ajax({							 //ajax调用
						type:"get",
						url:json1,
						dataType: "json", 
						success:function(str){
						//alert(1)
						var a = str;
				  		var html = "";
					  	 for(var i = index1*num1;i< (index1+1)*num1;i++){
							 //console.log(a[i].name);
				            html +='<div id="li_2687" class="j_ItemInfo"><div class="wrap" id="'+a[i].id+'"><a>'+
				            '<img src="'+a[i].url+'" style="display:block;" width="160" height="160"></a>'+
				            '<p class="title"><a href="#">'+a[i].name+'</a></p>'+
				            '<p class="o-price">'+a[i].del+'</p><p class="price"><span class="j_CurPrice">'
				            +a[i].price+'</span></p><a class="j_AddCart"></a><i class="product-mask"></i></div></div>';
					  	 }
				  	  
			          $tab1.html(html) ;  //标签赋值显示
			         
			         	//商品详情页跳转
						$(".wrap").click(function(){
							
							//alert(this.id)   //cs ww
							$.cookie('buyId',this.id);

        					window.location.href = "Goods_detail.html"
						})
					}
				});
			}			

		}	

		//2F
		louti_2f();
		function louti_2f(){
			
			var index2 = 0;
			var $tab2 = $(".flootList .floor").eq(1).find(".tabs-panel").eq(0);
			ajax2("data/f2.json",8);
			
			$(".flootList .floor").eq(1).find(".mid_floor .tabs-nav li").mouseover(function(){
				$(this).attr("class","tabs-selected").siblings().attr("class","");
				$tab2 = $(this).parent().siblings(".tabs-panel").eq(0);
				index2 = $(this).index();
				//alert(index1)
				ajax2("data/f2.json",8);	
				
			})
			function ajax2(json,num){
				
			  	$.ajax({							 //ajax调用
					type:"get",
					url:json,
					dataType: "json", 
					success:function(str){         //ajax调用
				  		var a = eval(str);
				  		var html2 = "";
			  		
				  	 for(var i = index2*num;i< (index2+1)*num;i++){
				  	 	if(i<a.length){
						 //console.log(a[i].name);
				            html2 +='<div id="li_2687" class="j_ItemInfo"><div class="wrap" id="'+a[i].id+'"><a>'+
				            '<img src="'+a[i].url+'" style="display:block;" width="160" height="160"></a>'+
				            '<p class="title"><a href="#">'+a[i].name+'</a></p>'+
				            '<p class="o-price">'+a[i].del+'</p><p class="price"><span class="j_CurPrice">'
				            +a[i].price+'</span></p><a class="j_AddCart"></a><i class="product-mask"></i></div></div>';
				  	    }
				  	}
			  	  
		          $tab2.html(html2) ;
		          //商品详情页跳转
						$(".wrap").click(function(){
							
							//alert(this.id)   //cs ww
							$.cookie('buyId',this.id);

        					window.location.href = "Goods_detail.html"
						})
		         }
			  	});
			}		
		}
		
		//3F
		louti_3f();
		function louti_3f(){
			
			var index1 = 0;
			var $tab1 = $(".flootList .floor").eq(2).find(".tabs-panel").eq(0);
			ajax1("data/f3.json",8);
			
			$(".flootList .floor").eq(2).find(".mid_floor .tabs-nav li").mouseover(function(){
				//alert(1)         cs ww
				$(this).attr("class","tabs-selected").siblings().attr("class","");
				//console.log($(this).index())  //cs ww
				$tab1 = $(this).parent().siblings(".tabs-panel").eq(0);
				index1 = $(this).index();
				//alert(index1)
				ajax1("data/f3.json",8);	
				
			})
			function ajax1(json1,num1){
				
			  	$.ajax({							 //ajax调用
					type:"get",
					url:json1,
					dataType: "json", 
					success:function(str){       //ajax调用
				  		var a = eval(str);
				  		var html = "";
				  		if(index1==0){
					  	 for(var i = index1*num1;i< (index1+1)*num1;i++){
							 //console.log(a[i].name);
				            html +='<div id="li_2687" class="j_ItemInfo"><div class="wrap" id="'+a[i].id+'"><a>'+
				            '<img src="'+a[i].url+'" style="display:block;" width="160" height="160"></a>'+
				            '<p class="title"><a href="#">'+a[i].name+'</a></p>'+
				            '<p class="o-price">'+a[i].del+'</p><p class="price"><span class="j_CurPrice">'
				            +a[i].price+'</span></p><a class="j_AddCart"></a><i class="product-mask"></i></div></div>';
					  	 }
			  	    }
			  		else if(index1==1){
			  			for(var i = 8;i< 10;i++){
			  				  html +='<div id="li_2687" class="j_ItemInfo"><div class="wrap" id="'+a[i].id+'"><a>'+
			            '<img src="'+a[i].url+'" style="display:block;" width="160" height="160"></a>'+
			            '<p class="title"><a href="#">'+a[i].name+'</a></p>'+
			            '<p class="o-price">'+a[i].del+'</p><p class="price"><span class="j_CurPrice">'
			            +a[i].price+'</span></p><a class="j_AddCart"></a><i class="product-mask"></i></div></div>';
			  			}
			  		}else{
			  			for(var i = index1*num1-6;i< (index1+1)*num1-6;i++){
							 //console.log(a[i].name);
				            html +='<div id="li_2687" class="j_ItemInfo"><div class="wrap" id="'+a[i].id+'"><a>'+
				            '<img src="'+a[i].url+'" style="display:block;" width="160" height="160"></a>'+
				            '<p class="title"><a href="#">'+a[i].name+'</a></p>'+
				            '<p class="o-price">'+a[i].del+'</p><p class="price"><span class="j_CurPrice">'
				            +a[i].price+'</span></p><a class="j_AddCart"></a><i class="product-mask"></i></div></div>';
					  	 }
			  		}
		          $tab1.html(html) ;
		          //商品详情页跳转
						$(".wrap").click(function(){
							
							//alert(this.id)   //cs ww
							$.cookie('buyId',this.id);

        					window.location.href = "Goods_detail.html"
						})
		         }
			  	});
			}		
		}
		
		//4F
		louti_4f();
		function louti_4f(){
			
			var index2 = 0;
			var $tab2 = $(".flootList .floor").eq(3).find(".tabs-panel").eq(0);
			ajax2("data/f4.json",8);
			
			$(".flootList .floor").eq(3).find(".mid_floor .tabs-nav li").mouseover(function(){
				$(this).attr("class","tabs-selected").siblings().attr("class","");
				$tab2 = $(this).parent().siblings(".tabs-panel").eq(0);
				index2 = $(this).index();
				//alert(index1)
				ajax2("data/f4.json",8);	
				
			})
			function ajax2(json,num){
				
			  	$.ajax({							 //ajax调用
					type:"get",
					url:json,
					dataType: "json", 
					success:function(str){         //ajax调用
				  		var a = eval(str);
				  		var html2 = "";
			  		  if(index2==0){
					  	 for(var i = index2*num;i< (index2+1)*num;i++){
					  	 
							 //console.log(a[i].name);
					            html2 +='<div id="li_2687" class="j_ItemInfo"><div class="wrap" id="'+a[i].id+'"><a>'+
					            '<img src="'+a[i].url+'" style="display:block;" width="160" height="160"></a>'+
					            '<p class="title"><a href="#">'+a[i].name+'</a></p>'+
					            '<p class="o-price">'+a[i].del+'</p><p class="price"><span class="j_CurPrice">'
					            +a[i].price+'</span></p><a class="j_AddCart"></a><i class="product-mask"></i></div></div>';
					  	  
				  		}
			  	  	}else if(index2==1){
			  	  		i = 8;
			  	  		 html2 +='<div id="li_2687" class="j_ItemInfo"><div class="wrap" id="'+a[i].id+'"><a>'+
					            '<img src="'+a[i].url+'" style="display:block;" width="160" height="160"></a>'+
					            '<p class="title"><a href="#">'+a[i].name+'</a></p>'+
					            '<p class="o-price">'+a[i].del+'</p><p class="price"><span class="j_CurPrice">'
					            +a[i].price+'</span></p><a class="j_AddCart"></a><i class="product-mask"></i></div></div>';
			  	  	}else if(index2==2){
			  	  		for(var i = 9;i< 12;i++){
					  	 
							 //console.log(a[i].name);
					            html2 +='<div id="li_2687" class="j_ItemInfo"><div class="wrap" id="'+a[i].id+'"><a>'+
					            '<img src="'+a[i].url+'" style="display:block;" width="160" height="160"></a>'+
					            '<p class="title"><a href="#">'+a[i].name+'</a></p>'+
					            '<p class="o-price">'+a[i].del+'</p><p class="price"><span class="j_CurPrice">'
					            +a[i].price+'</span></p><a class="j_AddCart"></a><i class="product-mask"></i></div></div>';
					  	  
				  		}
			  	  	}else{
			  	  		for(var i =12;i<20;i++){
					  	 
							 //console.log(a[i].name);
					            html2 +='<div id="li_2687" class="j_ItemInfo"><div class="wrap" id="'+a[i].id+'"><a>'+
					            '<img src="'+a[i].url+'" style="display:block;" width="160" height="160"></a>'+
					            '<p class="title"><a href="#">'+a[i].name+'</a></p>'+
					            '<p class="o-price">'+a[i].del+'</p><p class="price"><span class="j_CurPrice">'
					            +a[i].price+'</span></p><a class="j_AddCart"></a><i class="product-mask"></i></div></div>';
				  		}
			  	  	}
		          $tab2.html(html2) ;
		          //商品详情页跳转
						$(".wrap").click(function(){
							
							//alert(this.id)   //cs ww
							$.cookie('buyId',this.id);

        					window.location.href = "Goods_detail.html"
						})
		         }
			  	});
			}		
		}	
		
		//6F
		louti_6f();
		function louti_6f(){
			
			var index2 = 0;
			var $tab2 = $(".flootList .floor").eq(5).find(".tabs-panel").eq(0);
			ajax2("data/f6.json",8);
			
			$(".flootList .floor").eq(5).find(".mid_floor .tabs-nav li").mouseover(function(){
				$(this).attr("class","tabs-selected").siblings().attr("class","");
				$tab2 = $(this).parent().siblings(".tabs-panel").eq(0);
				index2 = $(this).index();
				//alert(index1)
				ajax2("data/f6.json",8);	
				
			})
			function ajax2(json,num){
				
			  	$.ajax({							 //ajax调用
					type:"get",
					url:json,
					dataType: "json", 
					success:function(str){        //ajax调用
			  		var a = eval(str);
			  		var html2 = "";
			  		
			  		for(var i = index2*num;i< (index2+1)*num;i++){
				  	 	if(i<a.length){
						 //console.log(a[i].name);
				            html2 +='<div id="li_2687" class="j_ItemInfo"><div class="wrap" id="'+a[i].id+'"><a>'+
				            '<img src="'+a[i].url+'" style="display:block;" width="160" height="160"></a>'+
				            '<p class="title"><a href="#">'+a[i].name+'</a></p>'+
				            '<p class="o-price">'+a[i].del+'</p><p class="price"><span class="j_CurPrice">'
				            +a[i].price+'</span></p><a class="j_AddCart"></a><i class="product-mask"></i></div></div>';
				  	    }
				  	}
			  	  
		          $tab2.html(html2) ;
		          //商品详情页跳转
						$(".wrap").click(function(){
							
							//alert(this.id)   //cs ww
							$.cookie('buyId',this.id);

        					window.location.href = "Goods_detail.html"
						})
		         }
			  	});
			}		
		}
		
			//5F
		louti_5f();
		function louti_5f(){
			
			var index2 = 0;
			var $tab2 = $(".flootList .floor").eq(4).find(".tabs-panel").eq(0);
			ajax2("data/f5.json",8);
			
			$(".flootList .floor").eq(4).find(".mid_floor .tabs-nav li").mouseover(function(){
				$(this).attr("class","tabs-selected").siblings().attr("class","");
				$tab2 = $(this).parent().siblings(".tabs-panel").eq(0);
				index2 = $(this).index();
				//alert(index1)
				ajax2("data/f5.json",8);	
				
			})
			function ajax2(json,num){
				
			  	$.ajax({							 //ajax调用
					type:"get",
					url:json,
					dataType: "json", 
					success:function(str){         //ajax调用
			  		var a = eval(str);
			  		var html2 = "";
			  		
			  		if(index2==0){
				  	 	for(var i = index2*num;i< (index2+1)*num;i++){
				  	 	
						 //console.log(a[i].name);
				            html2 +='<div id="li_2687" class="j_ItemInfo"><div class="wrap" id="'+a[i].id+'"><a>'+
				            '<img src="'+a[i].url+'" style="display:block;" width="160" height="160"></a>'+
				            '<p class="title"><a href="#">'+a[i].name+'</a></p>'+
				            '<p class="o-price">'+a[i].del+'</p><p class="price"><span class="j_CurPrice">'
				            +a[i].price+'</span></p><a class="j_AddCart"></a><i class="product-mask"></i></div></div>';
				  	    }
				  	}else if(index2==1){
				  		html2=""
				  	}else{
				  		for(var i = (index2-1)*num;i< index2*num;i++){
				  	 	
						 //console.log(a[i].name);
				            html2 +='<div id="li_2687" class="j_ItemInfo"><div class="wrap" id="'+a[i].id+'"><a>'+
				            '<img src="'+a[i].url+'" style="display:block;" width="160" height="160"></a>'+
				            '<p class="title"><a href="#">'+a[i].name+'</a></p>'+
				            '<p class="o-price">'+a[i].del+'</p><p class="price"><span class="j_CurPrice">'
				            +a[i].price+'</span></p><a class="j_AddCart"></a><i class="product-mask"></i></div></div>';
				  	    }
				  	}
			  	  
		          $tab2.html(html2) ;
		          //商品详情页跳转
						$(".wrap").click(function(){
							
							//alert(this.id)   //cs ww
							$.cookie('buyId',this.id);

        					window.location.href = "Goods_detail.html"
						})
		         }
			  	});
			}		
		}
		
		
		//楼梯7F
		
		louti_7f();
		function louti_7f(){
			
			var index1 = 0;
			var $tab1 = $(".flootList .floor").eq(6).find(".tabs-panel").eq(0);
			ajax1("data/f7.json",8);
			
			$(".flootList .floor").eq(6).find(".mid_floor .tabs-nav li").mouseover(function(){
				//alert(1)         cs ww
				$(this).attr("class","tabs-selected").siblings().attr("class",""); //设置class属性
				//console.log($(this).index())  //cs ww
				$tab1 = $(this).parent().siblings(".tabs-panel").eq(0);//设置要显示的标签
				index1 = $(this).index();
				//alert(index1)
				ajax1("data/f7.json",8);	
				
			})
			function ajax1(json1,num1){
				
			  	$.ajax({							 //ajax调用
					type:"get",
					url:json1,
					dataType: "json", 
					success:function(str){         //ajax调用
			  		var a = eval(str);
			  		var html = "";
				  	 for(var i = index1*num1;i< (index1+1)*num1;i++){
						 //console.log(a[i].name);
			            html +='<div id="li_2687" class="j_ItemInfo"><div class="wrap" id="'+a[i].id+'"><a>'+
			            '<img src="'+a[i].url+'" style="display:block;" width="160" height="160"></a>'+
			            '<p class="title"><a href="#">'+a[i].name+'</a></p>'+
			            '<p class="o-price">'+a[i].del+'</p><p class="price"><span class="j_CurPrice">'
			            +a[i].price+'</span></p><a class="j_AddCart"></a><i class="product-mask"></i></div></div>';
				  	 }
			  	  
		          $tab1.html(html) ;  //标签赋值显示
		          //商品详情页跳转
						$(".wrap").click(function(){
							
							//alert(this.id)   //cs ww
							$.cookie('buyId',this.id);

        					window.location.href = "Goods_detail.html"
						})
			  	
				  }
				});
			  	
			}		
		}	
	
		//楼梯8F
		
		louti_8f();
		function louti_8f(){
			
			var index1 = 0;
			var $tab1 = $(".flootList .floor").eq(7).find(".tabs-panel").eq(0);
			ajax1("data/f8.json",8);
			
			$(".flootList .floor").eq(7).find(".mid_floor .tabs-nav li").mouseover(function(){
				//alert(1)         cs ww
				$(this).attr("class","tabs-selected").siblings().attr("class",""); //设置class属性
				//console.log($(this).index())  //cs ww
				$tab1 = $(this).parent().siblings(".tabs-panel").eq(0);//设置要显示的标签
				index1 = $(this).index();
				//alert(index1)
				ajax1("data/f8.json",8);	
				
			})
			function ajax1(json1,num1){
				
			  	ajax(json1,function(str){         //ajax调用
			  		var a = eval(str);
			  		var html = "";
			  		if(index1==0){
					  	 for(var i = index1*num1;i< (index1+1)*num1;i++){
							 //console.log(a[i].name);
				            html +='<div id="li_2687" class="j_ItemInfo"><div class="wrap" id="'+a[i].id+'"><a>'+
				            '<img src="'+a[i].url+'" style="display:block;" width="160" height="160"></a>'+
				            '<p class="title"><a href="#">'+a[i].name+'</a></p>'+
				            '<p class="o-price">'+a[i].del+'</p><p class="price"><span class="j_CurPrice">'
				            +a[i].price+'</span></p><a class="j_AddCart"></a><i class="product-mask"></i></div></div>';
					  	 }
				  	}else if(index1==1 || index1==2){
				  		html = "";
				  	}else{
				  		for(var i =8;i< 11;i++){
							 //console.log(a[i].name);
				            html +='<div id="li_2687" class="j_ItemInfo"><div class="wrap" id="'+a[i].id+'"><a>'+
				            '<img src="'+a[i].url+'" style="display:block;" width="160" height="160"></a>'+
				            '<p class="title"><a href="#">'+a[i].name+'</a></p>'+
				            '<p class="o-price">'+a[i].del+'</p><p class="price"><span class="j_CurPrice">'
				            +a[i].price+'</span></p><a class="j_AddCart"></a><i class="product-mask"></i></div></div>';
					  	 }
				  	}
			  	  
		          $tab1.html(html) ;  //标签赋值显示
		          //商品详情页跳转
						$(".wrap").click(function(){
							
							//alert(this.id)   //cs ww
							$.cookie('buyId',this.id);

        					window.location.href = "Goods_detail.html"
						})
			  	});
			}		
		}	

	//左边楼梯导航
	fsFixed();
	function fsFixed(){
		$(".fsFixedTop .smooth").mouseover(function(){
		
			//alert(1)
			$(".fsFixedTop .smooth .fs-name").css("display","none");
			$(this).find(".fs-name").css("display","block");
		})
		
		$(".fsFixedTop .smooth").click(function(){

	        //alert($(this).index())  cs  ww
			
	        var offsetTop = $('.flootList .floor').eq($(this).index()).offset().top;
			//alert(offsetTop)
	        $(document).scrollTop(offsetTop);
	    })
	}
	
	
	//限时折扣
	zhekou();
	function zhekou(){
		$(".home-sale-layout .tabs-nav li").mouseover(function(){
			
			$(this).attr("class","tabs-selected").siblings().attr("class",""); 
			
			$(".home-sale-layout .sale-goods-list").css("display","none");
			$(".home-sale-layout .sale-goods-list").eq($(this).index()).css("display","block");
		})
		
	}
})
