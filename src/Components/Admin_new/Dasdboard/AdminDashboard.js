import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import { getData } from "../../../firebasefunctions/firestore";
import { BarWave } from "react-cssfx-loading";
import { useHistory } from "react-router-dom";

function AdminDashboard() {
  const history = useHistory();
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

  const set = (id)=>{
    if(id === 1){
      getData(`Designers`)
      .then((project) => {
        console.log(project);
        setdesignerList(project);
      })
      .catch((err) => {
        console.log(err);
      });
    } else if(id === 2){
      getData(`Client`)
      .then((project) => {
        console.log(project);
        setdesignerList(project);
      })
      .catch((err) => {
        console.log(err);
      });
    } else {
      getData(`Projects`)
      .then((project) => {
        console.log(project);
        setdesignerList(project);
      })
      .catch((err) => {
        console.log(err);
      });
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

        <button
          onClick={()=>{
            set(1);
          }}
        >Designers List</button>
        <button
          onClick={()=>{
            set(2);
          }}
        >Clients List</button>
        <button
          onClick={()=>{
            set(3);
          }}
        >Project List</button>

        {designerList && (
          <table className={styles.list}>
            <tr className={styles.heading}>
              <th>S.no</th>
              <th>Email</th>
              <th>Name</th>
              <th>Phone Number</th>
            </tr>
            {designerList.map((project, key) => (
              <tr className={styles.details}>
                <td 
                  onClick={()=>{
                    history.push("/admin/project", {title:project.title});
                  }}
                >{key+1}</td>
                <td>{project.email}{project.title}</td>
                <td>{project.name}{project.clientEmail}</td>
                <td>{project.phone}{project.designerEmail}</td>
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
