function copy() {
  let textarea = document.getElementById("textarea");
  textarea.select();
  document.execCommand("copy");
}

 function download(filename, textInput) {

                  var element = document.createElement('a');
                  element.setAttribute('href','data:text/plain;charset=utf-8, ' + encodeURIComponent(textInput));
                  element.setAttribute('download', filename);
                  document.body.appendChild(element);
                  element.click();
                  //document.body.removeChild(element);
            }
            document.getElementById("sw")
                  .addEventListener("click", function () {
                        var text = document.getElementById("text").value;
                        var filename = "serviceworker.js";
                        download(filename, text);
                  }, false);

    const jsonData = {
        "name":"Your Website Name",
        "short_name":"Website Name",
        "start_url":"index.html",
        "display":"standalone",
        "background_color":"#373737",
        "theme_color":"black",
        "scope": ".",
        "description":"description of your website",
        "icons":[ 	{ 	"src":"path/of/appicon",					 	"sizes":"192x192",
        "type":"image/png"
        },
        {
        "src":"path/of/appicon",
        "sizes":"512x512",
        "type":"image/png"
        }
        ]
        };

function download(content, fileName, contentType) {
 const a = document.createElement("a");
 const file = new Blob([content], { type: contentType });
 a.href = URL.createObjectURL(file);
 a.download = fileName;
 a.click();
}

function onDownload(){
 download(JSON.stringify(jsonData), "manifest.json", "text/plain");
}