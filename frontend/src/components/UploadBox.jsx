'use client'


import React, { useRef, useState } from 'react'
import Input from './Input'
import Image from 'next/image'

const UploadBox = () => {
    const inputRef = useRef(null)

    const [file, setFile] = useState(null)



    const handleUpload= ()=>{
        inputRef.current?.click() // Aciona o clique no input file oculto
    }

    const handleFileChange = (e)=>{
        const selectedFile = e.target.files[0]
        if(!selectedFile) return

        //Verifica se e e uma imagem 
        if(!selectedFile.type.startsWith('image/')){
            alert('Selecione um arquivo de imagem!')
            return
        }

        setFile(selectedFile)
    }



  return (
    <div className='flex w-full gap-1'>
        <div className='border border-dashed rounded-sm flex bg-gray-300  items-center w-full py-3'>
         <Image
         src={'/upload.png'}
         alt='upload icon'
         width={20}
         height={20}
         className='ml-2'
         />

         {file && <p className='text-[12px] text-center ml-8 absolute '>{file.name}</p>}

         {/* Input file oculto */}
            <Input
                type="file"
                ref={inputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
                />

        </div>

        <div>
            <Input
            type='button'
            value='carregar Foto'
            className='bg-[#15a4fd] text-white text-sm py-3 px-2 rounded-sm cursor-pointer font-semibold'
            onClick={handleUpload}
            />
        </div>

    </div>
  )
}

export default UploadBox