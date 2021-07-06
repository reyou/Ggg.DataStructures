// we have 100 stairs
// want to climb with 2, 4, 5 steps
// how many different ways to climb

let memory = [];
function calculateSteps(target, stepsTaken, currentStep) {
    stepsTaken += currentStep;
    console.log(`[-] currentStep: ${currentStep}, stepsTaken: ${stepsTaken}`);
    if(stepsTaken === target) {
        return 1;
    }
    if(stepsTaken > target)     {
        return 0;
    }
    if(memory[stepsTaken]) {
        console.log(`[<-] stepsTaken: ${stepsTaken} read from memory with value: ${memory[stepsTaken]} with currentStep: ${currentStep}`);
        return memory[stepsTaken];
    }
   memory[stepsTaken]= calculateSteps(target,stepsTaken , 3) + calculateSteps(target,stepsTaken , 6) ;
   console.log(`[->] stepsTaken: ${stepsTaken} added to memory with value: ${memory[stepsTaken]} with totalSteps: ${stepsTaken + currentStep}`);
   return memory[stepsTaken];
}


console.log(calculateSteps(36,0,0));
 debugger