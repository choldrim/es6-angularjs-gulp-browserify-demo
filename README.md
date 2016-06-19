# simple-web-framework
a demo project with `es6` `babel` `sass` `angularjs` `gulp` `browserify`

### 使用
```shell
make build
cd dest && python -m SimpleHTTPServer 8080
```

浏览器打开 [http://localhost:8080](http://localhost:8080)

将看到一个展示的`hello world!`的页面，并在5秒钟后变成`hello angular!`

### 文件目录

```shell
├── LICENSE
├── README.md
├── dest ----------------------------- 产出目录，这个目录将包含所有的编译生成文件
│   ├── index.html
│   ├── scripts
│   │   └── main.js
│   └── styles
│       └── main.css
├── gulpfile.js ---------------------- 流程控制文件，用于编译项目
├── htmls ---------------------------- html文件目录
│   └── index.html ------------------- 主页
├── makefile ------------------------- 此处的makefile仅用于构建时方便使用，构建时执行 make build 即可
├── package.json --------------------- npm的配置文件(记录了项目基本信息和项目依赖)
├── scripts -------------------------- 脚本文件存放目录
│   └── main.js
└── styles --------------------------- 样式文件存放目录
    └── main.scss
```

### gulpfile.js

gulpfile是这个项目构建的核心，下面对gulpfile做一些简单的解释

```javascript
// ...

// 编译js代码
gulp.task("scripts", ()=>{
    return gulp.src("scripts/**/*.js")  // 导入scripts目录下的所有js代码
        .pipe(concat("main.js"))  // 将js代码合并成一个代码
        .pipe(babel({  // 对es6代码转译
            presets: ['es2015']
        }))
        .pipe(browserify())  // 合并所有的依赖
        .pipe(gulp.dest("dest/scripts"));  // 生成到dest目录
});


// 编译sass
gulp.task("styles", ()=>{
    return gulp.src(["styles/**/*.scss"])  // 导入styles目录下所有的sass代码
    .pipe(concat('main.css'))  // 合并代码
    .pipe(sass({  // 编译sass代码
        outputStyle: 'compressed' // 启用压缩风格
    }))
    .pipe(gulp.dest("dest/styles"));  // 输出到dest目录
});


// htmls（此任务是将html直接输出到dest目录）
gulp.task("htmls", ()=>{
    return gulp.src("htmls/**")
        .pipe(gulp.dest("dest"));
});


// gulp的默认入口，第二个参数为运行这个任务前需要运行那些任务
gulp.task("default", ["scripts", "styles", "htmls"]);
```

假如有图片文件或者字体文件也可以像html那样直接将原文件输出到对应目录即可

### License
GPLv3
