
//翻页的数字
var loadPage = function (currentPage, totalPage, count) {
	var pageAction = ''; //组装翻页页码
	var upClass = ''; //上一页显示隐藏
	var downClass = ''; //下一页显示隐藏
	var pagesNum = ''; //数字页码拼接到一块
	var firstPage = ''; //第一个页码
	var lastPage = ''; //最后一个页码
	var firstClass; //第一个页码添加active
	var lastClass; //最后一个页码添加active
	var headAction = '<li><a class=\"headAction\">...</a></li>'; //向前翻页
	var footAction = '<li><a class=\"footAction\">...</a></li>'; //向后翻页

	function pageCount(start, end) {
		for (var i = start; i < end; i++) {
			if (i == currentPage) {
				pagesNum += '<li class=\" active \"><a class=\" num \" index=\"' + i + '\">' + i + '</a></li>';
			} else {
				pagesNum += '<li><a class=\" num \" index=\"' + i + '\">' + i + '</a></li>';
			}
		}
	}
	//前5页
	if (currentPage <= 5) {
		if (totalPage <= 7) {
			// console.log('前5，总页小于等于7');
			pageCount(2, totalPage);
		} else {
			// console.log('前5，总页大于7');
			pageCount(2, 6);
		}
	}
	//中间页
	else if (currentPage < totalPage - 3 && currentPage > 5) {
		// console.log('中');
		pageCount(parseInt(currentPage) - 2, parseInt(currentPage) + 3);
	}
	//后五页
	else if (currentPage >= totalPage - 5) {
		// console.log('后5');
		pageCount(parseInt(totalPage) - 4, totalPage);
	}
	//控制头尾的显示
	if (currentPage == 1) {
		upClass = 'nopage';
		firstClass = 'active';
		lastClass = '';
		headAction = '';
		if (totalPage <= 7) {
			footAction = '';
		}
	} else if (currentPage == totalPage) {
		downClass = 'nopage';
		firstClass = '';
		lastClass = 'active';
		footAction = '';
		if (totalPage <= 7) {
			headAction = '';
		}
	} else {
		firstClass = '';
		lastClass = '';
		if (currentPage < 5) {
			headAction = '';
			if (totalPage <= 6) {
				footAction = '';
			}
		} else if (currentPage == '5') {
			headAction = '';
		} else if (currentPage < totalPage && currentPage >= totalPage - 3) {
			footAction = '';
		}
		if (totalPage <= 7) {
			headAction = '';
			footAction = '';
		}
	}

	firstPage = '<li class=\"' + firstClass + '\"><a class=\" num \" index=\"1\">1</a><li>' + headAction + '';
	lastPage = '' + footAction + '<li class=\"' + lastClass + '\"><a class=\" num \" index=\"' + totalPage + '\">' + totalPage + '</a></li>';
	//只有1页的特殊处理
	if (currentPage == 1 && totalPage == 1) {
		lastPage = '';
		downClass = 'nopage';
	}
	//组装分页
	pageAction = '<span  class=\" w-pager-txt \">Total ' + count + ' Record</span>' + '<span  class=\" w-pager-txt total\">No ' + currentPage + '/' + totalPage + ' Page</span>' +
		'<ul class="w-pager-page"><li class=\"' + upClass + '\" ><a class=\" fa fa-angle-left \"></a></li>' + firstPage + pagesNum + lastPage + '' +
		'<li class=\"' + downClass + '\"><a class=\" fa fa-angle-right \"></a></li></ul>' +
		'<div class="w-pager-jump">' +
		'<input type=\"text\">' +
		'<a>go</a></div>';
	// if ( == 'zh') {
	// 	pageAction = '<span  class=\" w-pager-txt \">共' + count + '条记录</span>' + '<span  class=\" w-pager-txt total\">第' + currentPage + '/' + totalPage + '页</span>' +
	// 		'<ul class="w-pager-page"><li class=\"' + upClass + '\" ><a class=\" fa fa-angle-left \"></a></li>' + firstPage + pagesNum + lastPage + '' +
	// 		'<li class=\"' + downClass + '\"><a class=\" fa fa-angle-right \"></a></li></ul>' +
	// 		'<div class="w-pager-jump">' +
	// 		'<input type=\"text\">' +
	// 		'<a>go</a></div>';
	// } else {
	// 	pageAction = '<span  class=\" w-pager-txt \">Total ' + count + ' Record</span>' + '<span  class=\" w-pager-txt total\">No ' + currentPage + '/' + totalPage + ' Page</span>' +
	// 		'<ul class="w-pager-page"><li class=\"' + upClass + '\" ><a class=\" fa fa-angle-left \"></a></li>' + firstPage + pagesNum + lastPage + '' +
	// 		'<li class=\"' + downClass + '\"><a class=\" fa fa-angle-right \"></a></li></ul>' +
	// 		'<div class="w-pager-jump">' +
	// 		'<input type=\"text\">' +
	// 		'<a>go</a></div>';
	// }

	// $('div.w-pager').html(pageAction);
};