import React from 'react';

function NotFound() {
    return ( 
        <div className='container p-5 text-center mt-5'>
            <div className='row'>
                <h1 className='mt-3 fs-3 text-muted'>404 Page Not Found</h1>
                <p className='fs-6 mt-4 text-muted'><b>Sorry, the page you are looking for does not exist</b></p>
            </div>
        </div>
     );
}

export default NotFound;