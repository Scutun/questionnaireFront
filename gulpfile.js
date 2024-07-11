const gulp = require('gulp')
const include = require('gulp-file-include')
const concatCss = require('gulp-concat-css')
const clean = require('gulp-clean')
const fs = require('fs')
const server = require('browser-sync')

gulp.task('html', () => {
    return gulp
        .src('./src/html/*.html')
        .pipe(
            include({
                prefix: '@@',
                basepath: '@file',
            })
        )
        .pipe(gulp.dest('./dist'))
})

gulp.task('server', () => {
    server.init({
        server: 'dist',
    })
})

gulp.task('css', () => {
    return gulp.src('./src/css/**/*.css').pipe(concatCss('styles/styles.css')).pipe(gulp.dest('dist'))
})

gulp.task('js', () => {
    return gulp.src('./src/js/**/*js').pipe(gulp.dest('dist/scripts'))
})

gulp.task('assets', () => {
    return gulp.src('./src/assets/**/*').pipe(gulp.dest('dist/assets'))
})

gulp.task('clean', (done) => {
    if (fs.existsSync('dist')) {
        return gulp.src('dist').pipe(clean())
    }
    done()
})

gulp.task('reload', (done) => {
    server.reload()
    done()
})

gulp.task('watch', () => {
    gulp.watch('./src/html/**/*.html', gulp.series('html', 'reload'))
    gulp.watch('./src/css/**/*.css', gulp.series('css', 'reload'))
    gulp.watch('./src/js/**/*.js', gulp.series('js', 'reload'))
    gulp.watch('./src/assets/**/*', gulp.series('assets', 'reload'))
})

gulp.task('start', gulp.series('clean', 'html', 'css', 'js', 'assets', gulp.parallel('server', 'watch')))
