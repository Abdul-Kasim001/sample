import AdminDashboard from "../pages/Admin/Dashboard";
import Customerform from "../component/Forms/customerForm";
import ListCustomer from "../component/Tables/ListCustomer"
import ListProposal from "../pages/Employee/ListProposal";
import AddProductForm from "../component/Forms/AddProductForm";
import ProductTable from "../component/Tables/ProductTable";
import TemplatePage from "../pages/TemplatePages/TemplatePage";
import ProposalPage from "../pages/ProposalPage/index";
import TemplateTapPage from "../pages/Admin/TemplateTapPage";
import ProposalPreviewer from "../pages/ProposalPage/ProposalPreviewer";

const EmployeeRoutes = [
    {
      path: "/employer",
      name: "EmployeeDashboard",
      element: <AdminDashboard />,
    },
    {
      path: "/employer/addCustomer",
      name: "addcustomer",
      element: <Customerform />,
    },
    {
      path:"/employer/ListCustomer",
      name:"listcustomer",
      element:<ListCustomer/>
    },
    {
      path: "/employer/addProposal",
      name: "addproposal",
      element: <ProposalPage/>
    },
    {
      path:"/employer/listProposal",
      name:"/employer/listproposal",
      element:<ListProposal/>
    },
    {
      path:"/employer/ProposalPage",
      name:"ProposalPage",
      element:<ProposalPage/>
    },
    {
      path: "/employer/addProduct",
      name: "addproduct",
      element: <AddProductForm/>
    },
    {
      path: "/employer/ProductTable",
      name: "productTable",
      element: <ProductTable/>
    },
    {
      path:"/employer/TemplateTapPage",
      name:"TemplateTapPage",
      element:<TemplateTapPage/>
    },
    {
      path: "/employer/TemplatePage",
      name: "TemplatePage",
      element: <TemplatePage/>
    },
    {
      path: "/employer/listProposal/proposalPreview/:id",
      name:"proposalPreview",
      element:<ProposalPreviewer/>
    },
]
export default EmployeeRoutes;