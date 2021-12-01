
import { BrowserRouter , Switch, Route, useRouteMatch } from "react-router-dom"
import ReferalAction from './pages/ReferalAction';
import LeaderBoard from './pages/LeaderBoard';
import DashBoard from './pages/DashBoard';
import WhiteList from './pages/WhiteList';


const App = (props) => {

    // const { path } = useRouteMatch();

    return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/referral-actions">
                <ReferalAction />
            </Route>
            <Route exact path="/referral-leaderboard">
                <LeaderBoard />
            </Route>
             <Route exact path="/dashboard">
                <DashBoard />
            </Route>
            <Route exact path="/whitelist">
                <WhiteList />
            </Route>
            
            {/* <Route path={`${path}/:id`} exact>
                <ContactDetails />
            </Route>
            <Route path={`${path}/:id/edit`} exact>
                <EditContactDetails />
            </Route> */}
        </Switch>
        </BrowserRouter>
    )
}



export default App;
