import AdminDashboard from "../pages/Admin/Dashboard"
import Customerform from "../component/Forms/customerForm";
import ListCustomer from "../component/Tables/ListCustomer"
import ListProposal from "../component/Tables/ListProposal";
import AddProductForm from "../component/Forms/AddProductForm";
import ProductTable from "../component/Tables/ProductTable";
import AddUserForm from "../component/Forms/AddUserForm";
import ProposalPage from "../pages/ProposalPage/index";
import TemplateTapPage from "../pages/Admin/TemplateTapPage";
import UserList from "../component/Tables/UserList";
import ProposalPreviewer from "../pages/ProposalPage/ProposalPreviewer";

const AdminRoutes = [
    {
      path: "/admin",
      name: "AdminDashboard",
      element: <AdminDashboard />,
    },
    {
      path: "addCustomer",
      name: "addcustomer",
      element: <Customerform />,
    },
    {
      path:"ListCustomer",
      name:"listcustomer",
      element:<ListCustomer/>
    },
    {
      path: "addProposal",
      name: "addproposal",
      element: <ProposalPage/>
    },
    {
      path: "/admin/listProposal/proposalPreview/:id",
      name:"proposalPreview",
      element:<ProposalPreviewer/>
    },
    {
      path:"listProposal",
      name:"listproposal",
      element:<ListProposal/>
    },
    {
      path:"ProposalPage",
      name:"ProposalPage",
      element:<ProposalPage/>
    },
    {
      path: "addProduct",
      name: "addproduct",
      element: <AddProductForm/>
    },
    {
      path: "ProductTable",
      name: "productTable",
      element: <ProductTable/>
    },
    {
      path: "AddUser",
      name: "AddUser",
      element: <AddUserForm/>
    },
    {
      path: "UserList",
      name: "UserList",
      element: <UserList/>
    },
    {
      path:"TemplateTapPage",
      name:"TemplateTapPage",
      element:<TemplateTapPage/>
    },
]
export default AdminRoutes;