'use client'

import Input from "@/components/Input";
import UploadBox from "@/components/UploadBox";
import React, { useState } from "react";

const CreateProfile = () => {

    const [mensagem, setMensagem] = useState()
    const [nome, setNome] = useState()
    const [idade, setIdade] = useState()
    const [rua, setRua] = useState()
    const [bairro, setBairro] = useState()
    const [estado, setEstado] = useState()
    const [bio, setBio] = useState()

        const handleSubmit = (e) =>{
            e.preventDefault()
            if(!nome || !idade || !rua || !bairro || !estado || !bio){
                setMensagem('Preencha todos os campos!')
                 return
            }
        }



  return (
    <section className="mx-4 flex flex-col items-center  ">

      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-[320px]">

       <h2 className="text-2xl font-semibold">Criar perfil</h2>

        <p className="text-sm">carregar imagem</p>
        <UploadBox/>

        {mensagem && <p className="text-[#e33d3d] text-sm">{mensagem}</p>}
        <label htmlFor="nome">
          Nome Completo
          <Input
            onChange={(e)=>setNome(e.target.value)}
            className="border rounded-sm w-full py-2"
            type="text"
            name="nome"
            value={nome}
          />
        </label>

        <div className="flex gap-1">
            <label htmlFor="idade">
                Idade
              <Input
              onChange={(e)=>setIdade(e.target.value)}
              className="border rounded-sm  w-3/3 py-2"
              type='number'
              name='idade'
              value={idade}
              />
            </label>

            <label htmlFor="street">
                Rua
                <Input
                onChange={(e)=>setRua(e.target.value)}
                className="border rounded-sm py-2 "
                type='text'
                name='street'
                value={rua}
                />
                </label>
        </div>

        <div className="flex gap-1">
            <label htmlFor="bairro">
                Bairro
                <Input
                onChange={(e)=>setBairro(e.target.value)}
                className="border rounded-sm py-2"
                type='text'
                name='bairro'
                value={bairro}
                />
                </label>
            <label htmlFor="estado">
                Estado
              <Input
              onChange={(e)=>setEstado(e.target.value)}
               className="border rounded-sm  w-3/3 py-2"
               type='text'
               name='estado'
               value={estado}
               />
            </label>
        </div>

        < >
          <p>Biografia</p>
          <textarea
          onChange={(e)=>setBio(e.target.value)}
           name="bio"
           className="border rounded-sm p-4" 
           maxLength={500} 
           minLength={1} 
           value={bio}/>
        </>
        <Input
          className="border rounded-sm w-full bg-[#15a4fd] text-white p-2 font-semibold mt-4"
          type="submit"
          value="Criar perfil"
        />
      </form>
    </section>
  );
};

export default CreateProfile;
