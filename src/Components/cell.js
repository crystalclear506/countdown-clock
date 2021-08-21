import React from "react";
import styles from './styles/style.css';
class Cell extends React.Component {
    constructor(props) {
        super(props);
    }

    renderValue () {
        return this.props.value || "00";
    }

    render () {
        return (
            <div className={styles.cell}> 
                { this.renderValue() }
            </div>
        );
    }
}

export default Cell;