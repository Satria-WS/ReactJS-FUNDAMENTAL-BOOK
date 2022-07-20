import React from "react";
import List from "../List/List";

class ExplainThis extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: List,
        };
    }
    render() {
        return (
            <>
                {/* <h1>{this.state.list[0].url}</h1> */}
                {this.state.list.map((item) => (
                    <div>
                        <span>{item.url}</span>
                    </div>
                ))}
            </>
        );
    }
}

export default ExplainThis;
