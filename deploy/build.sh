# enter the directory which contains this script
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd ${DIR} || exit


SRC=`pwd`
SRC=${SRC}/../src/PanoramaWeb
TARGET=/projects/panorama_build
mkdir $TARGET 2>/dev/null
cd $TARGET
rm -rf out
mkdir out
cd out
cordova create panorama com.thinktecture.panorama TTPanorama --copy-from ${SRC}

cd panorama/www
rm -rf bin
rm -rf obj
rm index.cshtml
rm cordova.js
curl http://panorama.local > index.html

# make src/hrefs relative by removing leading "/"
# from <script src="/apps/foo.js"> to <script src="apps/foo.js"> 
sed -i -e 's/src=\"\//src=\"/g' index.html
sed -i -e 's/href=\"\//href=\"/g' index.html

cd ..
cordova platform add ios


#cordova plugin add org.apache.cordova.device
#cordova plugin add org.apache.cordova.inappbrowser
#cordova plugin add org.apache.cordova.file
#cordova plugin add org.apache.cordova.file-transfer
#cordova plugin add org.apache.cordova.console
#cordova plugin add https://github.com/thinktecture/WebIntent.git
#cordova plugin add https://github.com/thinktecture/cordova-plugin-file-opener2.git
#cordova plugin add https://github.com/driftyco/ionic-plugins-keyboard.git


