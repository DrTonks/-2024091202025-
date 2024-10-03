//  for(let i=1; i<=10;i++){
//     fetch('https://tenapi.cn/v2/yiyan')
//         .then(response => {
//             return response.text()})
//         .then(text =>{
//             console.log(text)
//             // const yiyan = document.querySelector(`.v2yiyan${i}`) 10.1:否则要对每一个单独写css
//             // yiyan.href=`https://tenapi.cn/v2/yiyan/?uuid=${data.uuid}`
//             const yiyan = document.querySelector(`.v2yiyan${i}`)
//             yiyan.innerText=text
//         })
//         .catch(console.error)

//  }

//调用随机语句，一定要搞一个all yiyan来保存语句以防万一被刷新！！！！！
const allyiyan=[]
for(let i=0; i<=9;i++){
    fetch('https://tenapi.cn/v2/yiyan')
        .then(response => {
            return response.text()})
        .then(text =>{
            //console.log(text)

            //初始化赞数量以及保存文本和赞数到allyiyan，后面正倒序只要复制粘贴这一块
            const button = document.createElement('button');
            button.innerText = '赞';
            const like = document.createElement('span');
            like.innerText = 0;
            allyiyan[i]={txt:text,likes:0}
            const yiyan = document.querySelectorAll(`.v2yiyan`)
            yiyan[i].innerText=text

            button.addEventListener('click',function(){
                let current =parseInt(like.innerText);
                current++;
                like.innerText=current
                allyiyan[i].likes=current
            })
            yiyan[i].appendChild(button)
            yiyan[i].appendChild(like)
        })
        .catch(console.error)}
 //正序
console.log(allyiyan)
document.getElementById('sort-p').addEventListener('click',function(){
    allyiyan.sort((a,b)=>b.likes-a.likes);
    //console.log(allyiyan)


    //准备事项--清空原有文本
    const sen=document.querySelectorAll('.v2yiyan')
    sen.forEach(el=>el.innerHTML='')




    //重走一遍调用语句
    for(let i=0; i<=9;i++){
                const button = document.createElement('button');
                button.innerText = '赞';
                const like = document.createElement('span');
                like.innerText = allyiyan[i].likes;
               
                const yiyan = document.querySelectorAll(`.v2yiyan`)
                yiyan[i].innerText=allyiyan[i].txt
    
                button.addEventListener('click',function(){
                    let current =parseInt(like.innerText);
                    current++;
                    like.innerText=current
                    allyiyan[i].likes=current
                })
                yiyan[i].appendChild(button)
                yiyan[i].appendChild(like)
     }
})



//倒序
console.log(allyiyan)
document.getElementById('sort-n').addEventListener('click',function(){
    allyiyan.sort((a,b)=>a.likes-b.likes);
    //console.log(allyiyan)

    //准备事项
    const sen=document.querySelectorAll('.v2yiyan')
    sen.forEach(el=>el.innerHTML='')




     //重走一遍调用语句
    for(let i=0; i<=9;i++){
                const button = document.createElement('button');
                button.innerText = '赞';
                const like = document.createElement('span');
                like.innerText = allyiyan[i].likes;
               
                const yiyan = document.querySelectorAll(`.v2yiyan`)
                yiyan[i].innerText=allyiyan[i].txt
    
                button.addEventListener('click',function(){
                    let current =parseInt(like.innerText);
                    current++;
                    like.innerText=current
                    allyiyan[i].likes=current
                })
                yiyan[i].appendChild(button)
                yiyan[i].appendChild(like)
     }
})




