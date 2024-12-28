// @Vlad_III + @me
function leastInterval(tasks: string[], n: number): number {
  let tasksMap = new Map<string, number>();
  let maxFreq = 0;
  let totalCount = 0;
  
  for (let task of tasks) {
    if (tasksMap.has(task)) {
      tasksMap.set(task, tasksMap.get(task)! + 1);
    } else {
      tasksMap.set(task, 1);
    }

    maxFreq = Math.max(tasksMap.get(task)!, maxFreq);
    totalCount++;
  }
  
  let answer = (n + 1) * (maxFreq - 1);
  // for (let [key, _] of tasksMap) {}
  for(let key of tasksMap.keys()){
    if(tasksMap.get(key) === maxFreq){
      answer++;
    }
  }

  return Math.max(answer, totalCount);
}

const tasks = ["A","A","A","B","B","B"];
const n = 2;

leastInterval(tasks, n);
