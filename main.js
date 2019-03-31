window.onload = () => {
	var file = document.getElementById('file');
	var canvas = document.getElementById('canvas');
	var btn = document.getElementById("save");
	var btn2 = document.getElementById("copy");
	var five1 = document.getElementById("five1");
	var seven = document.getElementById("seven");
	var five2 = document.getElementById("five2");
	var canvasWidth = 550;
	var canvasHeight = 550;
	var TRIM_SIZE = 550;
	var ctx = canvas.getContext("2d");
	ctx.font= "60px ten-mincho";
	ctx.textAlign="center";
	
	canvas.width = canvasWidth;
	canvas.height = canvasHeight;

	setInterval(canvasDrawImage, 400);

    function canvasDrawImage() {
    	var stamp = new Image();
    	stamp.onload = function() {
	    	if (stamp.width > stamp.height) {
            h = TRIM_SIZE;
            w = stamp.width * (TRIM_SIZE / stamp.height);
            xOffset = -(w - TRIM_SIZE) / 2;
            yOffset = 0;
        } else {
            w = TRIM_SIZE;
            h = stamp.height * (TRIM_SIZE / stamp.width);
            yOffset = -(h - TRIM_SIZE) / 2;
            xOffset = 0;
        }
        ctx.drawImage(stamp, xOffset, yOffset, w, h);
        addText1();
        addText2();
        addText3();
    	}
    	stamp.src = "./stamp.png";
    }

  	function addText1() {
  		var text1 = five1.value;
  		var fontSize = 60;
  		ctx.fillText(text1, 275, 175);
  	}

   	function addText2() {
  		var text2 = seven.value;
  		var fontSize = 60;
  		ctx.fillText(text2, 275, 275);
  	}

   	function addText3() {
  		var text3 = five2.value;
  		var fontSize = 60;
  		ctx.fillText(text3, 275, 375);
  	}



  	btn.addEventListener("click", downloadImg, false);
  	btn2.addEventListener("click", copyToClipboard, false);

	function downloadImg() {
			var newImg = canvas.toDataURL("image/png");
			btn.setAttribute("href", newImg);
	}

	function copyToClipboard() {
          // コピー対象をJavaScript上で変数として定義する
          var copyTarget = document.getElementById("copyTarget");
          // コピー対象のテキストを選択する
          copyTarget.select();
		
		
	  var range = document.createRange();
   	  range.selectNodeContents(copyTarget);
    	  var sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
          copyTarget.setSelectionRange(0, 999999);
	
          // 選択しているテキストをクリップボードにコピーする
          document.execCommand("Copy");
          // コピーをお知らせする
          alert("ハッシュタグをコピーしました: " + copyTarget.value);
      }
}
