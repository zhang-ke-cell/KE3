import React, {useEffect, useRef, useState} from 'react';
import { Row, Col } from 'antd';
import { Card } from 'antd';
import { Select } from 'antd';
import { Button } from 'antd';

const { Option } = Select;

const DataSet1 = ()=>{
  const [value1, setvalue1] = useState(undefined)
  const [value2, setvalue2] = useState(undefined)
  const [value3, setvalue3] = useState(undefined)
  const [results, setresults] = useState([])
  const [explain, setexplain] = useState('')

  const s1 = useRef()
  const s2 = useRef()
  const s3 = useRef()

  useEffect(()=>{
    console.log(value1, value2, value3, results)
  })

  const handleChangeS1 = (value)=> {
    setvalue1(value)
    if(value2 || value3){
      const value = value2 ? value2:value3
      showResult(value1, value)
      showExplain(value1, value)
      // console.log(results)
    }
    console.log('obj1是',value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  }

  const handleChangeS2 = (value)=> {
    setvalue2(value)
    if(value1 || value3){
      const value = value1 ? value1:value3
      showResult(value2, value)
      showExplain(value2, value)
      // console.log(results)
    }
    console.log('obj2是', value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  }

  const handleChangeS3 = (value)=> {
    setvalue3(value)
    if(value1 || value2){
      const value = value1 ? value1:value2
      showResult(value3, value)
      showExplain(value3, value)
      // console.log(results)
    }
    console.log('obj3是',value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  }

  const showResult = (v1, v2)=>{
    setresults(['上海', '北京', '武汉', '杭州', '广州'])
  }

  const showExplain = ()=>{
    setexplain('解释解释解释解释解释解释解释解释解释...')
  }

  const clear = ()=>{
    setvalue1(undefined)
    setvalue2(undefined)
    setvalue3(undefined)
    setresults([])
    setexplain('')
  }

  function onSearchV1(val) {
    console.log('search:', val);
  }
  function onSearchV2(val) {
    console.log('search:', val);
  }
  function onSearchV3(val) {
    console.log('search:', val);
  }

  return (
    <div style={{}}>
      <Row>
        <Col span={12} style={{height:'800px',padding:'50px'}}>
          <div style={{height:'300px', marginBottom:'50px'}}>这是矢量图</div>
          <div style={{height:'300px', marginTop:'50px'}}>
            <Select
              ref={s1}
              style={{ width: 120 }}
              showSearch
              value={value1}
              placeholder={'请选择'}
              onChange={handleChangeS1}
              onSearch={onSearchV1}
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="姚明">姚明 (100)</Option>
              <Option value="川普">川普 (101)</Option>
            </Select>

            <Select
              ref={s2}
              style={{ width: 120 }}
              showSearch
              value={value2}
              placeholder={'请选择'}
              onChange={handleChangeS2}
              onSearch={onSearchV2}
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="是">是 (100)</Option>
              <Option value="出生于">出生于 (101)</Option>
            </Select>

            <Select
              ref={s3}
              style={{ width: 120 }}
              showSearch
              value={value3}
              placeholder={'请选择'}
              onChange={handleChangeS3}
              onSearch={onSearchV3}
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="上海">上海 (100)</Option>
              <Option value="美国人">美国人 (101)</Option>
            </Select>

            <Button type="primary" onClick={clear}>清空</Button>
          </div>
        </Col>

        <Col span={12}>
          <div style={{marginBottom:'50px'}}>
            <Card title="Top 5 Results" >
              <p key={1}>{results[0]}</p>
              <p key={2}>{results[1]}</p>
              <p key={3}>{results[2]}</p>
              <p key={4}>{results[3]}</p>
              <p key={5}>{results[4]}</p>
            </Card>
          </div>
          <div style={{marginTop:'100px'}}>
            <Card title="Explanations:" >
              <p>{explain}</p>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default DataSet1
