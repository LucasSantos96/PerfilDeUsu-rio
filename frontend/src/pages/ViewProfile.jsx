'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation";

import '@/app/globals.css'
import Input from '@/components/Input'
import UploadBox from "@/components/UploadBox"

const ViewProfile = () => {
  const [perfil, setPerfil] = useState(null)
  const [editando, setEditando] = useState(false)
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [rua, setRua] = useState("")
  const [bairro, setBairro] = useState("")
  const [estado, setEstado] = useState("")
  const [bio, setBio] = useState("")
  const [imagem, setImagem] = useState(null)
  const [mensagem, setMensagem] = useState("")

  const router = useRouter();


  useEffect(() => {
    // Busca o utimo perfil cadastrado 
    fetch('https://perfildeusu-rio.up.railway.app/')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          const p = data[data.length -1]
          setPerfil(p)
          setNome(p.nome || "")
          setIdade(p.idade || "")
          setRua(p.rua || "")
          setBairro(p.bairro || "")
          setEstado(p.estado || "")
          setBio(p.biografia || "")
        }
      })
  }, [])

  if (!perfil) return <div>{mensagem || 'Nenhum perfil encontrado.'}</div>

  const handleEdit = () => {
    setEditando(true)
  }

  const handleCancel = () => {
    setEditando(false)
    setMensagem("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!nome || !idade || !rua || !bairro || !estado || !bio){
      setMensagem('Preencha todos os campos!')
      return
    }
    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('idade', idade);
    formData.append('rua', rua);
    formData.append('bairro', bairro);
    formData.append('estado', estado);
    formData.append('biografia', bio);

    if (imagem) formData.append('imagem', imagem);
    try {
      const response = await fetch(`https://perfildeusu-rio.up.railway.app/update/${perfil.id}`, {
        method: 'PUT',
        body: formData
      });
      if (response.ok) {
        setMensagem('Perfil atualizado com sucesso!');
        setEditando(false)
        // Atualiza o perfil exibido
        fetch('https://perfildeusu-rio.up.railway.app/')
          .then(res => res.json())
          .then(data => {
            if (data && data.length > 0) {
              setPerfil(data[data.length -1])
            }
          })
      } else {
        setMensagem('Erro ao atualizar perfil!');
      }
    } catch (error) {
      setMensagem('Erro ao atualizar perfil!');
    }
  }

  const handleDelete = async () => {
    if (!window.confirm('Tem certeza que deseja deletar este perfil?')) return;
    try {
      const response = await fetch(`https://perfildeusu-rio-production.up.railway.app/delete/${perfil.id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setMensagem('Perfil deletado com sucesso!');
        setPerfil(null);
        setEditando(false);
        
        router.push("/CreateProfile");

      } else {
        setMensagem('Erro ao deletar perfil!');
      }
    } catch (error) {
      setMensagem('Erro ao deletar perfil!');
    }
  }

  if (editando) {
    return (
      <section className="mx-4 flex flex-col items-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-[320px]">
          <h2 className="text-2xl font-semibold">Editar perfil</h2>
          <p className="text-sm">carregar nova imagem (opcional)</p>
          <UploadBox onFileSelect={setImagem}/>
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
                className="border rounded-sm w-3/3 py-2"
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
          <div>
            <p>Biografia</p>
            <textarea
              onChange={(e)=>setBio(e.target.value)}
              name="bio"
              className="border rounded-sm p-4"
              maxLength={500}
              minLength={1}
              value={bio}
            />
          </div>
          <div className="flex gap-2 mt-4">
            <Input
              className="border rounded-sm w-full bg-[#15a4fd] text-white p-2 font-semibold cursor-pointer"
              type="submit"
              value="Salvar"
            />
            <Input
              className="border rounded-sm w-full bg-gray-500 text-white p-2 font-semibold cursor-pointer"
              type="button"
              value="Cancelar"
              onClick={handleCancel}
            />
          </div>
        </form>
      </section>
    )
  }

  return (
    <div className=" flex flex-col items-center justify-center mt-8 text-gray-900">
      <div>
      <h2 className="text-2xl font-bold mb-4" >Perfil</h2>
      <img
        src={`https://perfildeusu-rio.up.railway.app/imagem/${perfil.id}?${Date.now()}`}
        alt="Foto do perfil"
        className="w-80 h-80 object-cover rounded-full mb-4 border"
      />
      <div className="text-xl font-semibold">{perfil.nome}</div>
      <div>Idade: {perfil.idade}</div>
      <div>Rua: {perfil.rua}</div>
      <div>Bairro: {perfil.bairro}</div>
      <div>Estado: {perfil.estado}</div>
      <div className="mt-2 italic border rounded-sm p-2 border-gray-400"><span className='font-semibold'>Biografia:</span> <br/> {perfil.biografia}</div>
      </div>
      <div className='flex gap-2 my-4'>

        <Input
        type='button'
        onClick={handleEdit}
        className='bg-blue-500 text-white px-4 py-2 rounded mb-4 cursor-pointer'
        value='Editar'
        />

      <Input
        type='button'
        value='Deletar Perfil'
        className='bg-red-500 text-white p-2 rounded-sm cursor-pointer'
        onClick={handleDelete}
      />
      </div>
    </div>
  )
}

export default ViewProfile