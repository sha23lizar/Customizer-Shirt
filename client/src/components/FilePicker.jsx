import React from 'react'
import {reader} from '../config/helpers'
import CustomButton from './CustomButton'

const FilePicker = ({file,setFile,readFile,imgloaded, setImgloaded}) => {
  const uploadFile = (type) => {
    if(!type) return
    setFile(type.target.files[0])
    reader(type.target.files[0]).then((result) => {
    setImgloaded(result)
    })
  }

  return (
    <div className='filepicker-container h-auto'>
      <div className='flex-1 flex-col flex'>
        <input 
        id='file-upload'
        type="file"
        accept='image/*'
        onChange={uploadFile}
        />
        <label htmlFor='file-upload' className='filepicker-label'>
          Upload File
        </label>
        <p className='mt-2 text-xs text-center'>
          {file === "" ? "No file selected" : file.name}
          
        </p>

          <img 
          className='w-100 h-100 pt-2'
          src={imgloaded}
           alt="" />

        <div className=' mt-4 flex flex-wrap gap-3'>
          <CustomButton
          type="outline"
          title="Agregar Logo"
          disabledBotton={file === "" ? true : false}
          handleClick={() => readFile("logo")}
          customStyles="text-xs "
          />
          {/* <CustomButton
          type="filled"
          title="Full"
          handleClick={() => readFile("full")}
          customStyles="text-xs"
          /> */}
        </div>
      </div>

    </div>
  )
}

export default FilePicker