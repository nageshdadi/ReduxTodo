import {
  Text,
  View,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import TodoController from './TodoController';
import {connect} from 'react-redux';
import {addTodo, deleteTodo} from '../../redux/TodoSlice';

const mapStateToProps = (state: any) => ({
  todoList: state.todoList.todoList,
});
const mapDispatch = {
  addTodo,
  deleteTodo,
};
const connector = connect(mapStateToProps, mapDispatch);
// type PropsFromRedux = ConnectedProps<typeof connector>;

export class Todo extends TodoController {
  render() {
    const {title, description, isEdit} = this.state;
    const {todoList} = this.props;
    const addBtnVal = isEdit ? 'Edit' : 'Add';
    return (
      <View style={styles.mainCobtainer}>
        <View style={styles.inputCrad}>
          <TextInput
            style={styles.input}
            placeholder="Title"
            value={this.state.title}
            onChangeText={(newText: string) =>
              this.setState({title: newText.trim()})
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={description}
            onChangeText={(newText: string) =>
              this.setState({description: newText.trim()})
            }
          />
          <TouchableOpacity
            style={styles.addTodoBtn}
            onPress={() => {
              if (title !== '') {
                this.setState({title: ''});
              } else {
                Alert.alert('Warning!', 'Please Enter Todo');
              }
            }}>
            <Text onPress={this.handleAddTodo} style={styles.todoAddText}>
              {addBtnVal}
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.headText}>Page2 Todo lists</Text>
        <Text style={styles.lineText}>
          _________________________________________________
        </Text>
        {todoList.length === 0 && (
          <Text style={styles.noTodosText}>No Todos</Text>
        )}
        <FlatList
          data={todoList}
          renderItem={({item}: {item: any}) => (
            <View style={styles.todoItemCard}>
              <View>
                <Text style={styles.textItemTodo}>{item.title}</Text>
                <Text style={styles.textItemTodo}>{item.description}</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  this.handleEditTodo(item.id);
                }}>
                <Text style={styles.textItemTodo}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.handleDeleteTodo(item.id);
                }}>
                <Text style={styles.textItemTodo}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainCobtainer: {
    flex: 1,
    padding: 20,
  },
  headText: {
    fontSize: 25,
    marginBottom: 10,
  },
  inputCrad: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    marginBottom: 16,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    width: '80%',
  },
  addTodoBtn: {
    backgroundColor: '#0f4fb8',
    marginLeft: 10,
    height: 40,
    padding: 5,
    borderRadius: 10,
    width: 90,
    alignItems: 'center',
  },
  todoAddText: {
    fontSize: 20,
    color: '#fff',
  },
  todoItemCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f5cc45',
    borderRadius: 10,
    marginBottom: 10,
    minHeight: 80,
  },
  textItemTodo: {
    fontSize: 18,
    fontWeight: '500',
  },
  page2Btn: {
    backgroundColor: '#0d3bd4',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  gotoText: {
    fontSize: 20,
    color: '#fff',
  },
  noTodosText: {
    fontSize: 30,
    alignSelf: 'center',
    marginTop: 50,
  },
  lineText: {
    marginBottom: 15,
  },
});

export default connector(Todo);
