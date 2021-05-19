import { Table, Tag } from 'antd';

const columns = [
  {
    title: 'Institución',
    dataIndex: 'institucion',
    key: 'institucion',
    render: text => <a href={text[1]} target='_blank'>{text[0]}</a>,
    responsive: ["sm","xs"]
  },
  {
    title: 'Fecha',
    dataIndex: 'fecha',
    key: 'fecha',
    responsive: ["sm","xs"]
  },
  {
    title: 'Función',
    dataIndex: 'empleo',
    key: 'empleo',
    responsive: ["sm","xs"]
  },
  {
    title: 'Descripción',
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
    empleo: 'Ingeniero en Automatización',
    descripcion: 'Diseño, planeación y desarrollo de Sistemas de Control y Supervisión.',
    tags: ['Allen Bradley', 'Studio 5000','FactoryTalk', 'RAD Studio'],
  },
  {
    key: '2',
    institucion: ['Instituto de Ciencias Nucleares','http://epistemia.nucleares.unam.mx/web?name=linx'],
    fecha: 2021,
    empleo: 'Ingeniero Programador',
    descripcion: 'Diseño, planeación e implementación del sistema crítico y fundamental de ' + 'NanoConnect-2.',
    tags: ['NanoConnect-2', 'Microcontroladores', 'Microprocesadores', 'Electrónica de potencia', 'Sensores', 'Actuadores'],
  },
  {
    key: '3',
    institucion: ['Instituto de Ciencias Nucleares','http://epistemia.nucleares.unam.mx/web?name=linx'],
    fecha: 2019,
    empleo: 'Ingeniero Programador',
    descripcion: 'Desarrollo de electrónica, creación y programación en sistemas de vuelo implementados en globos estratosféricos.',
    tags: ['Microcontroladores', 'Microprocesadores', 'Electrónica de potencia', 'Sensores', 'Actuadores'],
  },
  {
    key: '4',
    institucion: ['Programa de Tecnología en Cómputo','http://proteco.mx/cursos'],
    fecha: 2019,
    empleo: 'Ingeniero Programador',
    descripcion: 'Creación de una Inteligencia Artificial con enfoque en Robots de Servicio.',
    tags: ['Python', 'ROS', 'Linux', 'CLIPS'],
  },
  {
    key: '5',
    institucion: ['Programa de Tecnología en Cómputo','http://proteco.mx/cursos'],
    fecha: 2018,
    empleo: 'Instructor',
    descripcion: 'Impartición de cursos semestrales de lenguajes de programación y múltiples tecnologías de la información.',
    tags: ['Matlab', 'Python', 'Linux', 'Machine Learning', 'React JS', 'Node JS'],
  },
  {
    key: '6',
    institucion: ['Facultad de ingeniería','https://www.ingenieria.unam.mx/'],
    fecha: 2017,
    empleo: 'Jefe de proyecto',
    descripcion: 'Segundo lugar representando a la UNAM en la 2a. Olimpiada de Robots de la IEEE. Competencia Robot Sumo.',
    tags: ['Arduino', 'LabView', 'Electrónica de potencia'],
  },
];

function AppExperience(){

return(
  <div id="experience" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Experiencia</h2>
        </div>
        <center><Table columns={columns} dataSource={data} pagination={false} /></center>
      </div>
  </div>
  
);
}

export default AppExperience;