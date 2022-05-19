import React, { useEffect, useRef, useState } from 'react';
import { Row, Col } from 'antd';
import { Card } from 'antd';
import { Select } from 'antd';
import { Button } from 'antd';
import Graph from '@/pages/Kr/Graph';
const { Option } = Select;

const response = await fetch(
  'https://gw.alipayobjects.com/os/basement_prod/6cae02ab-4c29-44b2-b1fd-4005688febcb.json',
);

const data = {
  nodes: [
    { id: 'node0', label: '交通肇事罪', type: 'circle' },
    { id: 'node1', label: '主要责任', type: 'circle' },
    { id: 'node2', label: '当庭自愿认罪', type: 'circle' },
    { id: 'node3', label: '赔偿被害人经济损失', type: 'circle' },
    { id: 'node4', label: '取得被害人亲属谅解', type: 'circle' },
    { id: 'node5', label: '具有悔罪表现', type: 'circle' },
    { id: 'node6', label: '被害人死亡', type: 'circle' },
    { id: 'node7', label: '驾车逃逸', type: 'circle' },
    { id: 'node8', label: '有期徒刑三年', type: 'circle' },
    { id: 'node9', label: '缓刑四年', type: 'circle' },
    { id: 'node10', label: '交通事故', type: 'circle' },
    { id: 'node11', label: '交通肇事罪', type: 'circle' },
  ],
  edges: [
    { source: 'node0', label: '主次责任', target: 'node1' },
    { source: 'node0', label: '减刑因素', target: 'node2' },
    { source: 'node0', label: '减刑因素', target: 'node3' },
    { source: 'node0', label: '减刑因素', target: 'node4' },
    { source: 'node0', label: '减刑因素', target: 'node5' },
    { source: 'node0', label: '加刑因素', target: 'node6' },
    { source: 'node0', label: '加刑因素', target: 'node7' },
    { source: 'node0', label: '判决结果', target: 'node8' },
    { source: 'node0', label: '判决结果', target: 'node9' },
    { source: 'node0', label: '事故类型', target: 'node10' },
    { source: 'node0', label: '罪名', target: 'node11' },
  ],
};
// const nodes = remoteData.nodes;
// console.log(nodes)
// const edges = remoteData.edges;

// nodes.forEach((node) => {
//   if (!node.style) {
//     node.style = {};
//   }
//   node.style.lineWidth = 1;
//   node.style.stroke = '#666';
//   node.style.fill = 'steelblue';
//   switch (node.class) {
//     case 'c0': {
//       node.type = 'circle';
//       node.size = 30;
//       break;
//     }
//     case 'c1': {
//       node.type = 'rect';
//       node.size = [35, 20];
//       break;
//     }
//     case 'c2': {
//       node.type = 'ellipse';
//       node.size = [35, 20];
//       break;
//     }
//   }
// });
// edges.forEach((edge) => {
//   if (!edge.style) {
//     edge.style = {};
//   }
//   edge.style.lineWidth = edge.weight;
//   edge.style.opacity = 0.6;
//   edge.style.stroke = 'grey';
// });

const DataSet1 = () => {
  const [value1, setvalue1] = useState(undefined);
  const [value2, setvalue2] = useState(undefined);
  const [value3, setvalue3] = useState(undefined);
  const [results, setresults] = useState([]);
  const [explain, setexplain] = useState('');

  const s1 = useRef();
  const s2 = useRef();
  const s3 = useRef();

  useEffect(() => {
    // console.log(value1, value2, value3, results)
    // let cList = document.getElementsByTagName('canvas')
    // console.log(cList[0])
    // cList[0].height = 400
    // cList[0].width = 600
    // cList[0].style.width = '600px' // 指定画板的宽，一定要与画布的宽相同
    // cList[0].style.height = '400px' // 指定画板的高，一定要与画布的高相同
  });

  const handleChangeS1 = (value) => {
    setvalue1(value);
    if (value2 || value3) {
      const value = value2 ? value2 : value3;
      showResult(value1, value);
      showExplain(value1, value);
      // console.log(results)
    }
    console.log('obj1是', value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  };

  const handleChangeS2 = (value) => {
    setvalue2(value);
    if (value1 || value3) {
      const value = value1 ? value1 : value3;
      showResult(value2, value);
      showExplain(value2, value);
      // console.log(results)
    }
    console.log('obj2是', value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  };

  const handleChangeS3 = (value) => {
    setvalue3(value);
    if (value1 || value2) {
      const value = value1 ? value1 : value2;
      showResult(value3, value);
      showExplain(value3, value);
      // console.log(results)
    }
    console.log('obj3是', value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  };

  const showResult = (v1, v2) => {
    setresults(['上海', '北京', '武汉', '杭州', '广州']);
  };

  const showExplain = () => {
    setexplain('解释解释解释解释解释解释解释解释解释...');
  };

  const clear = () => {
    setvalue1(undefined);
    setvalue2(undefined);
    setvalue3(undefined);
    setresults([]);
    setexplain('');
  };

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
        <Col span={12} style={{ height: '800px' }}>
          <div>
            <Graph data={data}></Graph>
          </div>
          <div style={{ height: '300px', paddingLeft: '50px' }}>
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

            <Button type="primary" onClick={clear}>
              清空
            </Button>
          </div>
        </Col>

        <Col span={12}>
          <div style={{ marginBottom: '50px' }}>
            <Card title="Top 5 Results">
              <p key={1}>{results[0]}</p>
              <p key={2}>{results[1]}</p>
              <p key={3}>{results[2]}</p>
              <p key={4}>{results[3]}</p>
              <p key={5}>{results[4]}</p>
            </Card>
          </div>
          <div style={{ marginTop: '100px' }}>
            <Card title="Explanations:">
              <p>{explain}</p>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DataSet1;
