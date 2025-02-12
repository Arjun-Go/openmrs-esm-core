import React from "react";
import { useTranslation } from "react-i18next";
import SharedPageLayout from "../components/shared-page-layout.component";
import CardsContainer from "./cards-container.component";
import styles from "./home.styles.scss";
import OfflinePatientTable from "../offline-patients/offline-patient-table.component";

/**
 * The offline tool's home/dashboard page.
 * Renders the overview cards and provides an extension slot for the read-only offline patient table.
 *
 * Designs: https://zpl.io/an851Lr
 */
const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SharedPageLayout header={t("homeHeader", "Offline home")}>
      <CardsContainer />

      <div className={styles.offlinePatientsTableContainer}>
        <OfflinePatientTable isInteractive={false} showHeader />
      </div>
    </SharedPageLayout>
  );
};

export default Home;
