const kinvey = (() => {
    const url = 'https://baas.kinvey.com/';
    const appKey = 'kid_rJ59L58dv';
    const appSecret = 'ca139fab9d1b4221be30ced91205283a';

    function makeAuth( auth ) {
        if ( auth === 'basic' ) {
            return { 'Authorization': `Basic ${btoa( appKey + ':' + appSecret )}` };
        } else {
            return { 'Autorization': `Kinvey ${ sessionStorage.getItem( 'authtoken' ) }` }
        }
    }

    function makeRequest( method, dbQuery, endpoint, auth ) {
        return {
            url: url + dbQuery + '/' + appKey + '/' + endpoint,
            method, //if stays like that it will get the method that is given below
            headers: makeAuth( auth )
        }
    }


    function post( dbQuery, endpoint, auth, data ) {
        let req = makeRequest( 'POST', dbQuery, endpoint, auth );
        req.data = data;
        return $.ajax( req );
    }

    function get(){

    }

    function update() {
        
    }

    function remove() {
        
    }
    
    return { get, post, update, remove };
})();