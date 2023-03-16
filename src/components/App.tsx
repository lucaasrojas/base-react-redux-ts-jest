import React from "react";
import { Provider } from "react-redux";
import store from "../state/stores";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <h1>App</h1>
        </Provider>
    );
};

export default App;
