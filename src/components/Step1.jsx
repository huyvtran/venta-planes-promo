import React, { useContext, useEffect } from "react";
import { FormContext } from "../context/FormContext";
import { ValidationContext } from "../context/ValidationContext";
import queryString from "query-string";
import styled from "styled-components";
import PlanType from "./PlanType";
import Step1Inputs from "./Step1Inputs";
import Step1InputsPortabilidad from "./Step1InputsPortabilidad";
import Step1PhoneMessage from "./Step1PhoneMessage";
import TitleBlock from "./TitleBlock";
import NextButton from "./NextButton";
import { motion, AnimatePresence } from "framer-motion";
import ReactGA from "react-ga";
import RequestPlan from "./RequestPlan";
import RequestPlanMob from "./RequestPlanMob";
import RadiusContentWrapper from "./RadiusContentWrapper";
import axios from "axios";

const StepWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 18px;
    line-height: 23px;
    color: #7c6c8a;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .plan-types-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 30px;
    @media (max-width: 480px) {
      flex-direction: column;
    }
    .planTypeWrapper {
      width: 48%;
      max-width: 280px;
      @media (max-width: 480px) {
        width: 100%;
        max-width: 100%;
        margin-bottom: 12px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  .bot-button-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    align-items: center;
    @media (max-width: 480px) {
      margin-top: 20px;
    }
  }
`;

const BajadaText = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: #7c6c8a;
`;
const MotionDiv = styled(motion.div)`
  width: 100%;
`;
const VoidContainer = styled.div`
  width: 90%;
  max-width: 600px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.45);
  border-radius: 8px;
  text-align: center;
  padding: 15px;
  h1{
    color: rgb(45, 20, 65);
    font-weight: 600;
    &.font-20-px{
      font-size: 20px;
    }
  }
  h2{
    font-size: 14px;
    margin-top: 10px;
  }
  .link-a{
    text-decoration: none;
    color: #551261;
    font-weight: 500;
    margin-top: 20px;
    border: 1px solid #551261;
    background-color: transparent;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color .3s, color .3s, border .3s;
    &:hover{
      background-color: #551261;
      color: #ffffff;
      border: 1px solid #ffffff;
    }
  }
`;

const duration = 0.3;

const variants = {
  initial: {
    opacity: 0,
    height: 0,
  },
  enter: {
    height: "auto",
    opacity: 1,
    transition: {
      duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      height: { delay: 0.2 },
      duration,
    },
  },
};

const Step1 = ({ location }) => {
  const { formData, setFormData } = useContext(FormContext);
  const { validationData } = useContext(ValidationContext);
  const parsed = queryString.parse(location.search);

  useEffect(() => {
    setFormData({ ...formData, selectedPlan: parsed.plan, successFlow: false });
    ReactGA.pageview(window.location.pathname + parsed.plan);
    /*let seleccion = parsed.plan.split("-");
    parsed.plan = seleccion[0]
    let promo = seleccion[1]
    console.log(promo)*/
    window.scrollTo(0, 0);
  }, []);

 /* const redirectUrl = () => {
    if(formData.selectedPlan === "promo-50dcto"){
      window.location.href="https://www.wom.cl/seguro/venta-planes/?plan=promo-50dcto"
    } else if(formData.selectedPlan === "30gb-50dcto"){
      window.location.href="https://www.wom.cl/seguro/venta-planes/?plan=30gb-50dcto"
    } 
  } 
  redirectUrl()*/

  const notPlanType = () => {
    formData.planType = "portabilidad"
  }


  if (
    (formData.selectedPlan !== undefined && formData.selectedPlan === "promo-50dcto") ||
    (formData.selectedPlan !== undefined && formData.selectedPlan === "30gb-50dcto") ||
    (formData.selectedPlan !== undefined && formData.selectedPlan === "linea-adicional-20gb") ||
    (formData.selectedPlan !== undefined && formData.selectedPlan === "linea-adicional-40gb") ||
    (formData.selectedPlan !== undefined && formData.selectedPlan === "linea-adicional-60gb") ||
    (formData.selectedPlan !== undefined && formData.selectedPlan === "linea-adicional-80gb") ||
    (formData.selectedPlan !== undefined && formData.selectedPlan === "linea-adicional-100gb") ||
    (formData.selectedPlan !== undefined && formData.selectedPlan === "linea-adicional-libre")
  ) {
    return (
      <>
        {window.innerWidth >= 768 ? <RequestPlan /> : <RequestPlanMob />}
        <RadiusContentWrapper>
          <StepWrapper>
            {formData.selectedPlan === "30gb-50dcto" || formData.selectedPlan === "15gb-linea-adicional" || formData.selectedPlan === "15gb-50dcto" ?
              <> 
                {formData.selectedPlan === undefined && <h1>Solicita tu plan WOM en línea</h1>}
                {formData.selectedPlan === 'promo-50dcto' && <h1>Solicita tu plan WOM en línea</h1>}
                {formData.selectedPlan === '15gb-50dcto' && <h1>Solicita tu segunda línea WOM</h1>}
                {formData.selectedPlan === '30gb-50dcto' && <h1>Solicita tu plan WOM en línea</h1>}
                {formData.selectedPlan === '15gb-linea-adicional' && <h1>Solicita tu línea GRATIS</h1>}
                {formData.selectedPlan === 'linea-adicional-20gb' && <h1>Solicita tu línea GRATIS</h1>}
                {formData.selectedPlan === 'linea-adicional-40gb' && <h1>Solicita tu línea GRATIS</h1>}
                {formData.selectedPlan === 'linea-adicional-60gb' && <h1>Solicita tu línea GRATIS</h1>}
                {formData.selectedPlan === 'linea-adicional-80gb' && <h1>Solicita tu línea GRATIS</h1>}
                {formData.selectedPlan === 'linea-adicional-100gb' && <h1>Solicita tu línea GRATIS</h1>}
                {formData.selectedPlan === 'linea-adicional-libre' && <h1>Solicita tu línea GRATIS</h1>}
                <div className="plan-types-container">
                  <div className="planTypeWrapper">
                    <PlanType
                      title="Quiero portarme"
                      subtitle="Cámbiate a WOM manteniendo tu número de teléfono actual."
                      type="portabilidad"
                      selected={formData.planType === "portabilidad"}
                      dataName="planType"
                      id="box-portate"
                    />
                  </div>
                  <div className="planTypeWrapper">
                    <PlanType
                      title="Línea nueva"
                      subtitle="Obtén un nuevo número con WOM."
                      type="lineaNueva"
                      selected={formData.planType === "lineaNueva"}
                      dataName="planType"
                      id="box-renueva"
                    />
                  </div>
                </div>
              </>
              :
              notPlanType()
            }
            <AnimatePresence>
              {formData.planType !== "" && (
                <MotionDiv
                  variants={variants}
                  key="23236"
                  initial="initial"
                  animate="enter"
                  exit="exit"
                >
                  <TitleBlock classAdd="mb-20" titulo="Información Personal" />
                  <BajadaText>
                    Ingresa tus datos y revisa que la información sea correcta.
                  </BajadaText>
                  <Step1Inputs />
                </MotionDiv>
              )}
              {formData.planType === "portabilidad" && (
                <MotionDiv
                  variants={variants}
                  key="135sdg"
                  initial="initial"
                  animate="enter"
                  exit="exit"
                >
                  <TitleBlock titulo="Datos de la línea a portar." />
                  <Step1InputsPortabilidad />
                </MotionDiv>
              )}
              {formData.planType === "lineaNueva" ||
              formData.planType === "portabilidad" ? null : (
                <MotionDiv
                  variants={variants}
                  key="13513"
                  initial="initial"
                  animate="enter"
                  exit="exit"
                >
                  <Step1PhoneMessage />
                </MotionDiv>
              )}
            </AnimatePresence>
            <div className="bot-button-container">
              {formData.planType === "lineaNueva" ||
              formData.planType === "portabilidad" ? (
                <NextButton
                  stepNum="2"
                  stepTitle="Despacho"
                  route="/paso2"
                  status={
                    formData.planType === "portabilidad"
                      ? validationData.ci &&
                        validationData.rut &&
                        validationData.name &&
                        validationData.lastName &&
                        validationData.phone &&
                        validationData.email &&
                        validationData.phoneToMigrate &&
                        validationData.originPlanType &&
                        validationData.previousCarrier
                        ? "active"
                        : "innactive"
                      : validationData.ci &&
                        validationData.rut &&
                        validationData.name &&
                        validationData.lastName &&
                        validationData.phone &&
                        validationData.email
                      ? "active"
                      : "innactive"
                  }
                />
              ) : null}
            </div>
          </StepWrapper>
        </RadiusContentWrapper>
      </>
    );
  } else {
    return (
      <>
        {
          formData.selectedPlan !== undefined && formData.selectedPlan === "15gb-linea-adicional" ||
          formData.selectedPlan !== undefined && formData.selectedPlan === "15gb-50dcto"
          ?
          <VoidContainer>
            <h1 className="font-20-px">Esta promoción ya no está disponible</h1>
            <h2>Atento, pronto te contaremos de nuevas promos!</h2>
            <a className="link-a" href="https://www.wom.cl/" title="ir a wom">Ir a WOM.CL</a>
          </VoidContainer>
          :
          <VoidContainer>
            <h1>No hay plan seleccionado</h1>
            <a className="link-a" href="https://www.wom.cl/" title="ir a wom">Ir a WOM.CL</a>
          </VoidContainer>
        }
      </>
    );
  }
};
export default Step1;
