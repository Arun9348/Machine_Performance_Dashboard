var data = fetch('./exercise.json')
            .then(response => {
            return response.json();
            })
            .then(d => createList(d));

 createList = (data) => {
   for (let i = 0; i < data.length; i++) {

    let  color1, color2
    if(data[i]['STATUS'] === "RUNNING" ) color1 = "#6daf40", color2 = "#72ae4a"
    if(data[i]['STATUS'] === "PAUSED" ) color1 = "#a0a0a0", color2 = "#a1ac9c"
    if(data[i]['STATUS'] === "STOPPED" ) color1 = "#f37825", color2 = "#d89049"

     var box = `<div class="box" style="border: 2px solid ${color2}; margin: 10px; box-shadow: 0 4px 4px ${color2}">
                   <div class="grid-container">
                       <div class="item1">${data[i]['MACHINE']}</div>                    
                       <div class="item2" style="border: 2px solid ${color1}; background-color: ${color1}">${data[i]['STATUS']}</div>                    
                       <div class="item3">PERFORMANCE</div>                    
                       <div class="item4">${data[i]['PERFORMANCE']} %</div>                    
                       <div class="item5">RUNNING SINCE</div>                    
                       <div class="item6">${data[i]['RUNNING SINCE']}</div>                    
                       <div class="item7">PARTS PRODUCED</div>                    
                       <div class="item8">${data[i]['PARTS PRODUCED']}</div>                    
                   </div>
               </div>`; 

    var overView = document.getElementById('overview-boxes')
    overView.innerHTML += box.toString()
   }
 }

