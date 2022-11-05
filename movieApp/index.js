  let value= document.querySelector("#search");
     value.value="terminator"
   let code="512a1ccf";
   let searchData;
   async function getData(){
    try{
        
        let search=document.querySelector("#search").value;
        let x=await fetch(`https://www.omdbapi.com/?apikey=${code}&s=${search}`);
          data=await x.json();
           searchData=data.Search;
          // call to appended.
            getid(searchData);
          value.value=null;   
    } catch(err){
        let div=document.createElement("div");
        div.style.width="40%";
        div.style.margin="auto";
        let img=document.createElement("img");
        img.src="https://www.bing.com/th/id/OGC.38c2da29f3c36f6e0cdc21f3870c5051?pid=1.7&rurl=https%3a%2f%2fgifimage.net%2fwp-content%2fuploads%2f2017%2f09%2f404-gif-1.gif&ehk=tieqMcwjTgeQod7M5EpePvF1O0V%2b21abXJ2RZli99Go%3d"
        div.append(img);
        document.querySelector("#container").append(div);
    }
   }

   
   
 var dataId;// This is all movie data contain what ever present in browser.
    
        function getid(searchData){
            document.querySelector("#container").innerHTML="";
            dataId=[];

           // console.log(searchData);
                searchData.map(function(ele){
                    let final_data;
                     async function getFinad(){
                        try{
                            let id=ele.imdbID;
                            let ratingId=await fetch(`https://www.omdbapi.com/?i=${id}&apikey=512a1ccf`)
                             final_data=await ratingId.json();
                             //console.log(final_data)
                             appendData(final_data); 
                             dataId.push(final_data)       
                           }
                           catch(err){
                       let div=document.createElement("div");
                       div.style.width="40%";
                       div.style.margin="auto";
                       let img=document.createElement("img");
                       img.src="https://www.bing.com/th/id/OGC.38c2da29f3c36f6e0cdc21f3870c5051?pid=1.7&rurl=https%3a%2f%2fgifimage.net%2fwp-content%2fuploads%2f2017%2f09%2f404-gif-1.gif&ehk=tieqMcwjTgeQod7M5EpePvF1O0V%2b21abXJ2RZli99Go%3d"
                       div.append(img);
                       document.querySelector("#container").append(div);
                           } 
                           
                     }
                      
                     getFinad();
                     
                    })       
        
                }
  
   

   document.querySelector("button").addEventListener("click",function(){
    if(document.querySelector("#search").value==""){
        alert("Please Enter Movie Name")
    }else{
   document.querySelector("#yr").value="";
   document.querySelector("#sortYear").value="";//Every time when user submit data it will empty, like year search box                                                 //select year.
   getData();

    }
   
   })
    
   getData();//This is default call for user they can see movie.

   //Year wise append data
  function appendOrder(val){
    document.querySelector("#container").innerHTML="";
    val.forEach(ele => {
        appendData(ele);
        
    });
  }

//Data appended to the container.

   function appendData(data){
    
        let div=document.createElement("div");
        div.setAttribute("id","movies");
        let div2=document.createElement("div");
        
        let img=document.createElement("img");
        img.setAttribute("id","old");
        if(data.Poster=="N/A"){
            img.src="data:image/png;base64,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"
        }else{
            img.src=data.Poster;
        }
        
        img.style.width="100%";
        div2.style.textAlign="center";
        let title=document.createElement("h2");
        title.innerText=data.Title;
        title.style.textAlign="center";
        let rating=document.createElement("h3");
        rating.innerText=`Rating:-${data.imdbRating}`;
        
        rating.style.textAlign="center";
        let relase=document.createElement("h4");
        relase.innerText=`Realse Year:${data.Released}`;
        relase.style.textAlign="center";
        let language=document.createElement("p");
        language.innerText=`Language:-${data.Language}`;
        language.style.textAlign="center";
        div2.append(img);
        div.append(div2,title,rating,relase,language);
        if(rating>8.5){
            let para=document.createElement("p");
            para.innerText="This is Best recommanded movie";
            para.style.textAlign="center";
            div.append(para);
            
        }       
         document.querySelector("#container").append(div);
   }
   
  document.querySelector("#sortYear").addEventListener("change",yearFilter);

  
//sorting function are here.
   function yearFilter(){
    document.querySelector("#yr").value="";
    let find_data=[...dataId];
    let selct=document.querySelector("#sortYear").value;
    if(selct==""){
        getid(searchData)
    }else if(selct=="Low"){
        
        find_data.sort(function(a,b){
        let x=+a.Year;
        let y=+b.Year;
        return x-y;
    })
    appendOrder(find_data);
     // console.log(find_data)
        //getid(find_data); 
   }else if(selct=="High"){
    find_data.sort(function(a,b){
        let x=+a.Year;
        let y=+b.Year;
        return y-x;
    })
   // getid(find_data)
   appendOrder(find_data);
   }

    }


    document.querySelector("#yr").addEventListener("input",changeOrder);

    function changeOrder(){
        let find_data=[...dataId];
        let val=document.querySelector("#yr").value;
        find_data.forEach(function(ele){
            let x=(ele.Year);
            if(x==val){
               //appendOrder(ele)
               document.querySelector("#container").innerHTML=""; 
               appendData(ele);
               console.log(ele);
            }
            
        })
       // console.log(find_data)
        
    }