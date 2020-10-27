const userService = (() => {

    function register( username, password ) {
        return kinvey( 'user', '', 'basic', { username, password } );
    }

    function login() {
        
    }

    function logout() {
        
    }

    return { register, login, logout };
})();