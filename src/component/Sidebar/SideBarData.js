import React from "react";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as OcticonsIcons from "react-icons/go";

export const SidebarData = [
  {
    role:['admin','employer'],
    title: "Dashboard",
    path: "/admin",
    icon: <MdIcons.MdDashboard />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    role:['admin','employer'],
    title: "Customer",
    icon: <IoIcons.IoIosPersonAdd />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Leads & NewEnquire",
        icon: <OcticonsIcons.GoPrimitiveDot />,
      },
      {
        title: "Add Customer",
        path:"addCustomer",
        icon: <OcticonsIcons.GoPrimitiveDot />,
      },
      {
        title: "List Customer",
        path:"ListCustomer",
        icon: <OcticonsIcons.GoPrimitiveDot />,
      },
    ],
  },
  // {
  //   role:['admin'],
  //   title: "Bill Of Material",
  //   icon: <FaIcons.FaMoneyBillAlt />,
  // },
  {
    title: "Proposal",
    icon: <MdIcons.MdNoteAlt />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Add Proposal",
        icon: <OcticonsIcons.GoPrimitiveDot />,
        path:"addProposal",
      },
      {
        title: "List Proposal",
        icon: <OcticonsIcons.GoPrimitiveDot />,
        path:"listProposal"
      },
    ],
  },
  {
    role:['admin','employer'],
    title: "Template",
    icon: <AiIcons.AiFillLayout />,
    path:"TemplateTapPage",
  },

  {
    role:['admin'],
    title: "Products",
    icon: <AiIcons.AiFillTags />,
    
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Add Product",
        icon: <OcticonsIcons.GoPrimitiveDot />,
        path: "addProduct",
      },
      {
        title: "List Product",
        icon: <OcticonsIcons.GoPrimitiveDot />,
        path:"ProductTable",
      },
    ],
  },
  {
    role:['admin'],
    title: "User",
    icon: <IoIcons.IoIosPerson />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Add User",
        icon: <OcticonsIcons.GoPrimitiveDot />,
        path:"AddUser"
      },
      {
        title: "List User",
        icon: <OcticonsIcons.GoPrimitiveDot />,
        path:"UserList"
      },
    ]},
  {
    title: "Settings",
    icon: <AiIcons.AiFillSetting />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Change Password",
        icon: <OcticonsIcons.GoPrimitiveDot />,
      },
      {
        title: "Change Profile",
        icon: <OcticonsIcons.GoPrimitiveDot />,
      },
      {
        title: "SMTP Email Setting",
        icon: <OcticonsIcons.GoPrimitiveDot />,
      },
      {
        title: "Set Security Question",
        icon: <OcticonsIcons.GoPrimitiveDot />,
      },
    ],
  },
];
