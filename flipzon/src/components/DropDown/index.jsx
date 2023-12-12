import { memo } from "react";


export const DropDown = memo( ({config,data,onChange }) => {
    console.log("dropdown => loading!!!!!")
    const buildOptions = ()=>{
        let result = data.map((item,index)=>{
           return  <option key={item.value+index} value={item.value}>{item.text}</option>
        });
        return result;
    }
    return (
        <div class="row mb-3">
            <label for={config.id}
             class="col-sm-2 col-form-label">{config.label}</label>
            <div class="col-sm-4">
               <select 
               className="form-control"
               onChange={onChange}>
                <option value="">{config.placeholder}</option>
                {buildOptions()}
               </select>
            </div>
        </div>
    )
});
