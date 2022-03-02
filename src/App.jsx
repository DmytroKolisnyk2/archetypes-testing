


import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import path from "./services/routerPath.json";

import TestPage from "./pages/TestPage/TestPage";
import SectionTitle from "./components/sectionTitle/sectionTitle";


class App extends Component {
  render() {
    return (
    
      <Routes>
        <Route path={path.test} element={<SectionTitle title={'Узнать свой архетип'} text={'Этот небольшой тест поможет вам узнать свои ведущие архетипы, определить свои ценности и сильные стороны.'} />} />
        <Route path={path.test} element={<TestPage />} />
      </Routes>  
    );
  }
  
}
{/* <Route path={path} element={<sectionTitle title={'Lorem'} text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, blanditiis eveniet rerum rem, ullam, culpa delectus obcaecati ratione soluta velit perferendis saepe praesentium cumque numquam ducimus placeat possimus corrupti consectetur doloribus. Eligendi eum molestiae iste explicabo quos quo ad odit voluptatem? Qui at impedit architecto molestias consectetur voluptate animi magnam facilis. Sequi veniam veritatis, cumque quod at sint vitae eos. Esse hic deserunt officiis distinctio quasi dolorem tenetur unde, molestiae impedit. Iste ex repudiandae, non dignissimos voluptatem tempore vel voluptates numquam aliquid eum. Excepturi expedita quasi non modi id?'} />} /> */}
export default App;