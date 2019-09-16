const starting = 'madurai';
    const unorderStack = [
        {
            "starting_point": "usa",
            "departure_point": "australia"
        },
        {
            "starting_point": "madurai",
            "departure_point": "chennai"
        },
        {
            "starting_point": "chennai",
            "departure_point": "delhi"
        },
        {
            "starting_point": "delhi",
            "departure_point": "usa"
        }
    ];
    boarding_pass(unorderStack, starting);

    // get order stack
    function boarding_pass(arr, str) {
        let start = str;
        let orderStack = [];
        for (let i = 0; i < arr.length; i++) {
            const nextStart = arr.find(a => a.starting_point === start);
            orderStack.push(nextStart);
            const index = arr.findIndex(a => a.starting_point === start);
            start = arr[index].departure_point;
        }
        console.log(orderStack);
    }