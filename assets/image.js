const key = '18529490-0f84e1f15c2e4758df73f845b';
document.onload = loadDocbp();

var postdata = null;

function get() {
    var url = location.href;
    window.gurl = url.split('/');
    console.log(gurl);
    var newurl = gurl[5].split('-');
    window.npicid = newurl[0];
    console.log(window.npicid);
    return gurl[4];
    } 

function loadDocbp() {
    get();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            window.data = JSON.parse(this.responseText);
            console.log(window.data);
            console.log(data.hits);
            setup(data);
        }
    };
    xhttp.open("GET", 'https://pixabay.com/api/?pretty=true&key=' + key + '&id=' + window.npicid , true);
    xhttp.send();

}


var i;

function setup() {
    document.getElementById('imagepx').src = data.hits[0].largeImageURL  ;
    document.getElementById('download').href = data.hits[0].largeImageURL  ;
    document.getElementById('viewcount').innerText = data.hits[0].views  ;
    document.getElementById('downcount').innerText = data.hits[0].downloads  ;
    document.getElementById('likecount').innerText = data.hits[0].likes  ;
    document.getElementById('picid').innerText = data.hits[0].id  ;
    document.getElementById('tags').innerText = data.hits[0].tags  ;
    document.getElementById('resolution').innerText = data.hits[0].imageHeight + ' * ' + data.hits[0].imageWidth  ;
    
    gettitle()
    document.title = ntitle[4].replace('-' , ' ') +" - Tags :- "+data.hits[0].tags ;
}
function gettitle() {
    var url = data.hits[0].pageURL;
    window.ntitle = url.split('/');
    } 

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

