/* eslint-disable  */
import { useState } from "react";
import { search } from "../../../../../firebasefunctions/firestore";
import styles from "./deli.module.css";
import { ReactComponent as File } from "./File.svg";

export default function Deli({user}) {
  const [Data, SetData] = useState(null);
  const [details, setDetails] = useState();
  //let email  = 'f20190120@hyderabad.bits-pilani.ac.in'
  const email = atob(window.sessionStorage.getItem("key"));
  let c;
  const [stages, setStage] = useState(null);
  if (!Data) {
    search("Projects", user, email).then((project) => {
      if (project && project !== "f") {
        console.log("from inside:", project);
        setDetails(project);
        c = { onCurrent: project.currentStage };
        SetData({ ...project, ...c });
        let x = [...Array(project.currentStage).keys()];
        setStage(x);

        console.log([...Array(project.currentStage).keys()]);
      } else if (project === "f") {
        setDetails("f");
        SetData("f");
      }
    });
  }
  return (
    <div>
      {Data ? (
        <div className={styles.files}>
          <div className={styles.stage}>Project Files</div>
                  <div className={styles.files2}>
                    {Data["files"][`0`]["files"].map(
                      (element, id) => {
                        return (
                          <div className={styles.file}>
                            <a href={element.url}>
                              <div>
                                <File />
                              </div>
                            </a>
                            <div className={styles.name}>{element.name}</div>
                          </div>
                        );
                      }
                    )}
                  </div>
          {stages &&
            stages.map((data, key) => {
              return (
                <>
                  <div className={styles.stage}>Stage {data + 2}</div>
                  <div className={styles.files2}>
                    {Data["files"][`${data + 1}`]["clientFiles"].map(
                      (element, id) => {
                        return (
                          <div className={styles.file}>
                            <a href={element.url}>
                              <div>
                                <File />
                              </div>
                            </a>
                            <div className={styles.name}>{element.name}</div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </>
              );
            })}
        </div>
      ) : (
        <>this</>
      )}
    </div>
  );
}
