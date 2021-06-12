import React, {useState} from 'react';
import { List, Avatar, Space, Divider, Image } from 'antd';


import { CloudDownloadOutlined , LikeOutlined, MessageOutlined, GithubOutlined , HeartOutlined , InfoCircleOutlined } from '@ant-design/icons';
import icon from '../../assets/images/avatar-01.png';

const listData = [];


listData.push({
  title: 'Eigen',
  href: '/Eigen',
  avatar: {icon},
  description:
    'Recognition of emotions',
  content:
    'Eigen is a project created with the aim of learning about human emotions from the comparison of a data bank and the facial characteristic values obtained by the camera. The script was made with the OpenCV library in python.',
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
  href: '/Arco',
  avatar: {icon},
  description:
    'Personal assistant',
  content:
    'Personal assistant in Telegram developed with python to control and monitor electrical and electronic devices. Arco is a bot that through text messages allows you to access and modify certain characteristics of the devices connected to a server through serial communication.',
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
  href: '/SoftStation',
  avatar: {icon},
  description:
    'Control and Supervision of an electro-pneumatic plant',
  content:
    'Ladder programming of sequential piston opening. SCADA supervision system: controls and indicators for the start, stop and movement of the sequence. Trend diagrams, plans and documentation.',
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
  href: '/Aurv',
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
  href: '/Sumb',
  avatar: {icon},
  description:
    'Control and Supervision of a hydraulic plant',
  content:
    'Control of two water tanks through a PID system. Ladder operation programming, and development of a graphical interface with indicators and controllers of the respective control valves, cut-off valves and pumps to supply the system. Documentation and plans.',
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
          <h2>Projects</h2>
          <p></p>
        </div>
        <div className="content">
        <List
            bordered
            itemLayout="vertical"
            size="large"
            dataSource={listData}
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
          <Divider orientation="left">* Private project</Divider>
        </div>
        
      </div>
    </div>
  );
}

export default AppProjects;