handlers.getRegister = function( ctx ) {
    ctx.loadPartials( {
        header: '../templates/common/header.hbs',
        footer: '../templates/common/footer.hbs'
    } ).then(function() {

        this.partial( '../templates/register.hbs' );
        //this.partial( '../templates/login.hbs' );
    }).catch( err => console.log(err) );
}

handlers.getLogin = function( ctx ) {
    ctx.loadPartials( {
        header: '../templates/common/header.hbs',
        footer: '../templates/common/footer.hbs'
    } ).then(function() {

        this.partial( '../templates/login.hbs' );
    }).catch( err => console.log(err) );
}

handlers.registerUser = function( ctx ) {
    let { username, password,rePss } = ctx.params;
    userService.register( username, password );
}