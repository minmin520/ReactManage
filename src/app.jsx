import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// 页面
import Home from 'page/home/index.jsx'

class App extends React.Component {
    render() {
        return (
            '<Home/>'
        )
    }
}