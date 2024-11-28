import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { setCurrentCompanySettings } from "@/redux/slices/companySettings.slice";
import { setTopics } from "@/redux/slices/topic.slice";
import { setUser } from "@/redux/slices/user.slice";
import { useAppDispatch } from "@/redux/storeHooks";
import { getUserById } from "@/services/auth";
import { getAllSettings } from "@/services/companySettings";
import { getTopics } from "@/services/topic";
import { AnimatePresence } from "framer-motion";
import React, { PropsWithChildren, useEffect } from "react";

const RootLayout: React.FC<PropsWithChildren<{ showNavbar?: boolean }>> = ({
  children,
  showNavbar = true,
}) => {

  const { pathname } = location;
  const dispatch = useAppDispatch();

  const fetchSettingsAndSession = async () => {
    try {
      const response = await getAllSettings();
      dispatch(setCurrentCompanySettings(response));
    } catch (error) {
      console.error("Error fetching settings:", error);
    }
  };

  const fetchAllTopics = async () => {
    try {
      const {data} = await getTopics();
      const sortedData = data.sort((a:any, b:any) => a.id - b.id);
      dispatch(setTopics(sortedData));
    } catch (error) {
      console.error("Error fetching settings:", error);
    }
  };

  const fetchUserData = async () => {
    try {
      const {data} = await getUserById();
      dispatch(setUser(data))
    } catch (error) {
      console.error("Error fetching settings:", error);
    }
  };


  useEffect(() => {
    fetchSettingsAndSession();
    fetchAllTopics()
    fetchUserData()
  }, []);

  return (
    <div>
      {showNavbar && <Navbar pathname={pathname} />}
      <div className={`flex bg-white `}>
        <AnimatePresence mode="wait">
          <div
            className={`flex flex-col flex-1 overflow-y-hidden overflow-x-auto `}
          >
            {children}
          </div>
        </AnimatePresence>
      </div>
      <Footer/>
    </div>
  );
};

export default React.memo(RootLayout);
