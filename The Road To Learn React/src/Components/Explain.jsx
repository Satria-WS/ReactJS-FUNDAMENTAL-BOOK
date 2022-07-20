import React from "react";
import List from "../List/List";

class ExplainThis extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: List,
        };
        this.onDismiss = this.onDismiss.bind(this);
    }
    onDismiss(id) {
        
    }
    render() {
        return (
            <>
                {/* <h1>{this.state.list[0].url}</h1> */}
                {this.state.list.map((item) => (
                    <div key={item.objectID}>
                        <span>{item.url}</span>
                        <button
                            onClick={() => this.onDismiss(item.objectID)}
                            type="button"
                        >
                            Dismiss
                        </button>
                    </div>
                ))}
            </>
        );
    }
}

export default ExplainThis;
