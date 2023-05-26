import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import TemplatePage from "../TemplatePages/TemplatePage";
import TemplatePage2 from "../TemplatePages/TemplatePage2";
import '../../component/Tables/TemplateTable.css';

function TemplateTapPage() {
    const [activeIndex, setActiveIndex] = useState(0);
    
  return (
    <div className="mt-4 p-4">
        <TabView
          activeIndex={activeIndex}
          onTabChange={(e) => setActiveIndex(e.index)}
        >
        <TabPanel header="Template I">
            <TemplatePage/>
        </TabPanel>
        <TabPanel  header="Template II" >
            <TemplatePage2/>
        </TabPanel>
         <TabPanel header="Template III" className="tab-fields">
         </TabPanel>
        </TabView>
    </div>
  )
}

export default TemplateTapPage;