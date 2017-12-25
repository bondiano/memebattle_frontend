import { withFormsy } from 'formsy-react';
import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event) {
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    const errorMessage = this.props.getErrorMessage();

    return (
        <div className="row justify-content-center">
            <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <input className={ this.props.className }
                onChange={ this.changeValue }
                type={ this.props.type }
                label={ this.props.label }
                placeholder={ this.props.placeholder }
                value={ this.props.getValue() || '' }
                />
                <span className='input-error-text'>{ errorMessage }</span>
            </div>
      </div>
    );
  }
}

export default withFormsy(Input);