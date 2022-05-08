import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
};
const endpoint = 'http://localhost:8000/api'

const onFinish = (values) => {
    console.log(values);
};


const CreateDivision = () => {
    const [nombre_division,setNombre_division] =useState('')
    const [colaboradores,setColaboradores] =useState(0)
    const [nivel,setNivel] =useState(0)
    const [embajador,setEmbajador] =useState('')
    const [descripcion,setDescripcion] =useState('')
    const [divisionsup_id,setDivisionsup_id] =useState(0)
    const navigate = useNavigate()

  const store = async (e) =>{
    e.preventDefault()
    await axios.post(endpoint,{nombre_division:nombre_division,colaboradores:colaboradores,nivel:nivel,embajador:embajador,descripcion:descripcion,divisionsup_id:divisionsup_id})
    navigate('/')
  }
  return (
    <div>
        <h3>Crear División</h3>
        <Form {...layout} onSubmitCapture={store}>
            <Form.Item
            name="nombre_division"
            label="Nombre de División"
            rules={[
                {
                required: true,
                },
            ]}
            >
                
                <Input 
                    value={nombre_division}
                    onChange= { (e)=> setNombre_division(e.target.value)}
                    type='text'
                />
            </Form.Item>
            <Form.Item
            name="colaboradores"
            label="Colaboradores"
            rules={[
                {
                required: true,
                },
            ]}>
                
                <Input 
                    value={colaboradores}
                    onChange= { (e)=> setColaboradores(e.target.value)}
                    type='number'
                />
            </Form.Item>
            <Form.Item
            name="nivel"
            label="Nivel"
            rules={[
                {
                required: true,
                },
            ]}>
                
                <Input 
                    value={nivel}
                    onChange= { (e)=> setNivel(e.target.value)}
                    type='number'
                />
            </Form.Item>
            <Form.Item
            name="embajador"
            label="Embajador"
            rules={[
                {
                required: true,
                },
            ]}>
                
                <Input 
                    value={embajador}
                    onChange= { (e)=> setEmbajador(e.target.value)}
                    type='text'
                />
            </Form.Item>
            <Form.Item
            name="descripcion"
            label="Descripcion"
            rules={[
                {
                required: true,
                },
            ]}>
                
                <Input 
                    value={descripcion}
                    onChange= { (e)=> setDescripcion(e.target.value)}
                    type='text'
                />
            </Form.Item>
            <Form.Item
            name="divisionsup_id"
            label="Division Superior"
            rules={[
                {
                required: true,
                },
            ]}>
                
                <Input 
                    value={divisionsup_id}
                    onChange= { (e)=> setDivisionsup_id(e.target.value)}
                    type='number'
                />
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
               
            </Form.Item>
        </Form>
    </div>
  )
}

export default CreateDivision