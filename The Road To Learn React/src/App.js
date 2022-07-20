import "./App.css";
import "@ionic/react/css/core.css";
import { IonButton, IonDatetime } from "@ionic/react";
import TestReview from "./Components/testReview";
import ExplainThis from "./Components/Explain"

function App() {
    return (
        <div className="App">
            {/* <TestReview /> */}
            <ExplainThis/>
        </div>
    );
}

export default App;
