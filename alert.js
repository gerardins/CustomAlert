	/**
	 * Created by Elvis Konjoh 
	 * email selabielvis@gmail.com
	 *
	**/

var alertConfig={
			boxBgClass:"",//Background class
			boxBgColor:"",
			boxBtnCloseClass:"",//Button close class
};
/**
 * created by Konjoh Elvis
 * email selabielvis@gmail.com
 *
 */
 
window.alert = function(alertMessage,title)// On  declare la fonction qui va redesigner l'alerte de base en testant s'il s'agit bien d'une fenêtre alert()
{	
		if(title==undefined)
		 title="Alert";
		var _body = document.getElementsByTagName('body') [0];
        var _layer = document.createElement('div');
        var _box = document.createElement('div');
        var _box_title = document.createElement('h1');
        var _box_text = document.createElement('p');
        var _title = document.createTextNode(title);
        var _text = document.createTextNode(alertMessage);
        var _btn_text = document.createTextNode('OK');
        var _btn =document.createElement('button');
        var _close_btn = document.createElement('span');
        var _close_icon = document.createTextNode(String.fromCharCode(215));
        
		
        _close_btn.appendChild(_close_icon);
        _box_title.appendChild(_title);
        _box_title.appendChild(_close_btn);
		
		if(typeof(alertMessage)=="string")
         _box_text.innerHTML=HTMLentities(alertMessage);
		else
		   _box_text.innerHTML=alertMessage;
		  
        _btn.appendChild(_btn_text);
        
        _box.appendChild(_box_title);
        _box.appendChild(_box_text);
        _box.appendChild(_btn);
        _body.appendChild(_box);
        _body.appendChild(_layer);
        // Background layer image
        var _bg_layer_img = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAFoEvQfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDY2RDlEMDc2NkU3MTFFMkFBQjJEN0JEQ0M0NjM3Q0IiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDY2RDlEMDg2NkU3MTFFMkFBQjJEN0JEQ0M0NjM3Q0IiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NjZEOUQwNTY2RTcxMUUyQUFCMkQ3QkRDQzQ2MzdDQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NjZEOUQwNjY2RTcxMUUyQUFCMkQ3QkRDQzQ2MzdDQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvElfFoAAAANSURBVHjaY2BgYPAFAABSAE5KPdTrAAAAAElFTkSuQmCC';
        // Set layer style
        _layer.setAttribute('style','z-index:9998;position:fixed;height:100%;width:100%;top:0;left:0;background: url(data:image/png;base64,'+_bg_layer_img+') repeat top left');
        
        // Set box class for style
		if( alertConfig.boxBgClass!=undefined && alertConfig.boxBgClass !="" )
			_box.className='alert_box '+alertConfig.boxBgClass;
		else
			_box.className = 'alert_box';
		
		var _boxBgColor="ghostwhite";
		if(alertConfig.boxBgColor!=undefined && alertConfig.boxBgColor !="")
			_boxBgColor=alertConfig.boxBgColor;
        // Set box position
        _box.setAttribute('style', 'background-color:'+_boxBgColor+';position:absolute;z-index:9999;top:'+parseInt((window.innerHeight/2)-_box.offsetHeight)+'px;left:'+parseInt((window.innerWidth/2)-(_box.offsetWidth/2))+'px;');
        
		//set btn class
		if(alertConfig.boxBtnCloseClass!=undefined && alertConfig.boxBtnCloseClass !="" )
			_btn.className=alertConfig.boxBtnCloseClass;
		else
			_btn.className="button";
        // Layer on click event
        _layer.addEventListener("click", function(){
            _box.className = _box.className+' alert_box_important';
            setTimeout(function(){
					if( alertConfig.boxBgClass!=undefined && alertConfig.boxBgClass !="" )
						_box.className='alert_box '+alertConfig.boxBgClass;
					else
						_box.className = 'alert_box';
            },100);
        }, false);
        
        var urlToGo = null;
        
        if(typeof event != "undefined" && event.type == 'click'){
            urlToGo = event.target.origin;
            event.preventDefault();
        } else if(typeof event != "undefined" && event.type == 'submit'){
            urlToGo = event.target.action;
            event.preventDefault();
        }
        
        // Button on click event
        _btn.addEventListener("click", function(){
            _body.removeChild(_box);
            _body.removeChild(_layer);
            if(typeof urlToGo == 'string'){
                window.location.href = urlToGo;
            }
			
        }, false);
        
        // Window resize event
        window.onresize = function(event) {
            // Set box position
			_box.setAttribute('style', 'background-color:'+_boxBgColor+';position:absolute;z-index:9999;top:'+parseInt((window.innerHeight/2)-_box.offsetHeight)+'px;left:'+parseInt((window.innerWidth/2)-(_box.offsetWidth/2))+'px;');
        }
        
        // Document keypress event
        document.onkeypress = function(event) {
            if(event.keyCode == 13){
                _body.removeChild(_box);
                _body.removeChild(_layer);
                if(typeof urlToGo == 'string'){
                    window.location.href = urlToGo;
                }
            }
        }
        
        _close_btn.addEventListener("click",function(){
            _body.removeChild(_box);
            _body.removeChild(_layer);
			
        }, false);
        
}

function HTMLentities(texte) {
	texte = texte.replace(/˜/g,'&tilde;'); // 152 98
	texte = texte.replace(/™/g,'&trade;'); // 153 99
	texte = texte.replace(/š/g,'&scaron;'); // 154 9A
	texte = texte.replace(/›/g,'&rsaquo;'); // 155 9B
	texte = texte.replace(/œ/g,'&oelig;'); // 156 9C
	texte = texte.replace(/ž/g,'&#382;'); // 158 9E
	texte = texte.replace(/Ÿ/g,'&Yuml;'); // 159 9F
	texte = texte.replace(/¡/g,'&iexcl;'); // 161 A1
	texte = texte.replace(/¢/g,'&cent;'); // 162 A2
	texte = texte.replace(/£/g,'&pound;'); // 163 A3
	texte = texte.replace(/¥/g,'&yen;'); // 165 A5
	texte = texte.replace(/¦/g,'&brvbar;'); // 166 A6
	texte = texte.replace(/§/g,'&sect;'); // 167 A7
	texte = texte.replace(/¨/g,'&uml;'); // 168 A8
	texte = texte.replace(/©/g,'&copy;'); // 169 A9
	texte = texte.replace(/ª/g,'&ordf;'); // 170 AA
	texte = texte.replace(/«/g,'&laquo;'); // 171 AB
	texte = texte.replace(/¬/g,'&not;'); // 172 AC
	texte = texte.replace(/­/g,'&shy;'); // 173 AD
	texte = texte.replace(/®/g,'&reg;'); // 174 AE
	texte = texte.replace(/¯/g,'&macr;'); // 175 AF
	texte = texte.replace(/°/g,'&deg;'); // 176 B0
	texte = texte.replace(/±/g,'&plusmn;'); // 177 B1
	texte = texte.replace(/²/g,'&sup2;'); // 178 B2
	texte = texte.replace(/³/g,'&sup3;'); // 179 B3
	texte = texte.replace(/´/g,'&acute;'); // 180 B4
	texte = texte.replace(/µ/g,'&micro;'); // 181 B5
	texte = texte.replace(/¶/g,'&para'); // 182 B6
	texte = texte.replace(/·/g,'&middot;'); // 183 B7
	texte = texte.replace(/¸/g,'&cedil;'); // 184 B8
	texte = texte.replace(/¹/g,'&sup1;'); // 185 B9
	texte = texte.replace(/º/g,'&ordm;'); // 186 BA
	texte = texte.replace(/»/g,'&raquo;'); // 187 BB
	texte = texte.replace(/¼/g,'&frac14;'); // 188 BC
	texte = texte.replace(/½/g,'&frac12;'); // 189 BD
	texte = texte.replace(/¾/g,'&frac34;'); // 190 BE
	texte = texte.replace(/¿/g,'&iquest;'); // 191 BF
	texte = texte.replace(/À/g,'&Agrave;'); // 192 C0
	texte = texte.replace(/Á/g,'&Aacute;'); // 193 C1
	texte = texte.replace(/Â/g,'&Acirc;'); // 194 C2
	texte = texte.replace(/Ã/g,'&Atilde;'); // 195 C3
	texte = texte.replace(/Ä/g,'&Auml;'); // 196 C4
	texte = texte.replace(/Å/g,'&Aring;'); // 197 C5
	texte = texte.replace(/Æ/g,'&AElig;'); // 198 C6
	texte = texte.replace(/Ç/g,'&Ccedil;'); // 199 C7
	texte = texte.replace(/È/g,'&Egrave;'); // 200 C8
	texte = texte.replace(/É/g,'&Eacute;'); // 201 C9
	texte = texte.replace(/Ê/g,'&Ecirc;'); // 202 CA
	texte = texte.replace(/Ë/g,'&Euml;'); // 203 CB
	texte = texte.replace(/Ì/g,'&Igrave;'); // 204 CC
	texte = texte.replace(/Í/g,'&Iacute;'); // 205 CD
	texte = texte.replace(/Î/g,'&Icirc;'); // 206 CE
	texte = texte.replace(/Ï/g,'&Iuml;'); // 207 CF
	texte = texte.replace(/Ð/g,'&ETH;'); // 208 D0
	texte = texte.replace(/Ñ/g,'&Ntilde;'); // 209 D1
	texte = texte.replace(/Ò/g,'&Ograve;'); // 210 D2
	texte = texte.replace(/Ó/g,'&Oacute;'); // 211 D3
	texte = texte.replace(/Ô/g,'&Ocirc;'); // 212 D4
	texte = texte.replace(/Õ/g,'&Otilde;'); // 213 D5
	texte = texte.replace(/Ö/g,'&Ouml;'); // 214 D6
	texte = texte.replace(/×/g,'&times;'); // 215 D7
	texte = texte.replace(/Ø/g,'&Oslash;'); // 216 D8
	texte = texte.replace(/Ù/g,'&Ugrave;'); // 217 D9
	texte = texte.replace(/Ú/g,'&Uacute;'); // 218 DA
	texte = texte.replace(/Û/g,'&Ucirc;'); // 219 DB
	texte = texte.replace(/Ü/g,'&Uuml;'); // 220 DC
	texte = texte.replace(/Ý/g,'&Yacute;'); // 221 DD
	texte = texte.replace(/Þ/g,'&THORN;'); // 222 DE
	texte = texte.replace(/ß/g,'&szlig;'); // 223 DF
	texte = texte.replace(/à/g,'&agrave;'); // 224 E0
	texte = texte.replace(/á/g,'&aacute;'); // 225 E1
	texte = texte.replace(/â/g,'&acirc;'); // 226 E2
	texte = texte.replace(/ã/g,'&atilde;'); // 227 E3
	texte = texte.replace(/ä/g,'&auml;'); // 228 E4
	texte = texte.replace(/å/g,'&aring;'); // 229 E5
	texte = texte.replace(/æ/g,'&aelig;'); // 230 E6
	texte = texte.replace(/ç/g,'&ccedil;'); // 231 E7
	texte = texte.replace(/è/g,'&egrave;'); // 232 E8
	texte = texte.replace(/é/g,'&eacute;'); // 233 E9
	texte = texte.replace(/ê/g,'&ecirc;'); // 234 EA
	texte = texte.replace(/ë/g,'&euml;'); // 235 EB
	texte = texte.replace(/ì/g,'&igrave;'); // 236 EC
	texte = texte.replace(/í/g,'&iacute;'); // 237 ED
	texte = texte.replace(/î/g,'&icirc;'); // 238 EE
	texte = texte.replace(/ï/g,'&iuml;'); // 239 EF
	texte = texte.replace(/ð/g,'&eth;'); // 240 F0
	texte = texte.replace(/ñ/g,'&ntilde;'); // 241 F1
	texte = texte.replace(/ò/g,'&ograve;'); // 242 F2
	texte = texte.replace(/ó/g,'&oacute;'); // 243 F3
	texte = texte.replace(/ô/g,'&ocirc;'); // 244 F4
	texte = texte.replace(/õ/g,'&otilde;'); // 245 F5
	texte = texte.replace(/ö/g,'&ouml;'); // 246 F6
	texte = texte.replace(/÷/g,'&divide;'); // 247 F7
	texte = texte.replace(/ø/g,'&oslash;'); // 248 F8
	texte = texte.replace(/ù/g,'&ugrave;'); // 249 F9
	texte = texte.replace(/ú/g,'&uacute;'); // 250 FA
	texte = texte.replace(/û/g,'&ucirc;'); // 251 FB
	texte = texte.replace(/ü/g,'&uuml;'); // 252 FC
	texte = texte.replace(/ý/g,'&yacute;'); // 253 FD
	texte = texte.replace(/þ/g,'&thorn;'); // 254 FE
	texte = texte.replace(/ÿ/g,'&yuml;'); // 255 FF
	return texte;
	}
