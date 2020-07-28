import React from 'react';
import {Header} from './components/layout/Header';
import { Content } from './components/layout/Content';
/* "firebase": "^6.2.4",
   "node-sass": "^4.12.0",
*/

export const App = () => (
  <div className="App">
    <Header></Header>
    <Content></Content>
  </div>
);