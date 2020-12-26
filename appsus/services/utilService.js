export const utilService = {
    makeId,
    getFormattedDate
};

function makeId(length = 4) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}


function getFormattedDate(timestamp) {

    var a = new Date(timestamp);
    var year = a.getFullYear();
    var month = a.getMonth() + 1;
    var date = a.getDate();
  
    var time = date + '/' + month + '/' + year
  
    return time;
  
  }