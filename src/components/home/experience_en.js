import { Table, Tag } from 'antd';

const columns = [
  {
    title: 'Institution',
    dataIndex: 'institucion',
    key: 'institucion',
    render: text => <a href={text[1]} target='_blank'>{text[0]}</a>,
    responsive: ["sm","xs"]
  },
  {
    title: 'Date',
    dataIndex: 'fecha',
    key: 'fecha',
    responsive: ["sm","xs"]
  },
  {
    title: 'Job',
    dataIndex: 'empleo',
    key: 'empleo',
    responsive: ["sm","xs"]
  },
  {
    title: 'Description',
    dataIndex: 'descripcion',
    key: 'descripcion',
    responsive: ["sm"]
  },
  {
    title: 'Keywords',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color;/*let color = tag.length > 5 ? 'geekblue' : 'green';*/
          if (tag === 'Allen Bradley' || tag === 'Arduino') {
            color = 'blue';
          }
          if (tag === 'Studio 5000' || tag === 'Machine Learning' || tag === 'NanoConnect-2') {
            color = 'cyan';
          }
          if (tag === 'FactoryTalk' || tag === 'ROS') {
            color = 'green';
          }
          if (tag === 'RAD Studio') {
            color = 'volcano';
          }
          if (tag === 'Microprocesadores' || tag === 'LabView') {
            color = 'magenta';
          }
          if (tag === 'Electrónica de potencia' || tag === 'CLIPS') {
            color = 'yellow';
          }
          if (tag === 'Sensores' || tag === 'React JS') {
            color = 'lime';
          }
          if (tag === 'Actuadores' || tag === 'Linux') {
            color = 'purple';
          }
          if (tag === 'Microcontroladores' || tag === 'Node JS') {
            color = 'geekblue';
          }
          if (tag === 'Python') {
            color = 'gold';
          }
          if (tag === 'Matlab') {
            color = 'red';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
    responsive: ["sm"]
  },
];

const data = [
  {
    key: '1',
    institucion: '',
    fecha: 2021,
    empleo: 'Automation Engineer',
    descripcion: 'Design, planning and development of Control and Supervision Systems.',
    tags: ['Allen Bradley', 'Studio 5000','FactoryTalk', 'RAD Studio'],
  },
  {
    key: '2',
    institucion: ['Instituto de Ciencias Nucleares','http://epistemia.nucleares.unam.mx/web?name=linx'],
    fecha: 2021,
    empleo: 'Programmer Engineer',
    descripcion: 'Design, planning and implementation of the critical and fundamental system of NanoConnect-2.',
    tags: ['NanoConnect-2', 'Microcontroladores', 'Microprocesadores', 'Electrónica de potencia', 'Sensores', 'Actuadores'],
  },
  {
    key: '3',
    institucion: ['Instituto de Ciencias Nucleares','http://epistemia.nucleares.unam.mx/web?name=linx'],
    fecha: 2019,
    empleo: 'Programmer Engineer',
    descripcion: 'Development of electronics, creation and programming in flight systems implemented in stratospheric balloons.',
    tags: ['Microcontroladores', 'Microprocesadores', 'Electrónica de potencia', 'Sensores', 'Actuadores'],
  },
  {
    key: '4',
    institucion: ['Programa de Tecnología en Cómputo','http://proteco.mx/cursos'],
    fecha: 2019,
    empleo: 'Programmer Engineer',
    descripcion: 'Creation of Artificial Intelligence with a focus on Service Robots.',
    tags: ['Python', 'ROS', 'Linux', 'CLIPS'],
  },
  {
    key: '5',
    institucion: ['Programa de Tecnología en Cómputo','http://proteco.mx/cursos'],
    fecha: 2018,
    empleo: 'Teacher',
    descripcion: 'Teaching semester courses in programming languages and multiple information technologies.',
    tags: ['Matlab', 'Python', 'Linux', 'Machine Learning', 'React JS', 'Node JS'],
  },
  {
    key: '6',
    institucion: ['Facultad de ingeniería','https://www.ingenieria.unam.mx/'],
    fecha: 2017,
    empleo: 'Project Leader',
    descripcion: 'Second place representing UNAM in the 2nd. IEEE Robot Olympiad. Robot Sumo Competition.',
    tags: ['Arduino', 'LabView', 'Electrónica de potencia'],
  },
];

function AppExperience(){

return(
  <div id="experience" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Experience</h2>
        </div>
        <center><Table columns={columns} dataSource={data} pagination={false} /></center>
      </div>
  </div>
  
);
}

export default AppExperience;