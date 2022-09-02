import './App.css';
// This is a react class based component (rcc)
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => { 

  const pageSize = 20;
  const apiKey = process.env.REACT_APP_NEWS_API 
  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
        <NavBar></NavBar>
        <LoadingBar
        height = {3}
        color='#f11946'
        progress={progress}
        />
          <Routes>
            <Route exact path="/" element = {<News  setProgress={setProgress} apiKey= {apiKey} key="general" pageSize = {pageSize} country="in" category="general" title="NewsMonkey - Top Headlines"/>}/>
            <Route exact path="/business" element = {<News  setProgress={setProgress} apiKey={apiKey} key="business" pageSize = {pageSize} country="in" category="business" title="NewsMonkey - Business"/>}/>
            <Route exact path="/entertainment" element = {<News  setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize = {pageSize} country="in" category="entertainment" title="NewsMonkey - Entertainment"/>}/>
            <Route exact path="/general" element = {<News  setProgress={setProgress} apiKey={apiKey} key="general" pageSize = {pageSize} country="in" category="general" title="NewsMonkey - General"/>}/>
            <Route exact path="/health" element = {<News  setProgress={setProgress} apiKey={apiKey} key="health" pageSize = {pageSize} country="in" category="health" title="NewsMonkey - Health"/>}/>
            <Route exact path="/science" element = {<News  setProgress={setProgress} apiKey={apiKey} key="science" pageSize = {pageSize} country="in" category="science" title="NewsMonkey - Science"/>}/>
            <Route exact path="/sports" element = {<News  setProgress={setProgress} apiKey={apiKey} key="sports" pageSize = {pageSize} country="in" category="sports" title="NewsMonkey - Sports"/>}/>
            <Route exact path="/technology" element = {<News  setProgress={setProgress} apiKey={apiKey} key="technology" pageSize = {pageSize} country="in" category="technology" title="NewsMonkey - Technology"/>}/>
          </Routes>
        </Router>
      </div>
    )
}

export default App;

