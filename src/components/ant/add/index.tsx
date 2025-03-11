import { App, Button, Space } from 'antd';

// Sub page
const MyPage = () => {
  const { message } = App.useApp();

  const showMessage = () => {
    message.success('Qo`shildi!');
  };



  return (
    <Space wrap>
      <Button type="primary" onClick={showMessage}>
        Qo'shish
      </Button>
     
    </Space>
  );
};

// Entry component
export default () => (
  <App message={{ maxCount: 1 }} notification={{ placement: 'bottomLeft' }}>
    <MyPage />
  </App>
);