import { ProLayout } from '@ant-design/pro-layout';
import { Link, Outlet, useAppData, useLocation } from 'umi';

export default function Layout() {
  const { clientRoutes } = useAppData();
  const location = useLocation();

  return (
    <ProLayout
      route={clientRoutes[0]}
      location={location}
      title="网页测试"
      breakpoint={false}
      defaultCollapsed
      layout="top"
      // contentStyle={{
      //   margin: 0,
      //   padding: 0,
      // }}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (menuItemProps.isUrl || menuItemProps.children) {
          return defaultDom;
        }
        if (menuItemProps.path && location.pathname !== menuItemProps.path) {
          return (
            <Link to={menuItemProps.path} target={menuItemProps.target}>
              {defaultDom}
            </Link>
          );
        }
        return defaultDom;
      }}
    >
      <Outlet />
    </ProLayout>
  );
}
