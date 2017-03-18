import React, {PropTypes} from 'react';

require('./form.css');

export class Form extends React.Component {
  render() {
    return (
      <div className="form">{this.props.children}</div>
    );
  }
}

export class FormGroup extends React.Component {
  render() {
    return (
      <div className="form-group">{this.props.children}</div>
    );
  }
}

export class FormInputText extends React.Component {
  static propTypes = {
    label: PropTypes.String,
    value: PropTypes.String,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    label: "",
    value: "",
    tip: "",
    onChange: ()=>{}
  };

  onChange = (event) => {
    let value = event.target.value;
    this.props.onChange(value);
  }

  render() {
    return (
      <div className="form-group__row">
        <div className="form-group__label">{this.props.label}</div>
        <div className="form-group__value">
          <input type="text" className="form-value form-value--input"
                 value={this.props.value} onChange={this.onChange}/>
          {this.props.tip ?
            <div className="form-value-tip">{this.props.tip}</div>
            : null}
        </div>
      </div>
    );
  }
}

export class FormInputPassword extends FormInputText {
 render() {
    return (
      <div className="form-group__row">
        <div className="form-group__label">{this.props.label}</div>
        <div className="form-group__value">
          <input type="password" className="form-value form-value--input-password"
                 value={this.props.value} onChange={this.onChange}/>
          {this.props.tip ?
            <div className="form-value-tip">{this.props.tip}</div>
            : null}
        </div>
      </div>
    );
  }
}

export class FormInputNumber extends FormInputText {
 render() {
    return (
      <div className="form-group__row">
        <div className="form-group__label">{this.props.label}</div>
        <div className="form-group__value">
          <input type="text" className="form-value form-value--input-number"
                 value={this.props.value} onChange={this.onChange}/>
          {this.props.tip ?
            <div className="form-value-tip">{this.props.tip}</div>
            : null}
        </div>
      </div>
    );
  }
}

export class FormInputTextArea extends FormInputText {
 render() {
    return (
      <div className="form-group__row">
        <div className="form-group__label">{this.props.label}</div>
        <div className="form-group__value">
          <textarea className="form-value form-value--textarea"
                    value={this.props.value} onChange={this.onChange}>
          </textarea>
          {this.props.tip ?
            <div className="form-value-tip">{this.props.tip}</div>
            : null}
        </div>
      </div>
    );
  }
}

