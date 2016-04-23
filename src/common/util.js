import {Modal, message} from 'antd';


const mode = 'local';

const util = {

    isEmpty(str) {
        if(str === null || str === '' || str === undefined) {
            return true;
        }
        return false;
    },

    isNotEmpty(str) {
        if(str === null || str === '' || str === undefined) {
            return false;
        }
        return true;
    },


    getBaseUrl(){
        if(mode === 'local') {
            const uri = "http://127.0.0.1:8080/";
            return uri;
        }else if(mode === 'server') {
            const uri = "";
            return uri;
        }
    }
    
};

export default util;