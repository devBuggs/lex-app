import React from 'react';

const LogoFinder = () => {
    const [websiteUrl, setWebsiteUrl] = React.useState('chat.openai.com');
    const [logo, setLogo] = React.useState(null);

    React.useEffect( () => {
        const getfavicon_api_url = `http://www.getfavicon.org/get.pl?url=${websiteUrl}&submitget=get+favicon`;
        const google_static_api_url_2 = `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${websiteUrl}&size=64`;

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            accept: '*',
            connection: 'Keep-Alive'
        };
        
        fetch(google_static_api_url_2, requestOptions)
            .then(async response => {
                const blob = await response.blob();
                const url = URL.createObjectURL(blob);
                setLogo(url);
            })
            .catch(error => console.log('error', error));

    }, [websiteUrl]);


    const handleWebsiteUrl = (e) => {
        e.preventDefault();
        console.log("handleWebsiteUrl Event ::", e.nativeEvent.target[0].value)
        let tempUrl = e.nativeEvent.target[0].value;
        setWebsiteUrl(tempUrl);
    }

    return (
        <>
            <h2 style={{ color: 'black' }}>Demo - Get Icon</h2>
            <hr />

            <div>
                <form action="#" onSubmit={ e => handleWebsiteUrl(e)}>
                    <label htmlFor="website-url-input">
                        <span style={{ color: 'black' }}>Website Url : </span>
                        <input className='input' style={{ background: 'white', color: 'black' }} defaultValue={websiteUrl} type="text" required />
                    </label>
                    <button className='btn btn-danger' type="submit">Get Icon</button>
                </form>

                <div className="">
                    <span style={{ color: 'black' }}>Fetched Response : </span>
                    <br />
                    <img src={logo ? logo : "#"} style={{ height: '64px', width: '64px' }} />
                </div>
            </div>
        </>
    )
}

export default LogoFinder;

