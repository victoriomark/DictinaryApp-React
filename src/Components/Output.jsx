import React, { useState, useEffect } from "react";
function Output({ data }) {
  const [holdData, setHoldData] = useState([]);
  const [fl, SetFl] = useState([]);
  const [Hwi, SetHwi] = useState([]);
  const [Vd, SetVd] = useState([]);
  const [Stems, SetStems] = useState([]);
  

  useEffect(() => {
    data && data.length > 0 ? setHoldData(data[1].shortdef || []) : "";
    data && data.length > 0 ? SetFl(data[0].fl || []) : "";
    data && data.length > 0 ? SetHwi(data[0].hwi.hw) : "";
    data && data.length > 0 ? SetVd(data[0].def[0].vd) : "";
    data && data.length > 0 ? SetStems(data[0].meta.stems) : "";
  }, [data]);

  return (
    <>
      <div className="container mt-5 d-flex flex-column  ">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="fw-bold">{Hwi}</h1>
          <h5 style={{ color: "blueviolet" }} className="fw-bold">
            {Vd}
          </h5>
        </div>
        <div className="container">
          <h5 style={{ color: "blueviolet" }} className="fw-bold">
            {fl}
          </h5>
        </div>
        <ol className="list-group list-group-numbered d-flex gap-1 ">
          <h5 className="text-secondary">Difinition</h5>
          {holdData.map((word) => {
            return (
              <li className="list-group-item rounded-1" key={word}>
                {word}
              </li>
            );
          })}
        </ol>
        <ul className=" mt-5 gap-1  ">
          <h5 style={{ color: "blueviolet" }}>Stems</h5>
          {Stems.map((stem,idx) => (
            <li key={idx} className="list-group-item">{stem}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Output;
