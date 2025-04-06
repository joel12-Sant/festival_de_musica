import {src,dest,watch} from "gulp"
import * as dartSass from "sass" 
import gulSass from "gulp-sass"

const sass = gulSass(dartSass);

export function css(done){
    src("src/scss/app.scss")
        .pipe(sass())
        .pipe(dest("dist/css"));
    done();
}
export function dev(){
    watch("src/scss/app.scss",css);
}