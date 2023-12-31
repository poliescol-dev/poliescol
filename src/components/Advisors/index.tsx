import React from "react";
import styles from "./advisorListSection.module.scss";
import Image from "next/image";
import { ADVISORS } from "constants/advisors";
import ExpandableField from "@/components/ExpandableField";
import ContactCard from "@/components/ContactCard";

const AdvisorListSection = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.contents}>
        {ADVISORS.map(({ id, regionName, advisors }) => {
          return (
            <ExpandableField key={id} variant title={regionName}>
              {advisors.map(({ name, phone, email }, idx) => {
                return (
                  <ContactCard key={`${id}-${idx}`} phone={phone} name={name} />
                );
              })}
            </ExpandableField>
          );
        })}
      </div>
      <div className={styles.backgroundImgStickyContainer}>
        <div className={styles.backgroundImg}>
          <Image
            alt="advisorListSectionBg.jpeg"
            fill
            src="/advisorListSectionBg.jpeg"
            sizes="100%"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default AdvisorListSection;
