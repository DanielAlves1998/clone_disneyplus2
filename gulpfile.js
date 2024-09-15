const gulp = require('gulp'); // aqui são as importações no caso do gulp e em baixo a do sass
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src('./src/styles/*.scss') // gulp.src('./src/styles/*.scss')essa função serve para recuperar os arquivos
        .pipe(sass({outputStyle: 'compressed'})) // aqui encadeia a compilação da linha 5 em cima. compressed serve para comprimir os arquivos
        .pipe(gulp.dest('./dist/css')); // aqui irá criar essas pastas
}

function images() {
    return gulp.src('./src/images/**/*') // gulp.src('./src/styles/*.scss')essa função serve para recuperar os arquivos
        .pipe(imagemin()) // aqui encadeia a compilação da linha 5 em cima. compressed serve para comprimir os arquivos
        .pipe(gulp.dest('./dist/images')); // aqui irá criar essas pastas
}

exports.default = gulp.parallel(styles, images);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)) //aqui é para o programa rodar esses arquivos sem precisar ficar dando init o tempo todo. dentro do arrei serve para falar qual programa irá ser executado

}