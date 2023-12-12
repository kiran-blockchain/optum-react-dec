import { memo, useState } from "react"

export const TextBox = memo(({ config, onChange, formik }) => {
    console.log(config.name + "textbox => loading!!!!!")
    // const [val,setValue] =useState('');
    const handleChange = (e => {
        //setValue(e.target.value
            onChange(e);
    })
    return (
        <div class="row mb-3">
            <label for={config.id}
                class="col-sm-2 col-form-label">{config.label}</label>
            <div class="col-sm-4">
                <input type={config.type}
                    class="form-control"
                    name={config.name}
                    id={config.id}
                    onChange={handleChange}
                    placeholder={config.placeholder} 
                     value={formik.values[config.name]}/>
                    {formik.errors[config.name] ?
                            (<div class="text-danger">
                               {formik.errors[config.name]}
                           </div>) : null}
            </div>
        </div>
    )
})