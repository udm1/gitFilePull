import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Index from '../page/index.js';
import Login from '../page/login.js';
import Register from '../page/register.js';
import ForgotPwd from '../page/forget_pwd.js';


const MyNavi = createStackNavigator({
    Index : Index,
    Login : Login,
    Register : Register,
    ForgotPwd : ForgotPwd,

});


export default createAppContainer(MyNavi);