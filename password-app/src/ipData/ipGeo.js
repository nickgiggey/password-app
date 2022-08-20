import { useEffect, useState } from 'react';
import "../css/ipGeo.css";

const URL = "https://ip.nf/me.json";
const IpGeo = () => {
    const [geoData, setGeoData] = useState({ ip: "" });
    useEffect(() => {
        fetch(URL, { method: 'get' })
            .then((response) => response.json())
            .then((data) => {
                setGeoData({ ...data });
            });
    }, []);
    return (
        <div className="ip-geo">
            <p className="ip-geo-1">Country: {geoData.ip.country}</p>
            <p className="ip-geo-2">Country Code: {geoData.ip.country_code}</p>
            <p className="ip-geo-3">City: {geoData.ip.city}</p>
        </div>
    );
};
export default IpGeo;