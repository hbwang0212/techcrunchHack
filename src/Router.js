import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import DiaryList from './components/DiaryList';
import DiaryEdit from './components/DiaryEdit';
import DiaryCreate from './components/DiaryCreate';
import DiaryComplexDisplay from './components/DiaryComplexDisplay';


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ flex: 1 }}>
    <Scene key="root">
    <Scene key="auth">
    <Scene key="login" component={LoginPage} title="Login" initial />
    <Scene key="signup" component={SignupPage} title="Sign Up" />
    </Scene>

    <Scene key="main">
        <Scene key="diaryList" component={DiaryList} title="Diary View" initial />
        <Scene key="diaryEdit" component={DiaryEdit} title="Diary Edit" />
        <Scene key="diaryCreate" component={DiaryCreate} title="Create new entry" />
        <Scene key="diaryDone" component={DiaryComplexDisplay} title="Diary Done" />
    </Scene>
    </Scene>
    </Router>
    );
  };
  export default RouterComponent;
