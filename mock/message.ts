import { message } from 'antd';
import { defineMock } from 'umi';

type MessageInfo = {
  name: string;
  value: string;
};

let curMessage: MessageInfo = {
  name: 'user',
  value: 'text',
};

export default defineMock({
  'GET /api/message': (_, res) => {
    res.send({
      status: 'success',
      message: curMessage,
    });
  },
});
