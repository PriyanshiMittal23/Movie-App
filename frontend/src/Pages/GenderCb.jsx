import React from 'react'

const GenderCb = ({onCheckboxChange, selectedGender}) => {
  return (
    <div className='flex mt-2'>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${selectedGender==='Male'?"selecte":""}`}>
                <span className='label-text'>Male</span>
                <input type='checkbox' className='checkbox border-slate-400' checked={selectedGender==='Male'} onChange={()=>onCheckboxChange("Male")}/>
            </label>
        </div>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${selectedGender==='Female'?"selecte":""}`}>
                <span className='label-text'>Female</span>
                <input type='checkbox' className='checkbox border-slate-400' checked={selectedGender==='Female'} onChange={()=>onCheckboxChange("Female")}/>
            </label>
        </div>
    </div>
  )
}

export default GenderCb