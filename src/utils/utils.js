import {mavonEditor} from 'mavon-editor'
import katex from 'markdown-it-katex-external'

const Utils = {
    timetrans: function (date) {
        let mDate = new Date(date);//如果date为13位不需要乘1000
        let Y = mDate.getFullYear() + '-';
        let M = (mDate.getMonth()+1 < 10 ? '0'+(mDate.getMonth()+1) : mDate.getMonth()+1) + '-';
        let D = (mDate.getDate() < 10 ? '0' + (mDate.getDate()) : mDate.getDate()) + ' ';
        let h = (mDate.getHours() < 10 ? '0' + mDate.getHours() : mDate.getHours()) + ':';
        let m = (mDate.getMinutes() <10 ? '0' + mDate.getMinutes() : mDate.getMinutes());
        return Y+M+D+h+m;
    },

    mMarkdownIt(){
        let mMarkdown = mavonEditor.getMarkdownIt();
        mMarkdown.use(katex);
        return mMarkdown
    }
};

export default Utils;