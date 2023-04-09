import React from 'react';
import MySelect from './SelectComponent.tsx';

const data = [
  {
    id: '261e9caf-7c3f-44f7-94b2-c0449d9a0e6f',
    name: 'Camel Logistics',
    code: 'caoloc',
    domain: 'caoloc.mygobiz.net',
    description: 'Camel Logistics',
    logo: 'https://i.imgur.com/IREIiGo.png',
    currency:
      '{"code": "VND", "name": "Dong", "suffix": "₫", "symbol": "₫", "description": null, "numberFormat": null}',
    redirectUrl:
      '{"order": "https://caoloc.mygobiz.net/#/orders/{code}", "shipment": "https://caoloc.mygobiz.net/#/shipments/{code}", "peer_payment": "https://api.justice.gobizdev.com/#/clark/payment/peer-payments/{code}"}',
    orderServices: [{ enable: false }],
    shipmentServices: [{ enable: true }],
    peerPaymentServices: [{ enable: false }],
    shipmentPeerPaymentServices: [{ enable: true }],
    createdAt: '2021-12-23T15:15:35.190Z',
    createdBy: 'chaos',
    modifiedAt: null,
    modifiedBy: '',
    refCode: null,
  },
  {
    id: '3805f95c-4777-4b03-93a4-0a1ebf787abc',
    name: 'Bắc Nam Logistics',
    code: '9b',
    domain: '9b.mygobiz.net',
    description: 'Bắc Nam Logistics',
    logo: 'https://i.imgur.com/cU4HAkX.png',
    currency:
      '{"code": "VND", "name": "Dong", "suffix": "₫", "symbol": "₫", "description": null, "numberFormat": null}',
    redirectUrl:
      '{"order": "https://9b.mygobiz.net/#/orders/{code}", "shipment": "https://9b.mygobiz.net/#/shipments/{code}", "peer_payment": "https://api.justice.gobizdev.com/#/clark/payment/peer-payments/{code}"}',
    orderServices: [{ enable: false }],
    shipmentServices: [{ enable: true }],
    peerPaymentServices: [{ enable: false }],
    shipmentPeerPaymentServices: [{ enable: true }],
    createdAt: '2021-12-23T15:15:35.190Z',
    createdBy: 'chaos',
    modifiedAt: null,
    modifiedBy: '',
    refCode: null,
  },
  {
    id: '1ed74d99-7974-48bd-baa0-7e4f45926477',
    name: 'Phú Quý Logistics',
    code: 'vangia',
    domain: 'vangia.mygobiz.net',
    description: 'Phú Quý Logistics',
    logo: 'https://i.imgur.com/hp1TnBe.png',
    currency:
      '{"code": "VND", "name": "Dong", "suffix": "₫", "symbol": "₫", "description": null, "numberFormat": null}',
    redirectUrl:
      '{"order": "https://vangia.mygobiz.net/#/orders/{code}", "shipment": "https://vangia.mygobiz.net/#/shipments/{code}", "peer_payment": "https://api.justice.gobizdev.com/#/clark/payment/peer-payments/{code}"}',
    orderServices: [{ enable: false }],
    shipmentServices: [{ enable: true }],
    peerPaymentServices: [{ enable: false }],
    shipmentPeerPaymentServices: [{ enable: true }],
    createdAt: '2021-12-23T15:15:35.190Z',
    createdBy: 'chaos',
    modifiedAt: null,
    modifiedBy: '',
    refCode: null,
  },
  {
    id: '2f79d959-e565-4390-88d2-3ecd369b8fa7',
    name: 'ZTE Logistics',
    code: 'oz',
    domain: 'oz.mygobiz.net',
    description: 'ZTE Logistics',
    logo: 'https://i.imgur.com/QsrVYUv.png',
    currency:
      '{"code": "VND", "name": "Dong", "suffix": "₫", "symbol": "₫", "description": null, "numberFormat": null}',
    redirectUrl:
      '{"order": "https://oz.mygobiz.net/#/orders/{code}", "shipment": "https://oz.mygobiz.net/#/shipments/{code}", "peer_payment": "https://api.justice.gobizdev.com/#/clark/payment/peer-payments/{code}"}',
    orderServices: [{ enable: false }],
    shipmentServices: [{ enable: true }],
    peerPaymentServices: [{ enable: false }],
    shipmentPeerPaymentServices: [{ enable: true }],
    createdAt: '2021-12-23T15:15:35.190Z',
    createdBy: 'chaos',
    modifiedAt: null,
    modifiedBy: '',
    refCode: null,
  },
  {
    id: 'cf68a7bc-83ed-490d-9f92-da85a82e489c',
    name: 'Xinfa',
    code: 'xinfa',
    domain: 'xinfa.mygobiz.net',
    description: 'Xinfa',
    logo: 'https://i.imgur.com/mkn1z3V.png',
    currency:
      '{"code": "VND", "name": "Dong", "suffix": "₫", "symbol": "₫", "description": null, "numberFormat": null}',
    redirectUrl:
      '{"order": "https://xx.mygobiz.net/#/orders/{code}", "shipment": "https://xx.mygobiz.net/#/shipments/{code}", "peer_payment": "https://api.justice.gobizdev.com/#/clark/payment/peer-payments/{code}"}',
    orderServices: [{ enable: true }],
    shipmentServices: [{ enable: false }],
    peerPaymentServices: [{ enable: false }],
    shipmentPeerPaymentServices: [{ enable: true }],
    createdAt: '2021-12-23T15:15:35.190Z',
    createdBy: 'chaos',
    modifiedAt: null,
    modifiedBy: '',
    refCode: null,
  },
  {
    id: '8080c060-3bb1-4c4d-870c-dab32f5461f1',
    name: 'Sao Việt Logistics',
    code: 'viettel',
    domain: 'viettel.mygobiz.net',
    description: 'Sao Việt Logistics',
    logo: 'https://i.imgur.com/TZCS40C.png',
    currency:
      '{"code": "VND", "name": "Dong", "suffix": "₫", "symbol": "₫", "description": null, "numberFormat": null}',
    redirectUrl:
      '{"order": "https://xuanthusb.mygobiz.net/#/orders/{code}", "shipment": "https://xx.mygobiz.net/#/shipments/{code}", "peer_payment": "https://api.justice.gobizdev.com/#/clark/payment/peer-payments/{code}"}',
    orderServices: [{ enable: false }],
    shipmentServices: [{ enable: true }],
    peerPaymentServices: [{ enable: false }],
    shipmentPeerPaymentServices: [{ enable: true }],
    createdAt: '2021-12-23T15:15:35.190Z',
    createdBy: 'chaos',
    modifiedAt: null,
    modifiedBy: '',
    refCode: null,
  },
  {
    id: '191ee6a6-5aef-410f-98b5-c22d505c75cc',
    name: 'Sabo Logistics',
    code: 'sabo',
    domain: 'sabo.mygobiz.net',
    description: 'Sabo Logistics',
    logo: 'https://i.imgur.com/dwHCnWX.png',
    currency:
      '{"code": "VND", "name": "Dong", "suffix": "₫", "symbol": "₫", "description": null, "numberFormat": null}',
    redirectUrl:
      '{"order": "https://sabo.mygobiz.net/#/orders/{code}", "shipment": "https://sabo.mygobiz.net/#/shipments/{code}", "peer_payment": "https://api.justice.gobizdev.com/#/clark/payment/peer-payments/{code}"}',
    orderServices: [{ enable: false }],
    shipmentServices: [{ enable: true }],
    peerPaymentServices: [{ enable: false }],
    shipmentPeerPaymentServices: [{ enable: true }],
    createdAt: '2021-12-23T15:15:35.190Z',
    createdBy: 'chaos',
    modifiedAt: null,
    modifiedBy: '',
    refCode: null,
  },
  {
    id: '288ea58e-a8b2-421e-bfc5-7b94badb33a4',
    name: 'Gobiz - Demo2',
    code: 'gobiz-demo2',
    domain: 'gobiz-demo2.mygobiz.net',
    description: 'Gobiz - Demo2',
    logo: 'https://i.imgur.com/dwHCnWX.png',
    currency:
      '{"code": "VND", "name": "Dong", "suffix": "₫", "symbol": "₫", "description": null, "numberFormat": null}',
    redirectUrl:
      '{"order": "https://gobiz-demo2.mygobiz.net/#/orders/{code}", "shipment": "https://xuanthusb.mygobiz.net/#/shipments/{code}", "peer_payment": "https://api.justice.gobizdev.com/#/clark/payment/peer-payments/{code}"}',
    orderServices: [{ enable: false }],
    shipmentServices: [{ enable: true }],
    peerPaymentServices: [{ enable: false }],
    shipmentPeerPaymentServices: [{ enable: true }],
    createdAt: '2021-12-23T15:15:35.190Z',
    createdBy: 'chaos',
    modifiedAt: null,
    modifiedBy: null,
    refCode: null,
  },
  {
    id: '8b22c113-f19d-4495-ac09-38986ff550d6',
    name: 'RongHe',
    code: 'ronghe',
    domain: 'ronghe.mygobiz.net',
    description: 'RongHe',
    logo: 'https://i.imgur.com/3zrayCD.png',
    currency:
      '{"code": "VND", "name": "Dong", "suffix": "₫", "symbol": "₫", "description": null, "numberFormat": null}',
    redirectUrl:
      '{"order": "https://xinfa.mygobiz.net/#/orders/{code}", "shipment": "https://xinfa.mygobiz.net/#/shipments/{code}", "peer_payment": "https://api.justice.gobizdev.com/#/clark/payment/peer-payments/{code}"}',
    orderServices: [{ enable: true }],
    shipmentServices: [{ enable: false }],
    peerPaymentServices: [{ enable: false }],
    shipmentPeerPaymentServices: [{ enable: true }],
    createdAt: '2021-12-23T15:15:35.190Z',
    createdBy: 'chaos',
    modifiedAt: null,
    modifiedBy: '',
    refCode: null,
  },
  {
    id: '5ffa8d03-fd2b-4910-89e9-26398f390144',
    name: 'Anh Huy Logistics',
    code: 'conhanh',
    domain: 'conhanh.mygobiz.net',
    description: 'Anh Huy Logistics',
    logo: 'https://i.imgur.com/8zgfVOv.png',
    currency:
      '{"code": "VND", "name": "Dong", "suffix": "₫", "symbol": "₫", "description": null, "numberFormat": null}',
    redirectUrl:
      '{"order": "https://viettel.mygobiz.net/#/orders/{code}", "shipment": "https://viettel.mygobiz.net/#/shipments/{code}", "peer_payment": "https://api.justice.gobizdev.com/#/clark/payment/peer-payments/{code}"}',
    orderServices: [{ enable: false }],
    shipmentServices: [{ enable: true }],
    peerPaymentServices: [{ enable: false }],
    shipmentPeerPaymentServices: [{ enable: true }],
    createdAt: '2021-12-23T15:15:35.190Z',
    createdBy: 'chaos',
    modifiedAt: null,
    modifiedBy: '',
    refCode: null,
  },
  {
    id: 'eef2e3db-1483-4d9f-b115-e1b5467a1fbd',
    name: 'Quang Nghị Logistics',
    code: 'xlogttatl',
    domain: 'xlogttatl.mygobiz.net',
    description: 'Quang Nghị Logistics',
    logo: 'https://i.imgur.com/dLfQp8X.png',
    currency:
      '{"code": "VND", "name": "Dong", "suffix": "₫", "symbol": "₫", "description": null, "numberFormat": null}',
    redirectUrl:
      '{"order": "https://xlogttatl.mygobiz.net/#/orders/{code}", "shipment": "https://xlogttatl.mygobiz.net/#/shipments/{code}", "peer_payment": "https://api.justice.gobizdev.com/#/clark/payment/peer-payments/{code}"}',
    orderServices: [{ enable: false }],
    shipmentServices: [{ enable: true }],
    peerPaymentServices: [{ enable: false }],
    shipmentPeerPaymentServices: [{ enable: true }],
    createdAt: '2021-12-23T15:15:35.190Z',
    createdBy: 'chaos',
    modifiedAt: null,
    modifiedBy: '',
    refCode: null,
  },
  {
    id: '05124f94-7811-4aff-8289-fe5b4896f1fd',
    name: 'Xuân Trường Logistics',
    code: 'xuanthusb',
    domain: 'xuanthusb.mygobiz.net',
    description: 'Xuân Trường Logistics',
    logo: 'https://i.imgur.com/736F0hJ.png',
    currency:
      '{"code": "VND", "name": "Dong", "suffix": "₫", "symbol": "₫", "description": null, "numberFormat": null}',
    redirectUrl:
      '{"order": "https://xuanthusb.mygobiz.net/#/orders/{code}", "shipment": "https://xuanthusb.mygobiz.net/#/shipments/{code}", "peer_payment": "https://api.justice.gobizdev.com/#/clark/payment/peer-payments/{code}"}',
    orderServices: [{ enable: false }],
    shipmentServices: [{ enable: true }],
    peerPaymentServices: [{ enable: false }],
    shipmentPeerPaymentServices: [{ enable: true }],
    createdAt: '2021-12-23T15:15:35.190Z',
    createdBy: 'chaos',
    modifiedAt: null,
    modifiedBy: '',
    refCode: null,
  },
];
// const options = [
//   { label: 'Option 1', value: 'option1' },
//   { label: 'Option 2', value: 'option2' },
//   { label: 'Option 3', value: 'option3' },
// ];
const App = () => {
  const options = data.map((item: any) => {
    let select = {
      ...item,
      label: item.name.toString(),
      value: item.id.toString(),
    };
    return select;
  });

  return (
    <div>
      <MySelect data={options} />
    </div>
  );
};

export default App;

{
  /* <Row className={'dpl-flex align-items-center'}>
<Avatar
  size={20}
  src={option.logo}
  shape={'circle'}
  className="bd-none-impt"
></Avatar>
<span className={'mgl5 '}>{option.name}</span>
</Row> */
}
