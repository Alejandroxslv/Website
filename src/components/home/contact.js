import React from 'react';

import { Form, Input, Button, Checkbox } from 'antd';
const { TextArea } = Input;

function AppContact() {
  return (
    <div id="contact" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Contacto</h2>
        </div>
        <div className="quickSupport">
          <h3></h3>
          <p>Mi bandeja de entrada está siempre abierta. Ya sea que tengas una pregunta o simplemente quieras saludar, ¡haré todo lo posible para responderte pronto! Contáctame a través de mi correo electrónico <a href="mailto:david.alejandro.proteco@gmail.com?Subject=Contacto%20desde%20website" target='_blank'>info@ingdavidsilva.com</a></p>
          <Button type="primary" size="large" href="mailto:david.alejandro.proteco@gmail.com?Subject=Contacto%20desde%20website" target='_blank'><i className="fas fa-envelope"></i> Enviar mensaje</Button>
        </div>
      </div>
    </div>  
  );
}

export default AppContact;



/*
<Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="fullname"
            rules={[
              { 
                required: true,
                message: 'Por favor escriba su nombre completo!' 
              }]
            }
          >
            <Input placeholder="Nombre completo" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'Esta dirección de correo no parece válida!',
              },
              {
                required: true,
                message: 'Por favor ingrese su dirección de correo electrónico!',
              },
            ]}
          >
            <Input placeholder="Correo electrónico"/>
          </Form.Item>
          <Form.Item
            name="telephone"
          >
            <Input placeholder="Teléfono (Opcional)" />
          </Form.Item>
          <Form.Item
            name="subject"
          >
            <Input placeholder="Asunto" />
          </Form.Item>
          <Form.Item
            name="message"
          >
            <TextArea placeholder="Mensaje" />
          </Form.Item>
          <Form.Item>
            <Form.Item 
              name="remember" 
              valuePropName="checked"
              noStyle
              rules={[
                { validator:(_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement') },
              ]}
            >
              <Checkbox>Acepto los términos y condiciones.</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Enviar
            </Button>
          </Form.Item>
        </Form>
*/