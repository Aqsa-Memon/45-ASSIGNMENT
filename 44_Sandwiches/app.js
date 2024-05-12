function makeSandwich(item) {
    console.log('\nMaking your sandwich with:');
    item.forEach(function (element) { return console.log("-" + element); });
    console.log('`enjoy your sandwich !\n');
}
makeSandwich(['cheese', 'Hum', 'Lattuce']);
makeSandwich(['Turkey', 'Becon']);
makeSandwich(['jelly', 'Peanut', 'butter']);
