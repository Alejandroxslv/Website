import React, {useState} from 'react';
import { List, Avatar, Space, message, Image } from 'antd';


import { CloudDownloadOutlined , LikeOutlined, MessageOutlined, GithubOutlined , HeartOutlined , InfoCircleOutlined } from '@ant-design/icons';
import working from '../../assets/images/working.jpg';
import icon from '../../assets/images/profile.jpg';
import GOB from '../../assets/images/GOB.png';
import SGSS from '../../assets/images/SGSS.png';
import image4 from '../../assets/images/planos.jpg';
import image5 from '../../assets/images/unlimited-features.jpg';
import image6 from '../../assets/images/advanced-option.jpg';

const listData = [];

const a = () => (
  <a>Hola mundo</a>
);

listData.push({
  title: 'Eigen',
  href: 'https://www.google.com/',
  avatar: {icon},
  description:
    'Reconocimiento de emociones',
  content:
    'Eigen es un proyecto creado con el objetivo de aprender de las emociones humanas a partir de la comparación de un banco de datos y los valores característicos faciales obtenidos por la cámara. El script se realizó con la biblioteca OpenCV en python.',
  imagen: 
    'https://images.ctfassets.net/wqwerb01q4v1/5gSAmLtf8pjNyWGmXMG0Hi/c5507f8c2dc2b1ccd7ee70e30eebbad8/business-automation.png',
  likes:
    '14',
  comments:
    '2',
  downloads:
    '67',
  });

listData.push({
  title: 'Arco',
  href: 'https://www.google.com/',
  avatar: {icon},
  description:
    'Asistente personal',
  content:
    'Asistente personal en Telegram desarrollado con python para realizar el control y supervisión de dispositivos eléctricos y electrónicos. Arco es un bot que a través de mensajes de texto te permite acceder y modificar ciertas características de los dispositivos conectados a un server por medio de una comunicación serial.',
  imagen: 
    'https://images.ctfassets.net/wqwerb01q4v1/5d90VHIMkr5pHoH6pO7w5A/de588e34c1aa1c2f42aea54bad57aba8/shipping-docker-logs-with-heka.png',
  likes:
    '65',
  comments:
    '8',
  downloads:
    '96',
  });

listData.push({
  title: 'SoftStation*',
  href: 'https://www.google.com/',
  avatar: {icon},
  description:
    'Control y Supervisión de una planta electro-neumática',
  content:
    'Programación en Ladder de apertura secuencial de pistones. Sistema de supervisión SCADA: controles e indicadores de inicio, paro y movimiento de la secuencia. Diagramas de tendencias, planos y documentación.',
  imagen: 
  'https://images.ctfassets.net/wqwerb01q4v1/23EpaZdmchDNurmEp7cHMl/782d294d5d1416d1e97577b337ed6f21/tray-blog-general-spiral_4x-min.png?w=1700&h=729',
  likes:
    '14',
  comments:
    '0',
  downloads:
    '20',
  });

listData.push({
  title: 'Aurv',
  href: 'https://www.google.com/',
  avatar: {icon},
  description:
    '',
  content:
    '',
  imagen: 
  'https://images.ctfassets.net/wqwerb01q4v1/7c2VPiS61EppOoaHjTtGfr/04e2abe7d2938276cf245e97a2499dbd/how-to-automate-lead-enrichment.png?w=1700&h=729',
  likes:
    '36',
  comments:
    '4',
  downloads:
    '130',
  });

listData.push({
  title: 'Sumb*',
  href: 'https://www.ingenieroalejandrolopez.com/',
  avatar: {icon},
  description:
    'Control y supervisión de una planta hidráulica',
  content:
    'Control de dos tanques de agua a través de un sistema PID. Programación del funcionamiento en Ladder, y desarrollo de una interfaz gráfica con indicadores y controladores de las respectivas válvulas de control, de corte y bombas para abastecer el sistema. Documentación y planos.',
  imagen: 
    'https://images.ctfassets.net/7rbn0raz0t75/6YhqgNZ2mWFjRyvBIAH6vX/a029ed43ac9a00fe273f77dfd42457f7/tray-general-automation-platform_connected_2x.png?w=1700&h=1276',
  likes:
    '11',
  comments:
    '0',
  downloads:
    '18',
  });
  


  


const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

function AppProjects() {

  return (
    <div id="projects" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Proyectos</h2>
          <p></p>
        </div>
        <div className="content">
        <List
            itemLayout="vertical"
            size="large"
            dataSource={listData}
            footer={
              <div>
                * Proyecto <b>privado</b>. 
              </div>
            }
            renderItem={item => (
              <List.Item
                key={item.title}
                actions={[
                  <a href={item.href} target='_blank'><GithubOutlined style={{ fontSize: '16px', color: '#08c' }} /></a>, 
                  <IconText icon={CloudDownloadOutlined} text={item.downloads} key="list-vertical-like-o" />,
                  <IconText icon={HeartOutlined} text={item.likes} key="list-vertical-like-o" />,
                  <IconText icon={MessageOutlined} text={item.comments} key="list-vertical-message" />,
                ]}
                extra={
                  <img
                    width={262}
                    alt="project-img"
                    src={item.imagen}
                  />
                }
              >
                <List.Item.Meta
                  avatar={<Avatar src={icon} />} /*'https://avatars.githubusercontent.com/u/36826587?s=460&u=04f22fcf966a4e9695c3ff886b9f8e7b3b89e3be&v=4'*/
                  title={<a href={item.href} target='_blank'>{item.title}</a>}
                  description={item.description}
                />
                {item.content}
              </List.Item>
            )}
          />
        </div>
        
      </div>
    </div>
  );
}

export default AppProjects;