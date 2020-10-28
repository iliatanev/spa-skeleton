handlers.getRegister = function( ctx ) {
    ctx.loadPartials( {
        header: '../templates/common/header.hbs',
        footer: '../templates/common/footer.hbs'
    } ).then( function() {
        this.partial( '../templates/register.hbs' );
        //this.partial( '../templates/login.hbs' );
    }).catch( function(err) { console.log(err) });
}

handlers.getLogin = function( ctx ) {
    ctx.loadPartials( {
        header: '../templates/common/header.hbs',
        footer: '../templates/common/footer.hbs'
    } ).then( function() {
        this.partial( '../templates/login.hbs' );
    }).catch( function(err) {console.log(err)} );
}

handlers.logoutUser = function ( ctx ) {
    userService.logout().then( () => {
        sessionStorage.clear();
        ctx.redirect( '#/home' );
    } )
}

handlers.registerUser = function( ctx ) {
    let { username, password, rePass } = ctx.params;
    userService.register( username, password )
        .then( (res) => {
             userService.saveSession( res )
             ctx.redirect( '#/home' );
            } )
        .catch( function(err) { console.log( err ) } );
    
}