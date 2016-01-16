var linkflg = true;

function swapimg(name,filename) {
	eval("document." + name + ".src='" + filename + "'");
}

function initPower() {
	power_on_waiting = false;
	getPower();
	getLogState();
	top.power.setFrmPwrLinkFlg( true );
	document.body.style.cursor = 'auto';
	top.power.document.body.style.cursor = 'auto';
	setTimeout(refresh, 60000);
}

function getPower() {
	var req = top.makeCgiParamReq( OPC_PJ_INFORMATION_CGI, 0, GET_VOID, null );
	var myUrl= CGI_URL + req;

	$.ajax({
	type: 'POST',
	url: myUrl,
	dataType: 'json',
	success: function (data) {
		if( data[0] == 0x01 ) {
			/* Success */
			if( data[1] == 0x03 || data[1] == 0x04 ) {
				// PowerOn ó‘Ô
				swapimg('power_on','./images/power_on_g.png');
				swapimg('power_off','./images/power_off_b.png');
			} else {
				// PowerOff ó‘Ô
				swapimg('power_on','./images/power_on_b.png');
				swapimg('power_off','./images/power_off_g.png');
			}
		}
		else if( data[0] == 0x02 ){
			//”FØ’†‚È‚Ì‚ÅƒƒOƒIƒ“•\Ž¦
			top.dummy.location.replace( CGI_URL + "A=Init" );
		}
	},
	error: function (XMLHttpRequest, textStatus, errorThrown) {
		//var dummyURL = CGI_URL + 'Z';
		//top.dummy.location.replace( dummyURL );
	}
	});
}

function setPowerOn() {
	if( linkflg == false ) {
		return;
	}

	power_on_waiting = true;
	swapimg('power_on','./images/power_on_g.png');
	swapimg('power_off','./images/power_off_b.png');

	var req = top.makeCgiParamReq( OPC_POWERON_CGI, 0, SET_VALUE, 1 );
	var myUrl= CGI_URL + req;

	$.ajax({
	type: 'POST',
	url: myUrl,
	dataType: 'json',
	success: function (data) {
		if( data[0] == 0x01 ) {
			//setTimeout(top.actRefresh, 15000);
		}
		else if( data[0] == 0x02 ){
			//”FØ’†‚È‚Ì‚ÅƒƒOƒIƒ“•\Ž¦
			top.dummy.location.replace( CGI_URL + "A=Init" );
		}
	},
	error: function (XMLHttpRequest, textStatus, errorThrown) {
	}
	});
}

function setPowerOff(){
	if( linkflg == false ) {
		return;
	}

	var res=confirm('Are you sure that you would like to turn off the projector?');
	power_on_waiting = false;
	if( res==true) {
		swapimg('power_on','./images/power_on_b.png');
		swapimg('power_off','./images/power_off_g.png');

		var req = top.makeCgiParamReq( OPC_POWEROFF_CGI, 0, SET_VALUE, 0 );
		var myUrl= CGI_URL + req;

		$.ajax({
		type: 'POST',
		url: myUrl,
		dataType: 'json',
		success: function (data) {
			if( data[0] == 0x00 ) {
			}
			else if( data[0] == 0x02 ){
				//”FØ’†‚È‚Ì‚ÅƒƒOƒIƒ“•\Ž¦
				top.dummy.location.replace( CGI_URL + "A=Init" );
			}
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
		}
		});
	}
}

function getLogState() {

	var req = 'L';
	var myUrl= CGI_URL + req;

	$.ajax({
	type: 'POST',
	url: myUrl,
	dataType: 'json',
	success: function (data) {
		if( data[0] == 0x01 ) {
			switch( data[1] ) {
			case 1:		// LogOff ó‘Ô‚È‚Ì‚ÅALogOnƒ{ƒ^ƒ“•\Ž¦
				swapimg('log_off','./images/logon_a.png');
				break;
			case 2:		// LogOn ó‘Ô‚È‚Ì‚ÅALogOffƒ{ƒ^ƒ“•\Ž¦
				swapimg('log_off','./images/logoff.png');
				break;
			default:	// HTTPƒpƒXƒ[ƒh–¢Ý’è
				swapimg('log_off','./images/logoff_w.png');
				break;
			}
			logonstate = data[1];
		}
		else if( data[0] == 0x02 ) {
			//”FØ’†‚È‚Ì‚ÅƒƒOƒIƒ“•\Ž¦
			top.dummy.location.replace( CGI_URL + "A=Init" );
		}
	},
	error: function (XMLHttpRequest, textStatus, errorThrown) {
//		var dummyURL = CGI_URL + 'Z';
//		top.dummy.location.replace( dummyURL );
	}
	});
}

function setLogOff() {
	if( linkflg == false ) {
		return;
	}

	if( logonstate == 2 ) {
		var req = 'A=Logoff';
		var myUrl= CGI_URL + req;

		$.ajax({
		type: 'POST',
		url: myUrl,
		dataType: 'json',
		success: function (data) {
			window.open( "/Logon/Logon.html", '_top');
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			window.open( "/Logon/Logon.html", '_top');
		}
		});
	}
}

function setFrmPwrLinkFlg( flg ) {
	linkflg = flg;
}

function setLogStateImage( state ) {
	if ( state == 'log_off' ) {			// LogOff ó‘Ô‚È‚Ì‚ÅALogOnƒ{ƒ^ƒ“•\Ž¦
		swapimg('log_off','./images/logon_a.png');
		logonstate = 1;
	} else if ( state == 'log_on' ) {	// LogOn ó‘Ô
		swapimg('log_off','./images/logoff.png');
		logonstate = 2;
	} else if ( state == 'nopass' ) {	// HTTPƒpƒXƒ[ƒh–¢Ý’è
		swapimg('log_off','./images/logoff_w.png');
		logonstate = 0;
	}
}

function refresh() {

	power_on_waiting = false;
	getPower();
	getLogState();
	top.power.setFrmPwrLinkFlg( true );
	document.body.style.cursor = 'auto';
	top.power.document.body.style.cursor = 'auto';
	setTimeout(refresh, 60000);

}
