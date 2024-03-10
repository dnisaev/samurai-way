import React from 'react';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostType} from "../../../redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

export const MyPosts = React.memo(({posts, addPost}: MyPostsPropsType) => {

    const postMessagesElements = posts.map((m) => {
        return <Post key={m.id} message={m.message} likesCount={m.likesCount} id={m.id}/>
    });

    const onSubmit = (values: AddPostFormType) => {
        addPost(values.newPostText)
    }

    console.log('render: MyPosts')
    return (
        <div className={styles.postsBlock}>
            <h3>Мои посты</h3>
            <div>
                <AddPostFormRedux onSubmit={onSubmit}/>
            </div>
            <div className={styles.posts}>
                {postMessagesElements}
            </div>
        </div>
    );
});

const AddPostForm: React.FC<InjectedFormProps<AddPostFormType>> = (props) => {

    const maxLength = maxLengthCreator(10)

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={"newPostText"}
                       placeholder={"Введите сообщение"}
                       validate={[required, maxLength]}/>
            </div>
            <div>
                <button>Отправить</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm<AddPostFormType>({form: 'profileAddPostForm'})(AddPostForm)

type AddPostFormType = {
    newPostText: string
}
type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (newPostText: string) => void
}