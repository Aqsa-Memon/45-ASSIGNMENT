function makeSandwich(item:string[]){
    
    console.log('\nMaking your sandwich with:');
    
    item.forEach(element =>console.log("-" + element));

    console.log('`enjoy your sandwich !\n');
}

makeSandwich(['cheese','Hum','Lattuce']);

makeSandwich(['Turkey','Becon']);

makeSandwich(['jelly','Peanut','butter']);