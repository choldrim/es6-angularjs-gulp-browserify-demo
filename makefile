npm-install:
	npm --registry=https://registry.npm.taobao.org install

build: npm-install
	node node_modules/gulp/bin/gulp.js
