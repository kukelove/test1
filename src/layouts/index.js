import styles from './index.less';
import { Layout, Menu, Icon, Button} from 'antd';
const { Header, Sider, Content } = Layout;
const { SubMenu }  = Menu;
function BasicLayout(props) {
  return (
    <Layout className={styles.page}>
      <Header className={styles.header}>
        <div className={styles.logo}>PINKO</div>
        <div className={styles.cel_line}></div>
        <div className={styles.title}>会员后台管理系统</div>
      </Header>
      <Layout>
        <Sider
          className={styles.side}
          theme="light"
          width="350"
        >
          <div className={styles.menu_item_warp}> 
            <div className={styles.menu_select_line}></div>
            <div className={styles.menu_item}>门店管理</div>
          </div>  
          <div className={styles.menu_item_warp}> 
            <div className={styles.menu_select_line}></div>
            <div className={styles.menu_item}>会员管理</div>
          </div> 
        </Sider>
        <Content>{props.children}</Content>
      </Layout>
      {/* <Footer>Footer</Footer> */}
    </Layout>
  );
}

export default BasicLayout;
