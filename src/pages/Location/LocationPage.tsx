import React, { useState, useEffect } from 'react';
import {LocationData} from "../../types/Interfaces";
import LocationCard from "../../components/LocationCard";
import Modal from "../../components/Modal/Modal";
import Header from "../../components/Header";
import InfoList from "../../components/InfoList";

const LocationPage = () => {
    const [locations, setLocations] = useState<LocationData[]>([]);
    const [selectedLocation, setSelectedLocations] = useState<LocationData>();
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (id: string) => {
        const selected = locations.filter(l => l.id === id)[0];
        setSelectedLocations(selected);
        setIsModalOpen(true);

        setLocations(prevLocations => {
            return prevLocations.map(location => {
                if (location.id === id) {
                    return {
                        ...location,
                        viewsCount: (location.viewsCount || 0) + 1
                    };
                }
                return location;
            });
        });
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedLocations(undefined);
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://6033c4d8843b15001793194e.mockapi.io/api/locations');
                const data = await response.json();
                setLocations(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Header title={"Acme locations"} subtitle={"All locations"}/>
            <div className="container">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <div className="locations">
                            {locations.map(l => (
                                <LocationCard key={l.id} location={l} onOpen={openModal}/>
                            ))}
                         </div>
                        {
                            isModalOpen && selectedLocation && <Modal onClose={closeModal}>
                                <div className="locationModal">
                                    <div className="title">{selectedLocation.name}</div>
                                    <InfoList data={selectedLocation} viewsCount={selectedLocation.viewsCount}/>
                                    <div className="description">
                                        <span>Description</span>
                                        <p>{selectedLocation.description}</p>
                                    </div>
                                </div>
                            </Modal>
                        }
                    </>
                )}
            </div>
        </>
    );
};

export default LocationPage;
