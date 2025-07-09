'use client'
import '@/app/globals.css'
import Input from "@/components/Input";
import UploadBox from "@/components/UploadBox";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CreateProfile = () => {

    const [mensagem, setMensagem] = useState("")
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [rua, setRua] = useState("")
    const [bairro, setBairro] = useState("")
    const [estado, setEstado] = useState("")
    const [bio, setBio] = useState("")
    const [imagem, setImagem] = useState(null)
    const router = useRouter();

    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(!nome || !idade || !rua || !bairro || !estado || !bio || !imagem){
            setMensagem('Preencha todos os campos!')
             return
        }

        // Monta o FormData para enviar os dados e a imagem
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('idade', idade);
        formData.append('rua', rua);
        formData.append('bairro', bairro);
        formData.append('estado', estado);
        formData.append('biografia', bio);
        formData.append('imagem', imagem);

        try {
            const response = await fetch('https://perfildeusu-rio-production.up.railway.app/create', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                setMensagem('Perfil criado com sucesso!');
                setNome('');
                setBairro('');
                setBio('');
                setEstado('');
                setIdade('');
                setRua('');
                setImagem(null);
                // Redireciona para a página de visualização
                router.push("/ViewProfile");
            } else {
                setMensagem('Erro ao criar perfil!');
            }
        } catch (error) {
            setMensagem('Erro ao criar perfil!');
        }
    }

  return (
    <section className=" mt-20 mx-4 flex flex-col items-center  text-gray-800 lg:px-10 ">

      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-[320px]">

       <h2 className="text-2xl font-semibold">Criar perfil</h2>

        <p className="text-sm">carregar imagem</p>
        <UploadBox onFileSelect={setImagem}/>

        {mensagem && <p className="text-[#e33d3d] text-sm">{mensagem}</p>}
        <label htmlFor="nome">
          Nome Completo
          <Input
            onChange={(e)=>setNome(e.target.value)}
            className="border rounded-sm w-full py-2 border-gray-400"
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
              className="border rounded-sm  w-3/3 py-2 border-gray-400"
              type='number'
              name='idade'
              value={idade}
              />
            </label>

            <label htmlFor="street">
                Rua
                <Input
                onChange={(e)=>setRua(e.target.value)}
                className="border rounded-sm py-2 border-gray-400 "
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
                className="border rounded-sm py-2 border-gray-400"
                type='text'
                name='bairro'
                value={bairro}
                />
                </label>
            <label htmlFor="estado">
                Estado
              <Input
              onChange={(e)=>setEstado(e.target.value)}
               className="border rounded-sm  w-3/3 py-2 border-gray-400"
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
           className="border rounded-sm p-4 border-gray-400" 
           maxLength={500} 
           minLength={1} 
           value={bio}/>
        </>
        <Input
          className="border rounded-sm w-full bg-[#15a4fd] text-white p-2 font-semibold mt-4 cursor-pointer hover:bg-[#15a4fd]/80"
          type="submit"
          value="Criar perfil"

        />
      </form>
    </section>
  );
};

export default CreateProfile;
