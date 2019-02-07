import React, {Component} from 'react';
import {CATEGORYPAGES} from "../../constants";
import axios from '../../axios-pages';

import './EditorForm.css'

class EditorForm extends Component {

    state = {
        page: null,
        pageId: CATEGORYPAGES[0],
        loading: true
    };

    getData = id => {
        axios.get('pages/' + id + '.json').then(response => {
            console.log(response);

            this.setState({page: response.data, loading: false});
        })
    };

    componentDidMount() {
        this.getData(this.state.pageId);
    }

    valueChanged = event => {
        const {name, value} = event.target;

        this.setState({[name]: value})
    };

    submitHandler = (event, page) => {
        event.preventDefault();
        axios.put('pages/' + this.state.pageId + '.json', page).then(() => {
            this.props.history.push({
                pathname: '/pages/' + this.state.pageId
            });
        })
    };

    idChanged = event => {
        this.setState({pageId: event.target.value});

        this.getData(event.target.value);
    };

    render() {
        return (
            <form className="EditorForm" onSubmit={event => this.submitHandler(event, this.state.page)}>
                <p>Select page: </p>
                <select name="categoryPage" onChange={this.idChanged} value={this.state.pageId} className="SelectEditor">
                    {CATEGORYPAGES.map(categoryId => (
                        <option key={categoryId} value={categoryId}>{categoryId}</option>
                    ))}
                </select>
                <p>Title: </p>
                <input type="text" name="title" placeholder="Title" value={this.state.page.title}
                       onChange={this.valueChanged} className="InputEditor" />
                <p>Content: </p>
                <textarea name="pageText" placeholder="Content" value={this.state.page.content}
                          onChange={this.valueChanged} className="InputEditor"/>
                <button type="submit" className="Save">Save</button>
            </form>
        );
    }
}

export default EditorForm;