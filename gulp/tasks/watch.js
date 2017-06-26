const gulp =require('gulp');
const watch= require('gulp-watch');
const BrowserSync =require('browser-sync');

gulp.task('watch',function() {
    BrowserSync.init ({
        server:{
            baseDir:'dist'
        }

    });
    
    watch('./src/**/*.pug',function() {
        gulp.start('pugChanged');
    });
    
    watch('./src/sass/**/*.scss',function() {
        gulp.start('cssInject')
    });

    gulp.task('PugChanged',['pugRender'],function() {
        BrowserSync.reload();
    })
    gulp.task('CssInject',['styles'],function() {
        gulp.src('./dist/styles.css')
            .pipe(BrowserSync.stream());
    })



})