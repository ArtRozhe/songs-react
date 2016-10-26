import React, { Component } from 'react';

export default class Songs extends Component {
  onDownloadBtnClick() {
    this.props.getSongs();
  }

  getNextSongs(currentList) {
    this.props.NextSongs(this.props.pagination + 100, currentList)
  }

  render() {
    const fetching = this.props.fetching;
    const list = this.props.list;
    const pagination = this.props.pagination;
    const tmpList = this.props.currentList;

    var listTemplate, i;

    if (list.length) {
      for (i = pagination; i < pagination + 100; i++) {
        tmpList[i] = list[i];
      }

      listTemplate = tmpList.map(function(item, index) {
        return(
          <li key={index}>{index+1} . {item.name} - {item.author} - {item.length} - {item.genre} - {item.rate} - {item.year} - {item.reward} - {item.format} - {item.country} - {item.album}</li>
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
          <p onClick={this.getNextSongs.bind(this, tmpList)}>У тебя {list.length} песен</p>
        }
        {listTemplate}
        {
          list.length ?
          <button onClick={this.getNextSongs.bind(this, tmpList)}>Загрузить следующие 100 песен</button>
          :
          <span></span>
        }

      </div>
    )
  }
}
