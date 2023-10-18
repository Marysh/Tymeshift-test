
interface Props {
    title: string;
    subtitle: string;
}

const Header = ({title, subtitle} : Props) => {
    return <div className="header">
        <span>{subtitle}</span>
    <h1>{title}</h1>
    </div>
}

export default Header;