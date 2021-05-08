import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from "./Navbar.js";

import Home from "./Home.js";
import About from "./About.js";
import People from "./People.js";
import Person from "./Person.js";
import Error from "./Error.js";

import './App.css'


function App() {

  return (
   /* 
      外層用 BrowserRouter標籤包住所有Route標籤，因為使用 as 改名為 Router 。 
      內層用 Route標籤包住一個 component 。 path 屬性，用來設置你標籤內 component 的路徑
      Route ， path 設定路徑 ， Link ，to 指定前往的路徑
      path的路徑名稱自己設定，主要是 Link 中的 to 屬性所設的路徑要和path路徑一樣
      只要 to 所指定的路徑，符合 path 的路徑就前往那個 component 頁面
   */
   /* 
      1. 單一個斜線  "/"  代表主頁，標籤內的 component 就會顯示在頁面上
      其他頁面則使用 "/頁面名稱" 的形式，代表路徑設定好了，
      只要改變路徑名稱即可前往 標籤內元件的頁面

      2. 但是切換路徑時，由於路徑內都包含 "/" ， 所以 Home Page 不會消失，所以在 Home 的 Route標籤上添加 exact ， 確保路徑要完全一樣才會顯示

      3. path='*',除路徑就算亂打也會顯示該component頁面，包括已經設定好的路應也會顯示

      4. 利用 Switch 包住所有 Route ， 只會顯示第一個符合路徑的那個 component 頁面
    */
    /*
      1. 在 People 頁面中，點擊某向連結後，前往該頁面， 利用Route path='/:id'， 冒號+取名稱，  children 屬性並指定要顯示的 component 頁面， children={<person />}
      :id 代表會傳遞資訊，給 children 所指向的元件
      2. 
      因此在 People元件中利用 map 生產 person元件給予 id ( 利用模板字符串的方式 )，去 People 找找看
    */
    /*
      Route 順序也有差...，Switch會按照順序由上往下找符合的路徑， path='/:id' 的這個Route放在最下面( 即 Error 的下方 )就會找不到，就直接顯示　Error 頁面 
    */
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/people'>
          <People />
        </Route>
        <Route path='/:id' children={<Person/>}></Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App
