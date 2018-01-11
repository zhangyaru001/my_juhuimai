	function shmag() {

		//读取商品详情
		var id0 = $.cookie('buyId') - 1;
		var id = $.cookie('buyId') - 1;
		var j;

		$('#choose-btns .u-buy2').click(function() {

			//购物车数量增加;

			var first = $.cookie('goods') == null ? true : false; //判断是否有cookie进行添加
			var same = false; //判断时候已经追加

			//是否是第一次添加
			if(first) {
				//第一次添加,建立json结构。

				$.cookie('goods', '[{id:' + id0 + ',num:1}]');
				$.cookie('first', 'false');
			} else {

				var str = $.cookie('goods');
				var arr = eval(str);
				//遍历所有对象。如果id相同，让该商品数量递增 ;

				for(var attr in arr) {
					if(arr[attr].id == id0) {
						arr[attr].num = arr[attr].num + 1; //让json结构中num自增。
						var cookieStr = JSON.stringify(arr); //将json对象转换成字符串.
						$.cookie('goods', cookieStr);
						same = true;
					}
				}
				//如果id不同，重新建立商品对象;

				if(!same) {
					var obj = {
						id: id0,
						num: 1
					};
					arr.push(obj);
					var cookieStr = JSON.stringify(arr);
					$.cookie('goods', cookieStr);
				}
			}
			sc_car();
//			alert("您已将该商品加入购物车，可去结算！")
		})

		if(id < 32) {
			j = "data/f1.json";

		} else if(id < 48) {
			j = "data/f2.json";
			id = id - 32;

		} else if(id < 76) {
			j = "data/f3.json";
			id = id - 48;

		} else if(id < 96) {
			j = "data/f4.json";
			id = id - 76;

		} else if(id < 120) {
			j = "data/f5.json";
			id = id - 96;

		} else if(id < 143) {
			j = "data/f6.json";
			id = id - 120;

		} else if(id < 175) {
			j = "data/f7.json";
			id = id - 143;

		} else if(id < 186) {
			j = "data/f8.json";
			id = id - 175;

		} else {
			j = "data/goods_list.json";
			id = id - 186;
		}

		spxq(j);

		function spxq(xjson) {
			$.ajax({
				url: xjson,
				type: "GET",
				success: function(res) {

					//console.log(res[id]);
					$("#name h1").html(res[id].name);
					$("#zoom img").attr("src", res[id].url);
					$("#ECS_GOODS_AMOUNT").html(res[id].price);
					$(".market_price").html(res[id].del);
					$(".B_blue").attr("src", res[id].url);

					//购买商品数量+-
					$(".btn-reduce").click(function() {
						//alert(1)     //cs ww
						if(parseInt($("#number").val()) > 1) {
							var m = parseInt($("#number").val()) - 1;
							$("#number").val(m);

							var p = parseInt($("#number").val()) * res[id].price;
							$("#ECS_GOODS_AMOUNT").html(p.toFixed(1));
						}
					})
					$(".btn-add").click(function() {
						//alert(1)   //cs ww
						var n = parseInt($("#number").val()) + 1;
						$("#number").val(n);

						var p = parseInt($("#number").val()) * res[id].price;

						$("#ECS_GOODS_AMOUNT").html(p.toFixed(1));
					})
				}
			})
		}

		$("#formCart").mouseover(function() {

			$.ajax({
				url: "data/allgoods.json",
				type: "GET",
				success: function(res) {
					var sc_str = $.cookie('goods');
					if(sc_str) {
						var sc_obj = eval(sc_str);
						var sc_num = 0;
						var html = '';
						for(var i in sc_obj) {
							//				 							console.log(res[sc_obj[i].id]);

							html += '<li><a><img src="' + res[sc_obj[i].id].url + '"/><h4>' + res[sc_obj[i].id].name + '</h4><span>' + res[sc_obj[i].id].price +
								'<strong style="margin:0 7px;">×</strong>' + sc_obj[i].num + '</span></a><i class="del-btn" title="删除" id="' + sc_obj[i].id + '">×</i></li>'

							//												console.log(html)
							$('#ECS_CARTINFO .unstyled').html(html);
						}

						console.log($(".del-btn"))

						$(".del-btn").mousedown(function() {
							//												alert(1)
							var dbtnId = this.id;
							var str = $.cookie('goods');
							var arr = eval(str);
							//遍历所有对象。如果id相同，让该商品数量递增 ;
							var delid = this.id;
							for(var attr in arr) {
								if(arr[attr].id == delid) {

									arr.splice(attr, 1);
									var cookieStr = JSON.stringify(arr); //将json对象转换成字符串.
									$.cookie('goods', cookieStr);
								}
							}
							if(arr.length==0){
								$('#ECS_CARTINFO .unstyled').html("您的购物车里什么都没有哦，再去看看吧");
							}
							sc_car();
						})

					}
				}
			})
		})

	}

	//购物车;
	function sc_car() {

		var sc_str = $.cookie('goods');
		if(sc_str) { //如果购物车cookie不为空。
			var sc_obj = eval(sc_str);
			var sc_num = 0;
			for(var i in sc_obj) {
				sc_num = Number(sc_obj[i].num) + sc_num;
			}
			$('#collectBox span').html(sc_num);
			$('.tip .count').html(sc_num);
		}
		$('#ECS_CARTINFO .unstyled').html("您的购物车里什么都没有哦，再去看看吧");
	}

	//购物车显示
	function show() {
		var add = 0;
		$.ajax({
			url: "data/allgoods.json",
			type: "GET",
			success: function(res) {
				var sc_str = $.cookie('goods');
				if(sc_str) {
					var sc_obj = eval(sc_str);
					var sc_num = 0;
					var html = '';
					for(var i in sc_obj) {
						//									console.log(res[sc_obj[i].id]);

						html += '<table style="height:auto;width:100%;" cellpadding="0" cellspacing="0" align="center">' +
							'<tbody><tr height="35"><td style="border-top:2px solid #d9d9d9; text-indent:19px; background:#FAFAFA;' +
							'font-weight:bold;color:#FF0000">店铺：小城故事<input name="supplierid" id="supplierid" value="176" type="hidden">' +
							'</td></tr></tbody></table><table style="height:auto;width:100%;" cellpadding="0" cellspacing="0" align="center">' +
							'<tbody><tr><td style="width:100%;" class="g_cart">' +
							'<table width="100%" cellspacing="1" cellpadding="5" border="0">' +
							'<tbody><tr><td width="5%" align="center"><input id="sel_cartgoods_1157" checked="checked"' +
							'type="checkbox"/></td><td width="40%" align="center"><div class="thumb_name"><dl><dt>' +
							'<a href="#"><img src="' + res[sc_obj[i].id].url + '"/></a></dt><dd><a class="f6">' + res[sc_obj[i].id].name +
							'</a><br/><font class="attrname"></font></dd></dl></div></td><td width="15%" align="center">' +
							'<div class="jm_cartnum"><span class="jmminu" id="' + sc_obj[i].id + '">-</span><input id="goods_number_1157" class="jminputBg" value="' + sc_obj[i].num +
							'" size="4"/><span class="jmadd" id="' + sc_obj[i].id + '">+</span></div></td><td width="15%" align="center"><font class="cart_jmprice" id="goods_price_1157">' +
							res[sc_obj[i].id].price + '</font></td><td width="15%" align="center"><font class="cart_jmprice" id="subtotal_1157">' +
							(sc_obj[i].num * res[sc_obj[i].id].price).toFixed(1) +
							'</font></td><td width="10%" align="center"><a class="f6" id="' + sc_obj[i].id + '">删除</a></td></tr></tbody></table>' +
							'</td></tr></tbody></table>';

						add += parseFloat((sc_obj[i].num * res[sc_obj[i].id].price).toFixed(2));
						//	console.log(html)

					}
					$('#formCart1').html(html);

					//购物车内数量增加
					$(".jmadd").click(function() {
						//									 	alert(1)      cs ww 
						var str = $.cookie('goods');
						var arr = eval(str);
						//遍历所有对象。如果id相同，让该商品数量递增 ;
						var spanid = this.id;
						for(var attr in arr) {
							if(arr[attr].id == spanid) {
								arr[attr].num = arr[attr].num + 1; //让json结构中num自增。
								var cookieStr = JSON.stringify(arr); //将json对象转换成字符串.
								$.cookie('goods', cookieStr);
							}
						}

						show();
						sc_car();
					})

					//购物车内数量减少
					$(".jmminu").click(function() {
						//									 	alert(1)      cs ww 
						var str = $.cookie('goods');
						var arr = eval(str);
						//遍历所有对象。如果id相同，让该商品数量递增 ;
						var spanid = this.id;
						for(var attr in arr) {
							if(arr[attr].id == spanid) {
								arr[attr].num = arr[attr].num - 1; //让json结构中num自增。
								if(arr[attr].num == 0) {
									arr.splice(attr, 1);
								}
								var cookieStr = JSON.stringify(arr); //将json对象转换成字符串.
								$.cookie('goods', cookieStr);
							}
						}

						show();
						sc_car();
					})

					//删除购物车的商品
					$(".f6").click(function() {
						var str = $.cookie('goods');
						var arr = eval(str);
					
						var delid = this.id;
						for(var attr in arr) {
							if(arr[attr].id == delid) {

								arr.splice(attr, 1);
								var cookieStr = JSON.stringify(arr); //将json对象转换成字符串.
								$.cookie('goods', cookieStr);
							}
						}

						show();
						sc_car();
					})

					$("#cart_money_info span").html(add);
				}
			}
		})
	}