import React, { useEffect } from 'react';
import G6 from '@antv/g6';

const Graph = (props) => {
  const data = props.data;

  useEffect(() => {
    const graph = new G6.Graph({
      container: 'mountNode',
      width: 600, // 指定画布的宽
      height: 400, // 指定画布的高
      // fitView: true, // 图自适应画布
      // fitViewPadding: 20, //图自适应画布时的四周留白像素值
      fitCenter: true, // 平移图使其中心对齐到画布中心
      // 节点默认配置
      defaultNode: {
        labelCfg: {
          style: {
            fill: 'orange',
          },
        },
      },
      // 边默认配置
      defaultEdge: {
        labelCfg: {
          autoRotate: true,
        },
      },
      // 节点在各状态下的样式
      nodeStateStyles: {
        // hover 状态为 true 时的样式
        hover: {
          fill: 'lightsteelblue',
        },
        // click 状态为 true 时的样式
        click: {
          stroke: '#000',
          lineWidth: 3,
        },
      },
      // 边在各状态下的样式
      edgeStateStyles: {
        // click 状态为 true 时的样式
        click: {
          stroke: 'steelblue',
        },
      },
      // 布局
      layout: {
        type: 'force', // 设置布局算法为 force
        linkDistance: 80, // 设置边长为 80
        preventOverlap: true, // 设置防止重叠
        nodeStrength: -30,
        edgeStrength: 0.1,
        center: [300, 200],
      },
      // 内置交互
      modes: {
        default: [
          {
            type: 'drag-node',
          },
          {
            type: 'zoom-canvas',
          },
          {
            type: 'activate-relations',
          },
          {
            type: 'tooltip',
            formatText(model) {
              // return '姓名：' + model.label + '<br/>字：' + model.zi;
              return '实体：' + model.label;
            },
            offset: 15,
          },
          {
            type: 'edge-tooltip',
            formatText(model) {
              return model.label;
            },
            offset: 15,
          },
          {
            type: 'brush-select',
          },
        ],
      },
    });

    // 监听鼠标进入节点
    graph.on('node:mouseenter', (e) => {
      const nodeItem = e.item;
      // 设置目标节点的 hover 状态 为 true
      graph.setItemState(nodeItem, 'hover', true);
    });

    // 监听鼠标离开节点
    graph.on('node:mouseleave', (e) => {
      const nodeItem = e.item;
      // 设置目标节点的 hover 状态 false
      graph.setItemState(nodeItem, 'hover', false);
    });

    // 监听鼠标点击节点
    graph.on('node:click', (e) => {
      // 先将所有当前有 click 状态的节点的 click 状态置为 false
      const clickNodes = graph.findAllByState('node', 'click');
      clickNodes.forEach((cn) => {
        graph.setItemState(cn, 'click', false);
      });
      const nodeItem = e.item;
      // 设置目标节点的 click 状态 为 true
      graph.setItemState(nodeItem, 'click', true);
    });

    // 监听鼠标点击节点
    graph.on('edge:click', (e) => {
      // 先将所有当前有 click 状态的边的 click 状态置为 false
      const clickEdges = graph.findAllByState('edge', 'click');
      clickEdges.forEach((ce) => {
        graph.setItemState(ce, 'click', false);
      });
      const edgeItem = e.item;
      // 设置目标边的 click 状态 为 true
      graph.setItemState(edgeItem, 'click', true);
    });

    graph.data(data);

    graph.render();
  }, []);

  return (
    <div
      id="mountNode"
      style={{
        height: '400px',
        marginBottom: '50px',
        borderWidth: '10px !important',
        borderColor: 'black !important',
      }}
    ></div>
  );
};

export default Graph;
