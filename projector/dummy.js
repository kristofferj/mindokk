// Page:Port
var port_http;
function chkPagePortHttp() {
	if( port_http != undefined && port_http != null ) {
		return true;
	} else {
		return false;
	}
}
function getPagePortHttp() {
	return port_http;
}
function setPagePortHttp( val ) {
	port_http = val;
}

var port_pcctrl;
function setPagePortPcctrl( val ) {
	port_pcctrl = val;
}
function chkPagePortPcctrl() {
	if( port_pcctrl != undefined && port_pcctrl != null ) {
		return true;
	} else {
		return false;
	}
}
function getPagePortPcctrl() {
	return port_pcctrl;
}

var port_pjlink;
function chkPagePortPJLink() {
	if( port_pjlink != undefined && port_pjlink != null ) {
		return true;
	} else {
		return false;
	}
}
function getPagePortPJLink() {
	return port_pjlink;
}
function setPagePortPJLink( val ) {
	port_pjlink = val;
}
var port_search;
function chkPagePortSearch() {
	if( port_search != undefined && port_search != null ) {
		return true;
	} else {
		return false;
	}
}
function getPagePortSearch() {
	return port_search;
}
function setPagePortSearch( val ) {
	port_search = val;
}
var port_ieu;
function chkPagePortIeu() {
	if( port_ieu != undefined && port_ieu != null ) {
		return true;
	} else {
		return false;
	}
}
function getPagePortIeu() {
	return port_ieu;
}
function setPagePortIeu( val ) {
	port_ieu = val;
}

//[ADD] IMAGE(UDP) Port
var port_imageudp;
function chkPagePortImageUdp() {
	if( port_imageudp != undefined && port_imageudp != null ) {
		return true;
	} else {
		return false;
	}
}
function getPagePortImangeUdp() {
	return port_imageudp;
}
function setPagePortImageUdp( val ) {
	port_imageudp = val;
}

//[ADD] IMAGE(TCP) Port
var port_imagetcp;
function chkPagePortImageTcp() {
	if( port_imagetcp != undefined && port_imagetcp != null ) {
		return true;
	} else {
		return false;
	}
}
function getPagePortImangeTcp() {
	return port_imagetcp;
}
function setPagePortImageTcp( val ) {
	port_imagetcp = val;
}

//[ADD] USER MANAGEMENT Port
var port_usermng;
function chkPagePortUserMng() {
	if( port_usermng != undefined && port_usermng != null ) {
		return true;
	} else {
		return false;
	}
}
function getPagePortUserMng() {
	return port_usermng;
}
function setPagePortUserMng( val ) {
	port_usermng = val;
}

//[ADD] DESKTOP CONTROL Port
var port_deskctrl;
function chkPagePortDeskCtrl() {
	if( port_deskctrl != undefined && port_deskctrl != null ) {
		return true;
	} else {
		return false;
	}
}
function getPagePortDeskCtrl() {
	return port_deskctrl;
}
function setPagePortDeskCtrl( val ) {
	port_deskctrl = val;
}

// Crestron Port
var CrestronPort;
function chkPagePortCrestron() {
	if( CrestronPort != undefined && CrestronPort != null ) {
		return true;
	} else {
		return false;
	}
}
function getPagePortCrestron() {
	return CrestronPort;
}
function setPagePortCrestron( val ) {
	CrestronPort = val;
}

function PagePortReset() {
	port_http = null;
	port_pcctrl = null;
	port_pjlink = null;
	port_search = null;
	port_ieu = null;
	port_imageudp = null;	// [Add] IMAGE(UDP) Port
	port_imagetcp = null;	// [Add] IMAGE(TCP) Port
	port_usermng = null;	// [Add] USER MANAGEMENT Port
	port_deskctrl = null;	// [Add] DESKTOP CONTROL Port
	CrestronPort = null;
}

// page:Information
var wd_dhcp;
function chkPageInfoWdDhcp() {
	if( wd_dhcp != undefined && wd_dhcp != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageInfoWdDhcp() {
	return wd_dhcp;
}
function setPageInfoWdDhcp( val ) {
	wd_dhcp = val;
}

var wd_ipaddr;
function chkPageInfoWdIpAddr() {
	if( wd_ipaddr != undefined && wd_ipaddr != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageInfoWdIpAddr() {
	return wd_ipaddr;
}
function setPageInfoWdIpAddr( val ) {
	wd_ipaddr = val;
}

var wd_subnet;
function chkPageInfoWdSubnet() {
	if( wd_subnet != undefined && wd_subnet != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageInfoWdSubnet() {
	return wd_subnet;
}
function setPageInfoWdSubnet( val ) {
	wd_subnet = val;
}

var wd_gate;
function chkPageInfoWdGate() {
	if( wd_gate != undefined && wd_gate != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageInfoWdGate() {
	return wd_gate;
}
function setPageInfoWdGate( val ) {
	wd_gate = val;
}

var wd_dns;
function chkPageInfoWdDns() {
	if( wd_dns != undefined && wd_dns != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageInfoWdDns() {
	return wd_dns;
}
function setPageInfoWdDns( val ) {
	wd_dns = val;
}

var wd_dnsaddr;
function chkPageInfoWdDnsAddr() {
	if( wd_dnsaddr != undefined && wd_dnsaddr != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageInfoWdDnsAddr() {
	return wd_dnsaddr;
}
function setPageInfoWdDnsAddr( val ) {
	wd_dnsaddr = val;
}

var wd_mac;
function chkPageInfoWdMac() {
	if( wd_mac != undefined && wd_mac != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageInfoWdMac() {
	return wd_mac;
}
function setPageInfoWdMac( val ) {
	wd_mac = val;
}

var wl_dhcp;
function chkPageInfoWlDhcp() {
	if( wl_dhcp != undefined && wl_dhcp != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageInfoWlDhcp() {
	return wl_dhcp;
}
function setPageInfoWlDhcp( val ) {
	wl_dhcp = val;
}

var wl_ipaddr;
function chkPageInfoWlIpAddr() {
	if( wl_ipaddr != undefined && wl_ipaddr != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageInfoWlIpAddr() {
	return wl_ipaddr;
}
function setPageInfoWlIpAddr( val ) {
	wl_ipaddr = val;
}

var wl_subnet;
function chkPageInfoWlSubnet() {
	if( wl_subnet != undefined && wl_subnet != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageInfoWlSubnet() {
	return wl_subnet;
}
function setPageInfoWlSubnet( val ) {
	wl_subnet = val;
}

var wl_gate;
function chkPageInfoWlGate() {
	if( wl_gate != undefined && wl_gate != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageInfoWlGate() {
	return wl_gate;
}
function setPageInfoWlGate( val ) {
	wl_gate = val;
}

var wl_dns;
function chkPageInfoWlDns() {
	if( wl_dns != undefined && wl_dns != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageInfoWlDns() {
	return wl_dns;
}
function setPageInfoWlDns( val ) {
	wl_dns = val;
}

var wl_dnsaddr;
function chkPageInfoWlDnsAddr() {
	if( wl_dnsaddr != undefined && wl_dnsaddr != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageInfoWlDnsAddr() {
	return wl_dnsaddr;
}
function setPageInfoWlDnsAddr( val ) {
	wl_dnsaddr = val;
}

var wl_ssid;
var wl_type;
var wl_band;
var wl_ch;
var wl_lv;
var wl_sec;
function chkPageInfoWlStatus() {
	if( wl_ssid != undefined && wl_ssid != null ) {
		return true;
	} else {
		return false;
	}
}

function getPageInfoWlSsid() {
	return wl_ssid;
}
function getPageInfoWlType() {
	return wl_type;
}
function getPageInfoWlBand() {
	return wl_band;
}
function getPageInfoWlCh() {
	return wl_ch;
}
function getPageInfoWlLv() {
	return wl_lv;
}
function getPageInfoWlSec() {
	return wl_sec;
}
function setPageInfoWlStatus( ssid, type, mode, ch, lv, sectype ) {
	wl_ssid = ssid;
	wl_type = type;
	wl_band = mode;
	wl_ch = ch;
	wl_lv = lv;
	wl_sec = sectype;

}

var wl_mac;
function chkPageInfoWlMac() {
	if( wl_mac != undefined && wl_mac != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageInfoWlMac() {
	return wl_mac;
}
function setPageInfoWlMac( val ) {
	wl_mac = val;
}
function PageInfoReset() {
	wd_dhcp = null;
	wd_ipaddr = null;
	wd_subnet = null;
	wd_gate = null;
	wd_dns = null;
	wd_dnsaddr = null;
	wd_mac = null;
	wl_dhcp = null;
	wl_ipaddr = null;
	wl_subnet = null;
	wl_gate = null;
	wl_dns = null;
	wl_dnsaddr = null;
	wl_ssid = null;
	wl_type = null;
	wl_band = null;
	wl_ch = null;
	wl_lv = null;
	wl_sec = null;
	wl_mac = null;
}

// Page:NetworkService
var srvc_amx;
function chkPageSrvcAmx() {
	if( srvc_amx != undefined && srvc_amx != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageSrvcAmx() {
	return srvc_amx;
}
function setPageSrvcAmx( val ) {
	srvc_amx = val;
}

// [Add] SNMP CheckBox
var srvc_snmp;
function chkPageSrvcSnmp() {
	if( srvc_snmp != undefined && srvc_snmp != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageSrvcSnmp() {
	return srvc_snmp;
}
function setPageSrvcSnmp( val ) {
	srvc_snmp = val;
}
function PageSrvcReset() {
	srvc_amx = null;
	srvc_snmp = null; // [Add] SNMP CheckBox
}

// Page:AlertMail
var mail_used;
function chkPageMailUsed() {
	if( mail_used != undefined && mail_used != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageMailUsed() {
	return mail_used;
}
function setPageMailUsed( val ) {
	mail_used = val;
}

var mail_sender;
function chkPageMailSender() {
	if( mail_sender != undefined && mail_sender != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageMailSender() {
	return mail_sender;
}
function setPageMailSender( val ) {
	mail_sender = val;
}

var mail_smtp;
function chkPageMailSmtp() {
	if( mail_smtp != undefined && mail_smtp != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageMailSmtp() {
	return mail_smtp;
}
function setPageMailSmtp( val ) {
	mail_smtp = val;
}

var mail_recip1;
function chkPageMailRecip1() {
	if( mail_recip1 != undefined && mail_recip1 != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageMailRecip1() {
	return mail_recip1;
}
function setPageMailRecip1( val ) {
	mail_recip1 = val;
}

var mail_recip2;
function chkPageMailRecip2() {
	if( mail_recip2 != undefined && mail_recip2 != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageMailRecip2() {
	return mail_recip2;
}
function setPageMailRecip2( val ) {
	mail_recip2 = val;
}

var mail_recip3;
function chkPageMailRecip3() {
	if( mail_recip3 != undefined && mail_recip3 != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageMailRecip3() {
	return mail_recip3;
}
function setPageMailRecip3( val ) {
	mail_recip3 = val;
}
function PageMailReset() {
	mail_used = null;
	mail_sender = null;
	mail_smtp = null;
	mail_recip1 = null;
	mail_recip2 = null;
	mail_recip3 = null;
}

// Page:Name
var name_pj;
function chkPageNamePj() {
	if( name_pj != undefined && name_pj != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageNamePj() {
	return name_pj;
}
function setPageNamePj( val ) {
	name_pj = val;
}

var name_host;
function chkPageNameHost() {
	if( name_host != undefined && name_host != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageNameHost() {
	return name_host;
}
function setPageNameHost( val ) {
	name_host = val;
}

var name_domain;
function chkPageNameDomain() {
	if( name_domain != undefined && name_domain != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageNameDomain() {
	return name_domain;
}
function setPageNameDomain( val ) {
	name_domain = val;
}
function PageNameReset() {
	name_pj = null;
	name_host = null;
	name_domain = null;
}

// Page:Setting top
var top_wd;
function chkPageTopWd() {
	if( top_wd != undefined && top_wd != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageTopWd() {
	return top_wd;
}
function setPageTopWd( val ) {
	top_wd = val;
}

var top_wl;
function chkPageTopWl() {
	if( top_wl != undefined && top_wl != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageTopWl() {
	return top_wl;
}
function setPageTopWl( val ) {
	top_wl = val;
}

function PageTopReset() {
	top_wd = null;
	top_wl = null;
}

// Page:Setting Wired Prof
var wdprof_dhcp;
function chkPageWdProfDhcp() {
	if( wdprof_dhcp != undefined && wdprof_dhcp != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWdProfDhcp() {
	return wdprof_dhcp;
}
function setPageWdProfDhcp( val ) {
	wdprof_dhcp = val;
}

var wdprof_ip1;
var wdprof_ip2;
var wdprof_ip3;
var wdprof_ip4;
function chkPageWdProfIp() {
	if( wdprof_ip1 != undefined && wdprof_ip1 != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWdProfIp1() {
	return wdprof_ip1;
}
function getPageWdProfIp2() {
	return wdprof_ip2;
}
function getPageWdProfIp3() {
	return wdprof_ip3;
}
function getPageWdProfIp4() {
	return wdprof_ip4;
}
function setPageWdProfIp( val1, val2, val3, val4 ) {
	wdprof_ip1 = val1;
	wdprof_ip2 = val2;
	wdprof_ip3 = val3;
	wdprof_ip4 = val4;
}

var wdprof_sub1;
var wdprof_sub2;
var wdprof_sub3;
var wdprof_sub4;
function chkPageWdProfSub() {
	if( wdprof_sub1 != undefined && wdprof_sub1 != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWdProfSub1() {
	return wdprof_sub1;
}
function getPageWdProfSub2() {
	return wdprof_sub2;
}
function getPageWdProfSub3() {
	return wdprof_sub3;
}
function getPageWdProfSub4() {
	return wdprof_sub4;
}
function setPageWdProfSub( val1, val2, val3, val4 ) {
	wdprof_sub1 = val1;
	wdprof_sub2 = val2;
	wdprof_sub3 = val3;
	wdprof_sub4 = val4;
}

var wdprof_gate1;
var wdprof_gate2;
var wdprof_gate3;
var wdprof_gate4;
function chkPageWdProfGate() {
	if( wdprof_gate1 != undefined && wdprof_gate1 != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWdProfGate1() {
	return wdprof_gate1;
}
function getPageWdProfGate2() {
	return wdprof_gate2;
}
function getPageWdProfGate3() {
	return wdprof_gate3;
}
function getPageWdProfGate4() {
	return wdprof_gate4;
}
function setPageWdProfGate( val1, val2, val3, val4 ) {
	wdprof_gate1 = val1;
	wdprof_gate2 = val2;
	wdprof_gate3 = val3;
	wdprof_gate4 = val4;
}

var wdprof_dns;
function chkPageWdProfDns() {
	if( wdprof_dns != undefined && wdprof_dns != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWdProfDns() {
	return wdprof_dns;
}
function setPageWdProfDns( val ) {
	wdprof_dns = val;
}

var wdprof_dnsaddr1;
var wdprof_dnsaddr2;
var wdprof_dnsaddr3;
var wdprof_dnsaddr4;
function chkPageWdProfDnsAddr() {
	if( wdprof_dnsaddr1 != undefined && wdprof_dnsaddr1 != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWdProfDnsAddr1() {
	return wdprof_dnsaddr1;
}
function getPageWdProfDnsAddr2() {
	return wdprof_dnsaddr2;
}
function getPageWdProfDnsAddr3() {
	return wdprof_dnsaddr3;
}
function getPageWdProfDnsAddr4() {
	return wdprof_dnsaddr4;
}
function setPageWdProfDnsAddr( val1, val2, val3, val4 ) {
	wdprof_dnsaddr1 = val1;
	wdprof_dnsaddr2 = val2;
	wdprof_dnsaddr3 = val3;
	wdprof_dnsaddr4 = val4;
}
function PageWdProfReset() {
	wdprof_dhcp = null;
	wdprof_ip1 = null;
	wdprof_ip2 = null;
	wdprof_ip3 = null;
	wdprof_ip4 = null;
	wdprof_sub1 = null;
	wdprof_sub2 = null;
	wdprof_sub3 = null;
	wdprof_sub4 = null;
	wdprof_gate1 = null;
	wdprof_gate2 = null;
	wdprof_gate3 = null;
	wdprof_gate4 = null;
	wdprof_dns = null;
	wdprof_dnsaddr1 = null;
	wdprof_dnsaddr2 = null;
	wdprof_dnsaddr3 = null;
	wdprof_dnsaddr4 = null;
}


// [Add] Wired Profile 2 ·•ªŽd—l‘ 5 ”Å
// Page:Setting Wired Prof2
var wdprof2_dhcp;
function chkPageWdProf2Dhcp() {
	if( wdprof2_dhcp != undefined && wdprof2_dhcp != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWdProf2Dhcp() {
	return wdprof2_dhcp;
}
function setPageWdProf2Dhcp( val ) {
	wdprof2_dhcp = val;
}

var wdprof2_ip1;
var wdprof2_ip2;
var wdprof2_ip3;
var wdprof2_ip4;
function chkPageWdProf2Ip() {
	if( wdprof2_ip1 != undefined && wdprof2_ip1 != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWdProf2Ip1() {
	return wdprof2_ip1;
}
function getPageWdProf2Ip2() {
	return wdprof2_ip2;
}
function getPageWdProf2Ip3() {
	return wdprof2_ip3;
}
function getPageWdProf2Ip4() {
	return wdprof2_ip4;
}
function setPageWdProf2Ip( val1, val2, val3, val4 ) {
	wdprof2_ip1 = val1;
	wdprof2_ip2 = val2;
	wdprof2_ip3 = val3;
	wdprof2_ip4 = val4;
}

var wdprof2_sub1;
var wdprof2_sub2;
var wdprof2_sub3;
var wdprof2_sub4;
function chkPageWdProf2Sub() {
	if( wdprof2_sub1 != undefined && wdprof2_sub1 != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWdProf2Sub1() {
	return wdprof2_sub1;
}
function getPageWdProf2Sub2() {
	return wdprof2_sub2;
}
function getPageWdProf2Sub3() {
	return wdprof2_sub3;
}
function getPageWdProf2Sub4() {
	return wdprof2_sub4;
}
function setPageWdProf2Sub( val1, val2, val3, val4 ) {
	wdprof2_sub1 = val1;
	wdprof2_sub2 = val2;
	wdprof2_sub3 = val3;
	wdprof2_sub4 = val4;
}

var wdprof2_gate1;
var wdprof2_gate2;
var wdprof2_gate3;
var wdprof2_gate4;
function chkPageWdProf2Gate() {
	if( wdprof2_gate1 != undefined && wdprof2_gate1 != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWdProf2Gate1() {
	return wdprof2_gate1;
}
function getPageWdProf2Gate2() {
	return wdprof2_gate2;
}
function getPageWdProf2Gate3() {
	return wdprof2_gate3;
}
function getPageWdProf2Gate4() {
	return wdprof2_gate4;
}
function setPageWdProf2Gate( val1, val2, val3, val4 ) {
	wdprof2_gate1 = val1;
	wdprof2_gate2 = val2;
	wdprof2_gate3 = val3;
	wdprof2_gate4 = val4;
}
var wdprof2_dns;
function chkPageWdProf2Dns() {
	if( wdprof2_dns != undefined && wdprof2_dns != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWdProf2Dns() {
	return wdprof2_dns;
}
function setPageWdProf2Dns( val ) {
	wdprof2_dns = val;
}

var wdprof2_dnsaddr1;
var wdprof2_dnsaddr2;
var wdprof2_dnsaddr3;
var wdprof2_dnsaddr4;
function chkPageWdProf2DnsAddr() {
	if( wdprof2_dnsaddr1 != undefined && wdprof2_dnsaddr1 != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWdProf2DnsAddr1() {
	return wdprof2_dnsaddr1;
}
function getPageWdProf2DnsAddr2() {
	return wdprof2_dnsaddr2;
}
function getPageWdProf2DnsAddr3() {
	return wdprof2_dnsaddr3;
}
function getPageWdProf2DnsAddr4() {
	return wdprof2_dnsaddr4;
}
function setPageWdProf2DnsAddr( val1, val2, val3, val4 ) {
	wdprof2_dnsaddr1 = val1;
	wdprof2_dnsaddr2 = val2;
	wdprof2_dnsaddr3 = val3;
	wdprof2_dnsaddr4 = val4;
}
function PageWdProf2Reset() {
	wdprof2_dhcp = null;
	wdprof2_ip1 = null;
	wdprof2_ip2 = null;
	wdprof2_ip3 = null;
	wdprof2_ip4 = null;
	wdprof2_sub1 = null;
	wdprof2_sub2 = null;
	wdprof2_sub3 = null;
	wdprof2_sub4 = null;
	wdprof2_gate1 = null;
	wdprof2_gate2 = null;
	wdprof2_gate3 = null;
	wdprof2_gate4 = null;
	wdprof2_dns = null;
	wdprof2_dnsaddr1 = null;
	wdprof2_dnsaddr2 = null;
	wdprof2_dnsaddr3 = null;
	wdprof2_dnsaddr4 = null;
}
// Wired Profile 2

// Page:Setting Wireless Easy
var wleasy_ch;
function chkPageWlEasyCh() {
	if( wleasy_ch != undefined && wleasy_ch != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlEasyCh() {
	return wleasy_ch;
}
function setPageWlEasyCh( val ) {
	wleasy_ch = val;
}

var wleasy_rate;
function chkPageWlEasyRate() {
	if( wleasy_rate != undefined && wleasy_rate != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlEasyRate() {
	return wleasy_rate;
}
function setPageWlEasyRate( val ) {
	wleasy_rate = val;
}

var wleasy_pwr;
function chkPageWlEasyPwr() {
	if( wleasy_pwr != undefined && wleasy_pwr != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlEasyPwr() {
	return wleasy_pwr;
}
function setPageWlEasyPwr( val ) {
	wleasy_pwr = val;
}
function PageWlEasyReset() {
	wleasy_ch = null;
	wleasy_rate = null;
	wleasy_pwr = null;
}

// Page:Setting Wireless Simple IP Address
var wlsimple_dhcp;
function chkPageWlSimpleDhcp() {
	if( wlsimple_dhcp != undefined && wlsimple_dhcp != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlSimpleDhcp() {
	return wlsimple_dhcp;
}
function setPageWlSimpleDhcp( val ) {
	wlsimple_dhcp = val;
}

var wlsimple_ip1;
var wlsimple_ip2;
var wlsimple_ip3;
var wlsimple_ip4;
function chkPageWlSimpleIp() {
	if( wlsimple_ip1 != undefined && wlsimple_ip1 != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlSimpleIp1() {
	return wlsimple_ip1;
}
function getPageWlSimpleIp2() {
	return wlsimple_ip2;
}
function getPageWlSimpleIp3() {
	return wlsimple_ip3;
}
function getPageWlSimpleIp4() {
	return wlsimple_ip4;
}
function setPageWlSimpleIp( val1, val2, val3, val4 ) {
	wlsimple_ip1 = val1;
	wlsimple_ip2 = val2;
	wlsimple_ip3 = val3;
	wlsimple_ip4 = val4;
}

var wlsimple_sub1;
var wlsimple_sub2;
var wlsimple_sub3;
var wlsimple_sub4;
function chkPageWlSimpleSub() {
	if( wlsimple_sub1 != undefined && wlsimple_sub1 != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlSimpleSub1() {
	return wlsimple_sub1;
}
function getPageWlSimpleSub2() {
	return wlsimple_sub2;
}
function getPageWlSimpleSub3() {
	return wlsimple_sub3;
}
function getPageWlSimpleSub4() {
	return wlsimple_sub4;
}
function setPageWlSimpleSub( val1, val2, val3, val4 ) {
	wlsimple_sub1 = val1;
	wlsimple_sub2 = val2;
	wlsimple_sub3 = val3;
	wlsimple_sub4 = val4;
}

var wlsimple_gate1;
var wlsimple_gate2;
var wlsimple_gate3;
var wlsimple_gate4;
function chkPageWlSimpleGate() {
	if( wlsimple_gate1 != undefined && wlsimple_gate1 != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlSimpleGate1() {
	return wlsimple_gate1;
}
function getPageWlSimpleGate2() {
	return wlsimple_gate2;
}
function getPageWlSimpleGate3() {
	return wlsimple_gate3;
}
function getPageWlSimpleGate4() {
	return wlsimple_gate4;
}
function setPageWlSimpleGate( val1, val2, val3, val4 ) {
	wlsimple_gate1 = val1;
	wlsimple_gate2 = val2;
	wlsimple_gate3 = val3;
	wlsimple_gate4 = val4;
}

var wlsimple_dns;
function chkPageWlSimpleDns() {
	if( wlsimple_dns != undefined && wlsimple_dns != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlSimpleDns() {
	return wlsimple_dns;
}
function setPageWlSimpleDns( val ) {
	wlsimple_dns = val;
}

var wlsimple_dnsaddr1;
var wlsimple_dnsaddr2;
var wlsimple_dnsaddr3;
var wlsimple_dnsaddr4;
function chkPageWlSimpleDnsAddr() {
	if( wlsimple_dnsaddr1 != undefined && wlsimple_dnsaddr1 != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlSimpleDnsAddr1() {
	return wlsimple_dnsaddr1;
}
function getPageWlSimpleDnsAddr2() {
	return wlsimple_dnsaddr2;
}
function getPageWlSimpleDnsAddr3() {
	return wlsimple_dnsaddr3;
}
function getPageWlSimpleDnsAddr4() {
	return wlsimple_dnsaddr4;
}
function setPageWlSimpleDnsAddr( val1, val2, val3, val4 ) {
	wlsimple_dnsaddr1 = val1;
	wlsimple_dnsaddr2 = val2;
	wlsimple_dnsaddr3 = val3;
	wlsimple_dnsaddr4 = val4;
}
function PageWlSimpleSettingReset() {
	wlsimple_dhcp = null;
	wlsimple_ip1 = null;
	wlsimple_ip2 = null;
	wlsimple_ip3 = null;
	wlsimple_ip4 = null;
	wlsimple_sub1 = null;
	wlsimple_sub2 = null;
	wlsimple_sub3 = null;
	wlsimple_sub4 = null;
	wlsimple_gate1 = null;
	wlsimple_gate2 = null;
	wlsimple_gate3 = null;
	wlsimple_gate4 = null;
	wlsimple_dns = null;
	wlsimple_dnsaddr1 = null;
	wlsimple_dnsaddr2 = null;
	wlsimple_dnsaddr3 = null;
	wlsimple_dnsaddr4 = null;
}

// Page:Setting Wireless Simple Connection
var wlsimple_ssid;
function chkPageWlSimpleSsid() {
	if( wlsimple_ssid != undefined && wlsimple_ssid != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlSimpleSsid() {
	return wlsimple_ssid;
}
function setPageWlSimpleSsid( val ) {
	wlsimple_ssid = val;
}

var wlsimple_type;
function chkPageWlSimpleType() {
	if( wlsimple_type != undefined && wlsimple_type != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlSimpleType() {
	return wlsimple_type;
}
function setPageWlSimpleType( val ) {
	wlsimple_type = val;
}

var wlsimple_ch;
function chkPageWlSimpleCh() {
	if( wlsimple_ch != undefined && wlsimple_ch != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlSimpleCh() {
	return wlsimple_ch;
}
function setPageWlSimpleCh( val ) {
	wlsimple_ch = val;
}
var wlsimple_band;
var wlsimple_band_hyde;
function chkPageWlSimpleBand() {
	if( wlsimple_band != undefined && wlsimple_band != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlSimpleBand() {
	return wlsimple_band;
}
function getPageWlSimpleBandHyde() {
	return wlsimple_band_hyde;
}
function setPageWlSimpleBand( val, hyde ) {
	wlsimple_band = val;
	wlsimple_band_hyde = hyde;
}
var wlsimple_band5g;
var wlsimple_band5g_hyde;
function chkPageWlSimpleBand5G() {
	if( wlsimple_band5g != undefined && wlsimple_band5g != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlSimpleBand5G() {
	return wlsimple_band5g;
}
function getPageWlSimpleBand5GHyde() {
	return wlsimple_band5g_hyde;
}
function setPageWlSimpleBand5G( val, hyde ) {
	wlsimple_band5g = val;
	wlsimple_band5g_hyde = hyde;
}
var wlsimple_rate;
function chkPageWlSimpleRate() {
	if( wlsimple_rate != undefined && wlsimple_rate != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlSimpleRate() {
	return wlsimple_rate;
}
function setPageWlSimpleRate( val ) {
	wlsimple_rate = val;
}

var wlsimple_pwr;
function chkPageWlSimplePwr() {
	if( wlsimple_pwr != undefined && wlsimple_pwr != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlSimplePwr() {
	return wlsimple_pwr;
}
function setPageWlSimplePwr( val ) {
	wlsimple_pwr = val;
}
function PageWlSimpleConnectionReset() {
	wlsimple_ssid = null;
	wlsimple_type = null;
	wlsimple_ch = null;
	wlsimple_band = null;
	wlsimple_band_hyde = null;
	wlsimple_band5g = null;
	wlsimple_band5g_hyde = null;
	wlsimple_rate = null;
	wlsimple_pwr = null;
}

// Page:Setting Wireless Simple Security
var wlsimple_sec;
function chkPageWlSimpleSec() {
	if( wlsimple_sec != undefined && wlsimple_sec != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlSimpleSec() {
	return wlsimple_sec;
}
function setPageWlSimpleSec( val ) {
	wlsimple_sec = val;
}

// Page:Setting Wireless Simple Security
var wlsimple_enc;
function chkPageWlSimpleEnc() {
	if( wlsimple_enc != undefined && wlsimple_enc != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlSimpleEnc() {
	return wlsimple_enc;
}
function setPageWlSimpleEnc( val ) {
	wlsimple_enc = val;
}

var wlsimple_idx;
function chkPageWlSimpleIdx() {
	if( wlsimple_idx != undefined && wlsimple_idx != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlSimpleIdx() {
	return wlsimple_idx;
}
function setPageWlSimpleIdx( val ) {
	wlsimple_idx = val;
}

var wlsimple_key;
function chkPageWlSimpleKey() {
	if( wlsimple_key != undefined && wlsimple_key != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlSimpleKey() {
	return wlsimple_key;
}
function setPageWlSimpleKey( val ) {
	wlsimple_key = val;
}
function PageWlSimpleSecReset() {
	wlsimple_sec = null;
	wlsimple_idx = null;
	wlsimple_key = null;
}
// Simple (Bach)

// Page:Setting Wireless Prof1 IP Address
var wlprof1_dhcp;
function chkPageWlProf1Dhcp() {
	if( wlprof1_dhcp != undefined && wlprof1_dhcp != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf1Dhcp() {
	return wlprof1_dhcp;
}
function setPageWlProf1Dhcp( val ) {
	wlprof1_dhcp = val;
}

var wlprof1_usedigi;
function chkPageWlProf1UseDigi() {
	if( wlprof1_usedigi != undefined && wlprof1_usedigi != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf1UseDigi() {
	return wlprof1_usedigi;
}
function setPageWlProf1UseDigi( val ) {
	wlprof1_usedigi = val;
}

var wlprof1_ip1;
var wlprof1_ip2;
var wlprof1_ip3;
var wlprof1_ip4;
function chkPageWlProf1Ip() {
	if( wlprof1_ip1 != undefined && wlprof1_ip1 != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf1Ip1() {
	return wlprof1_ip1;
}
function getPageWlProf1Ip2() {
	return wlprof1_ip2;
}
function getPageWlProf1Ip3() {
	return wlprof1_ip3;
}
function getPageWlProf1Ip4() {
	return wlprof1_ip4;
}
function setPageWlProf1Ip( val1, val2, val3, val4 ) {
	wlprof1_ip1 = val1;
	wlprof1_ip2 = val2;
	wlprof1_ip3 = val3;
	wlprof1_ip4 = val4;
}

var wlprof1_sub1;
var wlprof1_sub2;
var wlprof1_sub3;
var wlprof1_sub4;
function chkPageWlProf1Sub() {
	if( wlprof1_sub1 != undefined && wlprof1_sub1 != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf1Sub1() {
	return wlprof1_sub1;
}
function getPageWlProf1Sub2() {
	return wlprof1_sub2;
}
function getPageWlProf1Sub3() {
	return wlprof1_sub3;
}
function getPageWlProf1Sub4() {
	return wlprof1_sub4;
}
function setPageWlProf1Sub( val1, val2, val3, val4 ) {
	wlprof1_sub1 = val1;
	wlprof1_sub2 = val2;
	wlprof1_sub3 = val3;
	wlprof1_sub4 = val4;
}

var wlprof1_gate1;
var wlprof1_gate2;
var wlprof1_gate3;
var wlprof1_gate4;
function chkPageWlProf1Gate() {
	if( wlprof1_gate1 != undefined && wlprof1_gate1 != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf1Gate1() {
	return wlprof1_gate1;
}
function getPageWlProf1Gate2() {
	return wlprof1_gate2;
}
function getPageWlProf1Gate3() {
	return wlprof1_gate3;
}
function getPageWlProf1Gate4() {
	return wlprof1_gate4;
}
function setPageWlProf1Gate( val1, val2, val3, val4 ) {
	wlprof1_gate1 = val1;
	wlprof1_gate2 = val2;
	wlprof1_gate3 = val3;
	wlprof1_gate4 = val4;
}
var wlprof1_dns;
function chkPageWlProf1Dns() {
	if( wlprof1_dns != undefined && wlprof1_dns != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf1Dns() {
	return wlprof1_dns;
}
function setPageWlProf1Dns( val ) {
	wlprof1_dns = val;
}

var wlprof1_dnsaddr1;
var wlprof1_dnsaddr2;
var wlprof1_dnsaddr3;
var wlprof1_dnsaddr4;
function chkPageWlProf1DnsAddr() {
	if( wlprof1_dnsaddr1 != undefined && wlprof1_dnsaddr1 != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf1DnsAddr1() {
	return wlprof1_dnsaddr1;
}
function getPageWlProf1DnsAddr2() {
	return wlprof1_dnsaddr2;
}
function getPageWlProf1DnsAddr3() {
	return wlprof1_dnsaddr3;
}
function getPageWlProf1DnsAddr4() {
	return wlprof1_dnsaddr4;
}
function setPageWlProf1DnsAddr( val1, val2, val3, val4 ) {
	wlprof1_dnsaddr1 = val1;
	wlprof1_dnsaddr2 = val2;
	wlprof1_dnsaddr3 = val3;
	wlprof1_dnsaddr4 = val4;
}
function PageWlProf1SettingReset() {
	wlprof1_dhcp = null;
	wlprof1_ip1 = null;
	wlprof1_ip2 = null;
	wlprof1_ip3 = null;
	wlprof1_ip4 = null;
	wlprof1_sub1 = null;
	wlprof1_sub2 = null;
	wlprof1_sub3 = null;
	wlprof1_sub4 = null;
	wlprof1_gate1 = null;
	wlprof1_gate2 = null;
	wlprof1_gate3 = null;
	wlprof1_gate4 = null;
	wlprof1_dns = null;
	wlprof1_dnsaddr1 = null;
	wlprof1_dnsaddr2 = null;
	wlprof1_dnsaddr3 = null;
	wlprof1_dnsaddr4 = null;
}

// Page:Setting Wireless Prof1 Connection
var wlprof1_ssid;
function chkPageWlProf1Ssid() {
	if( wlprof1_ssid != undefined && wlprof1_ssid != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf1Ssid() {
	return wlprof1_ssid;
}
function setPageWlProf1Ssid( val ) {
	wlprof1_ssid = val;
}

var wlprof1_type;
function chkPageWlProf1Type() {
	if( wlprof1_type != undefined && wlprof1_type != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf1Type() {
	return wlprof1_type;
}
function setPageWlProf1Type( val ) {
	wlprof1_type = val;
}

var wlprof1_ch;
function chkPageWlProf1Ch() {
	if( wlprof1_ch != undefined && wlprof1_ch != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf1Ch() {
	return wlprof1_ch;
}
function setPageWlProf1Ch( val ) {
	wlprof1_ch = val;
}
var wlprof1_band;
var wlprof1_band_hyde;
function chkPageWlProf1Band() {
	if( wlprof1_band != undefined && wlprof1_band != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf1Band() {
	return wlprof1_band;
}
function getPageWlProf1BandHyde() {
	return wlprof1_band_hyde;
}
function setPageWlProf1Band( val, hyde ) {
	wlprof1_band = val;
	wlprof1_band_hyde = hyde;
}
var wlprof1_band5g;
var wlprof1_band5g_hyde;
function chkPageWlProf1Band5G() {
	if( wlprof1_band5g != undefined && wlprof1_band5g != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf1Band5G() {
	return wlprof1_band5g;
}
function getPageWlProf1Band5GHyde() {
	return wlprof1_band5g_hyde;
}
function setPageWlProf1Band5G( val, hyde ) {
	wlprof1_band5g = val;
	wlprof1_band5g_hyde = hyde;
}
var wlprof1_rate;
function chkPageWlProf1Rate() {
	if( wlprof1_rate != undefined && wlprof1_rate != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf1Rate() {
	return wlprof1_rate;
}
function setPageWlProf1Rate( val ) {
	wlprof1_rate = val;
}

var wlprof1_pwr;
function chkPageWlProf1Pwr() {
	if( wlprof1_pwr != undefined && wlprof1_pwr != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf1Pwr() {
	return wlprof1_pwr;
}
function setPageWlProf1Pwr( val ) {
	wlprof1_pwr = val;
}
function PageWlProf1ConnectionReset() {
	wlprof1_ssid = null;
	wlprof1_type = null;
	wlprof1_ch = null;
	wlprof1_band = null;
	wlprof1_band_hyde = null;
	wlprof1_band5g = null;
	wlprof1_band5g_hyde = null;
	wlprof1_rate = null;
	wlprof1_pwr = null;
}

// Page:Setting Wireless Prof1 Security
var wlprof1_sec;
function chkPageWlProf1Sec() {
	if( wlprof1_sec != undefined && wlprof1_sec != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf1Sec() {
	return wlprof1_sec;
}
function setPageWlProf1Sec( val ) {
	wlprof1_sec = val;
}

var wlprof1_idx;
function chkPageWlProf1Idx() {
	if( wlprof1_idx != undefined && wlprof1_idx != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf1Idx() {
	return wlprof1_idx;
}
function setPageWlProf1Idx( val ) {
	wlprof1_idx = val;
}

var wlprof1_eaptype;
function chkPageWlProf1EAPType() {
	if( wlprof1_eaptype != undefined && wlprof1_eaptype != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf1EAPType() {
	return wlprof1_eaptype;
}
function setPageWlProf1EAPType( val ) {
	wlprof1_eaptype = val;
}

var wlprof1_uname;
function chkPageWlProf1UserName() {
	if( wlprof1_uname != undefined && wlprof1_uname != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf1UserName() {
	return wlprof1_uname;
}
function setPageWlProf1UserName( val ) {
	wlprof1_uname = val;
}

var wlprof1_pass;
function chkPageWlProf1Password() {
	if( wlprof1_pass != undefined && wlprof1_pass != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf1Password() {
	return wlprof1_pass;
}
function setPageWlProf1Password( val ) {
	wlprof1_pass = val;
}

// “dŽqØ–¾‘î•ñ
var wlprof1_digi;
function chkPageWlProf1Digi() {
	if ( wlprof1_digi != undefined && wlprof1_digi != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf1Digi() {
	return wlprof1_digi;
}
function setPageWlProf1Digi( val ) {
	wlprof1_digi = val;
}

var wlprof1_key;
function chkPageWlProf1Key() {
	if( wlprof1_key != undefined && wlprof1_key != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf1Key() {
	return wlprof1_key;
}
function setPageWlProf1Key( val ) {
	wlprof1_key = val;
}

var wlprof1_enc;
function chkPageWlProf1Encryption() {
	if( wlprof1_enc != undefined && wlprof1_enc != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf1Encryption() {
	return wlprof1_enc;
}
function setPageWlProf1Encryption( val ) {
	wlprof1_enc = val;
}

function PageWlProf1SecReset() {
	wlprof1_sec = null;
	wlprof1_idx = null;
	wlprof1_key = null;
	wlprof1_digi = null;
	wlprof1_eaptype = null;
	wlprof1_uname = null;
	wlprof1_pass = null;
	wlprof1_usedigi = null;
	wlprof1_enc = null;
	wlprof1_eaptype = null;
}


// Page:Setting Wireless Prof2 IP Address
var wlprof2_dhcp;
function chkPageWlProf2Dhcp() {
	if( wlprof2_dhcp != undefined && wlprof2_dhcp != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf2Dhcp() {
	return wlprof2_dhcp;
}
function setPageWlProf2Dhcp( val ) {
	wlprof2_dhcp = val;
}

var wlprof2_usedigi;
function chkPageWlProf2UseDigi() {
	if( wlprof2_usedigi != undefined && wlprof2_usedigi != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf2UseDigi() {
	return wlprof2_usedigi;
}
function setPageWlProf2UseDigi( val ) {
	wlprof2_usedigi = val;
}


var wlprof2_ip1;
var wlprof2_ip2;
var wlprof2_ip3;
var wlprof2_ip4;
function chkPageWlProf2Ip() {
	if( wlprof2_ip1 != undefined && wlprof2_ip1 != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf2Ip1() {
	return wlprof2_ip1;
}
function getPageWlProf2Ip2() {
	return wlprof2_ip2;
}
function getPageWlProf2Ip3() {
	return wlprof2_ip3;
}
function getPageWlProf2Ip4() {
	return wlprof2_ip4;
}
function setPageWlProf2Ip( val1, val2, val3, val4 ) {
	wlprof2_ip1 = val1;
	wlprof2_ip2 = val2;
	wlprof2_ip3 = val3;
	wlprof2_ip4 = val4;
}

var wlprof2_sub1;
var wlprof2_sub2;
var wlprof2_sub3;
var wlprof2_sub4;
function chkPageWlProf2Sub() {
	if( wlprof2_sub1 != undefined && wlprof2_sub1 != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf2Sub1() {
	return wlprof2_sub1;
}
function getPageWlProf2Sub2() {
	return wlprof2_sub2;
}
function getPageWlProf2Sub3() {
	return wlprof2_sub3;
}
function getPageWlProf2Sub4() {
	return wlprof2_sub4;
}
function setPageWlProf2Sub( val1, val2, val3, val4 ) {
	wlprof2_sub1 = val1;
	wlprof2_sub2 = val2;
	wlprof2_sub3 = val3;
	wlprof2_sub4 = val4;
}

var wlprof2_gate1;
var wlprof2_gate2;
var wlprof2_gate3;
var wlprof2_gate4;
function chkPageWlProf2Gate() {
	if( wlprof2_gate1 != undefined && wlprof2_gate1 != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf2Gate1() {
	return wlprof2_gate1;
}
function getPageWlProf2Gate2() {
	return wlprof2_gate2;
}
function getPageWlProf2Gate3() {
	return wlprof2_gate3;
}
function getPageWlProf2Gate4() {
	return wlprof2_gate4;
}
function setPageWlProf2Gate( val1, val2, val3, val4 ) {
	wlprof2_gate1 = val1;
	wlprof2_gate2 = val2;
	wlprof2_gate3 = val3;
	wlprof2_gate4 = val4;
}
var wlprof2_dns;
function chkPageWlProf2Dns() {
	if( wlprof2_dns != undefined && wlprof2_dns != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf2Dns() {
	return wlprof2_dns;
}
function setPageWlProf2Dns( val ) {
	wlprof2_dns = val;
}

var wlprof2_dnsaddr1;
var wlprof2_dnsaddr2;
var wlprof2_dnsaddr3;
var wlprof2_dnsaddr4;
function chkPageWlProf2DnsAddr() {
	if( wlprof2_dnsaddr1 != undefined && wlprof2_dnsaddr1 != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf2DnsAddr1() {
	return wlprof2_dnsaddr1;
}
function getPageWlProf2DnsAddr2() {
	return wlprof2_dnsaddr2;
}
function getPageWlProf2DnsAddr3() {
	return wlprof2_dnsaddr3;
}
function getPageWlProf2DnsAddr4() {
	return wlprof2_dnsaddr4;
}
function setPageWlProf2DnsAddr( val1, val2, val3, val4 ) {
	wlprof2_dnsaddr1 = val1;
	wlprof2_dnsaddr2 = val2;
	wlprof2_dnsaddr3 = val3;
	wlprof2_dnsaddr4 = val4;
}
function PageWlProf2SettingReset() {
	wlprof2_dhcp = null;
	wlprof2_ip1 = null;
	wlprof2_ip2 = null;
	wlprof2_ip3 = null;
	wlprof2_ip4 = null;
	wlprof2_sub1 = null;
	wlprof2_sub2 = null;
	wlprof2_sub3 = null;
	wlprof2_sub4 = null;
	wlprof2_gate1 = null;
	wlprof2_gate2 = null;
	wlprof2_gate3 = null;
	wlprof2_gate4 = null;
	wlprof2_dns = null;
	wlprof2_dnsaddr1 = null;
	wlprof2_dnsaddr2 = null;
	wlprof2_dnsaddr3 = null;
	wlprof2_dnsaddr4 = null;
}

// Page:Setting Wireless Prof2 Connection
var wlprof2_ssid;
function chkPageWlProf2Ssid() {
	if( wlprof2_ssid != undefined && wlprof2_ssid != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf2Ssid() {
	return wlprof2_ssid;
}
function setPageWlProf2Ssid( val ) {
	wlprof2_ssid = val;
}

var wlprof2_type;
function chkPageWlProf2Type() {
	if( wlprof2_type != undefined && wlprof2_type != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf2Type() {
	return wlprof2_type;
}
function setPageWlProf2Type( val ) {
	wlprof2_type = val;
}

var wlprof2_ch;
function chkPageWlProf2Ch() {
	if( wlprof2_ch != undefined && wlprof2_ch != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf2Ch() {
	return wlprof2_ch;
}
function setPageWlProf2Ch( val ) {
	wlprof2_ch = val;
}
var wlprof2_band;
var wlprof2_band_hyde;
function chkPageWlProf2Band() {
	if( wlprof2_band != undefined && wlprof2_band != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf2Band() {
	return wlprof2_band;
}
function getPageWlProf2BandHyde() {
	return wlprof2_band_hyde;
}
function setPageWlProf2Band( val, hyde ) {
	wlprof2_band = val;
	wlprof2_band_hyde = hyde;
}
var wlprof2_band5g;
var wlprof2_band5g_hyde;
function chkPageWlProf2Band5G() {
	if( wlprof2_band5g != undefined && wlprof2_band5g != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf2Band5G() {
	return wlprof2_band5g;
}
function getPageWlProf2Band5GHyde() {
	return wlprof2_band5g_hyde;
}
function setPageWlProf2Band5G( val, hyde ) {
	wlprof2_band5g = val;
	wlprof2_band5g_hyde = hyde;
}
var wlprof2_rate;
function chkPageWlProf2Rate() {
	if( wlprof2_rate != undefined && wlprof2_rate != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf2Rate() {
	return wlprof2_rate;
}
function setPageWlProf2Rate( val ) {
	wlprof2_rate = val;
}

var wlprof2_pwr;
function chkPageWlProf2Pwr() {
	if( wlprof2_pwr != undefined && wlprof2_pwr != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf2Pwr() {
	return wlprof2_pwr;
}
function setPageWlProf2Pwr( val ) {
	wlprof2_pwr = val;
}
// Page:Setting Wireless Prof2 Connection
function PageWlProf2ConnectionReset() {
	wlprof2_ssid = null;
	wlprof2_type = null;
	wlprof2_ch = null;
	wlprof2_band = null;
	wlprof2_band_hyde = null;
	wlprof2_band5g = null;
	wlprof2_band5g_hyde = null;
	wlprof2_rate = null;
	wlprof2_pwr = null;
}

// Page:Setting Wireless Prof2 Security
var wlprof2_sec;
function chkPageWlProf2Sec() {
	if( wlprof2_sec != undefined && wlprof2_sec != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf2Sec() {
	return wlprof2_sec;
}
function setPageWlProf2Sec( val ) {
	wlprof2_sec = val;
}

var wlprof2_idx;
function chkPageWlProf2Idx() {
	if( wlprof2_idx != undefined && wlprof2_idx != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf2Idx() {
	return wlprof2_idx;
}
function setPageWlProf2Idx( val ) {
	wlprof2_idx = val;
}

var wlprof2_eaptype;
function chkPageWlProf2EAPType() {
	if( wlprof2_eaptype != undefined && wlprof2_eaptype != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf2EAPType() {
	return wlprof2_eaptype;
}
function setPageWlProf2EAPType( val ) {
	wlprof2_eaptype = val;
}

var wlprof2_uname;
function chkPageWlProf2UserName() {
	if( wlprof2_uname != undefined && wlprof2_uname != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf2UserName() {
	return wlprof2_uname;
}
function setPageWlProf2UserName( val ) {
	wlprof2_uname = val;
}

var wlprof2_pass;
function chkPageWlProf2Password() {
	if( wlprof2_pass != undefined && wlprof2_pass != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf2Password() {
	return wlprof2_pass;
}
function setPageWlProf2Password( val ) {
	wlprof2_pass = val;
}

// “dŽqØ–¾‘î•ñ
var wlprof2_digi;
function chkPageWlProf2Digi() {
	if ( wlprof2_digi != undefined && wlprof2_digi != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf2Digi() {
	return wlprof2_digi;
}
function setPageWlProf2Digi( val ) {
	wlprof2_digi = val;
}

var wlprof2_key;
function chkPageWlProf2Key() {
	if( wlprof2_key != undefined && wlprof2_key != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf2Key() {
	return wlprof2_key;
}
function setPageWlProf2Key( val ) {
	wlprof2_key = val;
}

var wlprof2_enc;
function chkPageWlProf2Encryption() {
	if( wlprof2_enc != undefined && wlprof2_enc != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageWlProf2Encryption() {
	return wlprof2_enc;
}
function setPageWlProf2Encryption( val ) {
	wlprof2_enc = val;
}

function PageWlProf2SecReset() {
	wlprof2_sec = null;
	wlprof2_idx = null;
	wlprof2_key = null;
	wlprof2_digi = null;
	wlprof2_eaptype = null;
	wlprof2_uname = null;
	wlprof2_pass = null;
	wlprof2_usedigi = null;
	wlprof2_enc = null;
	wlprof2_eaptype = null;
}

// AllPage Reset
function AllReset() {
	PagePortReset();
	PageInfoReset();
	PageSrvcReset();
	PageMailReset();
	PageNameReset();
	PageTopReset();
	PageWdProfReset();
	PageWlEasyReset();
	//PageWlSimpleReset();	// [Add] MM
	PageWlProf1SettingReset();
	PageWlProf1ConnectionReset();
	PageWlProf1SecReset();
	PageWlProf2SettingReset();
	PageWlProf2ConnectionReset();
	PageWlProf2SecReset();
//	PageWlSimpleSettingReset();		// [Add] MM
//	PageWlSimpleConnectionReset();	// [Add] MM
	PageWlSimpleSecReset();			// [Add] MM
}

// AlertMail: TestMail‘—M
var CGI_URL='/pjctrl?';

// 16i”•ÏŠ·(2Œ…A0–„‚ß)‚µ‚½ •¶Žš—ñ‚ð•Ô‚·
function chgDec2HexStr( num ) {
	var rtn = '';
	// 16i”•ÏŠ·
	rtn = num.toString(16);
	// 0 –„‚ß
	if( rtn.length == 1 ) {
		rtn = '0' + rtn;
	}
	return rtn;
}



// AlertMail Used Ý’è
var tm_used;
var tm_sender = '';
var tm_smtp = '';
var tm_recip1 = '';
var tm_recip2 = '';
var tm_recip3 = '';


function setMailUsed( used, sender, smtp, recip1, recip2, recip3 ) {
	tm_used = used.checked;
	tm_sender = sender.value;
	tm_smtp = smtp.value;
	tm_recip1 = recip1.value;
	tm_recip2 = recip2.value;
	tm_recip3 = recip3.value;

	// 098-56. LAN ALERT MAIL SET
	var req ; //= 'D=%07%03%B1%00%00%02%37';
	var val = 0;

	if( tm_used == false ) {
		val = 0;
	} else {
		val = 1;
	}
	setSenderAddr();

}

// Sender's Address Ý’è
function setSenderAddr() {
	// 098-57. LAN SENDER'S ADDRESS SET
	var req ; //= 'D=%43%03%B1%00%00%3E%38';
	// Sender's Address •¶Žš—ñ‚ðA•¶ŽšƒR[ƒh‚É•ÏŠ·
	var addr = tm_sender;

	req = top.makeCgiParamReq( OPC_LAN_SENDER_ADD_CGI, 0, SET_STRING, addr );


	var myUrl = CGI_URL + req;

	$.ajax({
	type: 'POST',
	url: myUrl,
	dataType: 'json',
	success: function (data) {
		var sendflg = false;
		if((data[0] & 0x80) == 0 ) {
			if( data[6] == 0 ) {
				sendflg = true;
			}
		}
		if( sendflg == true ) {
			setSmtpServerName();
		} else {
			sendTestMailFailed();
		}
	},
	error: function (e) {
		sendTestMailFailed();
		var dummyURL = CGI_URL + 'Z';
		top.dummy.location.replace( dummyURL );
	}
	});
}

// SMTP Server Name Ý’è
function setSmtpServerName() {
	// 098-58. LAN SMTP SERVER NAME SET
	var req ; //= 'D=%43%03%B1%00%00%3E%39';

	// SMTP Server Name •¶Žš—ñ‚ðA•¶ŽšƒR[ƒh‚É•ÏŠ·
	var smtp = tm_smtp;

	req = top.makeCgiParamReq( OPC_LAN_SMTP_SERVER_NAME_CGI, 0, SET_STRING, smtp );

	var myUrl = CGI_URL + req;

	$.ajax({
	type: 'POST',
	url: myUrl,
	dataType: 'json',
	success: function (data) {
		var sendflg = false;
		if((data[0] & 0x80) == 0 ) {
			if( data[6] == 0 ) {
				sendflg = true;
			}
		}
		if( sendflg == true ) {
			setRecipiAddr1();
		} else {
			sendTestMailFailed();
		}
	},
	error: function (e) {
		sendTestMailFailed();
		var dummyURL = CGI_URL + 'Z';
		top.dummy.location.replace( dummyURL );
	}
	});
}


// Recipient's Address 1 Ý’è
function setRecipiAddr1() {
	// 098-59. LAN RECIPIENT'S ADDRESS SET
	var req ; //= 'D=%44%03%B1%00%00%3F%3A%00';
	// Sender's Address •¶Žš—ñ‚ðA•¶ŽšƒR[ƒh‚É•ÏŠ·
	var addr = tm_recip1;

	req = top.makeCgiParamReq( OPC_LAN_RECIPIENT_ADD_CGI, 0, SET_STRING, addr );

	var myUrl = CGI_URL + req;

	$.ajax({
	type: 'POST',
	url: myUrl,
	dataType: 'json',
	success: function (data) {
		var sendflg = false;
		if((data[0] & 0x80) == 0 ) {
			if( data[7] == 0 ) {
				sendflg = true;
			}
		}
		if( sendflg == true ) {
			setRecipiAddr2();
		} else {
			sendTestMailFailed();
		}
	},
	error: function (e) {
		sendTestMailFailed();
		var dummyURL = CGI_URL + 'Z';
		top.dummy.location.replace( dummyURL );
	}
	});
}


// Recipient's Address 2 Ý’è
function setRecipiAddr2() {
	// 098-59. LAN RECIPIENT'S ADDRESS SET
	var req ; //= 'D=%44%03%B1%00%00%3F%3A%01';

	// Sender's Address •¶Žš—ñ‚ðA•¶ŽšƒR[ƒh‚É•ÏŠ·
	var addr = tm_recip2;

	req = top.makeCgiParamReq( OPC_LAN_RECIPIENT_ADD_CGI, 0, SET_STRING, tm_recip2 );

	var myUrl = CGI_URL + req;

	$.ajax({
	type: 'POST',
	url: myUrl,
	dataType: 'json',
	success: function (data) {
		var sendflg = false;
		if((data[0] & 0x80) == 0 ) {
			if( data[7] == 0 ) {
				sendflg = true;
			}
		}
		if( sendflg == true ) {
			setRecipiAddr3();
		} else {
			sendTestMailFailed();
		}
	},
	error: function (e) {
		sendTestMailFailed();
		var dummyURL = CGI_URL + 'Z';
		top.dummy.location.replace( dummyURL );
	}
	});
}


// Recipient's Address 3 Ý’è
function setRecipiAddr3( recip3 ) {
	// 098-59. LAN RECIPIENT'S ADDRESS SET
	var req ; //= 'D=%44%03%B1%00%00%3F%3A%02';


	// Sender's Address •¶Žš—ñ‚ðA•¶ŽšƒR[ƒh‚É•ÏŠ·
	var addr = tm_recip3;

	req = top.makeCgiParamReq( OPC_LAN_RECIPIENT_ADD_CGI, 0, SET_STRING, tm_recip3 );

	var myUrl = CGI_URL + req;

	$.ajax({
	type: 'POST',
	url: myUrl,
	dataType: 'json',
	success: function (data) {
		var sendflg = false;
		if((data[0] & 0x80) == 0 ) {
			if( data[7] == 0 ) {
				sendflg = true;
			}
		}
		if( sendflg == true ) {
			actTestMail();
		} else {
			sendTestMailFailed();
		}
	},
	error: function (e) {
		sendTestMailFailed();
		var dummyURL = CGI_URL + 'Z';
		top.dummy.location.replace( dummyURL );
	}
	});
}

function actTestMail() {
	// 109. TEST MAIL SEND
	var req ; //= 'D=%05%03%B5%00%00%00';

	req = top.makeCgiParamReq( OPC_LAN_MAIL_SEND_CGI, 0, SET_VALUE, 0 );


	var myUrl = CGI_URL + req;

	$.ajax({
	type: 'POST',
	url: myUrl,
	dataType: 'json',
	success: function (data) {
		// ˆ—“à—e
		if((data[0] & 0x80) == 0 ) {
			var msg = '';
			if( data[5] == 0 ) {
				msg = "SENT THE TEST MESSAGE.";
			} else {
				msg = "FAILED TO SEND A MESSAGE.";
			}
			top.consoleN.alert(msg);
			top.consoleN.document.body.style.cursor = 'auto';
			top.power.document.body.style.cursor = 'auto';
			top.power.setFrmPwrLinkFlg( true );
			top.consoleN.rsltTestMail();
		}
	},
	error: function (e) {
		sendTestMailFailed();
		var dummyURL = CGI_URL + 'Z';
		top.dummy.location.replace( dummyURL );
	}
	});
}

function sendTestMailFailed() {
	top.consoleN.alert("FAILED TO SEND A MESSAGE.");
	top.consoleN.document.body.style.cursor = 'auto';
	top.power.document.body.style.cursor = 'auto';
	top.power.setFrmPwrLinkFlg( true );
	top.consoleN.rsltTestMail();
}

var refresh = false;
function setRefresh( flg ) {
	refresh = flg;
}

function actRefresh() {
	if( refresh == true ) {
		top.consoleN.refresh();
	}
}

// Crestron Enable
var CrestronEnable;
function chkPageCrestronEnable() {
	if( CrestronEnable != undefined && CrestronEnable != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageCrestronEnable() {
	return CrestronEnable;
}
function setPageCrestronEnable( val ) {
	CrestronEnable = val;
}

// Crestron IP Addr
var CrestronIp1;
var CrestronIp2;
var CrestronIp3;
var CrestronIp4;
function chkPageCrestronIp() {
	if( CrestronIp1 != undefined && CrestronIp1 != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageCrestronIp1() {
	return CrestronIp1;
}
function getPageCrestronIp2() {
	return CrestronIp2;
}
function getPageCrestronIp3() {
	return CrestronIp3;
}
function getPageCrestronIp4() {
	return CrestronIp4;
}
function setPageCrestronIp( val1, val2, val3, val4 ) {
	CrestronIp1 = val1;
	CrestronIp2 = val2;
	CrestronIp3 = val3;
	CrestronIp4 = val4;
}

// Crestron IP ID
var CrestronIpId;
function chkPageCrestronIpId() {
	if( CrestronIpId != undefined && CrestronIpId != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageCrestronIpId() {
	return CrestronIpId;
}
function setPageCrestronIpId( val ) {
	CrestronIpId = val;
}

// Crestron RoomView Enable
var CrestronRoomViewEnable;
function chkPageCrestronRoomViewEnable() {
	if( CrestronRoomViewEnable != undefined && CrestronRoomViewEnable != null ) {
		return true;
	} else {
		return false;
	}
}
function getPageCrestronRoomViewEnable() {
	return CrestronRoomViewEnable;
}
function setPageCrestronRoomViewEnable( val ) {
	CrestronRoomViewEnable = val;
}


// Crestron Page Reset
function PageCrestronReset() {
	CrestronEnable = null;
	CrestronIp1 = null;
	CrestronIp2 = null;
	CrestronIp3 = null;
	CrestronIp4 = null;
	CrestronIpId = null;
	CrestronRoomViewEnable = null;
}
/*---------------------------------------------------------
/*  CGI Request Data Create Function
/*-------------------------------------------------------*/
function makeCgiParamReq( opcode, subcode, cmdtype, param ) {

	var Req;
	var Opcode = String(opcode);
	var Type = String(cmdtype);
	var Subcode = String(subcode);
	var cks;

	if( param != null ) {
		var Param = String(param);
		var ParamSize = Param.length ;

		Req = '%' + Opcode + '%' + Subcode + '%' + Type + '%' + ParamSize + '%' + Param + '%';
	}
	else {
		Req = '%' + Opcode + '%' + Subcode + '%' + Type + '%';
	}

	Req = String(Req.length) + Req;

	cks = 0;
	for(i = 0 ; i<Req.length; i++){
		cks += Req.charCodeAt(i);
	}

	Req = 'D=%' + Req + String(cks & 0xff);

	Req = encodeURIComponent(Req);

	return Req;
}

var serial_total_last2byte = 0;
var serial_last34byte = 0;
function getSerialNum() {
	var req = '';

	serial_total_last2byte = 0;
	serial_last34byte = 0;

	// 305-2. VERSION INFORMATION REQUEST (Serial Number)[%07%00%BF%00%00%02%01%06]
	req =  top.makeCgiParamReq( OPC_INFO_SERIAL_NUMBER_CGI, 0, GET_STRING, null );

	var myUrl = CGI_URL + req;

	$.ajax({
	type: 'POST',
	url: myUrl,
	dataType: 'json',
	success: function (data) {
		getSerialNumCb(data);
	},
	error: function (XMLHttpRequest, textStatus, errorThrown) {
//		alert("NETWORK ERROR: REQUEST STATUS=[" + XMLHttpRequest.status + "], AJAX STATUS=[" + textStatus + "]");
		var dummyURL = CGI_URL + 'Z';
		top.dummy.location.replace( dummyURL );
	}
	});
}

function getSerialNumCb(data) {
	if((data[0]) == 0x01 ) {
		var datsize = data[1];
		var work = '';
		var serial_total = 0;

		// •¶Žš—ñ•ÏŠ·
		for( i = 0; i < datsize; i++ ) {
			if( data[2+i] != 0 ) {
				work += String.fromCharCode( data[2+i] );
				serial_total += parseInt( data[2+i] );
			} else {
				break;
			}
		}

		if( work.length >= 4 )
		{	/* ƒVƒŠƒAƒ‹”Ô†‚ª‚SŒ…ˆÈã‚ ‚éê‡AƒVƒŠƒAƒ‹”Ô†‚Ì‰ºˆÊ3,4Byte–Ú‚ð MASK ’l‚Æ‚·‚é */
			serial_last34byte = (parseInt( work.charCodeAt( work.length - 4 )) << 8) | parseInt(work.charCodeAt( work.length - 3 ));
		}
		else
		{	/* ƒVƒŠƒAƒ‹”Ô†‚ª‚SŒ…–¢–ž‚Ìê‡AMASK ’l‚Í 0000H ‚Æ‚·‚é */
			serial_last34byte = 0;
		}
		// serial number ‘˜a‚Ì‰ºˆÊ2byteŽæ“¾
		serial_total_last2byte = serial_total & 0xFFFF;
	}
}

function makePassCmd( pass_str ) {
	var pass = '';
	var tmp = 0;
	var i;

	for( i = 0; i < pass_str.length; i++ ) {
		if( ( i % 2) == 0 ) {
			tmp = (parseInt(pass_str.charCodeAt(i)) << 8);
		}

		if(( i > 0 ) && ( ( i % 2 ) == 1 )) {
		    tmp = tmp | parseInt(pass_str.charCodeAt(i));
		    tmp = tmp ^ serial_last34byte;
		    tmp = tmp ^ serial_total_last2byte;
		    tmp = tmp ^ serial_last34byte;
			pass += chgDec2HexStr( tmp >> 8 );
			pass += chgDec2HexStr( 0xff & tmp );
			tmp = 0;
		}
	}

	for( ; i < 32; i++ ) {
		if(( i % 2 ) == 1 ) {
			tmp = tmp | 0;
		    tmp = tmp ^ serial_last34byte;
		    tmp = tmp ^ serial_total_last2byte;
		    tmp = tmp ^ serial_last34byte;
			pass += chgDec2HexStr( tmp >> 8 );
			pass += chgDec2HexStr( 0xff & tmp );
			tmp = 0;
		}
	}

	return pass;
}

function chkPassString( pass ) {
	var i;
	var str = '';

	if( pass == '' ) {
		return false;
	}

	for( i = 0; i < pass.length; i++ ) {
		str = pass.charAt(i);
		if(( str.match(/[^0-9A-Za-z]+/) != null )) {
			return false;
		}
	}

	return true;
}
