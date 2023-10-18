import {LocationData} from "../types/Interfaces";
import {formatTimeWithGMT} from "../helper";
import Users from '../assets/icons/Users.svg';
import Timezone from '../assets/icons/Timezone.svg';
import Views from '../assets/icons/Users.svg';

interface Props {
    data: LocationData;
    viewsCount?: number;
}
const InfoList = ({data, viewsCount = 0}: Props) => {
    return <ul>
        <li><img src={Users} alt=""/>{data.userCount}</li>
        <li><img src={Timezone} alt=""/>{formatTimeWithGMT(data.createdAt)}</li>
        <li><img src={Views} alt=""/>{`${viewsCount} ${viewsCount === 1 ? 'View' : 'Views'}`}</li>
    </ul>

}

export default InfoList;