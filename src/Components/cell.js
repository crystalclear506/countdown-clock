import React from "react";
class Cell extends React.Component {
    constructor(props) {
        super(props);
    }

    renderValue () {
        return this.props.value || "00";
    }

    render () {
        return (
            <div className="cell"> 
                { this.renderValue() }
            </div>
        );
    }
}

export default Cell;