import * as React from "react";
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
import { CommentList } from './comment';
import { Admin, Resource } from 'react-admin';
import { PostList, PostEdit, PostCreate, PostShow } from './posts';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import { Comment } from "@material-ui/icons";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
     <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} show={PostShow} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        <Resource name="users" list={UserList} icon={UserIcon} />
        <Resource name="comments" list={CommentList} icon={Comment} />
     </Admin>
  );

export default App;