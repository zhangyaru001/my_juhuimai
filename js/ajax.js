/**
 * Created by Administrator on 2016/8/22.
 */
function ajax(url,fnSucss,fnFailer){

    //����һ��ajax����
    var xhr;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if(url.indexOf("?")>-1){
        var fileName = url.substring(0,url.indexOf("."));
        var postfix = url.substring(url.indexOf("."),
            url.indexOf("?"));
        var page = url.substring(url.indexOf("=")+1);
        var file = fileName+page+postfix;

        url=file;
        console.log(url);
    }

    //���ӷ�����
    xhr.open("GET",url,true);

    //��������
    xhr.send();

    //��������
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            fnSucss(xhr.responseText);
        }else{
            if(fnFailer){
                fnFailer();
            }
        }
    }
}