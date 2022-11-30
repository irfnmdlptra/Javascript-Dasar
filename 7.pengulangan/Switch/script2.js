var s = '';

for( var i = 0; i < 15; i++) {
    for( var j = 0; j <= i; j++){
        s += '*';
    }
    s += '\n';
}
for( var i = 15; i > 0; i--) {
    for( var j = 0; j < i; j++){
        s += '*';
    }
    s += '\n';
}


console.log(s);