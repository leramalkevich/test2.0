const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

gulp.task('sass', () => {
    return gulp.src('src/styles/styles.scss')
        .pipe(plumber())
        .pipe(sass({ outputStyle: 'compressed' })).on('error', sass.logError)
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('watch', () => {
    gulp.watch('src/styles/styles.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'watch'));