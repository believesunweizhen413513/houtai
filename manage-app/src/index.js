import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';//全局样式

import * as serviceWorker from './serviceWorker';

import Alayout from './layout/Alayout/Alayout'
import Login from './components/Login/Login'
import Mangen from './mangen/Mangen/Mangen'
// import Person from './mangen/Contents/Person'



import {
    BrowserRouter as R,
    Switch,
    Route,

    // Link,
    Redirect
} from 'react-router-dom'
const router = [
    {
        path: '/alayout',
        component: <Alayout />,

    },

    {
        path: '/login',
        component: <Login />
    },
    {
        path: '/mangen',
        component: <Mangen />,
        // children: [
        //     {
        //         path: '/mamgen/person',
        //         component: <Person />
        //     }
        // ]

    },

]
ReactDOM.render(
    <R>
        {(() => {
            // if (window.sessionStorage.getItem('login') * 1) {
            return <>
                <Switch >
                    {router.map((item, index) => {
                        return <Route key={index} path={item.path} >
                            {item.component}
                            {
                                item.children ? (item.children.map((item2, index2) => {
                                    return <Route key={index2 + 's'} path={item2.path}>
                                        {item2.component}
                                    </Route>
                                })) : ''
                            }
                        </Route>
                    })}
                </Switch>
                {/* <Redirect from='/' to='/login'></Redirect>  */}
                 </>
        })(
        )}

    </R>
    , document.getElementById('root')


);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
