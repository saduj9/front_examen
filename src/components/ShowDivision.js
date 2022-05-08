import React, {useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Row, Col, Divider,Switch,Table,Space,Button } from 'antd';

const endpoint = 'http://localhost:8000/api'
const ShowDivision = () => {
    const [division,setDivision] = useState([])
    useEffect(()=>{
        getAllDivision()
    },[])
    
    const getAllDivision = async () =>{
       const response =  await axios.get(`${endpoint}/divisiones`)
       
       let divMap = response.data.map(item =>{
           return [item.id,item]
       })
       var divMapArr = new Map(divMap);
       let unicos = [...divMapArr.values()]
   
       setDivision(unicos)
    }
    const deleteDivision = async(id) =>{
      axios.delete(`${endpoint}/division/${id}`)
      getAllDivision()
    }
   
    
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        onSelect: (record, selected, selectedRows) => {
          console.log(record, selected, selectedRows);
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
          console.log(selected, selectedRows, changeRows);
        },
      };
      

    const columns = [
        {
            title: 'División',
            dataIndex: 'nombre_division',
            key: 'nombre_division',
            filters:[
                { text: 'Strategy', value: 'Strategy' },
                { text: 'CEO', value: 'CEO' },
                { text: 'Facturación', value: 'Facturación' }
            ],
            
            onFilter: (value, record) => record.nombre_division.includes(value),
            sorter: (a, b) => a.nombre_division.length - b.nombre_division.length,
            ellipsis: true,
        },
        {
            title: 'División Superior',
            dataIndex: 'nombre_divisionsup',
            key: 'nombre_divisionsup',
            filters:[
                { text: 'Operaciones', value: 'Operaciones' },
                { text: 'Dirección general', value: 'Dirección general' },
                { text: 'Producto', value: 'Producto' }
            ],
            responsive: ['md'],
            onFilter: (value, record) => record.nombre_divisionsup.includes(value),
            sorter: (a, b) => a.nombre_divisionsup.length - b.nombre_divisionsup.length,
            ellipsis: true,
        },
        {
            title: 'Colaboradores',
            dataIndex: 'colaboradores',
            key: 'colaboradores',
            responsive: ['md'],
            sorter: (a, b) => a.colaboradores.length - b.colaboradores.length,
            ellipsis: true,

        },
        {
            title: 'Nivel',
            dataIndex: 'nivel',
            key: 'nivel',
            filters:[
                { text: '1', value: '1' },
                { text: '2', value: '2' },
                { text: '3', value: '3' }
            ],
            responsive: ['lg'],
            onFilter: (value, record) => record.nivel.includes(value),
            sorter: (a, b) => a.nivel.length - b.nivel.length,
            ellipsis: true,
        },
        {
            title: 'Subdivisiones',
            dataIndex: 'subdivisiones',
            key: 'subdivisiones',
            responsive: ['lg'],
            sorter: (a, b) => a.subdivisiones.length - b.subdivisiones.length,
            ellipsis: true,
        },
        {
            title: 'Embajadores',
            dataIndex: 'embajador',
            key: 'embajador',
            responsive: ['lg'],
            ellipsis: true,
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: () => <a onClick={()=>deleteDivision(division.id)}>delete</a>,
        },

    ]
    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }
    const [checkStrictly, setCheckStrictly] = React.useState(false);
    
    return (
        <div>
            <Row>
                <Col span={24}>
                    <Button type='primary' href="/create" ><a >Crear</a></Button>
                </Col>
            </Row>
            <Space align="center" style={{ marginBottom: 16 }}>
                CheckStrictly: <Switch checked={checkStrictly} onChange={setCheckStrictly} />
            </Space>
            <Table columns={columns} dataSource={division}  rowSelection={{ ...rowSelection, checkStrictly }}></Table>

        </div>
    )
}

export default ShowDivision