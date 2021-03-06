import React, { useState, useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import PlanArrow from "../images/arrow_2.svg";
import { FormContext } from "../context/FormContext";
import PlanPromo50Dcto from "../images/planes/plan-promo-50dcto.svg";
import PlanPromo15Gb50Dcto from "../images/planes/plan-15gb-50dcto.svg";
import PlanPromo30Gb50Dcto from "../images/planes/plan-promo-30-gigas.svg";
import PlanPromo15GbLineaAdicional from "../images/planes/plan-15gb-linea-adicional.svg";
import PlanPromo20GbLineaAdicional from "../images/planes/plan-20gigas.svg";
import PlanPromo40GbLineaAdicional from "../images/planes/plan-40gigas.svg";
import PlanPromo60GbLineaAdicional from "../images/planes/plan-60gigas.svg";
import PlanPromo80GbLineaAdicional from "../images/planes/plan-80gigas.svg";
import PlanPromo100GbLineaAdicional from "../images/planes/plan-100gigas.svg";
import PlanPromoLibreLineaAdicional from "../images/planes/plan-libre.svg";

const RequestContainer = styled(motion.div)`
  position: absolute;
  top: 200px;
  right: 0;
  z-index: 9;
  .request-heading {
    width: 230px;
    position: absolute;
    top: 0;
    transform: rotate(-90deg);
    right: auto;
    bottom: 0;
    left: -134px;
    margin: auto;
    height: 37px;
    background-color: #76489b;
    padding: 10px 20px;
    border-radius: 8px 8px 0 0;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    p {
      color: #ffffff;
      font-size: 16px;
      line-height: 16px;
      font-weight: 500;
      text-transform: uppercase;
    }
    img {
      transform: rotate(0deg);
      &.active {
        transform: rotate(180deg);
      }
    }
  }
  .request-plan {
    box-shadow: 0px 6px 12px rgba(56, 20, 81, 0.15);
    border-radius: 8px;
    background-color: #ffffff;
  }
`;

const RequestPlan = () => {
  const { formData } = useContext(FormContext);
  const [open, setOpen] = useState(true);

  const variantsOpen = {
    open: {
      transform: "translateX(0%)",
      transition: { duration: 0.3 },
    },
    close: {
      transform: "translateX(100%)",
      transition: { duration: 0.3 },
    },
  };
  // if(window.location.pathname!=='/'){
  //   return(
  //       <div></div>
  //   )
  // }

  if (formData.selectedPlan !== undefined) {
    return (
      <RequestContainer
        variants={variantsOpen}
        initial="close"
        animate={open ? "open" : "close"}
      >
        <div className="request-heading" onClick={() => setOpen(!open)}>
          <p>estás solicitando...</p>
          <img className={!open ? "active" : ""} src={PlanArrow} alt="arrow" />
        </div>
        <div className="request-plan">
          {formData.selectedPlan === undefined && (
            <img src={PlanPromo50Dcto} alt="plan promo 50% dcto" />
          )}
          {formData.selectedPlan === "promo-50dcto" && (
            <img src={PlanPromo50Dcto} alt="plan promo 50% dcto" />
          )}
          {formData.selectedPlan === "15gb-50dcto" && (
            <img src={PlanPromo15Gb50Dcto} alt="plan promo 15gb 50dcto" />
          )}
          {formData.selectedPlan === "30gb-50dcto" && (
            <img src={PlanPromo30Gb50Dcto} alt="plan promo 30gb 50dcto" />
          )}
          {formData.selectedPlan === "15gb-linea-adicional" && (
            <img src={PlanPromo15GbLineaAdicional} alt="plan promo 15gb línea adicional" />
          )}
          {formData.selectedPlan === "linea-adicional-20gb" && (
            <img src={PlanPromo20GbLineaAdicional} alt="plan promo 20gb línea adicional" />
          )}
          {formData.selectedPlan === "linea-adicional-40gb" && (
            <img src={PlanPromo40GbLineaAdicional} alt="plan promo 40gb línea adicional" />
          )}
          {formData.selectedPlan === "linea-adicional-60gb" && (
            <img src={PlanPromo60GbLineaAdicional} alt="plan promo 60gb línea adicional" />
          )}
          {formData.selectedPlan === "linea-adicional-80gb" && (
            <img src={PlanPromo80GbLineaAdicional} alt="plan promo 80gb línea adicional" />
          )}
          {formData.selectedPlan === "linea-adicional-100gb" && (
            <img src={PlanPromo100GbLineaAdicional} alt="plan promo 100gb línea adicional" />
          )}
          {formData.selectedPlan === "linea-adicional-libre" && (
            <img src={PlanPromoLibreLineaAdicional} alt="plan promo Libre línea adicional" />
          )}
        </div>
      </RequestContainer>
    );
  } else {
    return <div></div>;
  }
};

export default RequestPlan;
