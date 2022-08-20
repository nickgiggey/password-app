import { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/ipAddress.css";

function IpAddress() {
    const [ip, setIP] = useState('');

    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/');
        console.log(res.data);
        setIP(res.data.IPv4);
    };

    useEffect(() => {
        getData();

    }, []);

    return (
        <div className="ip-address-container">
            <p className="ip-address">{ip}</p>
        </div>
    );
}

export default IpAddress;