import React from 'react';
import {Component} from 'react';
import Header from './header';
import KyazoongaMainView from './kyazoonga.mainView';
import SiteData from '../data';


export default class App extends Component {
    render() {
        return (
            <div>
                <KyazoongaMainView MockData={SiteData}/>
                {/* <Header /> */}
                {this.props.children}
            </div>
        );
    }
}
