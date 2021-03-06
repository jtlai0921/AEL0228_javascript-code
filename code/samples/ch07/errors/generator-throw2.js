function range(start, end) {
    let i = start;
    return {
        [Symbol.iterator]() { 
            return this; 
        },
        next() {
            return i < end ? 
                   {value: i++, done: false} :
                   {value: undefined, done: true};
        },
        return(value) {
            i = end; 
            return {value, done: true};
        },
        throw(e) {
            if(i === start || i === end) {
                throw e;
            }
            i = end;
            console.log(e.message);
            return {value: undefined, done: true};
        }
    };
}

let r = range(3, 8);
console.log(r.next());
console.log(r.throw(new Error('Shit happens')));