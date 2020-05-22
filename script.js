window.onload = function(){
    
    setTimeout(function(){document.querySelector("#backToTop").style.transition ="1s ease-in";},100)
    
    
    function showButton(){ //Pokazuje i chowa guzik podczas scrollowania
        var offset = this.pageYOffset; //Offset Y strony
        var button = document.querySelector("#backToTop");
        if(offset > 1500) 
            button.style.opacity = 1;
        else
            button.style.opacity = 0;
    }
    
    function animationSlide(){
        var offset = this.pageYOffset;
        if(offset >= 1600 && offset <= 2600){
            document.querySelector("#first-article").style.visibility = "visible";
            setTimeout(function(){document.querySelector("#first-article").style.left = 0;},100);
        }
        if(offset >= 2800 && offset <= 3800){
            document.querySelector("#second-article").style.visibility = "visible";
            setTimeout(function(){document.querySelector("#second-article").style.right = 0;},100);
        }
        if(offset >= 4000 && offset <= 5000){
            document.querySelector("#third-article").style.visibility = "visible";
            setTimeout(function(){document.querySelector("#third-article").style.left = 0;},100);
        }
        if(offset <= 700){
            document.querySelector("#first-article").style.visibility = "hidden";
            document.querySelector("#second-article").style.visibility = "hidden";
            document.querySelector("#third-article").style.visibility = "hidden";
            document.querySelector("#first-article").style.left = -2000;
            document.querySelector("#second-article").style.right = -2000;
            document.querySelector("#third-article").style.left = -2000;
        }
    }
    
    function complete(v){
        var grid;
        if(v == 0){
            var grid = document.querySelectorAll(".grid1");
            document.querySelectorAll(".gridbox")[0].classList.add("complete");
        }
        if(v == 1){
            var grid = document.querySelectorAll(".grid2");
            document.querySelectorAll(".gridbox")[1].classList.add("complete");
        }
        if(v == 2){
            var grid = document.querySelectorAll(".grid3");
            document.querySelectorAll(".gridbox")[2].classList.add("complete");
        }
        for(var v = 0; v < grid.length; v++){
            grid[v].classList.add("complete");
            grid[v].style.opacity = 1;
        }
    }
    
    var counter = [0,0,0];
    var maxGrid = 15;
    function makeVisible(){
        if(this.style.opacity > 0) return;
        this.style.opacity = 0.5;
        if(this.classList.contains("grid1")){
            counter[0]++;
            if(counter[0] == maxGrid)
                complete(0);
        }
        if(this.classList.contains("grid2")){
            counter[1]++;
            if(counter[1] == maxGrid)
                complete(1);
        }
        if(this.classList.contains("grid3")){
            counter[2]++;
            if(counter[2] == maxGrid)
                complete(2);
        }
    }
    
    var grid = document.querySelectorAll(".grid");
    for(var v = 0; v < grid.length; v++){
        grid[v].addEventListener('mouseover', makeVisible);
    }
    
    
    window.addEventListener('scroll', showButton);
    window.addEventListener('scroll', animationSlide);
    document.querySelector("#backToTop").addEventListener('click', function(){
        window.scrollBy(0, -window.pageYOffset); //scrolluje w górę o offsetY strony
    });
    
    
    var audio = document.getElementsByTagName("audio")[0];
    var firstArt = document.querySelector("#first-article img");
    var secondArt = document.querySelector("#second-article img");
    var thirdArt = document.querySelector("#third-article img");
    
    firstArt.addEventListener('mouseover', function(){
        firstArt.src = "images/cis12.png";
        audio.play();
    })
    firstArt.addEventListener('mouseout', function(){
        firstArt.src = "images/cis11.png";
    })
    secondArt.addEventListener('mouseover', function(){
        secondArt.src = "images/musz12.png";
        audio.play();
    })
    secondArt.addEventListener('mouseout', function(){
        secondArt.src = "images/musz11.png";
    })
    thirdArt.addEventListener('mouseover', function(){
        thirdArt.src = "images/piw12.png";
        audio.play();
    })
    thirdArt.addEventListener('mouseout', function(){
        thirdArt.src = "images/piw11.png";
    })
    

}