
function collectPuzzle(redPuzzles,bluePuzzles,greenPuzzles) {
  let a=[...redPuzzles,...bluePuzzles,...greenPuzzles]//合并
  let result = Array.from(new Set(a));//去重
  return result


    // TODO:在这里写入具体的实现逻辑
    // 对所有的碎片进行收集，获取不同拼图类型的结果，并返回
  }
  
  /*一开始想耍个小聪明直接return那四个元素，结果发现根本点不了按钮qwq
  后来才意识到文字显示是在函数内进行的，如果函数提前结束就gg了，好险*/
  /*PS：这个代码是后来查询去重的方式后改的，以及附上最开始去重的笨方法：
  let a=[...redPuzzles,...bluePuzzles,...greenPuzzles]
  let b=[]
  for(i=0;i<a.length;i++){
     if (b.indexOf(a[i])===-1){
       b.push(a[i])
     }
  }
return b
  */