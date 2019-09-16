const noOfRows = 20;
    createTriangle(noOfRows);

    function createTriangle(row) {
        const a = '1';
        let triangle = [];
        let nodeCount = 0;
        let count = 1;
        let i = 1;
        while (count<=row) {
            const repeatStr = a.repeat(i);
            nodeCount = nodeCount + repeatStr.length;
            triangle.push(repeatStr);
            // console.log(count,i)
            if (row === count)
                break;
            
            i = i + 2;
            count = count + 1;
            
        }
        console.log(nodeCount);
    }