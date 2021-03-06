import React, { Component } from 'react';
import { Link } from 'react-router';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import query from '../queries/fetchSongs'
import { Layout, Menu, Icon } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
let _this = this;
class SongList extends Component {

    constructor(props) {
        super(props);
        this.state = { collapsed: false };
    }

    onSongDelete(id) {
        this.props.mutate({ variables: { id } })
            .then(() => this.props.data.refetch());
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        if (this.props.data.loading) {
            return (
                <div>
                    ...loading
                </div>
            )
        }
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span>nav 3</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        Content
          </Content>
                </Layout>
            </Layout>
        )
    }
}

const mutation = gql`
mutation DeleteSong($id:ID){
    deleteSong(id:$id){
      id
    }
  }
`;

export default graphql(mutation)(
    graphql(query)(SongList)
);