import React from 'react';

export default class UserForm extends React.Component {

  render(props) {
    return (

      <form onSubmit={this.props.getUser} >
        <label>
          User Name:
            <input style={{ margin: "20px auto", display: "block" }} type="text" name="name" required={true} />
        </label>
        <input type="submit" value="Submit" />
      </form >
    )
  }
}
