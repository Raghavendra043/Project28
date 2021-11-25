import React, { useRef, useState } from 'react'
import "./second.css"
let c;
function Second({ formData, setForm }) {
    const [file, uploadFile] = useState(null);
    const cur = useRef(formData.onCurrent);
    console.log('from 2nd ', formData);

    const uploadFIle  =(image)=>{
        
    }

    return (
        <div>
            <div className="box2 upper">
                <div className="topsecond">
                    <div className="headerSecond">Project Brief stage {formData.onCurrent}</div>
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
            <div className="box2 upload">
                <div className="inpurFile">
                    <input type="file" id="file" className="FileUpload" 
                        onChange =  {(e)=>{uploadFile(e.target.files[0])}}
                    />
                    <label for="file">
                        <svg width="103" height="98" viewBox="0 0 103 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.375" y="0.125" width="102.5" height="97.5" rx="40" fill="#00DDDC" fill-opacity="0.13"/>
                        <path d="M59.621 57.6101L51.6347 48.9316L43.6484 57.6101" stroke="#00B4B3" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M51.6348 48.9316V68.4581" stroke="#00B4B3" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M68.3848 62.7954C70.3321 61.6418 71.8704 59.8163 72.757 57.6071C73.6435 55.3978 73.8278 52.9307 73.2808 50.595C72.7337 48.2594 71.4864 46.1882 69.7358 44.7084C67.9852 43.2286 65.8309 42.4244 63.613 42.4228H61.0973C60.493 39.8827 59.3666 37.5246 57.8028 35.5256C56.2391 33.5267 54.2787 31.9389 52.069 30.8818C49.8593 29.8247 47.4578 29.3257 45.0451 29.4223C42.6324 29.5189 40.2712 30.2086 38.1391 31.4395C36.007 32.6705 34.1594 34.4107 32.7353 36.5292C31.3111 38.6478 30.3475 41.0897 29.9168 43.6712C29.4861 46.2527 29.5996 48.9067 30.2487 51.4337C30.8978 53.9607 32.0657 56.295 33.6644 58.2609" stroke="#00B4B3" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M59.621 57.6101L51.6347 48.9316L43.6484 57.6101" stroke="#00B4B3" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div className="filetitle">Upload all your files here</div>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Second
