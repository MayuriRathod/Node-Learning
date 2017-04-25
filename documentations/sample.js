
    console.log('init in js');
    
    function heavy() {
        var a = 0;
        for( i = 0; i < 1000; i++) {
            for( j = 0; j < 1000; j++) {
                for (k = 0; k < 500; k++) {
                    a = a + i + j + k;
                }
            }
        }
        console.log(a);
    }
    console.log("1st call");
    heavy();


    console.log('2nd call');
    heavy();


    heavy();

heavy();
heavy();