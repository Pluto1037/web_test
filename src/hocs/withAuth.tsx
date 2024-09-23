import { Navigate } from 'umi';
import storeUtil from '@/utils/store';

// wrappers封装带来嵌套问题，导致prolayout失效
// 参考umi官网：https://umijs.org/docs/guides/routes#wrappers
// 利用高阶组件封装原有的组件
const withAuth = (Component: any) => () => {
  const isLogin = storeUtil.get('token');

  if (isLogin.value) {
    return <Component />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default withAuth;
