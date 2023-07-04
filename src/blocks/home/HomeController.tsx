import {Alert} from 'react-native';
import {Component} from 'react';

interface IProps {
  todoList: any;
  addTodo: any;
  deleteTodo: any;
}

interface IState {
  title: string;
  description: string;
  editedId: null | number;
  isEdit: boolean;
}
export class HomeController extends Component<IProps, IState> {
  state = {
    title: '',
    description: '',
    editedId: null,
    isEdit: false,
  };

  handleAddTodo = () => {
    const {title, description, isEdit} = this.state;
    if (isEdit) {
      const editObj: any = {
        id: this.state.editedId,
        title,
        description,
      };
      if (title === '') {
        Alert.alert('Warning!', 'please Enter Title');
      } else {
        this.props.addTodo(editObj);
        this.setState({
          title: '',
          description: '',
          isEdit: false,
          editedId: null,
        });
      }
    } else {
      const newObj: {id: number; title: string; description: string} = {
        id: new Date().getTime(),
        title,
        description,
      };
      if (title === '') {
        Alert.alert('Warning!', 'please Enter Title');
      } else {
        this.props.addTodo(newObj);
        this.setState({title: '', description: '', isEdit: false});
      }
    }
  };

  handleDeleteTodo = (id: number) => {
    this.props.deleteTodo(id);
  };

  handleEditTodo = (id: number) => {
    const editObj = this.props.todoList.filter((each: any) => each.id === id);
    this.setState({
      title: editObj[0].title,
      description: editObj[0].description,
      editedId: editObj[0].id,
      isEdit: true,
    });
  };
}

export default HomeController;
