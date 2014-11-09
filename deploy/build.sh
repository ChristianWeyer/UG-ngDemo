# enter the directory which contains this script
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd ${DIR} || exit


SRC=`pwd`
SRC=${SRC}/../src/ngDemo
TARGET=/projects/myApp_build
mkdir $TARGET 2>/dev/null
cd $TARGET
rm -rf out
mkdir out
cd out
cordova create myApp com.thinktecture.myApp TTmyApp --copy-from ${SRC}

cd myApp/www
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
cordova platform add android

#cordova plugin add org.apache.cordova.device
#cordova plugin add org.apache.cordova.console
