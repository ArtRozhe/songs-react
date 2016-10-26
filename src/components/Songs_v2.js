import React, { Component } from 'react';

export default class Songs extends Component {
  onDownloadBtnClick() {
    this.props.getSongs();
  }

  render() {
    const fetching = this.props.fetching;
    const list = this.props.list;
    var listTemplate = [];
    if (list.length) {
      listTemplate = list.map(function(item, index) {
        return(
          <li key={index}>{item.name} - {item.author}</li>
        )
      })
    }
    return (
      <div>
        <button onClick={this.onDownloadBtnClick.bind(this)}>Загрузить список песен</button>
        {
          fetching ?
          <p>Загрузка</p>
          :
          <p>У тебя {list.length} песен</p>
        }
        {listTemplate}
      </div>
    )
  }
}
