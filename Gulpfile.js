var gulp = require('gulp');


// **************************
// Run sequence default Tasks
// **************************
var runSequence = require('run-sequence');

gulp.task('default', function(done) {
    runSequence(
            'browser-sync', 
            'watch-styles',

            function() {
                console.log('Sass e Vinyl FTP assistindo arquivos e Browser-sync ligado (:');
                done();
            }
    );
});


// ************
// Browser-sync
// ************
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "http://localhost/star-wars/"
    });
});


// *****************************************************
// Sass watching and compile all *.scss files into /sass
// Obs: Acho que poderia ser só o main.scss
// *****************************************************
gulp.task('watch-styles',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});

// **********************
// Sass (task default)
// **********************
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./css'))

});