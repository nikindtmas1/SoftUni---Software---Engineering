
    console.log( 'first' );

    setTimeout( () => {
        console.log( 'second' );
    }, 1000 );
    
    console.log( 'third' );

    const promise = new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            resolve( 'Promise Resolved' )
        }, 1000 )
    })

    promise.then( ( data ) => {
        console.log( data );
    } )
