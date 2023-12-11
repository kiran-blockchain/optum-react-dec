

export const DropDown = ({config }) => {
    return (
        <div class="row mb-3">
            <label for={config.id}
             class="col-sm-2 col-form-label">{config.label}</label>
            <div class="col-sm-4">
               <select className="form-control">
                <option value="">{config.placeholder}</option>
               </select>
            </div>
        </div>
    )
}
