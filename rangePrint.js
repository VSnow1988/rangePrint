function printRange(start, end, skip) {
  for ( var n = start; n <= end; n++ ) {
    if ( n !== skip ) {
    console.log(n);
      }
    }
}

printRange(7, 22, 13);
