import React, { Component } from "react";
import { init } from "@rematch/core";
import { Provider } from "react-redux";

// import createPersistPlugin, { getPersistor } from "@rematch/persist";
// import storageSession from "redux-persist/lib/storage/session";
// import { PersistGate } from "redux-persist/es/integration/react";
import * as models from "./models";
import MyRouter from "./MyRouter/MyRouter";
import TestDummy from "./components/OnlineDummyAPI/TestDummy";
import CustomLoginPage from "./components/Custom/CustomLoginPage";
import LoginPage from "./components/LoginPage/LoginPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
    render() {
        const store = init({ models });

        return (
            <Provider store={store}>
                {/* <PersistGate persistor={getPersistor()}> */}
                <MyRouter />
                {/* </PersistGate> */}
            </Provider>
            // <Router>
            //     <Switch>
            //         <Route exact path="/" component={CustomLoginPage} />
            //         <Route exact path="/testdummy" component={TestDummy} />
            //     </Switch>
            // </Router>
        );
    }
}

export default App;
