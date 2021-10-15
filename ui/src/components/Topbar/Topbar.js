import './styles.topbar.css';
import PropTypes from 'prop-types';


export default function Topbar({title}) {
	return <div className="topbar">
        {title}
    </div>;
}

Topbar.propTypes = {
    title: PropTypes.string
}

Topbar.defaultProps = {
    title: "WebHolden Task"
}