import React from "react";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as OcticonsIcons from "react-icons/go";

export const DemoSidebarData = [
  {
    role:['admin','employer'],
    title: "Dashboard",
    path: "/employer",
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
