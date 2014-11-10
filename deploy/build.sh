# enter the directory which contains this script
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd ${DIR} || exit

git pull https://github.com/ChristianWeyer/UG-ngDemo

SRC=`pwd`
SRC=${SRC}/../src/ngDemo
rm -rf out
mkdir out
cd out

cordova create myApp com.thinktecture.myApp TTmyApp --copy-from ${SRC}

cd myApp/www
rm -rf bin
rm -rf obj
rm index.cshtml
rm cordova.js
rm *.csproj
rm *.config
rm -rf Properties
rm -rf Server

curl http://windows8vm.local/ngdemo/ > index.html

sed -i -e 's/src=\"\/ngdemo\//src=\"/g' index.html
sed -i -e 's/href=\"\/ngdemo\//href=\"/g' index.html

cd ..
cordova platform add ios
cordova platform add android
cordova platform add windows

#cordova plugin add org.apache.cordova.statusbar
