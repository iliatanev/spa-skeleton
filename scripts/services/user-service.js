const userService = (() => {

    function isAuth() {
        return sessionStorage.getItem( 'authtoken' ) !== null
    }

    function saveSession( res ) {
        sessionStorage.setItem( 'username', res.username );
        sessionStorage.setItem( 'authtoken', res._kmd.authtoken );
    }

    function register( username, password ) {
        return kinvey.post( 'user', '', 'basic', { username, password } );
        // posible problem with this row ^
    }

    function login() {
        
    }

    function logout() {
        return kinvey.post( 'user', '_logout', 'kinvey' );
    }

    return { register, login, logout, saveSession, isAuth };
})();