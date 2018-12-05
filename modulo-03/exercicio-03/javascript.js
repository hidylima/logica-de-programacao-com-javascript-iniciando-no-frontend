for (var inico = 1004; inico < 2030; inico = inico + 4 ){
    
    if(!(inico % 100 === 0) || (inico % 400 === 0)){
        document.write(' Anos  è bisexto <br>' + inico);
    }
    else{
        document.write(' não é bisexto <br>');
    }
    
}