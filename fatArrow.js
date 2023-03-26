async function print() {
    console.log('a');
    console.log('b');
    async function c() {
        return new Promise( resolve => {
            setTimeout(() => {
                console.log('c');
                resolve();
            }, 3000);
        });
    }
    async function d() {
        return new Promise( resolve => {
            setTimeout(() => {
                console.log('d')
                resolve();
            }, 0);
        })
    }
    await c();
    await d();
    console.log('e');
}

print();


