async function foo(n) {
    return n;
}

foo(10).then(v => {
           console.log(v);
           throw new Error('Shit happens');
       })
       .catch(err => console.log(err.message))
       .finally(() => console.log('finally run it'));
