
var keyboard = [750, 600, 680, 900], mouse = [400, 250, 650], budget = 0;
// keyboard.sort((i,j)=>i-j)
// mouse.sort((i,j)=>i-j)
for (let i = 0; i < keyboard.length; i++) {
    for (let j = 0; j < mouse.length; j++) {
        var op = [], sum = 0;
        budget = keyboard[i] + mouse[j];
        if (budget == 1300) {
            op.push(keyboard[i]);
            op.push(mouse[j]);
            console.log(`keyboard:${op[0]},mouse:${op[1]}`);
            sum = op[0] + op[1];
        }
        else {
            var flag = 0;
            break;

        }

    }

}
// if (flag == 0) {
//     console.log(`you'll need another${budget - sum}`);
// }



