import React from 'react'
import "../Dashboardcss/second.css"

function Second() {
    return (
        <div>
            <div className="box upper">
                <div className="topsecond">
                    <div className="headerSecond">Project Brief</div>
                    <div className="logo">
                        <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.77637 10.7241L8.50204 13.5001L11.2277 10.7241" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.50195 7.25403V13.5" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14.5527 11.4804C15.1451 11.0562 15.5894 10.4507 15.821 9.7518C16.0527 9.05295 16.0596 8.2971 15.8409 7.59396C15.6221 6.89081 15.1891 6.27694 14.6046 5.84144C14.02 5.40594 13.3145 5.17147 12.5902 5.17204H11.7317C11.5267 4.35859 11.1432 3.6031 10.6101 2.96243C10.077 2.32175 9.40811 1.8126 8.65382 1.47331C7.89953 1.13401 7.07949 0.973406 6.25544 1.00359C5.43139 1.03377 4.6248 1.25395 3.89639 1.64755C3.16798 2.04115 2.53673 2.59792 2.05017 3.27594C1.56361 3.95395 1.23442 4.73555 1.08738 5.56189C0.940332 6.38823 0.979269 7.23778 1.20125 8.04657C1.42324 8.85537 1.82249 9.60234 2.36895 10.2312" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div className="contentSecond">
                    <div className="lines">Lorem Ipsum dolor sit amet. Vivamus ra felis endum</div>
                    <div className="lines">Lorem Ipsum dolor sit amet. Vivamus ra felis endum</div>
                </div>
            </div>
            <div className="box upload">
                <div className="inpurFile">
                    <input type="file" className="FileUpload"/>
                </div>
            </div>
        </div>
    )
}

export default Second
