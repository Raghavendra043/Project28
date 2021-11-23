import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import { getData } from "../../../firebasefunctions/firestore";
import { BarWave } from "react-cssfx-loading";

function AdminDashboard() {
  const [designerList, setdesignerList] = useState();
  if (!designerList) {
    getData(`Designers`)
      .then((project) => {
        console.log(project);
        setdesignerList(project);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (designerList) {
    var element = document.getElementById("loading1");
    if (element) {
      element.style.display = "none";
    }
    var element1 = document.getElementById("screen1");
    if (element1) {
      element1.style.display = "block";
    }
  }

  return (
    <div>
      <div
        className={styles.container}
        id="screen1"
        style={{ display: "none" }}
      >
        <div className={styles.project_list}>Admin dashboard</div>

        {designerList && (
          <table className={styles.list}>
            <tr className={styles.heading}>
              <th>Email</th>
              <th>Name</th>
              <th>Phone Number</th>
            </tr>
            {designerList.map((project) => (
              <tr className={styles.details}>
                <td>{project.email}</td>
                <td>{project.name}</td>
                <td>{project.phone}</td>
              </tr>
            ))}
          </table>
        )}
      </div>
      <div
        id="loading1"
        style={{ position: "absolute", marginTop: "45vh", marginLeft: "47vw" }}
      >
        <BarWave width="50px" height="50px" color="#1ABAA9" />
        <p style={{ marginTop: "5vh", marginLeft: "-3vw" }}>
          Getting account Info
        </p>
      </div>
    </div>
  );
}

export default AdminDashboard;
