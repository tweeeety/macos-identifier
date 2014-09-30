
var MacOSIdentifier = (function() {
  var constructor = function() {
  	this.hash = {
  		'10.0' : 'Cheetah',
  		'10.1' : 'Puma',
  		'10.2' : 'Jaguar',
  		'10.3' : 'Panther',
  		'10.4' : 'Tiger',
  		'10.5' : 'Leopard',
  		'10.6' : 'Snow Leopard',
  		'10.7' : 'Lion',
  		'10.8' : 'Mountain Lion',
  		'10.9' : 'Mavericks',
  		'10.10' : 'Yosemite'
  	}
  };
  constructor.prototype.judgeVer = function(ua){
	//var ua = window.navigator.userAgent;
	// 最小マッチ
	var osStr = ua.match(/.*\(.+((:?Mac).+?)\).*/);
	if( !osStr ) { return null };
	//console.log(osStr);
	var tmp = osStr[1];
	//console.log(ua);
	//console.log(tmp);

    var tmps = tmp.split(";");
    //console.log(tmps);

    var osVerStr = tmps[0];
	var osVer = osVerStr.match(/.*(\d{2}(:?[\.|\_]+)\d+)(:?[\.|\_]+.*)?/);

    if( !osVer ) { return null };
	
	return (osVer[1]? osVer[1] : null);
  }
  constructor.prototype.formatVer = function(str) {
    var newStr = str.replace('_', '.');
    var newStrs = newStr.split('.');
    return newStrs[0] + '.' + newStrs[1];
  } 
  constructor.prototype.ver2Name = function(ver) {
  	//console.log(this.hash);
    return this.hash[ver] || null;
  }
  constructor.prototype.judge = function(ua) {
  	var osVer = this.judgeVer(ua);
  	//console.log(osVer);

  	if( !osVer ) { return undefined };
  	osVer = this.formatVer(osVer);
  	//console.log(osVer);

  	var codeName = this.ver2Name(osVer);
  	return codeName || undefined;
  }
  return constructor;
})();