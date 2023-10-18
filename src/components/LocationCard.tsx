import InfoList from "./InfoList";
import {LocationData} from "../types/Interfaces";
import Edit from '../assets/icons/Edit.svg';

interface Props {
    location: LocationData;
    onOpen: (id: string) => void;
}
const LocationCard = ({location, onOpen}: Props) => {
    return <div className="card" onClick={() => onOpen(location.id)}>
        <h2 className="card-title">{location.name}</h2>
        <InfoList data={location} viewsCount={location.viewsCount}/>
        <div className="card-edit">
            <img  src={Edit} alt=""/>
        </div>
    </div>
}

export default LocationCard;