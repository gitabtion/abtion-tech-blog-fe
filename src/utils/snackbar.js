import Vue from 'vue'
import SnackBar from '../components/SnackBar'

let SnackBarConstructor = Vue.extend(SnackBar);
let mySnackBar = (text, duration) => {
    let snackBarDom = new SnackBarConstructor({
        el: document.createElement('div')
    });
    document.body.appendChild(snackBarDom.$el);
    snackBarDom.message = text;
    snackBarDom.showSnackbar = true;
    snackBarDom.durationTime = duration;

    setTimeout(() => {
        snackBarDom.showSnackbar = false;
    }, snackBarDom.durationTime)
};
export default mySnackBar;