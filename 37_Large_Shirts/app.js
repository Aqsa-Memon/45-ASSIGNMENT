function make_shirt(size, text) {
    if (size === void 0) { size = 'large'; }
    if (text === void 0) { text = 'I love Typescript'; }
    console.log("creating a ".concat(size, " shirt with the message: ").concat(text));
}
make_shirt();
make_shirt('Medium');
make_shirt('small', 'I love python');
make_shirt('extra large', 'only 1000');
