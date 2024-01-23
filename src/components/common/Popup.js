// Popup.js
import React from 'react';

const Popup = ({ geoPopup, setGeoPopup }) => {
    return (
        <div className="popup card p-3">
            <p>
                <strong>Geo Details:</strong> {geoPopup.lat}, {geoPopup.lng}
            </p>
            <button className="btn btn-primary" onClick={() => setGeoPopup(null)}>
                Close
            </button>
        </div>
    );
};

export default Popup;
