import { Link } from "react-router-dom";

export default function BorderCountriesWidget({borders}) {
    return (
        <div className="border-countries-widget">
            <h3>Border Countries:</h3>
            <ul>
                {borders.map(border => (
                    <Link to={`/country/${border.countryCode}`} key={border.countryCode}><li>{border.commonName}</li></Link>
                ))}
            </ul>
        </div>
    );
}