// Home.js
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import fetchData from '../api/api'; // Import the fetchData function
import './Home.css';
import Loader from './common/Loader';
import Popup from './common/Popup';
import UserTable from './common/UserTable';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [sortedColumn, setSortedColumn] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');
    const [geoPopup, setGeoPopup] = useState(null);

    useEffect(() => {
        const fetchDataFromApi = async () => {
            setIsLoading(true);
            try {
                const data = await fetchData(); // Use the fetchData function
                setUsers(data);
            } catch (error) {
                // Handle error as needed
                console.log("HOME ERROR", error)
            }
            setIsLoading(false)
        };

        fetchDataFromApi();
    }, []);

    const handleSort = (columnName) => {
        const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newOrder);
        setSortedColumn(columnName);

        const sortedUsers = [...users].sort((a, b) => {
            if (newOrder === 'asc') {
                return a[columnName].toString().localeCompare(b[columnName].toString());
            } else {
                return b[columnName].toString().localeCompare(a[columnName].toString());
            }
        });

        setUsers(sortedUsers);
    };

    const handleAddressClick = (geo) => {
        setGeoPopup(geo);
    };

    return (
        <div className="container mt-5">
            {isLoading ? <Loader /> :
                <UserTable
                    users={users}
                    isLoading={isLoading}
                    sortedColumn={sortedColumn}
                    sortOrder={sortOrder}
                    handleSort={handleSort}
                    handleAddressClick={handleAddressClick}
                />
            }
            {geoPopup && <Popup geoPopup={geoPopup} setGeoPopup={setGeoPopup} />}
        </div>
    );
};

export default Home;
