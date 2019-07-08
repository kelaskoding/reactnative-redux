let count = 0;

export default function(state=count, action){
    switch(action.type){
        case "Increament" : count++;
            break;
        case "Decreament" : count--;
            break;
    }
    return count;
}