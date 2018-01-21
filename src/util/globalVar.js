import Vue from 'vue'

var globalVar = {
	alert: function (content, title, btnText) {
		return {
			title: title ? title : '提示',	// 标题
			content: content ? content : '提示内容',// 内容
			btnText: btnText ? btnText : '关闭' 	// 按钮
		}
	}, 
	confirm: function (content, title, yesText, yesStyle, noText, noStyle) {
		return {
			title: title ? title : '确认',
			content: content ? content : '确认内容',
			yesText: yesText ? yesText : '是',  // 左边按钮文本
			yesStyle: yesStyle ? yesStyle : {}, // 设置左边按钮样式
			noText: noText ? noText : '否',   // 设置右边按钮文本
			noStyle: noStyle ? noStyle : {}   // 设置右边按钮样式
		}
	},
	toastText: function (durtaion, location) {
		return {
		    durtaion: durtaion ? durtaion : 200,
			location: location ? noStyle : 'center'	// bottom、center、top 如果不传递, 默认在中间
		}
	},
	toastImg: function (path, location, tsh, tsw, ismb, isw) {
		return {
		  path: path ? path : '',
		  location: location ? noStyle : 'center',	// bottom、center、top 如果不传递, 默认在中间
		  toastStyle: {
		    height: tsh ? tsh : '30px',
		    width: tsw ? tsw : '30px'
		  },
		  imgStyle: {
		    marginBottom: ismb ? ismb : '10px',
		    width: isw ? isw : '30px'
		  }
		}
	}
}

Vue.prototype.gv=globalVar

export default globalVar