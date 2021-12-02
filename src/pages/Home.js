
import { init } from './initDroneLayer'
import { useEffect } from "react"

import {T, useSetLanguage, useCurrentLanguage } from "@tolgee/react"

function Home() {
  useEffect(() => {
    init()
  }, [])

  const setLanguage = useSetLanguage()
  const getLanguage = useCurrentLanguage()

  return (
    <div className="App">
      <div className="hero">
        <h1 className="title"><T>page_title</T></h1>
        <p className="text"><T>secondary_text</T></p>
        <p>
          <button className="btn" onClick={() => setLanguage("en")} style={{background: getLanguage() === "en" ? "#ffba02" : "#a7a7a7"}}>English</button>
          <button className="btn" onClick={() => setLanguage("ru")} style={{background: getLanguage() === "ru" ? "#ffba02" : "#a7a7a7"}}>Russian</button>
        </p>
      </div>

      <div className="pricing">
        <h1><T>our_packages</T></h1>
        <div className="pricing-table">
          <div className="pricing-card">
            <p className="title"><T>text_basic</T></p>
            <p className="info"><T>card_text</T></p>
            <button className="btn"><T>text_buy</T></button>
          </div>
          <div className="pricing-card">
            <p className="title"><T>text_standard</T></p>
            <p className="info"><T>card_text</T></p>
            <button className="btn"><T>text_buy</T></button>
          </div>
          <div className="pricing-card">
            <p className="title"><T>text_pro</T></p>
            <p className="info"><T>card_text</T></p>
            <button className="btn"><T>text_buy</T></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;