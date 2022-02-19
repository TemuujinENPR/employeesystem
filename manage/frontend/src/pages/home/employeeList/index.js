import React, { useEffect, useState } from 'react'
import { Card, Button, Table, Drawer, Input, Form, Divider, Radio, Row, Col, message } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import styles from './employeeList.module.css'

const EmployeeList = () => {

  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [department, setDepartment] = useState('');
  const [salary, setSalary] = useState('');
  const [employees, setEmployees] = useState([]);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleCreate = (e, type) => {
    e.preventDefault()
    const employee = {firstName, lastName, gender, email, number, country, city, department, salary}
    fetch('http://localhost:8082/employee/create', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(employee)
    })
    .then(() => {
      message.success('Шинэ ажилтны мэдээлэл амжилттай нэмэгдлээ')
    })
  }
  
  useEffect(() => {
    fetch('http://localhost:8082/employee/getAll')
    .then(res => res.json())
    .then((result) => {
      setEmployees(result);
    })
  }, [])

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Нэр',
      dataIndex: 'firstName',
    },
    {
      title: 'Овог',
      dataIndex: 'lastName',
    },
    {
      title: 'Хүйс',
      dataIndex: 'gender',
    },
    {
      title: 'И-Мэйл',
      dataIndex: 'email',
    },
    {
      title: 'Дугаар',
      dataIndex: 'number',
    },
    {
      title: 'Улс',
      dataIndex: 'country',
    },
    {
      title: 'Хот',
      dataIndex: 'city',
    },
    {
      title: 'Хэлтэс',
      dataIndex: 'department',
    },
    {
      title: 'Цалин /төг/',
      dataIndex: 'salary',
    },
  ];

  const create = (
    <>
      <Button
        icon={<PlusOutlined/>}
        type='primary'
        onClick={showDrawer}
      >
        Бүртгэх
      </Button>

      <Drawer title='Бүртгэх' width={600} placement='right' onClose={onClose} visible={visible}>
        <Form
            form={form}
            // initialValues={updateData}
            // onFinish={submitHandle}
            layout='vertical'
            // onValuesChange={(values) => setFormValues(values)}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label='Нэр'
                  name='firstName'
                  rules={[{required: true, message: 'Нэр оруулна үү!'}]}
                  style={{marginBottom: 10}}
                >
                  <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='Нэр' />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label='Овог'
                  name='lastName'
                  rules={[{required: true, message: 'Овог оруулна үү!'}]}
                  style={{marginBottom: 10}}
                >
                  <Input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Овог' />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label='И-Мэйл'
                  name='email'
                  rules={[{required: true, message: 'И-Мэйл оруулна уу!'}]}
                  style={{marginBottom: 10}}
                >
                  <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='И-Мэйл' />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label='Дугаар'
                  name='number'
                  rules={[{required: true, message: 'Дугаар оруулна уу!'}]}
                  style={{marginBottom: 10}}
                >
                  <Input value={number} onChange={(e) => setNumber(e.target.value)} placeholder='Дугаар' />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label='Улс'
                  name='country'
                  rules={[{required: true, message: 'Улс оруулна уу!'}]}
                  style={{marginBottom: 10}}
                >
                  <Input value={country} onChange={(e) => setCountry(e.target.value)} placeholder='Улс' />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label='Хот'
                  name='city'
                  rules={[{required: true, message: 'Хот оруулна уу!'}]}
                  style={{marginBottom: 10}}
                >
                  <Input value={city} onChange={(e) => setCity(e.target.value)} placeholder='Хот' />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label='Хэлтэс'
                  name='department'
                  rules={[{required: true, message: 'Хэлтэс оруулна уу!'}]}
                  style={{marginBottom: 10}}
                >
                  <Input value={department} onChange={(e) => setDepartment(e.target.value)} placeholder='Хэлтэс' />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label='Цалин /төг/'
                  name='salary'
                  rules={[{required: true, message: 'Цалин оруулна уу!'}]}
                  style={{marginBottom: 10}}
                >
                  <Input value={salary} onChange={(e) => setSalary(e.target.value)} placeholder='Цалин /төг/' />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label='Хүйс'
                  name='gender'
                  rules={[{required: true, message: 'Хүйс сонгоно уу!'}]}
                  style={{marginBottom: 10}}
                >
                  <Radio.Group
                    value={gender} onChange={(e) => setGender(e.target.value)}
                  >
                    <Radio value='Эр'>Эр</Radio>
                    <Radio value='Эм'>Эм</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
            </Row>
            <Divider />
            <Form.Item>
              <Button type="default" onClick={onClose} loading={loading}>
                  Буцах
              </Button>
              <Button onClick={handleCreate} style={{marginLeft: '10px'}} type="primary" htmlType="submit" loading={loading}>
                  Хадгалах
              </Button>
            </Form.Item>
          </Form>
      </Drawer>
    </>
  )

  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <div className={styles.cardBox}>
          <Card title='Ажилтнуудын жагсаалт' bordered={false} style={{ width: '100%' }} extra={create}>
            <Table
              columns={columns} 
              dataSource={employees}
              pagination={{ pageSize: 10 }} 
              scroll={{ y: 450 }} 
            />
          </Card>
        </div>
      </div>
    </div>
  )
}

export default EmployeeList