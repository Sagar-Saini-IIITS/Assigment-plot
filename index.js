let res=0,hospital=0,gym=0;
let r=9,c=5;
function createPlot(){
    for(let i=0;i<r;i++){
        var newrow = document.createElement("div");
        newrow.className='row';
        newrow.id= `row-${i}`;
        document.getElementById("container").appendChild(newrow);
        for(let j=0;j<c;j++){
            var newcell = document.createElement("input");
            newcell.id= `cell-${i}${j}`;
            document.getElementById(`row-${i}`).appendChild(newcell);
        }
    }


}
createPlot();

function bestHouse(){
    let best={}; 
    best['house']='-'; best['tot']=10000;
  for(let i=0;i<r;i++){
    for(let j=0;j<c;j++){
        let cellValue=document.getElementById(`cell-${i}${j}`).value;
        let house={};
        if(cellValue.toLowerCase().includes('house')){
          house['cellValue']=[i,j,0,i+j];
        if(best['house']=='-' || best['tot']>house['cellValue'][3]){
            best['house']=cellValue; best['tot']=house['cellValue'][3];
        }
    }
    }
  }
  document.getElementById('bestHouse').innerHTML=best['house'];
}